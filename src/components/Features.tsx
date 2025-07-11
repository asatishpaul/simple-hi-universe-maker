
import { CheckCircle, DollarSign, Users, Zap, PhoneOff, UserCheck } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: PhoneOff,
      title: "100% Spam-Free",
      description: "No repeated calls or harassment. We respect your privacy and communicate only when necessary"
    },
    {
      icon: UserCheck,
      title: "Expert Guidance",
      description: "Our loan experts guide you through the entire process to find the best bank match for your profile"
    },
    {
      icon: DollarSign,
      title: "Lowest Interest Rates",
      description: "Starting at 10.49% APR from HDFC Bank, ICICI Bank, Axis Bank, IDFC First Bank & other top NBFCs based on your profile"
    },
    {
      icon: Users,
      title: "Trusted Partners",
      description: "Direct partnerships with HDFC Bank, ICICI Bank, Axis Bank, IDFC First Bank and 50+ verified NBFCs for best offers"
    },
    {
      icon: Zap,
      title: "Smart Matching",
      description: "AI-powered analysis to match you with banks offering the lowest rates for your profile"
    },
    {
      icon: CheckCircle,
      title: "Transparent Process",
      description: "No hidden fees, clear terms, and honest guidance throughout your loan journey"
    }
  ];

  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 border">
            <PhoneOff className="h-4 w-4 text-primary" />
            <span>100% Spam-Free</span>
          </div>
          <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 border">
            <UserCheck className="h-4 w-4 text-primary" />
            <span>Expert Guidance</span>
          </div>
          <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 border">
            <Zap className="h-4 w-4 text-primary" />
            <span>Smart Matching</span>
          </div>
          <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 border">
            <CheckCircle className="h-4 w-4 text-primary" />
            <span>Transparent Process</span>
          </div>
        </div>
      </div>
    </section>
  );
};
