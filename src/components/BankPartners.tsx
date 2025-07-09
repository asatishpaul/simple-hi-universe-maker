import hdfcLogo from "@/assets/hdfc-logo.png";
import iciciLogo from "@/assets/icici-logo.png";
import axisLogo from "@/assets/axis-logo.png";
import idfcLogo from "@/assets/idfc-logo.png";

export const BankPartners = () => {
  const partners = [
    { name: "HDFC Bank", logo: hdfcLogo },
    { name: "ICICI Bank", logo: iciciLogo },
    { name: "Axis Bank", logo: axisLogo },
    { name: "IDFC First Bank", logo: idfcLogo }
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-foreground mb-2">
            Trusted Banking Partners
          </h3>
          <p className="text-muted-foreground">
            Direct partnerships with leading banks for the best loan offers
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div key={partner.name} className="flex flex-col items-center space-y-2">
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              <span className="text-sm font-medium text-muted-foreground">{partner.name}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            + 50 other verified NBFCs
          </p>
        </div>
      </div>
    </section>
  );
};