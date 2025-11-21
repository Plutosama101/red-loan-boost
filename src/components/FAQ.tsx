import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Who is eligible for an LGCRED loan?",
      answer: "You must be a confirmed staff member of a Local Government in Nigeria with a verifiable source of income and valid documentation. Applicants must have no existing loans with LGCRED or sister companies."
    },
    {
      question: "What are the loan amounts and terms?",
      answer: "Local Government employees can access up to ₦500,000 with repayment periods up to 12 months. SME loans range from ₦100,000 to ₦2,000,000 based on business assessment and repayment capacity."
    },
    {
      question: "How long does approval take?",
      answer: "Complete applications are reviewed within 3-5 business days. Upon approval, funds are disbursed within 48 hours to your designated bank account."
    },
    {
      question: "What are your interest rates?",
      answer: "Local Government loans carry 15% per annum plus 1% management fee. SME loans have an 18% annual rate, calculated on a reducing balance basis."
    },
    {
      question: "How do I repay my loan?",
      answer: "Repayment is through automated monthly salary deductions or direct account transfers. Early repayments are welcome without penalty, reducing your overall interest burden."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Have Questions?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about our loan products and services.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 px-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6 text-foreground font-semibold group">
                <span className="group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-[15px]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border border-primary/20">
          <p className="text-foreground font-medium text-lg mb-4">
            Still have questions?
          </p>
          <p className="text-muted-foreground mb-6">
            Our team is here to help you find the perfect loan solution.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
