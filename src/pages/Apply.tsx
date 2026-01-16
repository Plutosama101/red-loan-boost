import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Phone, Mail, MapPin } from "lucide-react";

const Apply = () => {
  const handleDownload = () => {
    const formContent = generateFormHTML();
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(formContent);
      newWindow.document.close();
    }
  };

  const generateFormHTML = () => {
    return `
<!DOCTYPE html>
<html>
<head>
  <title>LGCRED Nigeria Limited - Consumer Loan Application Form</title>
  <style>
    @media print {
      body { margin: 0; padding: 15px; }
      .no-print { display: none !important; }
      .page { page-break-after: always; }
      .page:last-child { page-break-after: auto; }
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Times New Roman', Times, serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      line-height: 1.4;
      color: #000;
      font-size: 11px;
    }
    .page {
      padding: 20px 0;
      min-height: 100vh;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 15px;
    }
    .logo-section {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .logo {
      font-size: 36px;
      font-weight: bold;
      font-style: italic;
    }
    .company-info {
      text-align: center;
      flex: 1;
    }
    .company-name {
      font-weight: bold;
      font-size: 14px;
    }
    .company-address {
      font-size: 10px;
    }
    .passport-box {
      border: 1px solid #000;
      width: 80px;
      height: 90px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 10px;
      text-align: center;
    }
    .form-title {
      text-align: center;
      font-weight: bold;
      font-size: 13px;
      margin: 15px 0 5px 0;
    }
    .section-title {
      font-weight: bold;
      text-align: center;
      font-size: 11px;
      margin: 10px 0 8px 0;
      text-decoration: underline;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 10px;
    }
    td {
      border: 1px solid #000;
      padding: 4px 6px;
      vertical-align: top;
      font-size: 10px;
    }
    td.label {
      background: #f5f5f5;
      font-weight: normal;
      width: 20%;
    }
    td.value {
      min-height: 20px;
    }
    .underline-field {
      border-bottom: 1px solid #000;
      min-width: 150px;
      display: inline-block;
      margin: 0 5px;
    }
    .signature-section {
      margin-top: 20px;
    }
    .signature-line {
      border-bottom: 1px solid #000;
      width: 250px;
      display: inline-block;
      margin-top: 30px;
    }
    .checkbox {
      display: inline-block;
      width: 12px;
      height: 12px;
      border: 1px solid #000;
      margin-right: 3px;
      vertical-align: middle;
    }
    .page-number {
      text-align: center;
      margin-top: 20px;
      font-size: 10px;
    }
    .consent-header {
      text-align: center;
      margin-bottom: 20px;
    }
    .consent-title {
      font-weight: bold;
      text-decoration: underline;
      font-size: 12px;
      margin-top: 20px;
    }
    .consent-text {
      text-align: justify;
      margin: 15px 0;
      font-size: 11px;
      line-height: 1.6;
    }
    .agreement-section {
      margin: 15px 0;
    }
    .agreement-section h4 {
      font-weight: bold;
      font-size: 11px;
      margin-bottom: 8px;
    }
    .agreement-text {
      text-align: justify;
      font-size: 11px;
      line-height: 1.5;
      margin-bottom: 10px;
    }
    .guarantor-table td {
      height: 25px;
    }
    .undertaking {
      margin-top: 15px;
    }
    .undertaking ol {
      margin-left: 20px;
      font-size: 11px;
      line-height: 1.6;
    }
    .version-footer {
      text-align: center;
      margin-top: 30px;
      font-size: 10px;
    }
    .print-btn {
      position: fixed;
      top: 20px;
      right: 20px;
      background: #1a5f2a;
      color: white;
      border: none;
      padding: 12px 24px;
      font-size: 14px;
      cursor: pointer;
      border-radius: 5px;
      z-index: 1000;
    }
    .print-btn:hover {
      background: #145224;
    }
  </style>
</head>
<body>
  <button class="print-btn no-print" onclick="window.print()">🖨️ Print Form</button>

  <!-- PAGE 1: Consumer Loan Application Form -->
  <div class="page">
    <div class="header">
      <div class="logo-section">
        <div class="logo">LG</div>
      </div>
      <div class="company-info">
        <div class="company-name">LGCRED NIGERIA LIMITED</div>
        <div class="company-address">NO 5 Ogun Street, Ogudu Ori Oke, Ogudu Lagos.</div>
      </div>
      <div class="passport-box">
        AFFIX<br>PASSPORT
      </div>
    </div>

    <div class="form-title">CONSUMER LOAN APPLICATION FORM</div>
    <div class="section-title">APPLICANT INFORMATION</div>

    <table>
      <tr>
        <td class="label">Name:</td>
        <td colspan="2">Surname</td>
        <td colspan="2">First Name</td>
        <td>Other Name</td>
      </tr>
      <tr>
        <td class="label">Date of Birth:</td>
        <td></td>
        <td class="label">Gender:</td>
        <td></td>
        <td class="label">Phone No:</td>
        <td></td>
      </tr>
      <tr>
        <td class="label">Home Address:</td>
        <td colspan="5"></td>
      </tr>
      <tr>
        <td class="label">Mobile Telephone No:</td>
        <td></td>
        <td class="label">Means of Identification:</td>
        <td></td>
        <td class="label">Marital Status:</td>
        <td></td>
      </tr>
      <tr>
        <td class="label">Nationality:</td>
        <td></td>
        <td class="label">State Of Origin:</td>
        <td></td>
        <td class="label">Local Govt. Area:</td>
        <td></td>
      </tr>
      <tr>
        <td class="label">Personal E-mail Address:</td>
        <td colspan="3"></td>
        <td class="label">BVN:</td>
        <td></td>
      </tr>
      <tr>
        <td class="label">Occupation:</td>
        <td colspan="2"></td>
        <td class="label">Mother's Maiden Name:</td>
        <td colspan="2"></td>
      </tr>
    </table>

    <div class="section-title">EMPLOYMENT INFORMATION</div>

    <table>
      <tr>
        <td class="label">Employer's Name:</td>
        <td colspan="5"></td>
      </tr>
      <tr>
        <td class="label">Employer's Address:</td>
        <td colspan="3"></td>
        <td class="label">Length of Service:</td>
        <td></td>
      </tr>
      <tr>
        <td class="label">Phone No:</td>
        <td></td>
        <td class="label">Staff ID Number:</td>
        <td></td>
        <td class="label">Tax ID Number:</td>
        <td></td>
      </tr>
      <tr>
        <td class="label">Date of Employment:</td>
        <td></td>
        <td class="label">Date of Confirmation:</td>
        <td></td>
        <td class="label">Department:</td>
        <td></td>
      </tr>
      <tr>
        <td class="label">Grade/Level:</td>
        <td></td>
        <td class="label">Annual Income:</td>
        <td></td>
        <td class="label">Net Monthly Income:</td>
        <td></td>
      </tr>
      <tr>
        <td class="label">Official E-mail Address:</td>
        <td colspan="5"></td>
      </tr>
      <tr>
        <td class="label">Bank Name (Salary Account):</td>
        <td colspan="3"></td>
        <td colspan="2">Current Account? Yes ( &nbsp; ) No ( &nbsp; )</td>
      </tr>
      <tr>
        <td class="label">Account No:</td>
        <td colspan="2"></td>
        <td class="label">Pay Date:</td>
        <td colspan="2"></td>
      </tr>
    </table>

    <div class="section-title">NEXT OF KIN</div>

    <table>
      <tr>
        <td class="label">Name:</td>
        <td colspan="5"></td>
      </tr>
      <tr>
        <td class="label">Address:</td>
        <td colspan="3"></td>
        <td class="label">Phone No:</td>
        <td></td>
      </tr>
      <tr>
        <td class="label">Relationship:</td>
        <td colspan="5"></td>
      </tr>
    </table>

    <div class="section-title">LOAN DETAILS</div>

    <table>
      <tr>
        <td class="label">Loan Amount Requested:</td>
        <td></td>
        <td class="label">Tenor:</td>
        <td></td>
        <td class="label">Monthly Repayment:</td>
        <td></td>
      </tr>
    </table>

    <div class="section-title">OTHER LOANS, DEBTS, OR OBLIGATIONS</div>

    <table>
      <tr>
        <td style="width: 30%;">Name of Bank or Institution</td>
        <td>Principal Amount</td>
        <td>Outstanding Balance</td>
        <td>Monthly payment</td>
      </tr>
      <tr><td>&nbsp;</td><td></td><td></td><td></td></tr>
      <tr><td>&nbsp;</td><td></td><td></td><td></td></tr>
    </table>

    <div class="signature-section">
      <p style="margin-bottom: 20px;">
        I hereby Authorize <strong>LGcred Services Limited</strong> to verify the information provided on this form as to my credit and employment history.
      </p>
      <p>
        <strong>SIGNATURE OF APPLICANT(FOR MANDATE PURPOSES):</strong> <span class="signature-line"></span> &nbsp;&nbsp;&nbsp;&nbsp; <strong>Date:</strong> <span class="underline-field" style="min-width: 100px;"></span>
      </p>
      <p style="margin-top: 20px;"><strong>AUTHORIZATION</strong></p>
      <p style="margin-top: 10px;">Chairman Local Government/Chief of Staff <span class="signature-line"></span></p>
    </div>

    <div class="page-number">1</div>
  </div>

  <!-- PAGE 2: Consent/Authorization Form -->
  <div class="page">
    <div class="consent-header">
      <div class="logo" style="font-size: 40px;">LG</div>
      <div style="font-size: 11px;">LGCRED NIGERIA LIMITED</div>
    </div>

    <div class="consent-title">CONSENT/AUTHORIZATION TO DISCLOSE & OBTAIN INFORMATION</div>

    <div class="consent-text">
      I/We (the undersigned) hereby acknowledge that <strong>LGcred Services Limited</strong>. (LGCRED) consults with various credit bureaus about their clients and may be required to disclose my/our information to these credit bureaus.
    </div>

    <div class="consent-text">
      I/We hereby irrevocably and unconditionally grant my/our consent and expressly authorize LGCRED to make such disclosure of any or all information on my/our account(s)/transaction(s) with LGCRED as and when LGCRED may deem necessary, to such credit bureau. I/We hereby grant my/our consent for an applicable credit check fee of N<span class="underline-field" style="min-width: 120px;"></span>(<span class="underline-field" style="min-width: 200px;"></span>) which should be debited from my account with the Lender.
    </div>

    <div class="consent-text">
      <em>I/we herein discharge LGCRED from all liabilities, claims and damages for such disclosure made by LGCRED to any credit bureau pursuant to the consent/authorization herein granted.</em>
    </div>

    <div class="consent-text">
      I/we hereby execute this document as follows:
    </div>

    <div style="margin-top: 30px;">
      <p><strong>Name:</strong></p>
      <p style="border-bottom: 1px dotted #000; height: 30px; margin: 10px 0;"></p>
    </div>

    <div style="margin-top: 20px;">
      <p><strong>Address:</strong></p>
      <p style="border-bottom: 1px dotted #000; height: 30px; margin: 10px 0;"></p>
      <p style="border-bottom: 1px dotted #000; height: 30px; margin: 10px 0;"></p>
    </div>

    <div style="display: flex; justify-content: space-between; margin-top: 60px;">
      <div>
        <p><strong>Signature:</strong> <span style="border-bottom: 1px dotted #000; display: inline-block; width: 200px;"></span></p>
      </div>
      <div>
        <p><strong>Date:</strong> <span style="border-bottom: 1px dotted #000; display: inline-block; width: 150px;"></span></p>
      </div>
    </div>

    <div class="version-footer">
      LGCRED NIGERIA LIMITED BUREAU CONSENT FORM - Version I/Nov. 21 CF15
    </div>
  </div>

  <!-- PAGE 3: Loan Agreement Form (Part 1) -->
  <div class="page">
    <div class="logo-section" style="margin-bottom: 10px;">
      <div class="logo" style="font-size: 36px;">LG</div>
      <div style="font-size: 10px;">LGCRED NIGERIA LIMITED</div>
    </div>

    <div class="form-title">LOAN AGREEMENT FORM</div>

    <div class="agreement-text" style="margin-top: 20px;">
      This AGREEMENT is executed as of this<span class="underline-field" style="min-width: 40px;"></span>day of<span class="underline-field" style="min-width: 80px;"></span>,20<span class="underline-field" style="min-width: 30px;"></span>,
    </div>

    <div class="agreement-text">by and between</div>

    <div class="agreement-text">
      The Company, <strong>LGCRED Nigeria Limited</strong>, located at 1st Floor, Ogudu City Mall, No.175, Ogudu Road, Ogudu, Lagos.
    </div>

    <div class="agreement-text">and</div>

    <div class="agreement-text">
      The Client, <span class="underline-field" style="min-width: 200px;"></span> (Client's Full Name), located at <span class="underline-field" style="min-width: 200px;"></span>
      (Client's Complete Address).
    </div>

    <div class="agreement-text" style="margin-top: 15px;">
      <strong>IN CONSIDERATION THEREOF</strong>, the undersigned Parties agree as follows:
    </div>

    <div class="agreement-section">
      <h4>I. LOAN AMOUNT</h4>
      <div class="agreement-text">
        The Company agrees to loan Client the principal sum of N<span class="underline-field" style="min-width: 150px;"></span> in accordance with the terms and conditions set forth in this Loan Agreement below.
      </div>
    </div>

    <div class="agreement-section">
      <h4>II. INTEREST</h4>
      <div class="agreement-text">
        The Client agrees to repay the Loan Amount at an interest rate of <span class="underline-field" style="min-width: 50px;"></span>% every month.
      </div>
      <div class="agreement-text">
        (Total interest charged shall not exceed the maximum amount allowed by law and the Client shall not be obligated to pay any interest in excess of such amount).
      </div>
    </div>

    <div class="agreement-section">
      <h4>III. PAYMENT SCHEDULE</h4>
      <div class="agreement-text">
        The Client agrees to repay the Loan to the Company under the following payment schedule: (check one)
      </div>
      <div class="agreement-text" style="margin-left: 20px;">
        <p><span class="checkbox"></span> <strong>Monthly Payments</strong>: The Client agrees to repay the Company a sum of N<span class="underline-field" style="min-width: 100px;"></span> on the <span class="underline-field" style="min-width: 50px;"></span> of each month until the Due Date.</p>
        <p style="margin-top: 10px;"><span class="checkbox"></span> <strong>Lump Sum</strong>: The Client agrees to repay the Company, in full, on the Due Date.</p>
      </div>
    </div>

    <div class="agreement-section">
      <h4>IV. MANAGEMENT FEE</h4>
      <div class="agreement-text">
        Client agrees an acceptance clause of 1% management fee, a one-off charge, which will be deducted before disbursement.
      </div>
    </div>
  </div>

  <!-- PAGE 4: Loan Agreement Form (Part 2) -->
  <div class="page">
    <div class="logo-section" style="margin-bottom: 20px;">
      <div class="logo" style="font-size: 36px;">LG</div>
      <div style="font-size: 10px;">LGCRED NIGERIA LIMITED</div>
    </div>

    <div class="agreement-section">
      <h4>V. DIRECT DEBIT CHARGE</h4>
      <div class="agreement-text">
        An acceptance clause of 1% charge for each month debit from the client's account by Remita (or our preferred direct debit vendor).
      </div>
      <div class="agreement-text">
        (Client must duly notify the company before or during a change of salary account while servicing loan and as well update their account information with us as soon as possible to avoid delay in repayment. Otherwise, the company would assume the worst and take necessary actions).
      </div>
    </div>

    <div class="agreement-section">
      <h4>VI. DEFAULT/LATE FEE</h4>
      <div class="agreement-text">
        If client defaults on the payment(s) agreed, the Company will charge a 10% default fee on amount owed for every month the payment is late.
      </div>
    </div>

    <div class="agreement-section">
      <div class="agreement-text">
        <strong>VII. TERM:</strong> The total amount of the Borrowed Money, including principal, interest and any accrued charges shall be due and payable on <span class="underline-field" style="min-width: 100px;"></span>, 20<span class="underline-field" style="min-width: 30px;"></span>.
      </div>
    </div>

    <div style="margin-top: 50px;">
      <p><strong>The Client:</strong></p>
      <p style="margin-top: 15px;">Name: <span style="border-bottom: 1px solid #000; display: inline-block; width: 300px;"></span></p>
      <p style="margin-top: 20px;">Signature: <span style="border-bottom: 1px solid #000; display: inline-block; width: 280px;"></span></p>
      <p style="margin-top: 20px;">Date: <span style="border-bottom: 1px solid #000; display: inline-block; width: 300px;"></span></p>
    </div>

    <div style="margin-top: 40px;">
      <p><strong>The Company; LGCRED NIGERIA LIMITED:</strong></p>
      <p style="margin-top: 15px;">Name: <span style="border-bottom: 1px solid #000; display: inline-block; width: 300px;"></span></p>
      <p style="margin-top: 20px;">Title: <span style="border-bottom: 1px solid #000; display: inline-block; width: 300px;"></span></p>
      <p style="margin-top: 20px;">Signature: <span style="border-bottom: 1px solid #000; display: inline-block; width: 280px;"></span></p>
      <p style="margin-top: 20px;">Date: <span style="border-bottom: 1px solid #000; display: inline-block; width: 300px;"></span></p>
    </div>
  </div>

  <!-- PAGE 5: Loan Guarantor Form -->
  <div class="page">
    <div class="logo-section" style="margin-bottom: 10px;">
      <div class="logo" style="font-size: 36px;">LG</div>
      <div style="font-size: 10px;">LGCRED NIGERIA LIMITED</div>
    </div>

    <div class="form-title">LOAN GUARANTOR FORM</div>
    <div style="text-align: center; font-size: 10px; margin-bottom: 15px;">LGCRED Nigeria Limited</div>

    <p style="font-weight: bold; margin-bottom: 10px;">Loan Applicant's Details</p>

    <table class="guarantor-table">
      <tr>
        <td style="width: 8%;">Title</td>
        <td style="width: 25%;">Surname</td>
        <td style="width: 25%;">First Name</td>
        <td style="width: 22%;">Other Name</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>

    <table class="guarantor-table">
      <tr>
        <td style="width: 33%;">Amount Requested (N)</td>
        <td style="width: 33%;">Tenor</td>
        <td style="width: 34%;">Monthly Repayment (N)</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>

    <p style="font-weight: bold; margin: 15px 0 10px 0;">Guarantor's Details</p>

    <table class="guarantor-table">
      <tr>
        <td style="width: 8%;">Title</td>
        <td style="width: 25%;">Surname</td>
        <td style="width: 25%;">First Name</td>
        <td style="width: 22%;">Other Name</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>

    <table class="guarantor-table">
      <tr>
        <td style="width: 50%;">Relationship with Loan Applicant</td>
        <td style="width: 50%;">Means of ID</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
      </tr>
    </table>

    <table class="guarantor-table">
      <tr>
        <td style="width: 60%;">Office Address</td>
        <td style="width: 40%;">Department</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
      </tr>
    </table>

    <table class="guarantor-table">
      <tr>
        <td style="width: 70%;">Home Address</td>
        <td style="width: 30%;">City</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
      </tr>
    </table>

    <table class="guarantor-table">
      <tr>
        <td style="width: 60%;">Email</td>
        <td style="width: 40%;">Phone No.</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
      </tr>
    </table>

    <div class="undertaking">
      <p style="font-weight: bold; text-decoration: underline; margin-bottom: 10px;">Undertaking</p>
      <ol>
        <li>I hereby confirm that I stand as a Guarantor in respect of the loan application of the above named person.</li>
        <li style="margin-top: 10px;">As a Guarantor, I shall take reasonable measures to ensure that the Client repays the loan in accordance with the terms of offer and to cooperate with <strong>LGCred Nigeria Limited</strong> in collecting any installment due for repayment together with any interest and penalties accrued under the terms of the loan Agreement.</li>
      </ol>
    </div>

    <div style="display: flex; justify-content: space-between; margin-top: 50px;">
      <div>
        <p style="border-top: 1px solid #000; padding-top: 5px; width: 250px;"><em>Guarantor's Signature & Date</em></p>
      </div>
      <div>
        <p style="border-top: 1px solid #000; padding-top: 5px; width: 200px; text-align: center;">Managing Director</p>
      </div>
    </div>
  </div>

</body>
</html>
    `;
  };

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
              <CardTitle className="text-xl">LGCRED Loan Application Form</CardTitle>
              <p className="text-muted-foreground text-sm mt-2">
                This unified form covers all loan types: Local Government, SME, Individual, and Proof of Funds
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:bg-loan-primary-dark text-white px-8"
                onClick={handleDownload}
              >
                <Download className="h-5 w-5 mr-2" />
                Download Application Form
              </Button>
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
                    Click the download button above to get the form
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
                <a href="mailto:info@lgcred.com" className="flex items-center gap-2 text-primary hover:underline">
                  <Mail className="h-4 w-4" />
                  info@lgcred.com
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
