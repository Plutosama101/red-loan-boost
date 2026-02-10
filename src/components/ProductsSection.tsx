import { ArrowRight, Building2, Briefcase, User, FileCheck, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import localGovImg from "@/assets/local-government-loan.jpg";
import smeImg from "@/assets/sme-loan.jpg";
import individualImg from "@/assets/individual-loan.jpg";
import proofOfFundsImg from "@/assets/proof-of-funds-loan.jpg";

const ProductsSection = () => {
  const navigate = useNavigate();

  const products = [
    {
      title: "Local Government Loans",
      summary: "For local government employees seeking short-term funding with competitive monthly interest rates.",
      icon: Building2,
      image: localGovImg,
      path: "/loans/local-government",
      highlight: "Up to ₦1M",
      features: [
        "Up to ₦1,000,000",
        "5% monthly interest",
        "Max 6 months tenure",
        "Letter from LG Chairman",
        "Salary account required",
        "Guarantor needed"
      ]
    },
    {
      title: "SME Business Loans",
      summary: "Grow your small or medium enterprise with capital for expansion, inventory, or operations.",
      icon: Briefcase,
      image: smeImg,
      path: "/loans/sme",
      highlight: "Up to ₦12M",
      features: [
        "Up to ₦12,000,000",
        "7% monthly interest",
        "Max 12 months tenure",
        "CAC certificate required",
        "Business account (1 yr statement)",
        "Business guarantor"
      ]
    },
    {
      title: "Individual Loans",
      summary: "Personal loans for salaried employees and individuals for weddings, education, emergencies, and more.",
      icon: User,
      image: individualImg,
      path: "/loans/individual",
      highlight: "Quick Approval",
      features: [
        "Up to ₦5,000,000",
        "10% monthly interest",
        "Max 12 months tenure",
        "Valid ID required",
        "6 months bank statement",
        "Guarantor needed"
      ]
    },
    {
      title: "Proof of Funds",
      summary: "Legitimate proof of funds displayed in your account for visa applications, travel, or business verification.",
      icon: FileCheck,
      image: proofOfFundsImg,
      path: "/loans/proof-of-funds",
      highlight: "Same Day",
      features: [
        "Up to ₦50,000,000",
        "3% service fee",
        "Up to 4 weeks display",
        "Valid passport required",
        "Travel itinerary/invitation",
        "Quick processing"
      ]
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Products That Meet All Your{" "}
            <span className="text-primary">Financial Goals</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of loan products designed to help you achieve your personal and business objectives.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.path}
              className="group bg-card rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {product.highlight}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <product.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">{product.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {product.summary}
                </p>

                {/* Key Features */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => navigate(product.path)}
                  className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all"
                >
                  Calculate & Apply
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/loans')}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            View All Loan Products
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
