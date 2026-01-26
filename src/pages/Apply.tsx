import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Phone, Mail, MapPin } from "lucide-react";

const Apply = () => {
  const forms = [
    {
      title: "Customer Loan Application Form",
      description: "Main application form (Applicant, Employment, Next of Kin, Loan Details)",
      href: "/forms/Customer_Loan_Application_Form.pdf",
    },
    {
      title: "Credit Bureau Consent Form",
      description: "Consent/authorization to disclose and obtain credit information",
      href: "/forms/Credit_Bureau_Consent_Form.pdf",
    },
    {
      title: "Loan Agreement Form",
      description: "Loan terms, interest (monthly), management fee and repayment agreement",
      href: "/forms/Loan_Agreement_Form.pdf",
    },
    {
      title: "Loan Guarantor Form",
      description: "Guarantor’s details and undertaking",
      href: "/forms/Loan_Guarantor_Form.pdf",
    },
  ] as const;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Download Application Form
            </h1>
            <p className="text-muted-foreground">
              Download and print the loan application form. Fill it out and submit it to our office along with the required documents.
            </p>
          </div>

          <Card className="shadow-loan-card">
            <CardHeader className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">LGCRED Loan Forms</CardTitle>
              <p className="text-muted-foreground text-sm mt-2">
                Download, print, and fill the required forms for your loan type.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {forms.map((form) => (
                <div
                  key={form.href}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 rounded-xl border bg-background"
                >
                  <div className="space-y-1">
                    <p className="font-semibold text-foreground">{form.title}</p>
                    <p className="text-sm text-muted-foreground">{form.description}</p>
                  </div>
                  <Button asChild className="bg-gradient-primary hover:bg-loan-primary-dark text-white">
                    <a href={form.href} download>
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </a>
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Instructions */}
          <Card className="mt-8 shadow-loan-card">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>How to Apply</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Download Form</h3>
                  <p className="text-sm text-muted-foreground">
                    Click the download button above to get the PDF form
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Print & Fill</h3>
                  <p className="text-sm text-muted-foreground">
                    Print the form and fill in all required information
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Submit</h3>
                  <p className="text-sm text-muted-foreground">
                    Bring your completed form and documents to our office
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="mt-8 shadow-loan-card">
            <CardHeader>
              <CardTitle className="text-center">Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm">
                <a href="tel:+234XXXXXXXXXX" className="flex items-center gap-2 text-primary hover:underline">
                  <Phone className="h-4 w-4" />
                  Contact Us
                </a>
                <a href="mailto:support@lgcrednigltd.com" className="flex items-center gap-2 text-primary hover:underline">
                  <Mail className="h-4 w-4" />
                  support@lgcrednigltd.com
                </a>
                <span className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  Visit our office
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apply;
