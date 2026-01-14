import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Briefcase, User, FileCheck, Download, FileText, Phone, Mail, MapPin } from "lucide-react";

const loanTypes = [
  {
    id: "local_government",
    title: "Local Government Loan",
    description: "Application form for local government employees",
    icon: Building2,
    filename: "LGCRED_Local_Government_Loan_Application.pdf"
  },
  {
    id: "sme",
    title: "SME Loan",
    description: "Application form for small and medium enterprises",
    icon: Briefcase,
    filename: "LGCRED_SME_Loan_Application.pdf"
  },
  {
    id: "individual",
    title: "Individual Loan",
    description: "Personal loan application form",
    icon: User,
    filename: "LGCRED_Individual_Loan_Application.pdf"
  },
  {
    id: "proof_of_funds",
    title: "Proof of Funds",
    description: "Application form for proof of funds documentation",
    icon: FileCheck,
    filename: "LGCRED_Proof_of_Funds_Application.pdf"
  }
];

const Apply = () => {
  const handleDownload = (loanType: typeof loanTypes[0]) => {
    // Create a printable HTML form that opens in a new tab
    const formContent = generateFormHTML(loanType);
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(formContent);
      newWindow.document.close();
    }
  };

  const generateFormHTML = (loanType: typeof loanTypes[0]) => {
    const additionalFields = getAdditionalFields(loanType.id);
    
    return `
<!DOCTYPE html>
<html>
<head>
  <title>LGCRED - ${loanType.title} Application Form</title>
  <style>
    @media print {
      body { margin: 0; padding: 20px; }
      .no-print { display: none !important; }
    }
    * { box-sizing: border-box; }
    body {
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 40px 20px;
      line-height: 1.6;
      color: #333;
    }
    .header {
      text-align: center;
      border-bottom: 3px solid #1a5f2a;
      padding-bottom: 20px;
      margin-bottom: 30px;
    }
    .header h1 {
      color: #1a5f2a;
      margin: 0 0 5px 0;
      font-size: 28px;
    }
    .header h2 {
      color: #333;
      margin: 0;
      font-size: 18px;
      font-weight: normal;
    }
    .section {
      margin-bottom: 30px;
    }
    .section-title {
      background: #1a5f2a;
      color: white;
      padding: 10px 15px;
      margin: 0 0 15px 0;
      font-size: 16px;
    }
    .form-row {
      display: flex;
      gap: 20px;
      margin-bottom: 15px;
    }
    .form-group {
      flex: 1;
    }
    .form-group.full {
      flex: 100%;
    }
    .form-group label {
      display: block;
      font-weight: bold;
      margin-bottom: 5px;
      font-size: 12px;
      color: #555;
    }
    .form-group input, .form-group textarea {
      width: 100%;
      border: 1px solid #ccc;
      border-bottom: 2px solid #333;
      padding: 8px;
      font-size: 14px;
      background: #fafafa;
    }
    .form-group textarea {
      height: 60px;
      resize: none;
    }
    .checkbox-group {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }
    .checkbox-item {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .checkbox-item input[type="checkbox"] {
      width: 18px;
      height: 18px;
    }
    .signature-section {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #ccc;
    }
    .signature-line {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
    }
    .signature-box {
      width: 45%;
    }
    .signature-box .line {
      border-bottom: 1px solid #333;
      height: 40px;
      margin-bottom: 5px;
    }
    .signature-box label {
      font-size: 12px;
      color: #555;
    }
    .print-btn {
      position: fixed;
      top: 20px;
      right: 20px;
      background: #1a5f2a;
      color: white;
      border: none;
      padding: 12px 24px;
      font-size: 16px;
      cursor: pointer;
      border-radius: 5px;
    }
    .print-btn:hover {
      background: #145224;
    }
    .footer-note {
      margin-top: 30px;
      padding: 15px;
      background: #f5f5f5;
      border-left: 4px solid #1a5f2a;
      font-size: 12px;
    }
    .office-info {
      text-align: center;
      margin-top: 20px;
      padding: 15px;
      background: #f9f9f9;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <button class="print-btn no-print" onclick="window.print()">🖨️ Print Form</button>
  
  <div class="header">
    <h1>LGCRED</h1>
    <h2>${loanType.title} Application Form</h2>
  </div>

  <div class="section">
    <h3 class="section-title">SECTION A: PERSONAL INFORMATION</h3>
    <div class="form-row">
      <div class="form-group">
        <label>Full Name (As on ID)</label>
        <input type="text" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Date of Birth</label>
        <input type="text" placeholder="DD/MM/YYYY" />
      </div>
      <div class="form-group">
        <label>Gender</label>
        <div class="checkbox-group" style="margin-top: 5px;">
          <label class="checkbox-item"><input type="checkbox" /> Male</label>
          <label class="checkbox-item"><input type="checkbox" /> Female</label>
        </div>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Phone Number</label>
        <input type="text" />
      </div>
      <div class="form-group">
        <label>Email Address</label>
        <input type="text" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group full">
        <label>Residential Address</label>
        <textarea></textarea>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>State</label>
        <input type="text" />
      </div>
      <div class="form-group">
        <label>Local Government Area (LGA)</label>
        <input type="text" />
      </div>
    </div>
  </div>

  <div class="section">
    <h3 class="section-title">SECTION B: LOAN DETAILS</h3>
    <div class="form-row">
      <div class="form-group">
        <label>Loan Amount Requested (₦)</label>
        <input type="text" />
      </div>
      <div class="form-group">
        <label>Repayment Period (Months)</label>
        <input type="text" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group full">
        <label>Purpose of Loan</label>
        <textarea></textarea>
      </div>
    </div>
  </div>

  ${additionalFields}

  <div class="section">
    <h3 class="section-title">SECTION ${loanType.id === 'proof_of_funds' ? 'D' : loanType.id === 'sme' ? 'D' : 'D'}: BANK DETAILS</h3>
    <div class="form-row">
      <div class="form-group">
        <label>Bank Name</label>
        <input type="text" />
      </div>
      <div class="form-group">
        <label>Account Number</label>
        <input type="text" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Account Name</label>
        <input type="text" />
      </div>
      <div class="form-group">
        <label>BVN</label>
        <input type="text" />
      </div>
    </div>
  </div>

  <div class="section">
    <h3 class="section-title">SECTION E: GUARANTOR INFORMATION</h3>
    <div class="form-row">
      <div class="form-group">
        <label>Guarantor Full Name</label>
        <input type="text" />
      </div>
      <div class="form-group">
        <label>Relationship to Applicant</label>
        <input type="text" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Guarantor Phone Number</label>
        <input type="text" />
      </div>
      <div class="form-group">
        <label>Guarantor Occupation</label>
        <input type="text" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group full">
        <label>Guarantor Address</label>
        <textarea></textarea>
      </div>
    </div>
  </div>

  <div class="section signature-section">
    <h3 class="section-title">DECLARATION</h3>
    <p style="font-size: 13px;">
      I hereby declare that all information provided in this application is true and correct to the best of my knowledge. 
      I understand that any false information may lead to the rejection of my application or termination of the loan agreement.
      I authorize LGCRED to verify all information provided and to obtain credit reports where necessary.
    </p>
    <div class="signature-line">
      <div class="signature-box">
        <div class="line"></div>
        <label>Applicant's Signature</label>
      </div>
      <div class="signature-box">
        <div class="line"></div>
        <label>Date</label>
      </div>
    </div>
    <div class="signature-line" style="margin-top: 30px;">
      <div class="signature-box">
        <div class="line"></div>
        <label>Guarantor's Signature</label>
      </div>
      <div class="signature-box">
        <div class="line"></div>
        <label>Date</label>
      </div>
    </div>
  </div>

  <div class="footer-note">
    <strong>Important:</strong> Please attach the following documents:
    <ul style="margin: 10px 0 0 20px; padding: 0;">
      <li>Valid means of identification (National ID, Passport, or Driver's License)</li>
      <li>Recent passport photograph</li>
      <li>Bank statement (minimum 6 months)</li>
      <li>Proof of income or employment letter</li>
      ${loanType.id === 'sme' ? '<li>CAC Certificate</li>' : ''}
      ${loanType.id === 'local_government' ? '<li>Letter from LG Chairman</li><li>Post-dated cheques</li>' : ''}
      ${loanType.id === 'proof_of_funds' ? '<li>International passport data page</li><li>Travel itinerary or visa appointment letter</li>' : ''}
    </ul>
  </div>

  <div class="office-info">
    <strong>Submit completed form to:</strong><br>
    LGCRED Office<br>
    📧 info@lgcred.com | 📞 Contact our office for location details
  </div>
</body>
</html>
    `;
  };

  const getAdditionalFields = (loanTypeId: string) => {
    switch (loanTypeId) {
      case 'local_government':
      case 'individual':
        return `
  <div class="section">
    <h3 class="section-title">SECTION C: EMPLOYMENT INFORMATION</h3>
    <div class="form-row">
      <div class="form-group">
        <label>Employment Status</label>
        <div class="checkbox-group" style="margin-top: 5px;">
          <label class="checkbox-item"><input type="checkbox" /> Employed</label>
          <label class="checkbox-item"><input type="checkbox" /> Self-Employed</label>
          <label class="checkbox-item"><input type="checkbox" /> Civil Servant</label>
        </div>
      </div>
      <div class="form-group">
        <label>Monthly Income (₦)</label>
        <input type="text" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Employer/Organization Name</label>
        <input type="text" />
      </div>
      <div class="form-group">
        <label>Position/Job Title</label>
        <input type="text" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group full">
        <label>Employer Address</label>
        <textarea></textarea>
      </div>
    </div>
  </div>
        `;
      case 'sme':
        return `
  <div class="section">
    <h3 class="section-title">SECTION C: BUSINESS INFORMATION</h3>
    <div class="form-row">
      <div class="form-group">
        <label>Business Name</label>
        <input type="text" />
      </div>
      <div class="form-group">
        <label>CAC Registration Number</label>
        <input type="text" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Business Type</label>
        <input type="text" />
      </div>
      <div class="form-group">
        <label>Monthly Revenue (₦)</label>
        <input type="text" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group full">
        <label>Business Address</label>
        <textarea></textarea>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Years in Business</label>
        <input type="text" />
      </div>
      <div class="form-group">
        <label>Number of Employees</label>
        <input type="text" />
      </div>
    </div>
  </div>
        `;
      case 'proof_of_funds':
        return `
  <div class="section">
    <h3 class="section-title">SECTION C: TRAVEL INFORMATION</h3>
    <div class="form-row">
      <div class="form-group">
        <label>International Passport Number</label>
        <input type="text" />
      </div>
      <div class="form-group">
        <label>Passport Expiry Date</label>
        <input type="text" placeholder="DD/MM/YYYY" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Travel Destination (Country)</label>
        <input type="text" />
      </div>
      <div class="form-group">
        <label>Purpose of Travel</label>
        <input type="text" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Intended Travel Date</label>
        <input type="text" placeholder="DD/MM/YYYY" />
      </div>
      <div class="form-group">
        <label>Duration of Stay</label>
        <input type="text" />
      </div>
    </div>
  </div>
        `;
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Download Application Forms
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Download and print the application form for your preferred loan type. 
              Fill it out and submit it to our office along with the required documents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {loanTypes.map((loan) => {
              const Icon = loan.icon;
              return (
                <Card key={loan.id} className="shadow-loan-card hover:shadow-loan transition-all">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{loan.title}</CardTitle>
                        <CardDescription>{loan.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      className="w-full bg-gradient-primary hover:bg-loan-primary-dark text-white"
                      onClick={() => handleDownload(loan)}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Form
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Instructions */}
          <Card className="mt-12 shadow-loan-card">
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
                    Click the download button for your preferred loan type
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
                    Submit the form with required documents to our office
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="mt-6 shadow-loan-card bg-gradient-primary text-white">
            <CardContent className="py-8">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold">Need Help?</h3>
                <p className="opacity-90">Contact us for assistance with your application</p>
                <div className="flex flex-wrap justify-center gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    <span>Contact our office</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    <span>info@lgcred.com</span>
                  </div>
                </div>
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
