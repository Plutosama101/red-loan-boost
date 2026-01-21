import { useState } from "react";
import { UserCheck, BadgeDollarSign, Clock, Percent, CreditCard, ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who is eligible for a loan?",
      answer: "Confirmed Local Government staff in Nigeria with verifiable income and valid documentation. SME loans available for registered businesses with CAC certificate. Collateral may be required depending on loan amount.",
      icon: UserCheck,
    },
    {
      question: "What loan amounts are available?",
      answer: "Up to ₦1,000,000 for LG employees (maximum 6 months term). Up to ₦12,000,000 for SMEs (maximum 12 months term). Individual loans available based on assessment.",
      icon: BadgeDollarSign,
    },
    {
      question: "How long does approval take?",
      answer: "Less than 24 hours for review. Funds disbursed within 48 hours of approval to your account.",
      icon: Clock,
    },
    {
      question: "What are the interest rates?",
      answer: "LG loans: 5% interest + 2% management fee. SME loans: 7% total interest + 2% management fee. All rates calculated on reducing balance basis.",
      icon: Percent,
    },
    {
      question: "How do I repay my loan?",
      answer: "Automated monthly salary deductions or account transfers. ₦5,000 credit score charge applies. Early repayment welcome without penalty.",
      icon: CreditCard,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Quick Answers
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about our loan services
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-primary/30 bg-primary/5" : "border-border hover:border-primary/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center gap-4 p-4 text-left"
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    isOpen ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="flex-1 font-medium text-foreground">
                    {faq.question}
                  </span>
                  <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-40" : "max-h-0"
                }`}>
                  <p className="px-4 pb-4 pl-18 text-muted-foreground text-sm leading-relaxed ml-14">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-10 text-center p-6 bg-muted rounded-2xl">
          <div className="flex items-center justify-center gap-2 mb-3">
            <MessageCircle className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">Still have questions?</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Our team is ready to help you with any inquiries
          </p>
          <Button
            variant="default"
            onClick={() => window.open('https://wa.me/2348130222496', '_blank')}
          >
            Chat with Us on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
