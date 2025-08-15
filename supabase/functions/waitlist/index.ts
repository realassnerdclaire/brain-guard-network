import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

// Validation schema
const waitlistSchema = z.object({
  full_name: z.string().min(2).max(120),
  email: z.string().email(),
  affiliation: z.string().max(200).optional(),
  use_case: z.string().max(1000).optional(),
  consent: z.boolean().refine(val => val === true, {
    message: "Consent must be true"
  }),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
});

serve(async (req) => {
  console.log('=== WAITLIST FUNCTION START ===');
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Headers:', Object.fromEntries(req.headers.entries()));
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log('Handling CORS preflight request');
    return new Response(null, { 
      headers: corsHeaders,
      status: 200 
    });
  }

  if (req.method !== 'POST') {
    console.log('Method not allowed:', req.method);
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    console.log('Service role key exists:', !!serviceRoleKey);
    
    if (!serviceRoleKey) {
      console.error('SUPABASE_SERVICE_ROLE_KEY not found in environment');
      return new Response(JSON.stringify({ error: 'Server configuration error - missing service role key' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Initialize Supabase client with service role key
    const supabase = createClient(
      'https://sievygiqahkmahihoeln.supabase.co',
      serviceRoleKey
    );

    const body = await req.json();
    console.log('Request body received:', body);

    // Validate input
    const validatedData = waitlistSchema.parse(body);
    console.log('Data validation passed:', validatedData);

    // Extract headers
    const userAgent = req.headers.get('user-agent') || null;
    const clientIP = req.headers.get('x-forwarded-for') || 
                     req.headers.get('x-real-ip') || 
                     req.headers.get('cf-connecting-ip') || 
                     null;

    // Prepare data for insertion
    const insertData = {
      full_name: validatedData.full_name,
      email: validatedData.email,
      email_ci: validatedData.email.toLowerCase(),
      affiliation: validatedData.affiliation || null,
      use_case: validatedData.use_case || null,
      consent: validatedData.consent,
      utm_source: validatedData.utm_source || null,
      utm_medium: validatedData.utm_medium || null,
      utm_campaign: validatedData.utm_campaign || null,
      user_agent: userAgent,
      ip: clientIP,
    };

    console.log('Attempting database insert with data:', insertData);

    // Insert into database using service role (bypasses RLS)
    const { data, error } = await supabase
      .from('waitlist')
      .insert([insertData])
      .select();

    if (error) {
      console.error('Database insertion error:', error);
      
      // Handle duplicate email error
      if (error.code === '23505' && error.message.includes('waitlist_email_ci_unique')) {
        console.log('Duplicate email detected, returning success message');
        return new Response(JSON.stringify({ 
          ok: true, 
          message: "You're already on the waitlist." 
        }), {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      return new Response(JSON.stringify({ 
        error: 'Failed to submit waitlist entry',
        details: error.message 
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Database insertion successful:', data);

    return new Response(JSON.stringify({ 
      ok: true, 
      message: 'Successfully added to waitlist!' 
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('=== FUNCTION ERROR ===');
    console.error('Error type:', error.constructor.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    
    if (error instanceof z.ZodError) {
      console.error('Validation errors:', error.errors);
      return new Response(JSON.stringify({ 
        error: 'Validation failed', 
        details: error.errors 
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ 
      error: 'Internal server error',
      message: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } finally {
    console.log('=== WAITLIST FUNCTION END ===');
  }
});