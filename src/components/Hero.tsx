
import { Button } from "@/components/ui/button";
import { Calculator, Shield, Clock, PhoneOff } from "lucide-react";

export const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Quick Personal Loans
            <span className="text-primary block">From Trusted Banks</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Fast approval, competitive rates. Connect with leading banks & NBFCs.
          </p>
          
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg mb-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">What We Offer:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-6">
              <div>
                <div className="text-2xl font-bold text-primary">₹50K+</div>
                <div className="text-sm text-muted-foreground">Min Loan Amount</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">₹50L</div>
                <div className="text-sm text-muted-foreground">Max Loan Amount</div>
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
            
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <div className="flex items-center gap-2 bg-background/50 rounded-full px-3 py-1 border">
                <PhoneOff className="h-4 w-4 text-primary" />
                <span>100% Spam-Free</span>
              </div>
              <div className="flex items-center gap-2 bg-background/50 rounded-full px-3 py-1 border">
                <Shield className="h-4 w-4 text-primary" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center gap-2 bg-background/50 rounded-full px-3 py-1 border">
                <Clock className="h-4 w-4 text-primary" />
                <span>Quick Process</span>
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
          
        </div>
      </div>
    </section>
  );
};
