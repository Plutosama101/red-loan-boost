import { useState } from "react";
import { UserCheck, BadgeDollarSign, Clock, Percent, CreditCard } from "lucide-react";
import eligibilityImg from "@/assets/faq-eligibility.jpg";
import amountsImg from "@/assets/faq-amounts.jpg";
import approvalImg from "@/assets/faq-approval.jpg";
import ratesImg from "@/assets/faq-rates.jpg";
import repaymentImg from "@/assets/faq-repayment.jpg";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who is eligible?",
      answer: "Confirmed Local Government staff in Nigeria with verifiable income and valid documentation. No existing LGCRED loans required.",
      icon: UserCheck,
      image: eligibilityImg,
      gradient: "from-loan-primary/90 via-loan-primary to-loan-primary-dark"
    },
    {
      question: "Loan amounts?",
      answer: "Up to ₦500,000 for LG employees (12 months). ₦100,000 - ₦2,000,000 for SMEs based on assessment.",
      icon: BadgeDollarSign,
      image: amountsImg,
      gradient: "from-loan-primary/80 via-loan-primary/90 to-loan-primary"
    },
    {
      question: "Approval time?",
      answer: "3-5 business days for review. Funds disbursed within 48 hours of approval to your account.",
      icon: Clock,
      image: approvalImg,
      gradient: "from-loan-primary-dark via-loan-primary to-loan-primary/80"
    },
    {
      question: "Interest rates?",
      answer: "LG loans: 15% p.a. + 1% fee. SME loans: 18% p.a. Calculated on reducing balance basis.",
      icon: Percent,
      image: ratesImg,
      gradient: "from-loan-primary via-loan-primary-dark to-loan-secondary/80"
    },
    {
      question: "Repayment?",
      answer: "Automated monthly salary deductions or account transfers. Early repayment welcome without penalty.",
      icon: CreditCard,
      image: repaymentImg,
      gradient: "from-loan-primary-dark/90 via-loan-primary to-loan-primary/90"
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Quick Answers
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tap any card to learn more about our loan solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isActive = activeIndex === index;
            
            return (
              <div
                key={index}
                onClick={() => setActiveIndex(isActive ? null : index)}
                className={`
                  relative cursor-pointer group
                  ${isActive ? 'md:col-span-2 lg:col-span-2' : 'md:col-span-1 lg:col-span-1'}
                  transition-all duration-500 ease-in-out
                `}
              >
                <div className={`
                  relative h-full overflow-hidden rounded-2xl border-2 
                  shadow-lg hover:shadow-2xl
                  transition-all duration-300
                  ${isActive ? 'scale-105 border-primary/30' : 'border-border/50 hover:border-primary/20'}
                `}>
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${faq.gradient} opacity-95`} />
                  
                  {/* Background image */}
                  <div className="absolute inset-0 opacity-20">
                    <img 
                      src={faq.image} 
                      alt={faq.question}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="relative p-6 flex flex-col h-full text-white">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 border-white/30 shadow-lg">
                        <img 
                          src={faq.image} 
                          alt={faq.question}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold leading-tight">
                          {faq.question}
                        </h3>
                      </div>
                      <div className={`
                        flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                        bg-white/20 backdrop-blur-sm text-xs font-bold
                        transition-transform duration-300
                        ${isActive ? 'rotate-45' : ''}
                      `}>
                        +
                      </div>
                    </div>
                    
                    <div className={`
                      overflow-hidden transition-all duration-500
                      ${isActive ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}
                    `}>
                      <p className="text-white/95 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                    
                    {!isActive && (
                      <p className="text-white/80 text-xs mt-auto pt-4">
                        Click to learn more
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border border-primary/20">
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
