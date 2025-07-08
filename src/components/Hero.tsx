
import { Button } from "@/components/ui/button";
import { Calculator, Shield, Clock } from "lucide-react";

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
            <span className="text-primary block">In Minutes, Not Days</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Compare rates from top lenders. Quick approval process. 
            Funds as fast as the next business day. No hidden fees.
          </p>
          
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
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
                <div className="font-semibold">Quick Decision</div>
                <div className="text-sm text-muted-foreground">Results in minutes</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <Calculator className="h-8 w-8 text-primary" />
              <div className="text-left">
                <div className="font-semibold">Smart Matching</div>
                <div className="text-sm text-muted-foreground">Best rates for you</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
