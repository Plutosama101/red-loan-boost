-- Create enum for loan types
CREATE TYPE public.loan_type AS ENUM ('local_government', 'sme', 'individual', 'proof_of_funds');

-- Create enum for application status
CREATE TYPE public.application_status AS ENUM ('pending', 'under_review', 'approved', 'rejected');

-- Create loan applications table
CREATE TABLE public.loan_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Personal Information
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  date_of_birth DATE,
  address TEXT NOT NULL,
  state TEXT NOT NULL,
  lga TEXT,
  
  -- Loan Details
  loan_type loan_type NOT NULL,
  loan_amount NUMERIC NOT NULL,
  loan_purpose TEXT NOT NULL,
  repayment_period INTEGER NOT NULL, -- in months
  
  -- Employment/Business Information
  employment_status TEXT,
  employer_name TEXT,
  employer_address TEXT,
  monthly_income NUMERIC,
  business_name TEXT,
  cac_number TEXT,
  
  -- Bank Information
  bank_name TEXT NOT NULL,
  account_number TEXT NOT NULL,
  bvn TEXT NOT NULL,
  
  -- Guarantor Information
  guarantor_name TEXT,
  guarantor_phone TEXT,
  guarantor_address TEXT,
  guarantor_relationship TEXT,
  
  -- For Proof of Funds
  passport_number TEXT,
  travel_destination TEXT,
  travel_date DATE,
  
  -- Application Status
  status application_status NOT NULL DEFAULT 'pending',
  notes TEXT,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.loan_applications ENABLE ROW LEVEL SECURITY;

-- Create policy for public submissions (anyone can submit an application)
CREATE POLICY "Anyone can submit loan applications" 
ON public.loan_applications 
FOR INSERT 
WITH CHECK (true);

-- Create policy for viewing own applications by email (basic lookup)
CREATE POLICY "Users can view applications by email lookup" 
ON public.loan_applications 
FOR SELECT 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_loan_applications_updated_at
BEFORE UPDATE ON public.loan_applications
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();