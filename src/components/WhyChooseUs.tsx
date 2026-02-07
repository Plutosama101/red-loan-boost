import { Banknote, Clock, CalendarDays, ShieldCheck, CreditCard, Bell } from "lucide-react";

const features = [
  {
    icon: Banknote,
    title: "₦50K – ₦12M+",
    description: "Flexible loan amounts for individuals, SMEs, and government employees.",
  },
  {
    icon: Clock,
    title: "Less than 24 Hours",
    description: "Quick review and approval. Funds disbursed within 48 hours.",
  },
  {
    icon: CalendarDays,
    title: "3 – 12 Months",
    description: "Choose a repayment period that works for your budget.",
  },
  {
    icon: ShieldCheck,
    title: "No Hidden Fees",
    description: "Transparent interest rates and a clear management fee structure.",
  },
  {
    icon: CreditCard,
    title: "Flexible Repayment",
    description: "Automated salary deductions or bank transfers. Early repayment welcome.",
  },
  {
    icon: Bell,
    title: "SMS & Email Updates",
    description: "Stay informed with real-time updates on your application status.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Why Choose <span className="text-primary">LGCRED</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We make borrowing simple, fast, and transparent for every Nigerian.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-card border rounded-2xl p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
