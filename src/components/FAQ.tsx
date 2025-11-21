import { useState } from "react";
import { UserCheck, BadgeDollarSign, Clock, Percent, CreditCard } from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who is eligible?",
      answer: "Confirmed Local Government staff in Nigeria with verifiable income and valid documentation. No existing LGCRED loans required.",
      icon: UserCheck,
      color: "from-blue-500 to-cyan-500"
    },
    {
      question: "Loan amounts?",
      answer: "Up to ₦500,000 for LG employees (12 months). ₦100,000 - ₦2,000,000 for SMEs based on assessment.",
      icon: BadgeDollarSign,
      color: "from-emerald-500 to-teal-500"
    },
    {
      question: "Approval time?",
      answer: "3-5 business days for review. Funds disbursed within 48 hours of approval to your account.",
      icon: Clock,
      color: "from-orange-500 to-amber-500"
    },
    {
      question: "Interest rates?",
      answer: "LG loans: 15% p.a. + 1% fee. SME loans: 18% p.a. Calculated on reducing balance basis.",
      icon: Percent,
      color: "from-purple-500 to-pink-500"
    },
    {
      question: "Repayment?",
      answer: "Automated monthly salary deductions or account transfers. Early repayment welcome without penalty.",
      icon: CreditCard,
      color: "from-rose-500 to-red-500"
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
                  h-full p-6 rounded-2xl border-2 
                  bg-gradient-to-br ${faq.color} 
                  shadow-lg hover:shadow-2xl
                  transition-all duration-300
                  ${isActive ? 'scale-105 border-white/50' : 'border-transparent opacity-90 hover:opacity-100'}
                `}>
                  <div className="flex flex-col h-full text-white">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className={`
                        w-8 h-8 rounded-full flex items-center justify-center
                        bg-white/20 backdrop-blur-sm text-xs font-bold
                        transition-transform duration-300
                        ${isActive ? 'rotate-45' : ''}
                      `}>
                        +
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">
                      {faq.question}
                    </h3>
                    
                    <div className={`
                      overflow-hidden transition-all duration-500
                      ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                    `}>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                    
                    {!isActive && (
                      <p className="text-white/70 text-xs mt-auto">
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
