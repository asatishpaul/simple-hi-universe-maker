
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

export const LeadForm = () => {
  const [formData, setFormData] = useState({
    loanAmount: "",
    loanPurpose: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipCode: "",
    annualIncome: "",
    employmentStatus: "",
    creditScore: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Application Submitted!",
      description: "We'll contact you within 24 hours with your loan options.",
    });
    
    // Reset form
    setFormData({
      loanAmount: "",
      loanPurpose: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      zipCode: "",
      annualIncome: "",
      employmentStatus: "",
      creditScore: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="lead-form" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Your Personal Loan Quote
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and get matched with the best loan offers
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Quick Application Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="loan-amount">Loan Amount Needed</Label>
                    <Input
                      id="loan-amount"
                      type="number"
                      placeholder="e.g., 25000"
                      value={formData.loanAmount}
                      onChange={(e) => handleChange("loanAmount", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="loan-purpose">Loan Purpose</Label>
                    <select
                      id="loan-purpose"
                      value={formData.loanPurpose}
                      onChange={(e) => handleChange("loanPurpose", e.target.value)}
                      className="w-full p-2 border border-input rounded-md bg-background"
                      required
                    >
                      <option value="">Select purpose</option>
                      <option value="debt-consolidation">Debt Consolidation</option>
                      <option value="home-improvement">Home Improvement</option>
                      <option value="major-purchase">Major Purchase</option>
                      <option value="medical">Medical Expenses</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="first-name">First Name</Label>
                    <Input
                      id="first-name"
                      value={formData.firstName}
                      onChange={(e) => handleChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input
                      id="last-name"
                      value={formData.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="zip-code">ZIP Code</Label>
                    <Input
                      id="zip-code"
                      value={formData.zipCode}
                      onChange={(e) => handleChange("zipCode", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="annual-income">Annual Income</Label>
                    <Input
                      id="annual-income"
                      type="number"
                      placeholder="e.g., 50000"
                      value={formData.annualIncome}
                      onChange={(e) => handleChange("annualIncome", e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label>Employment Status</Label>
                  <RadioGroup
                    value={formData.employmentStatus}
                    onValueChange={(value) => handleChange("employmentStatus", value)}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="employed" id="employed" />
                      <Label htmlFor="employed">Employed Full-time</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="part-time" id="part-time" />
                      <Label htmlFor="part-time">Employed Part-time</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="self-employed" id="self-employed" />
                      <Label htmlFor="self-employed">Self-employed</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="retired" id="retired" />
                      <Label htmlFor="retired">Retired</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div>
                  <Label htmlFor="credit-score-range">Credit Score Range</Label>
                  <select
                    id="credit-score-range"
                    value={formData.creditScore}
                    onChange={(e) => handleChange("creditScore", e.target.value)}
                    className="w-full mt-2 p-2 border border-input rounded-md bg-background"
                    required
                  >
                    <option value="">Select range</option>
                    <option value="excellent">Excellent (720+)</option>
                    <option value="good">Good (660-719)</option>
                    <option value="fair">Fair (580-659)</option>
                    <option value="poor">Poor (Below 580)</option>
                    <option value="unknown">I don't know</option>
                  </select>
                </div>
                
                <Button type="submit" className="w-full" size="lg">
                  Get My Loan Offers
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to receive calls and texts from our lending partners. 
                  Your information is secure and will not be sold to third parties.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
