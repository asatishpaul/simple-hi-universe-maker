
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
            Quick Personal Loans
            <span className="text-primary block">From Trusted Banking Partners</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Fast approval, competitive rates, and hassle-free process. 
            Connect with HDFC Bank, ICICI Bank, Axis Bank, IDFC First Bank & other leading NBFCs.
          </p>
          
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg mb-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-3">What We Offer:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
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
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>100% Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>Quick Process</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneOff className="h-4 w-4 text-primary" />
              <span>No Spam Calls</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
