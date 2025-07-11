
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
    monthlyNetSalary: "",
    employmentStatus: "",
    creditScore: "",
    companyName: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Application Submitted!",
      description: "We'll connect you with our partner banks (HDFC Bank, ICICI Bank, Axis Bank, IDFC First Bank) within 24 hours.",
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
      monthlyNetSalary: "",
      employmentStatus: "",
      creditScore: "",
      companyName: ""
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
              💰 Get Instant Personal Loan Approval
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick & hassle-free process with competitive rates from top banks & NBFCs. Get approved in minutes!
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
                    <Label htmlFor="loan-amount">Loan Amount Needed (₹)</Label>
                    <Input
                      id="loan-amount"
                      type="number"
                      placeholder="e.g., 500000"
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
                      <option value="education">Education</option>
                      <option value="travel">Travel</option>
                      <option value="wedding">Wedding</option>
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
                    <Label htmlFor="zip-code">PIN Code</Label>
                    <Input
                      id="zip-code"
                      value={formData.zipCode}
                      onChange={(e) => handleChange("zipCode", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="monthly-net-salary">Monthly Net Salary (₹)</Label>
                    <Input
                      id="monthly-net-salary"
                      type="number"
                      placeholder="e.g., 75000"
                      value={formData.monthlyNetSalary}
                      onChange={(e) => handleChange("monthlyNetSalary", e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input
                    id="company-name"
                    placeholder="e.g., TCS, Infosys, HDFC Bank"
                    value={formData.companyName || ""}
                    onChange={(e) => handleChange("companyName", e.target.value)}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                </div>
                
                <div>
                  <Label>Employment Status</Label>
                  <RadioGroup
                    value={formData.employmentStatus}
                    onValueChange={(value) => handleChange("employmentStatus", value)}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="salaried" id="salaried" />
                      <Label htmlFor="salaried">Salaried</Label>
                    </div>
                     <div className="flex items-center space-x-2">
                       <RadioGroupItem value="retired" id="retired" />
                       <Label htmlFor="retired">Retired</Label>
                     </div>
                     <div className="flex items-center space-x-2">
                       <RadioGroupItem value="professional" id="professional" />
                       <Label htmlFor="professional">Other Professionals (Doctor, Architect, etc.)</Label>
                     </div>
                  </RadioGroup>
                </div>
                
                
                <Button type="submit" className="w-full" size="lg">
                  Get My Loan Offers
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to receive calls and texts from our lending partners including HDFC Bank, ICICI Bank, Axis Bank, IDFC First Bank and other NBFCs. 
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
