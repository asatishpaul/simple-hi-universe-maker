
import { Hero } from "@/components/Hero";
import { LoanCalculator } from "@/components/LoanCalculator";
import { LeadForm } from "@/components/LeadForm";
import { Features } from "@/components/Features";
import { BankPartners } from "@/components/BankPartners";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <BankPartners />
      <LoanCalculator />
      <LeadForm />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
