import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LoanCalculator from "@/components/LoanCalculator";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <LoanCalculator />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
