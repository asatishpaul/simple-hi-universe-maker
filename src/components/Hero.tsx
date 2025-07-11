
import { Button } from "@/components/ui/button";
import { Calculator, Shield, Clock, PhoneOff } from "lucide-react";

export const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Get Your Personal Loan
            <span className="text-primary block">Starting at 10.49% APR*</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Quick approval with competitive rates from leading banks. 
            Partner with HDFC Bank, ICICI Bank, Axis Bank, IDFC First Bank & other trusted NBFCs.
          </p>
          
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg mb-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-3">Our Banking Partners Offer:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">10.49%</div>
                <div className="text-sm text-muted-foreground">Starting APR</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">₹50L</div>
                <div className="text-sm text-muted-foreground">Max Loan</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">24 hrs</div>
                <div className="text-sm text-muted-foreground">Quick Approval</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">7 Years</div>
                <div className="text-sm text-muted-foreground">Max Tenure</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={scrollToForm}
              className="text-lg px-8 py-6"
            >
              Get Your Rate Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-6"
            >
              <Calculator className="mr-2 h-5 w-5" />
              Calculate Payment
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <PhoneOff className="h-8 w-8 text-primary" />
              <div className="text-left">
                <div className="font-semibold">No Spam Calls</div>
                <div className="text-sm text-muted-foreground">Respectful communication</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <Shield className="h-8 w-8 text-primary" />
              <div className="text-left">
                <div className="font-semibold">100% Secure</div>
                <div className="text-sm text-muted-foreground">Bank-level encryption</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <Clock className="h-8 w-8 text-primary" />
              <div className="text-left">
                <div className="font-semibold">Expert Guidance</div>
                <div className="text-sm text-muted-foreground">Professional support</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <Calculator className="h-8 w-8 text-primary" />
              <div className="text-left">
                <div className="font-semibold">Best Match</div>
                <div className="text-sm text-muted-foreground">Lowest rates for you</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
