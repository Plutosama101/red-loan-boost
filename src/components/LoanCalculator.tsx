import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator, DollarSign, Calendar, Percent } from "lucide-react";

const LoanCalculator = () => {
  const [amount, setAmount] = useState([500000]);
  const [term, setTerm] = useState([12]);
  const [rate] = useState(15); // Fixed rate for demo - Nigeria typical rate

  const monthlyPayment = (amount[0] * (rate / 100 / 12)) / (1 - Math.pow(1 + (rate / 100 / 12), -term[0]));
  const totalAmount = monthlyPayment * term[0];
  const totalInterest = totalAmount - amount[0];

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-loan-gray">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Loan Calculator
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate your monthly payments and see how much you can borrow
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Inputs */}
          <Card className="shadow-loan-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calculator className="h-5 w-5 text-primary" />
                <span>Calculate Your Loan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Loan Amount */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-base font-medium">Loan Amount</Label>
                  <div className="flex items-center space-x-1 text-primary font-bold">
                    <span className="text-primary">₦</span>
                    <span>{amount[0].toLocaleString()}</span>
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
                  <div className="flex items-center space-x-1 text-primary font-bold">
                    <Calendar className="h-4 w-4" />
                    <span>{term[0]} months</span>
                  </div>
                </div>
                <Slider
                  value={term}
                  onValueChange={setTerm}
                  max={60}
                  min={3}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>3 months</span>
                  <span>60 months</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-base font-medium">Interest Rate</Label>
                  <div className="flex items-center space-x-1 text-primary font-bold">
                    <Percent className="h-4 w-4" />
                    <span>{rate}% APR</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Our competitive rate for qualified borrowers
                </p>
              </div>

              <Button className="w-full bg-gradient-primary hover:bg-loan-primary-dark text-white shadow-loan">
                Apply for This Loan
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            <Card className="shadow-loan-card">
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">Monthly Payment</p>
                  <p className="text-4xl font-bold text-primary">
                    ₦{monthlyPayment.toFixed(0)}
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-sm text-muted-foreground mb-2">Total Amount</p>
                  <p className="text-xl font-bold text-foreground">
                    ₦{totalAmount.toFixed(0)}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-sm text-muted-foreground mb-2">Total Interest</p>
                  <p className="text-xl font-bold text-foreground">
                    ₦{totalInterest.toFixed(0)}
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-primary text-white">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h3 className="font-bold text-lg">Ready to Apply?</h3>
                  <p className="text-sm opacity-90">
                    Get instant approval and funds in your account within 24 hours
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• No hidden fees</li>
                    <li>• Fast approval process</li>
                    <li>• Flexible repayment terms</li>
                  </ul>
                  <Button variant="secondary" className="w-full">
                    Start Application
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculator;