-- Add unique constraint on lowercase email if it doesn't exist
CREATE UNIQUE INDEX IF NOT EXISTS waitlist_email_ci_unique ON public.waitlist(lower(email));

-- Update RLS to allow inserts without authentication (for public waitlist)
DROP POLICY IF EXISTS "waitlist_insert_only" ON public.waitlist;
CREATE POLICY "Allow public insert" ON public.waitlist FOR INSERT WITH CHECK (true);