
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FormFields } from "@/components/FormFields";
import { useLeadForm } from "@/hooks/useLeadForm";

export const LeadForm = () => {
  const { formData, handleSubmit, handleChange } = useLeadForm();

  return (
    <section id="lead-form" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Your Personal Loan Quote
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and get matched with the best loan offers from HDFC, ICICI, Axis, IDFC & other NBFCs
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Quick Application Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <FormFields formData={formData} handleChange={handleChange} />
                
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
