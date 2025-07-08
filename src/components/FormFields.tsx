
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface FormFieldsProps {
  formData: {
    loanAmount: string;
    loanPurpose: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    zipCode: string;
    monthlyNetSalary: string;
    employmentStatus: string;
    creditScore: string;
  };
  handleChange: (field: string, value: string) => void;
}

export const FormFields = ({ formData, handleChange }: FormFieldsProps) => {
  return (
    <>
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
            <RadioGroupItem value="self-employed" id="self-employed" />
            <Label htmlFor="self-employed">Self-employed</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="business-owner" id="business-owner" />
            <Label htmlFor="business-owner">Business Owner</Label>
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
          <option value="excellent">Excellent (750+)</option>
          <option value="good">Good (700-749)</option>
          <option value="fair">Fair (650-699)</option>
          <option value="poor">Poor (Below 650)</option>
          <option value="unknown">I don't know</option>
        </select>
      </div>
    </>
  );
};
