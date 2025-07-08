
import { CheckCircle, DollarSign, Users, Zap } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Competitive Rates",
      description: "Starting as low as 5.99% APR for qualified borrowers"
    },
    {
      icon: Zap,
      title: "Fast Approval",
      description: "Get approved in as little as 5 minutes with instant decisions"
    },
    {
      icon: Users,
      title: "Trusted Network",
      description: "Connected with 50+ verified lenders nationwide"
    },
    {
      icon: CheckCircle,
      title: "No Hidden Fees",
      description: "Transparent pricing with no origination or prepayment fees"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Our Loan Service?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We make getting a personal loan simple, fast, and transparent
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
