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
      answer: "To be eligible, you must be a confirmed staff member of a Local Government in Nigeria, have a verifiable source of income, maintain a bank account, and have no existing loan with LGCRED or any sister company. You must also be of legal age and provide all required documentation including valid ID, utility bills, and employment confirmation."
    },
    {
      question: "What are the maximum loan amounts available?",
      answer: "For Local Government employees, the maximum loan amount is ₦500,000 with a repayment period of up to 12 months. For SME loans, amounts vary based on business assessment and can range from ₦100,000 to ₦2,000,000 depending on your business profile and repayment capacity."
    },
    {
      question: "How long does the loan application process take?",
      answer: "Once you submit your complete application with all required documents, the review process typically takes 3-5 business days. Upon approval, funds are disbursed within 48 hours to your designated bank account. Incomplete applications may experience delays."
    },
    {
      question: "What interest rates do you charge?",
      answer: "Interest rates vary by loan type. Local Government loans carry an annual percentage rate of 15% plus a 1% management fee. SME loans have an 18% annual rate. All rates are competitive and calculated on a reducing balance basis, meaning you pay interest only on the outstanding principal."
    },
    {
      question: "What documents do I need to apply?",
      answer: "Required documents include: valid government-issued ID (International Passport, Driver's License, or National ID), recent utility bill (PHCN, water bill, or tenancy agreement), 2 recent passport photographs, proof of employment or business registration, bank statements for the last 3 months, and guarantor forms with guarantor's valid ID and utility bill."
    },
    {
      question: "How do I repay my loan?",
      answer: "Repayment is made through monthly deductions directly from your salary or business account. For Local Government employees, deductions are automated through the payroll system. You can also make early repayments without penalty to reduce your interest burden. We accept bank transfers, cheques, and direct deposits."
    },
    {
      question: "What happens if I miss a payment?",
      answer: "Missing a payment attracts a late payment fee and may affect your credit rating. If payment difficulties arise, contact us immediately to discuss restructuring options. After 90 days of non-payment, we initiate recovery procedures which may include engaging your guarantors, employer notification, and legal action if necessary."
    },
    {
      question: "Can I get a second loan before paying off my first?",
      answer: "You must fully repay your existing loan before applying for a new one. However, after completing 70% of your repayment and maintaining a good payment record, you may be eligible for a top-up loan. Contact our customer service team to discuss your options."
    },
    {
      question: "Do you offer loan insurance?",
      answer: "Yes, we offer optional loan protection insurance that covers your outstanding balance in case of death, permanent disability, or critical illness. The insurance premium is a small percentage of your loan amount and can be added to your monthly repayment. This protects both you and your guarantors."
    },
    {
      question: "What recovery measures do you employ for defaulted loans?",
      answer: "Our recovery process is structured in stages: initial reminder notices, contact with guarantors, employer notification for salary deduction, engagement of debt recovery agents, and as a last resort, legal action. We prefer amicable resolution and encourage borrowers facing difficulties to communicate with us early to explore restructuring options."
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
