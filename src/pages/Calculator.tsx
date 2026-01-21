import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator, Calendar, Percent, ArrowRight, CheckCircle } from "lucide-react";

const CalculatorPage = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState([500000]);
  const [term, setTerm] = useState([12]);
  const [rate] = useState(15);

  const monthlyPayment = (amount[0] * (rate / 100 / 12)) / (1 - Math.pow(1 + (rate / 100 / 12), -term[0]));
  const totalAmount = monthlyPayment * term[0];
  const totalInterest = totalAmount - amount[0];

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
              Calculate your monthly payments and see how much you can borrow with our competitive rates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Calculator Inputs */}
            <Card className="shadow-lg border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  <span>Calculate Your Loan</span>
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
                    max={5000000}
                    min={100000}
                    step={50000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>₦100,000</span>
                    <span>₦5,000,000</span>
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
                    max={12}
                    min={3}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>3 months</span>
                    <span>12 months</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div className="p-4 bg-muted rounded-xl">
                  <div className="flex items-center justify-between">
                    <Label className="text-base font-medium">Interest Rate</Label>
                    <div className="flex items-center gap-2 text-primary font-bold">
                      <Percent className="h-4 w-4" />
                      <span>{rate}% APR</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Our competitive rate for qualified borrowers
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
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted rounded-xl">
                    <p className="text-xs text-muted-foreground mb-1">Total Repayment</p>
                    <p className="text-lg font-bold text-foreground">
                      ₦{Math.round(totalAmount).toLocaleString()}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-xl">
                    <p className="text-xs text-muted-foreground mb-1">Total Interest</p>
                    <p className="text-lg font-bold text-foreground">
                      ₦{Math.round(totalInterest).toLocaleString()}
                    </p>
                  </div>
                </div>
                
                <div className="bg-primary text-primary-foreground rounded-2xl p-6 space-y-4">
                  <h3 className="font-bold text-lg">Ready to Apply?</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      No hidden fees
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Less than 24 hours approval
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Flexible repayment terms
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button 
                      variant="secondary" 
                      className="flex-1"
                      onClick={() => navigate('/loans')}
                    >
                      Choose Loan Type
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
