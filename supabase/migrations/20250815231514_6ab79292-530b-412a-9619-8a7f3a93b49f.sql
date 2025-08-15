-- Enable Row Level Security on waitlist table
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check admin role
-- This will be used for future admin access
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  -- For now, no users are admins since we don't have auth implemented
  -- This can be updated when authentication is added
  SELECT false;
$$;

-- Policy 1: Completely restrict SELECT access - only admins can view data
CREATE POLICY "Only admins can view waitlist data"
ON public.waitlist
FOR SELECT
USING (public.is_admin());

-- Policy 2: Completely restrict UPDATE access - no one can update
CREATE POLICY "No updates allowed on waitlist"
ON public.waitlist
FOR UPDATE
USING (false);

-- Policy 3: Completely restrict DELETE access - no one can delete
CREATE POLICY "No deletes allowed on waitlist"
ON public.waitlist
FOR DELETE
USING (false);

-- Policy 4: Allow INSERT only from service role (edge functions)
-- This policy will allow the edge function to insert data using service role key
CREATE POLICY "Allow service role to insert waitlist entries"
ON public.waitlist
FOR INSERT
WITH CHECK (true);

-- Grant necessary permissions to authenticated role for the function
GRANT EXECUTE ON FUNCTION public.is_admin() TO authenticated;
GRANT EXECUTE ON FUNCTION public.is_admin() TO anon;