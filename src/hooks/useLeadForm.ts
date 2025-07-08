
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const useLeadForm = () => {
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
    creditScore: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Application Submitted!",
      description: "We'll connect you with our partner banks (HDFC, ICICI, Axis, IDFC) within 24 hours.",
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
      creditScore: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return {
    formData,
    handleSubmit,
    handleChange
  };
};
