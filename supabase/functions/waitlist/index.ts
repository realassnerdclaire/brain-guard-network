// Deno Deploy runtime
// supabase/functions/waitlist/index.ts
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { z } from "https://esm.sh/zod@3.23.8";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const schema = z.object({
  full_name: z.string().min(2).max(120),
  email: z.string().email().max(254),
  affiliation: z.string().max(200).optional().or(z.literal("")),
  use_case: z.string().max(1000).optional().or(z.literal("")),
  consent: z.literal(true),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
});

serve(async (req) => {
  // Handle CORS preflight requests  
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders, status: 200 });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ ok: false, error: "Method not allowed" }), { 
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    
    if (!supabaseUrl || !supabaseServiceRoleKey) {
      console.error('Missing required environment variables');
      return new Response(JSON.stringify({ ok: false, error: "Server configuration error" }), { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
    
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, { auth: { persistSession: false } });

    const ua = req.headers.get("user-agent") ?? undefined;
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? undefined;

    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return new Response(JSON.stringify({ ok: false, error: parsed.error.flatten().fieldErrors }), { 
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    const payload = { ...parsed.data, user_agent: ua, ip };
    const { error } = await supabase.from("waitlist").insert(payload);

    // 23505 = unique_violation
    if (error && (error as any).code === "23505") {
      return new Response(JSON.stringify({ ok: true, message: "You're already on the waitlist." }), { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
    if (error) {
      console.error("Insert error:", error);
      return new Response(JSON.stringify({ ok: false, error: "Unable to join the waitlist." }), { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Send email notification to info@xbrainer.ai
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: "XBrainer Waitlist <onboarding@resend.dev>",
          to: ["info@xbrainer.ai"],
          subject: "New Waitlist Registration - XBrainer AI",
          html: `
            <h2>New Waitlist Registration</h2>
            <p><strong>Name:</strong> ${parsed.data.full_name}</p>
            <p><strong>Email:</strong> ${parsed.data.email}</p>
            <p><strong>Affiliation:</strong> ${parsed.data.affiliation || 'Not provided'}</p>
            <p><strong>Use Case:</strong> ${parsed.data.use_case || 'Not provided'}</p>
            <p><strong>UTM Source:</strong> ${parsed.data.utm_source || 'Not provided'}</p>
            <p><strong>UTM Medium:</strong> ${parsed.data.utm_medium || 'Not provided'}</p>
            <p><strong>UTM Campaign:</strong> ${parsed.data.utm_campaign || 'Not provided'}</p>
            <p><strong>IP Address:</strong> ${ip || 'Not available'}</p>
            <p><strong>User Agent:</strong> ${ua || 'Not available'}</p>
            <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
          `,
        });
        console.log("Email notification sent successfully");
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
        // Don't fail the request if email fails
      }
    } else {
      console.warn("RESEND_API_KEY not configured, skipping email notification");
    }

    return new Response(JSON.stringify({ ok: true, message: "Success! You're on the waitlist." }), { 
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  } catch (e) {
    console.error("Function error:", e);
    return new Response(JSON.stringify({ ok: false, error: "Unexpected error." }), { 
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
}, { onError: (e) => console.error(e) });