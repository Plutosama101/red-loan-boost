import { Clock, Percent, Users, Banknote, Shield, Zap, Ban } from "lucide-react";

const stats = [
  {
    label: "APPROVAL IN",
    value: "<24 hrs",
    icon: Clock,
    variant: "light" as const,
  },
  {
    label: "INTEREST FROM",
    value: "5%",
    valueSuffix: "/month",
    icon: Percent,
    variant: "primary" as const,
  },
  {
    label: "HAPPY CUSTOMERS",
    value: "50+",
    icon: Users,
    variant: "primary" as const,
  },
  {
    label: "LOANS DISBURSED",
    value: "₦50M+",
    icon: Banknote,
    variant: "light" as const,
  },
];

const trustBadges = [
  { icon: Shield, label: "100% Secure" },
  { icon: Zap, label: "Quick Disbursement" },
  { icon: Ban, label: "No Hidden Fees" },
];

const TrustSection = () => {
  return (
    <section className="py-14 md:py-20 bg-muted/40">
      <div className="container mx-auto max-w-6xl px-4">
        <p className="text-center text-sm text-muted-foreground mb-8 font-medium">
          Trusted by Nigerians
        </p>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            if (stat.variant === "primary") {
              return (
                <div key={stat.label} className="bg-primary rounded-xl p-5 text-primary-foreground">
                  <div className="flex items-center gap-2 text-primary-foreground/80 text-xs mb-2">
                    <Icon className="h-4 w-4" />
                    <span>{stat.label}</span>
                  </div>
                  <p className="text-2xl md:text-3xl font-bold">
                    {stat.value}
                    {stat.valueSuffix && <span className="text-sm font-normal">{stat.valueSuffix}</span>}
                  </p>
                </div>
              );
            }
            return (
              <div key={stat.label} className="bg-card rounded-xl p-5 border">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-2">
                  <Icon className="h-4 w-4" />
                  <span>{stat.label}</span>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground">
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.label} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-primary" />
                <span>{badge.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
