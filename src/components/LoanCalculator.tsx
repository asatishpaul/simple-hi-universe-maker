
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState([500000]);
  const [term, setTerm] = useState([36]);
  const [creditScore, setCreditScore] = useState("excellent");
  const [manualMode, setManualMode] = useState(false);
  const [customRate, setCustomRate] = useState("");

  const getEstimatedRate = () => {
    if (manualMode && customRate) {
      return parseFloat(customRate) || 10.49;
    }
    const rates = {
      excellent: 10.49,
      good: 12.99,
      fair: 15.99,
      poor: 19.99
    };
    return rates[creditScore as keyof typeof rates] || 12.99;
  };

  const calculatePayment = () => {
    const principal = loanAmount[0];
    const monthlyRate = getEstimatedRate() / 100 / 12;
    const numPayments = term[0];
    
    const payment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                   (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    return payment;
  };

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="calculator" className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Calculate Your Monthly Payment
            </h2>
            <p className="text-lg text-muted-foreground">
              Get personalized estimates and find the best offers from HDFC, ICICI, Axis, IDFC & other NBFCs
            </p>
            <div className="flex items-center justify-center gap-3 mt-4">
              <Label htmlFor="manual-mode" className="text-sm font-medium">
                Manual Adjustment Mode
              </Label>
              <Switch
                id="manual-mode"
                checked={manualMode}
                onCheckedChange={setManualMode}
              />
            </div>
          </div>
          
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-center">Loan Payment Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <Label className="text-base font-medium">Loan Amount</Label>
                    <div className="mt-2 mb-4">
                      {manualMode ? (
                        <Input
                          type="number"
                          placeholder="Enter loan amount"
                          value={loanAmount[0]}
                          onChange={(e) => setLoanAmount([parseInt(e.target.value) || 50000])}
                          min={50000}
                          max={5000000}
                          className="text-center font-medium"
                        />
                      ) : (
                        <Slider
                          value={loanAmount}
                          onValueChange={setLoanAmount}
                          max={5000000}
                          min={50000}
                          step={50000}
                          className="w-full"
                        />
                      )}
                      <div className="flex justify-between text-sm text-muted-foreground mt-1">
                        <span>₹50,000</span>
                        <span className="font-medium">₹{loanAmount[0].toLocaleString('en-IN')}</span>
                        <span>₹50,00,000</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-base font-medium">Loan Term (Months)</Label>
                    <div className="mt-2 mb-4">
                      {manualMode ? (
                        <Input
                          type="number"
                          placeholder="Enter term in months"
                          value={term[0]}
                          onChange={(e) => setTerm([parseInt(e.target.value) || 12])}
                          min={12}
                          max={84}
                          className="text-center font-medium"
                        />
                      ) : (
                        <Slider
                          value={term}
                          onValueChange={setTerm}
                          max={84}
                          min={12}
                          step={12}
                          className="w-full"
                        />
                      )}
                      <div className="flex justify-between text-sm text-muted-foreground mt-1">
                        <span>12</span>
                        <span className="font-medium">{term[0]} months</span>
                        <span>84</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="credit-score" className="text-base font-medium">
                      {manualMode ? "Interest Rate (%)" : "Credit Score Range"}
                    </Label>
                    {manualMode ? (
                      <Input
                        type="number"
                        placeholder="Enter interest rate"
                        value={customRate}
                        onChange={(e) => setCustomRate(e.target.value)}
                        min={8}
                        max={30}
                        step={0.01}
                        className="mt-2 text-center font-medium"
                      />
                    ) : (
                      <select
                        id="credit-score"
                        value={creditScore}
                        onChange={(e) => setCreditScore(e.target.value)}
                        className="w-full mt-2 p-3 border border-input rounded-md bg-background"
                      >
                        <option value="excellent">Excellent (750+) - 10.49%</option>
                        <option value="good">Good (700-749) - 12.99%</option>
                        <option value="fair">Fair (650-699) - 15.99%</option>
                        <option value="poor">Poor (Below 650) - 19.99%</option>
                      </select>
                    )}
                  </div>
                </div>
                
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-center mb-6">Your Estimated Payment</h3>
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-bold text-primary">
                      ₹{calculatePayment().toFixed(0)}
                      <span className="text-lg text-muted-foreground">/month</span>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>Estimated APR: {getEstimatedRate()}%</div>
                      <div>Total Interest: ₹{((calculatePayment() * term[0]) - loanAmount[0]).toFixed(0)}</div>
                      <div>Total Amount: ₹{(calculatePayment() * term[0]).toFixed(0)}</div>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full mt-6" 
                    size="lg"
                    onClick={scrollToForm}
                  >
                    Get Your Actual Rate
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    *Actual rates may vary based on creditworthiness and other factors
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
