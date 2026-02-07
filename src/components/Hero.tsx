import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const loanCards = [
  { amount: "₦50K", rotation: "-12deg", top: "10%", left: "5%", delay: "0s" },
  { amount: "₦250K", rotation: "-4deg", top: "0%", left: "20%", delay: "0.1s" },
  { amount: "₦500K", rotation: "4deg", top: "5%", left: "38%", delay: "0.2s" },
  { amount: "₦1M+", rotation: "10deg", top: "15%", left: "55%", delay: "0.3s" },
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, hsl(350 60% 96%), hsl(0 0% 100%), hsl(350 40% 97% / 0.3))' }}>
      {/* Geometric decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-primary/8 rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-20 h-20 bg-primary/15 rounded-full pointer-events-none hidden md:block" />
      <div className="absolute top-20 left-10 w-12 h-12 bg-primary/10 rounded-full pointer-events-none hidden md:block" />
      <div className="absolute bottom-20 right-1/4 w-16 h-16 border-2 border-primary/15 rounded-full pointer-events-none hidden md:block" />

      <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Text content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5">
              Get the Loan You Need,{" "}
              <span className="text-primary">Fast.</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
              Simple application. Quick approval. Real results for everyday Nigerians.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground py-6 px-10 rounded-full text-base font-semibold"
                onClick={() => navigate('/apply')}
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="py-6 px-8 rounded-full text-base"
                onClick={() => navigate('/calculator')}
              >
                Calculate Repayment
              </Button>
            </div>
          </div>

          {/* Right: Loan cards illustration */}
          <div className="relative h-72 md:h-96 hidden md:block">
            {loanCards.map((card) => (
              <div
                key={card.amount}
                className="absolute w-36 bg-card rounded-2xl border shadow-lg p-5 transition-transform duration-300 hover:scale-105"
                style={{
                  top: card.top,
                  left: card.left,
                  transform: `rotate(${card.rotation})`,
                }}
              >
                <div className="text-xs text-muted-foreground mb-1 font-medium">LOAN</div>
                <div className="text-2xl font-bold text-foreground">{card.amount}</div>
                <div className="mt-3 w-full h-1.5 bg-primary/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "65%" }} />
                </div>
              </div>
            ))}

            {/* Naira symbol decorations */}
            <span className="absolute bottom-8 left-12 text-4xl font-bold text-primary/15 pointer-events-none">₦</span>
            <span className="absolute top-4 right-8 text-3xl font-bold text-primary/10 pointer-events-none">₦</span>
            <span className="absolute bottom-24 right-20 text-2xl font-bold text-primary/10 pointer-events-none">%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
