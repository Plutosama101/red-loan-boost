import { ArrowRight, Building2, Briefcase, User, FileCheck } from "lucide-react";
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
      description: "Exclusive loan products for local government employees with competitive rates and flexible terms.",
      icon: Building2,
      image: localGovImg,
      path: "/local-government-loan",
      highlight: "Up to ₦3M",
    },
    {
      title: "SME Business Loans",
      description: "Take your business to the next level with our SME financing solutions.",
      icon: Briefcase,
      image: smeImg,
      path: "/sme-loan",
      highlight: "Up to ₦5M",
    },
    {
      title: "Individual Loans",
      description: "Personal loans for life's important moments - weddings, education, emergencies.",
      icon: User,
      image: individualImg,
      path: "/individual-loan",
      highlight: "Quick Approval",
    },
    {
      title: "Proof of Funds",
      description: "Legitimate proof of funds for visa applications and travel documentation.",
      icon: FileCheck,
      image: proofOfFundsImg,
      path: "/proof-of-funds-loan",
      highlight: "Same Day",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.path}
              className="group bg-card rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => navigate(product.path)}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {product.highlight}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <product.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground">{product.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>
                <button className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                  Learn More
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
