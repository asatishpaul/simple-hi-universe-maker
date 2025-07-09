
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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Our Loan Service?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our spam-free approach ensures you get expert guidance to find the lowest interest rates from the right bank for your profile - including HDFC Bank, ICICI Bank, Axis Bank, IDFC First Bank & other trusted NBFCs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
              <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
