-- Ensure waitlist table exists with required columns
CREATE TABLE IF NOT EXISTS public.waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  email_ci TEXT,
  affiliation TEXT,
  use_case TEXT,
  consent BOOLEAN NOT NULL DEFAULT false,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  user_agent TEXT,
  ip INET
);

-- Ensure unique index on case-insensitive email
CREATE UNIQUE INDEX IF NOT EXISTS waitlist_email_ci_unique ON public.waitlist (email_ci);

-- Enable RLS and remove public insert policy to force inserts via Edge Function (service role)
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow public insert" ON public.waitlist;