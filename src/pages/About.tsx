import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, TrendingUp, Award, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-loan-gray py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">
              About <span className="text-primary">LGCRED</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              LGCRED Nigeria Limited is a leading financial services provider committed to empowering 
              individuals and businesses across Nigeria with fast, secure, and accessible lending solutions. 
              We believe in creating financial freedom through transparent and customer-focused services.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Card className="shadow-loan-card">
              <CardContent className="p-6 md:p-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide fast, reliable, and accessible financial solutions that empower Nigerians 
                  to achieve their personal and business goals. We strive to make borrowing simple, 
                  transparent, and stress-free for every customer.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-loan-card">
              <CardContent className="p-6 md:p-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be Nigeria's most trusted and innovative lending institution, recognized for 
                  exceptional customer service, technological advancement, and our commitment to 
                  financial inclusion across all communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 px-4 bg-loan-gray">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground">Why Choose LGCRED?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with personalized service to deliver 
              the best lending experience in Nigeria.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-loan-card">
              <CardContent className="p-6 space-y-4 text-center">
                <div className="flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground">Fast Approval</h3>
                <p className="text-sm text-muted-foreground">
                  Get instant loan approval in as little as 5 minutes with our streamlined 
                  digital process. No long waits, no paperwork hassles.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-loan-card">
              <CardContent className="p-6 space-y-4 text-center">
                <div className="flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground">Secure & Safe</h3>
                <p className="text-sm text-muted-foreground">
                  Your data is protected with bank-level encryption and security protocols. 
                  We're licensed and regulated by the Central Bank of Nigeria.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-loan-card">
              <CardContent className="p-6 space-y-4 text-center">
                <div className="flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground">Transparent Terms</h3>
                <p className="text-sm text-muted-foreground">
                  No hidden fees or surprise charges. We believe in complete transparency 
                  with clear terms and competitive interest rates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground">Our Core Values</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Integrity", description: "We uphold the highest standards of honesty and ethical conduct in all our dealings." },
              { title: "Customer First", description: "Your satisfaction and financial well-being are at the heart of everything we do." },
              { title: "Innovation", description: "We continuously improve our services through technology and creative solutions." },
              { title: "Excellence", description: "We are committed to delivering exceptional service and exceeding expectations." }
            ].map((value, index) => (
              <Card key={index} className="shadow-loan-card hover:shadow-loan transition-shadow">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-primary">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-primary text-white shadow-loan-card">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Ready to Get Started?</h2>
              <p className="text-lg opacity-90">
                Join thousands of satisfied customers who trust LGCRED for their financial needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-lg px-8"
                  onClick={() => window.location.href = '/#calculator'}
                >
                  Apply for a Loan
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 bg-white/10 text-white border-white hover:bg-white hover:text-primary"
                  onClick={() => window.location.href = '/#calculator'}
                >
                  Calculate Loan
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
