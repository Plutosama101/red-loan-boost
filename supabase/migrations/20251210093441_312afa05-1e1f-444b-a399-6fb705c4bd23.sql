-- Drop the dangerous public SELECT policy
DROP POLICY IF EXISTS "Users can view applications by email lookup" ON public.loan_applications;

-- Create a secure policy that only allows access via service role (admin dashboard)
-- Since there's no auth system yet, we'll restrict SELECT to authenticated admins only
-- For now, no public SELECT access at all - data only viewable via Supabase dashboard
CREATE POLICY "Only authenticated service role can view applications"
ON public.loan_applications
FOR SELECT
USING (false);

-- Note: The INSERT policy remains to allow public form submissions
-- Admins can still view data through Supabase Dashboard using service role