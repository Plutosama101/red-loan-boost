import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, CheckCircle } from "lucide-react";

const loanTypes = [
  { value: "local_government", label: "Local Government Loan" },
  { value: "sme", label: "SME Loan" },
  { value: "individual", label: "Individual Loan" },
  { value: "proof_of_funds", label: "Proof of Funds" },
] as const;

const nigerianStates = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT", "Gombe",
  "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara",
  "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau",
  "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
];

const nigerianBanks = [
  "Access Bank", "Citibank", "Ecobank", "Fidelity Bank", "First Bank",
  "First City Monument Bank", "Globus Bank", "Guaranty Trust Bank", "Heritage Bank",
  "Keystone Bank", "Polaris Bank", "Providus Bank", "Stanbic IBTC Bank",
  "Standard Chartered Bank", "Sterling Bank", "SunTrust Bank", "Titan Trust Bank",
  "Union Bank", "United Bank for Africa", "Unity Bank", "Wema Bank", "Zenith Bank"
];

const formSchema = z.object({
  full_name: z.string().trim().min(2, "Full name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone_number: z.string().trim().min(10, "Valid phone number required").max(15),
  date_of_birth: z.string().optional(),
  address: z.string().trim().min(5, "Address is required").max(500),
  state: z.string().min(1, "State is required"),
  lga: z.string().optional(),
  
  loan_type: z.enum(["local_government", "sme", "individual", "proof_of_funds"]),
  loan_amount: z.string().min(1, "Loan amount is required"),
  loan_purpose: z.string().trim().min(10, "Please describe the loan purpose").max(1000),
  repayment_period: z.string().min(1, "Repayment period is required"),
  
  employment_status: z.string().optional(),
  employer_name: z.string().optional(),
  employer_address: z.string().optional(),
  monthly_income: z.string().optional(),
  business_name: z.string().optional(),
  cac_number: z.string().optional(),
  
  bank_name: z.string().min(1, "Bank name is required"),
  account_number: z.string().trim().length(10, "Account number must be 10 digits"),
  bvn: z.string().trim().length(11, "BVN must be 11 digits"),
  
  guarantor_name: z.string().optional(),
  guarantor_phone: z.string().optional(),
  guarantor_address: z.string().optional(),
  guarantor_relationship: z.string().optional(),
  
  passport_number: z.string().optional(),
  travel_destination: z.string().optional(),
  travel_date: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const Apply = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const defaultLoanType = searchParams.get("type") as FormData["loan_type"] | null;
  const defaultAmount = searchParams.get("amount");
  const defaultPeriod = searchParams.get("period");

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      loan_type: defaultLoanType || "individual",
      loan_amount: defaultAmount || "",
      repayment_period: defaultPeriod || "",
    }
  });

  const selectedLoanType = watch("loan_type");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from("loan_applications")
        .insert({
          full_name: data.full_name,
          email: data.email,
          phone_number: data.phone_number,
          date_of_birth: data.date_of_birth || null,
          address: data.address,
          state: data.state,
          lga: data.lga || null,
          loan_type: data.loan_type,
          loan_amount: parseFloat(data.loan_amount.replace(/,/g, "")),
          loan_purpose: data.loan_purpose,
          repayment_period: parseInt(data.repayment_period),
          employment_status: data.employment_status || null,
          employer_name: data.employer_name || null,
          employer_address: data.employer_address || null,
          monthly_income: data.monthly_income ? parseFloat(data.monthly_income.replace(/,/g, "")) : null,
          business_name: data.business_name || null,
          cac_number: data.cac_number || null,
          bank_name: data.bank_name,
          account_number: data.account_number,
          bvn: data.bvn,
          guarantor_name: data.guarantor_name || null,
          guarantor_phone: data.guarantor_phone || null,
          guarantor_address: data.guarantor_address || null,
          guarantor_relationship: data.guarantor_relationship || null,
          passport_number: data.passport_number || null,
          travel_destination: data.travel_destination || null,
          travel_date: data.travel_date || null,
        });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Application Submitted!",
        description: "We will review your application and contact you within 24-48 hours.",
      });
    } catch (error) {
      console.error("Error submitting application:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <div className="bg-card border rounded-xl p-8 md:p-12 shadow-loan-card">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Application Submitted Successfully!
              </h1>
              <p className="text-muted-foreground mb-8">
                Thank you for applying with LGCRED. Our team will review your application 
                and contact you within 24-48 hours via phone or email.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => navigate("/")} variant="outline">
                  Return Home
                </Button>
                <Button onClick={() => setIsSubmitted(false)} className="bg-gradient-primary text-white">
                  Submit Another Application
                </Button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-4 mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Loan Application Form
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete the form below to apply for your loan. All fields marked with * are required.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Personal Information</CardTitle>
                <CardDescription>Provide your basic personal details</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="full_name">Full Name *</Label>
                  <Input id="full_name" {...register("full_name")} placeholder="Enter your full name" />
                  {errors.full_name && <p className="text-sm text-destructive">{errors.full_name.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" {...register("email")} placeholder="you@example.com" />
                  {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone_number">Phone Number *</Label>
                  <Input id="phone_number" {...register("phone_number")} placeholder="08012345678" />
                  {errors.phone_number && <p className="text-sm text-destructive">{errors.phone_number.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date_of_birth">Date of Birth</Label>
                  <Input id="date_of_birth" type="date" {...register("date_of_birth")} />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Residential Address *</Label>
                  <Textarea id="address" {...register("address")} placeholder="Enter your full address" />
                  {errors.address && <p className="text-sm text-destructive">{errors.address.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State *</Label>
                  <Select onValueChange={(v) => setValue("state", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      {nigerianStates.map((state) => (
                        <SelectItem key={state} value={state}>{state}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.state && <p className="text-sm text-destructive">{errors.state.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lga">LGA (Local Government Area)</Label>
                  <Input id="lga" {...register("lga")} placeholder="Enter your LGA" />
                </div>
              </CardContent>
            </Card>

            {/* Loan Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Loan Details</CardTitle>
                <CardDescription>Specify your loan requirements</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="loan_type">Loan Type *</Label>
                  <Select 
                    defaultValue={defaultLoanType || "individual"}
                    onValueChange={(v) => setValue("loan_type", v as FormData["loan_type"])}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select loan type" />
                    </SelectTrigger>
                    <SelectContent>
                      {loanTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="loan_amount">Loan Amount (₦) *</Label>
                  <Input 
                    id="loan_amount" 
                    {...register("loan_amount")} 
                    placeholder="e.g. 500000" 
                  />
                  {errors.loan_amount && <p className="text-sm text-destructive">{errors.loan_amount.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="repayment_period">Repayment Period (months) *</Label>
                  <Select 
                    defaultValue={defaultPeriod || ""}
                    onValueChange={(v) => setValue("repayment_period", v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
                        <SelectItem key={month} value={month.toString()}>{month} month{month > 1 ? "s" : ""}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.repayment_period && <p className="text-sm text-destructive">{errors.repayment_period.message}</p>}
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="loan_purpose">Purpose of Loan *</Label>
                  <Textarea id="loan_purpose" {...register("loan_purpose")} placeholder="Describe why you need this loan" />
                  {errors.loan_purpose && <p className="text-sm text-destructive">{errors.loan_purpose.message}</p>}
                </div>
              </CardContent>
            </Card>

            {/* Employment/Business Information */}
            {(selectedLoanType === "local_government" || selectedLoanType === "individual") && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Employment Information</CardTitle>
                  <CardDescription>Provide details about your employment</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="employment_status">Employment Status</Label>
                    <Select onValueChange={(v) => setValue("employment_status", v)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="employed">Employed</SelectItem>
                        <SelectItem value="self_employed">Self Employed</SelectItem>
                        <SelectItem value="civil_servant">Civil Servant</SelectItem>
                        <SelectItem value="contractor">Contractor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="monthly_income">Monthly Income (₦)</Label>
                    <Input id="monthly_income" {...register("monthly_income")} placeholder="e.g. 150000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employer_name">Employer/Organization Name</Label>
                    <Input id="employer_name" {...register("employer_name")} placeholder="Enter employer name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employer_address">Employer Address</Label>
                    <Input id="employer_address" {...register("employer_address")} placeholder="Enter employer address" />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* SME Business Information */}
            {selectedLoanType === "sme" && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Business Information</CardTitle>
                  <CardDescription>Provide details about your business</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="business_name">Business Name</Label>
                    <Input id="business_name" {...register("business_name")} placeholder="Enter business name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cac_number">CAC Registration Number</Label>
                    <Input id="cac_number" {...register("cac_number")} placeholder="Enter CAC number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="monthly_income">Monthly Revenue (₦)</Label>
                    <Input id="monthly_income" {...register("monthly_income")} placeholder="e.g. 500000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employer_address">Business Address</Label>
                    <Input id="employer_address" {...register("employer_address")} placeholder="Enter business address" />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Proof of Funds specific fields */}
            {selectedLoanType === "proof_of_funds" && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Travel Information</CardTitle>
                  <CardDescription>Provide your travel and passport details</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="passport_number">International Passport Number</Label>
                    <Input id="passport_number" {...register("passport_number")} placeholder="Enter passport number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="travel_destination">Travel Destination</Label>
                    <Input id="travel_destination" {...register("travel_destination")} placeholder="e.g. United Kingdom" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="travel_date">Intended Travel Date</Label>
                    <Input id="travel_date" type="date" {...register("travel_date")} />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Bank Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Bank Information</CardTitle>
                <CardDescription>Provide your bank account details for disbursement</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="bank_name">Bank Name *</Label>
                  <Select onValueChange={(v) => setValue("bank_name", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select bank" />
                    </SelectTrigger>
                    <SelectContent>
                      {nigerianBanks.map((bank) => (
                        <SelectItem key={bank} value={bank}>{bank}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.bank_name && <p className="text-sm text-destructive">{errors.bank_name.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="account_number">Account Number *</Label>
                  <Input id="account_number" {...register("account_number")} placeholder="10-digit account number" maxLength={10} />
                  {errors.account_number && <p className="text-sm text-destructive">{errors.account_number.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bvn">BVN *</Label>
                  <Input id="bvn" {...register("bvn")} placeholder="11-digit BVN" maxLength={11} />
                  {errors.bvn && <p className="text-sm text-destructive">{errors.bvn.message}</p>}
                </div>
              </CardContent>
            </Card>

            {/* Guarantor Information */}
            {selectedLoanType !== "proof_of_funds" && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Guarantor Information</CardTitle>
                  <CardDescription>Provide details of your guarantor</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="guarantor_name">Guarantor Full Name</Label>
                    <Input id="guarantor_name" {...register("guarantor_name")} placeholder="Enter guarantor name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guarantor_phone">Guarantor Phone Number</Label>
                    <Input id="guarantor_phone" {...register("guarantor_phone")} placeholder="08012345678" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guarantor_relationship">Relationship</Label>
                    <Select onValueChange={(v) => setValue("guarantor_relationship", v)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select relationship" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="family">Family Member</SelectItem>
                        <SelectItem value="friend">Friend</SelectItem>
                        <SelectItem value="colleague">Colleague</SelectItem>
                        <SelectItem value="business_partner">Business Partner</SelectItem>
                        <SelectItem value="employer">Employer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guarantor_address">Guarantor Address</Label>
                    <Input id="guarantor_address" {...register("guarantor_address")} placeholder="Enter guarantor address" />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button 
                type="submit" 
                className="w-full md:w-auto bg-gradient-primary text-white px-12 py-6 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </Button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apply;