
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "What are the requirements for a personal loan?",
      answer: "To qualify, you typically need to be 18+, have a steady income, valid ID, and a checking account. Credit requirements vary by lender."
    },
    {
      question: "How quickly can I get funded?",
      answer: "Many of our lenders can fund your loan as fast as the next business day after approval and document verification."
    },
    {
      question: "Will checking my rate affect my credit score?",
      answer: "No, checking your rate through our platform uses a soft credit inquiry which does not impact your credit score."
    },
    {
      question: "What can I use a personal loan for?",
      answer: "Personal loans can be used for debt consolidation, home improvements, medical expenses, major purchases, and more. Some restrictions may apply."
    },
    {
      question: "Are there any fees?",
      answer: "We don't charge any fees for our matching service. Lender fees vary, but many offer loans with no origination fees or prepayment penalties."
    },
    {
      question: "What interest rates can I expect?",
      answer: "Rates typically range from 5.99% to 35.99% APR based on creditworthiness, loan amount, and term. Your actual rate may vary."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about personal loans
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
