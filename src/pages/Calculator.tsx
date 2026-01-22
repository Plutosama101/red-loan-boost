import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator, Calendar, Percent, ArrowRight, CheckCircle, Building2, Briefcase, User } from "lucide-react";

type LoanType = "lg" | "sme" | "individual";

const loanConfig = {
  lg: {
    name: "Local Government",
    icon: Building2,
    maxAmount: 1000000,
    minAmount: 100000,
    stepAmount: 50000,
    maxTerm: 6,
    minTerm: 3,
    rate: 5,
    rateLabel: "5% Interest",
  },
  sme: {
    name: "SME Business",
    icon: Briefcase,
    maxAmount: 12000000,
    minAmount: 500000,
    stepAmount: 500000,
    maxTerm: 12,
    minTerm: 3,
    rate: 7,
    rateLabel: "7% Total Interest",
  },
  individual: {
    name: "Individual",
    icon: User,
    maxAmount: 5000000,
    minAmount: 100000,
    stepAmount: 50000,
    maxTerm: 12,
    minTerm: 3,
    rate: 5,
    rateLabel: "5% Interest",
  },
};

const CalculatorPage = () => {
  const navigate = useNavigate();
  const [loanType, setLoanType] = useState<LoanType>("lg");
  const [amount, setAmount] = useState([500000]);
  const [term, setTerm] = useState([6]);

  const config = loanConfig[loanType];

  // Adjust amount and term when loan type changes
  const handleLoanTypeChange = (type: LoanType) => {
    setLoanType(type);
    const newConfig = loanConfig[type];
    // Reset to sensible defaults for the new loan type
    setAmount([Math.min(amount[0], newConfig.maxAmount)]);
    setTerm([Math.min(term[0], newConfig.maxTerm)]);
  };

  // Calculate based on loan type
  const calculatePayment = () => {
    if (loanType === "sme") {
      // SME uses flat rate calculation
      const totalInterest = amount[0] * (config.rate / 100);
      const totalAmount = amount[0] + totalInterest;
      const monthlyPayment = totalAmount / term[0];
      return { monthlyPayment, totalAmount, totalInterest };
    } else {
      // LG and Individual use reducing balance
      const monthlyRate = config.rate / 100 / 12;
      const monthlyPayment = (amount[0] * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term[0]));
      const totalAmount = monthlyPayment * term[0];
      const totalInterest = totalAmount - amount[0];
      return { monthlyPayment, totalAmount, totalInterest };
    }
  };

  const { monthlyPayment, totalAmount, totalInterest } = calculatePayment();
  const managementFee = amount[0] * 0.02;
  const disbursementAmount = amount[0] - managementFee;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Page Header */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Calculator className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Loan Calculator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select your loan type and calculate your monthly payments with our competitive rates.
            </p>
          </div>

          {/* Loan Type Selection */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8">
            {(Object.keys(loanConfig) as LoanType[]).map((type) => {
              const Icon = loanConfig[type].icon;
              const isActive = loanType === type;
              return (
                <button
                  key={type}
                  onClick={() => handleLoanTypeChange(type)}
                  className={`p-3 md:p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                    isActive 
                      ? "border-primary bg-primary/10" 
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <Icon className={`h-6 w-6 mx-auto mb-2 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                  <span className={`text-xs md:text-sm font-medium ${isActive ? "text-primary" : "text-foreground"}`}>
                    {loanConfig[type].name}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Calculator Inputs */}
            <Card className="shadow-lg border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  <span>Calculate Your {config.name} Loan</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Loan Amount */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-base font-medium">Loan Amount</Label>
                    <div className="flex items-center gap-1 text-primary font-bold text-xl">
                      <span>₦{amount[0].toLocaleString()}</span>
                    </div>
                  </div>
                  <Slider
                    value={amount}
                    onValueChange={setAmount}
                    max={config.maxAmount}
                    min={config.minAmount}
                    step={config.stepAmount}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>₦{config.minAmount.toLocaleString()}</span>
                    <span>₦{config.maxAmount.toLocaleString()}</span>
                  </div>
                </div>

                {/* Loan Term */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-base font-medium">Loan Term</Label>
                    <div className="flex items-center gap-2 text-primary font-bold text-xl">
                      <Calendar className="h-5 w-5" />
                      <span>{term[0]} months</span>
                    </div>
                  </div>
                  <Slider
                    value={term}
                    onValueChange={setTerm}
                    max={config.maxTerm}
                    min={config.minTerm}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{config.minTerm} months</span>
                    <span>{config.maxTerm} months</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div className="p-4 bg-muted rounded-xl">
                  <div className="flex items-center justify-between">
                    <Label className="text-base font-medium">Interest Rate</Label>
                    <div className="flex items-center gap-2 text-primary font-bold">
                      <Percent className="h-4 w-4" />
                      <span>{config.rateLabel}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {loanType === "sme" ? "Flat rate for business loans" : "Competitive rate on reducing balance"}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="shadow-lg border-2">
              <CardContent className="pt-8 space-y-6">
                <div className="text-center space-y-2 p-6 bg-primary/5 rounded-2xl">
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Monthly Payment</p>
                  <p className="text-4xl md:text-5xl font-bold text-primary">
                    ₦{Math.round(monthlyPayment).toLocaleString()}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm text-muted-foreground">Loan Amount</span>
                    <span className="font-bold text-foreground">₦{amount[0].toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm text-muted-foreground">Management Fee (2%)</span>
                    <span className="font-bold text-foreground">₦{Math.round(managementFee).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm text-muted-foreground">You'll Receive</span>
                    <span className="font-bold text-primary">₦{Math.round(disbursementAmount).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm text-muted-foreground">Total Repayment</span>
                    <span className="font-bold text-foreground">₦{Math.round(totalAmount).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm text-muted-foreground">Total Interest</span>
                    <span className="font-bold text-foreground">₦{Math.round(totalInterest).toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="bg-primary text-primary-foreground rounded-2xl p-6 space-y-4">
                  <h3 className="font-bold text-lg">Ready to Apply?</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      2% management fee
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Less than 24 hours approval
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      ₦5,000 credit score charge
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button 
                      variant="secondary" 
                      className="flex-1"
                      onClick={() => navigate('/loans')}
                    >
                      View Requirements
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1 bg-transparent border-white text-white hover:bg-white/10"
                      onClick={() => navigate('/apply')}
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CalculatorPage;
