
import { Shield, Lock, Award } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium">256-bit SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium">Privacy Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium">A+ BBB Rating</span>
            </div>
          </div>
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">LoanConnect</h3>
              <p className="text-muted-foreground text-sm">
                Connecting borrowers with trusted lenders nationwide. 
                Fast, secure, and transparent personal loan matching service.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">How It Works</a></li>
                <li><a href="#" className="hover:text-primary">Loan Calculator</a></li>
                <li><a href="#" className="hover:text-primary">Credit Resources</a></li>
                <li><a href="#" className="hover:text-primary">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary">Responsible Lending</a></li>
                <li><a href="#" className="hover:text-primary">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className="text-center pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-2">
              © 2024 LoanConnect. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              *Loan approval and actual loan terms depend on your credit score and other factors. 
              Rates shown are estimates and may vary. Not all applicants will qualify.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
