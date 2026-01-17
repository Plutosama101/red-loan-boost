import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Phone, Mail, MapPin, Loader2 } from "lucide-react";
import html2pdf from "html2pdf.js";
import lgcredLogo from "@/assets/lgcred-logo.jpg";

const Apply = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    
    try {
      // Convert logo to base64
      const logoBase64 = await getBase64FromUrl(lgcredLogo);
      
      const formContent = generateFormHTML(logoBase64);
      
      // Create a temporary container
      const container = document.createElement('div');
      container.innerHTML = formContent;
      container.style.width = '210mm';
      container.style.background = 'white';
      document.body.appendChild(container);
      
      // Wait for images to load
      const images = container.querySelectorAll('img');
      await Promise.all(
        Array.from(images).map(
          (img) =>
            new Promise<void>((resolve) => {
              if (img.complete) {
                resolve();
              } else {
                img.onload = () => resolve();
                img.onerror = () => resolve();
              }
            })
        )
      );
      
      // Small delay to ensure rendering
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const opt = {
        margin: [10, 10, 10, 10] as [number, number, number, number],
        filename: 'LGCRED-Loan-Application-Form.pdf',
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: { 
          scale: 2, 
          useCORS: true,
          logging: false,
          allowTaint: true,
          backgroundColor: '#ffffff'
        },
        jsPDF: { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const },
        pagebreak: { mode: ['css', 'legacy'] as const, before: '.page-break' }
      };
      
      await html2pdf().set(opt).from(container).save();
      
      // Clean up
      document.body.removeChild(container);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const getBase64FromUrl = (url: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          resolve(canvas.toDataURL('image/jpeg'));
        } else {
          reject(new Error('Could not get canvas context'));
        }
      };
      img.onerror = reject;
      img.src = url;
    });
  };

  const generateFormHTML = (logoBase64: string) => {
    return `
<div style="font-family: 'Times New Roman', Times, serif; max-width: 100%; line-height: 1.4; color: #000; font-size: 11px;">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    .page {
      padding: 15px 20px;
      min-height: 270mm;
    }
    .page-break {
      page-break-before: always;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 15px;
    }
    .logo-img {
      width: 80px;
      height: auto;
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
      width: 70px;
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 9px;
      text-align: center;
    }
    .form-title {
      text-align: center;
      font-weight: bold;
      font-size: 13px;
      margin: 12px 0 5px 0;
    }
    .section-title {
      font-weight: bold;
      text-align: center;
      font-size: 10px;
      margin: 8px 0 6px 0;
      text-decoration: underline;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 8px;
    }
    td {
      border: 1px solid #000;
      padding: 3px 5px;
      vertical-align: top;
      font-size: 9px;
    }
    td.label {
      background: #f5f5f5;
      font-weight: normal;
      width: 18%;
    }
    .underline-field {
      border-bottom: 1px solid #000;
      min-width: 100px;
      display: inline-block;
      margin: 0 3px;
    }
    .signature-line {
      border-bottom: 1px solid #000;
      width: 200px;
      display: inline-block;
      margin-top: 20px;
    }
    .checkbox {
      display: inline-block;
      width: 10px;
      height: 10px;
      border: 1px solid #000;
      margin-right: 3px;
      vertical-align: middle;
    }
    .page-number {
      text-align: center;
      margin-top: 15px;
      font-size: 9px;
    }
    .consent-header {
      text-align: center;
      margin-bottom: 15px;
    }
    .consent-title {
      font-weight: bold;
      text-decoration: underline;
      font-size: 11px;
      margin-top: 15px;
    }
    .consent-text {
      text-align: justify;
      margin: 12px 0;
      font-size: 10px;
      line-height: 1.5;
    }
    .agreement-section {
      margin: 10px 0;
    }
    .agreement-section h4 {
      font-weight: bold;
      font-size: 10px;
      margin-bottom: 5px;
    }
    .agreement-text {
      text-align: justify;
      font-size: 10px;
      line-height: 1.4;
      margin-bottom: 8px;
    }
    .guarantor-table td {
      height: 22px;
    }
    .undertaking {
      margin-top: 12px;
    }
    .undertaking ol {
      margin-left: 18px;
      font-size: 10px;
      line-height: 1.5;
    }
    .version-footer {
      text-align: center;
      margin-top: 25px;
      font-size: 9px;
    }
    .logo-section {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  </style>

  <!-- PAGE 1: Consumer Loan Application Form -->
  <div class="page">
    <div class="header">
      <div class="logo-section">
        <img src="${logoBase64}" class="logo-img" alt="LGCRED Logo" />
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

    <div style="margin-top: 15px;">
      <p style="margin-bottom: 15px; font-size: 10px;">
        I hereby Authorize <strong>LGcred Services Limited</strong> to verify the information provided on this form as to my credit and employment history.
      </p>
      <p style="font-size: 10px;">
        <strong>SIGNATURE OF APPLICANT(FOR MANDATE PURPOSES):</strong> <span class="signature-line"></span> &nbsp;&nbsp; <strong>Date:</strong> <span class="underline-field" style="min-width: 80px;"></span>
      </p>
      <p style="margin-top: 15px; font-size: 10px;"><strong>AUTHORIZATION</strong></p>
      <p style="margin-top: 8px; font-size: 10px;">Chairman Local Government/Chief of Staff <span class="signature-line"></span></p>
    </div>

    <div class="page-number">1</div>
  </div>

  <!-- PAGE 2: Consent/Authorization Form -->
  <div class="page page-break">
    <div class="consent-header">
      <img src="${logoBase64}" style="width: 70px; height: auto;" alt="LGCRED Logo" />
      <div style="font-size: 10px; margin-top: 5px;">LGCRED NIGERIA LIMITED</div>
    </div>

    <div class="consent-title">CONSENT/AUTHORIZATION TO DISCLOSE & OBTAIN INFORMATION</div>

    <div class="consent-text">
      I/We (the undersigned) hereby acknowledge that <strong>LGcred Services Limited</strong>. (LGCRED) consults with various credit bureaus about their clients and may be required to disclose my/our information to these credit bureaus.
    </div>

    <div class="consent-text">
      I/We hereby irrevocably and unconditionally grant my/our consent and expressly authorize LGCRED to make such disclosure of any or all information on my/our account(s)/transaction(s) with LGCRED as and when LGCRED may deem necessary, to such credit bureau. I/We hereby grant my/our consent for an applicable credit check fee of N<span class="underline-field" style="min-width: 100px;"></span>(<span class="underline-field" style="min-width: 150px;"></span>) which should be debited from my account with the Lender.
    </div>

    <div class="consent-text">
      <em>I/we herein discharge LGCRED from all liabilities, claims and damages for such disclosure made by LGCRED to any credit bureau pursuant to the consent/authorization herein granted.</em>
    </div>

    <div class="consent-text">
      I/we hereby execute this document as follows:
    </div>

    <div style="margin-top: 25px;">
      <p style="font-size: 10px;"><strong>Name:</strong></p>
      <p style="border-bottom: 1px dotted #000; height: 25px; margin: 8px 0;"></p>
    </div>

    <div style="margin-top: 15px;">
      <p style="font-size: 10px;"><strong>Address:</strong></p>
      <p style="border-bottom: 1px dotted #000; height: 25px; margin: 8px 0;"></p>
      <p style="border-bottom: 1px dotted #000; height: 25px; margin: 8px 0;"></p>
    </div>

    <div style="display: flex; justify-content: space-between; margin-top: 50px;">
      <div>
        <p style="font-size: 10px;"><strong>Signature:</strong> <span style="border-bottom: 1px dotted #000; display: inline-block; width: 180px;"></span></p>
      </div>
      <div>
        <p style="font-size: 10px;"><strong>Date:</strong> <span style="border-bottom: 1px dotted #000; display: inline-block; width: 130px;"></span></p>
      </div>
    </div>

    <div class="version-footer">
      LGCRED NIGERIA LIMITED BUREAU CONSENT FORM - Version I/Nov. 21 CF15
    </div>
  </div>

  <!-- PAGE 3: Loan Agreement Form (Part 1) -->
  <div class="page page-break">
    <div class="logo-section" style="margin-bottom: 8px;">
      <img src="${logoBase64}" style="width: 60px; height: auto;" alt="LGCRED Logo" />
      <div style="font-size: 9px; margin-left: 8px;">LGCRED NIGERIA LIMITED</div>
    </div>

    <div class="form-title">LOAN AGREEMENT FORM</div>

    <div class="agreement-text" style="margin-top: 15px;">
      This AGREEMENT is executed as of this<span class="underline-field" style="min-width: 35px;"></span>day of<span class="underline-field" style="min-width: 70px;"></span>,20<span class="underline-field" style="min-width: 25px;"></span>,
    </div>

    <div class="agreement-text">by and between</div>

    <div class="agreement-text">
      The Company, <strong>LGCRED Nigeria Limited</strong>, located at 1st Floor, Ogudu City Mall, No.175, Ogudu Road, Ogudu, Lagos.
    </div>

    <div class="agreement-text">and</div>

    <div class="agreement-text">
      The Client, <span class="underline-field" style="min-width: 180px;"></span> (Client's Full Name), located at <span class="underline-field" style="min-width: 180px;"></span>
      (Client's Complete Address).
    </div>

    <div class="agreement-text" style="margin-top: 12px;">
      <strong>IN CONSIDERATION THEREOF</strong>, the undersigned Parties agree as follows:
    </div>

    <div class="agreement-section">
      <h4>I. LOAN AMOUNT</h4>
      <div class="agreement-text">
        The Company agrees to loan Client the principal sum of N<span class="underline-field" style="min-width: 130px;"></span> in accordance with the terms and conditions set forth in this Loan Agreement below.
      </div>
    </div>

    <div class="agreement-section">
      <h4>II. INTEREST</h4>
      <div class="agreement-text">
        The Client agrees to repay the Loan Amount at an interest rate of <span class="underline-field" style="min-width: 40px;"></span>% every month.
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
      <div class="agreement-text" style="margin-left: 15px;">
        <p><span class="checkbox"></span> <strong>Monthly Payments</strong>: The Client agrees to repay the Company a sum of N<span class="underline-field" style="min-width: 80px;"></span> on the <span class="underline-field" style="min-width: 40px;"></span> of each month until the Due Date.</p>
        <p style="margin-top: 8px;"><span class="checkbox"></span> <strong>Lump Sum</strong>: The Client agrees to repay the Company, in full, on the Due Date.</p>
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
  <div class="page page-break">
    <div class="logo-section" style="margin-bottom: 15px;">
      <img src="${logoBase64}" style="width: 60px; height: auto;" alt="LGCRED Logo" />
      <div style="font-size: 9px; margin-left: 8px;">LGCRED NIGERIA LIMITED</div>
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
        <strong>VII. TERM:</strong> The total amount of the Borrowed Money, including principal, interest and any accrued charges shall be due and payable on <span class="underline-field" style="min-width: 90px;"></span>, 20<span class="underline-field" style="min-width: 25px;"></span>.
      </div>
    </div>

    <div style="margin-top: 40px;">
      <p style="font-size: 10px;"><strong>The Client:</strong></p>
      <p style="margin-top: 12px; font-size: 10px;">Name: <span style="border-bottom: 1px solid #000; display: inline-block; width: 280px;"></span></p>
      <p style="margin-top: 15px; font-size: 10px;">Signature: <span style="border-bottom: 1px solid #000; display: inline-block; width: 260px;"></span></p>
      <p style="margin-top: 15px; font-size: 10px;">Date: <span style="border-bottom: 1px solid #000; display: inline-block; width: 280px;"></span></p>
    </div>

    <div style="margin-top: 35px;">
      <p style="font-size: 10px;"><strong>The Company; LGCRED NIGERIA LIMITED:</strong></p>
      <p style="margin-top: 12px; font-size: 10px;">Name: <span style="border-bottom: 1px solid #000; display: inline-block; width: 280px;"></span></p>
      <p style="margin-top: 15px; font-size: 10px;">Title: <span style="border-bottom: 1px solid #000; display: inline-block; width: 280px;"></span></p>
      <p style="margin-top: 15px; font-size: 10px;">Signature: <span style="border-bottom: 1px solid #000; display: inline-block; width: 260px;"></span></p>
      <p style="margin-top: 15px; font-size: 10px;">Date: <span style="border-bottom: 1px solid #000; display: inline-block; width: 280px;"></span></p>
    </div>
  </div>

  <!-- PAGE 5: Loan Guarantor Form -->
  <div class="page page-break">
    <div class="logo-section" style="margin-bottom: 8px;">
      <img src="${logoBase64}" style="width: 60px; height: auto;" alt="LGCRED Logo" />
      <div style="font-size: 9px; margin-left: 8px;">LGCRED NIGERIA LIMITED</div>
    </div>

    <div class="form-title">LOAN GUARANTOR FORM</div>
    <div style="text-align: center; font-size: 9px; margin-bottom: 12px;">LGCRED Nigeria Limited</div>

    <p style="font-weight: bold; margin-bottom: 8px; font-size: 10px;">Loan Applicant's Details</p>

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

    <p style="font-weight: bold; margin: 12px 0 8px 0; font-size: 10px;">Guarantor's Details</p>

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
      <p style="font-weight: bold; text-decoration: underline; margin-bottom: 8px; font-size: 10px;">Undertaking</p>
      <ol>
        <li>I hereby confirm that I stand as a Guarantor in respect of the loan application of the above named person.</li>
        <li style="margin-top: 8px;">As a Guarantor, I shall take reasonable measures to ensure that the Client repays the loan in accordance with the terms of offer and to cooperate with <strong>LGCred Nigeria Limited</strong> in collecting any installment due for repayment together with any interest and penalties accrued under the terms of the loan Agreement.</li>
      </ol>
    </div>

    <div style="display: flex; justify-content: space-between; margin-top: 40px;">
      <div>
        <p style="border-top: 1px solid #000; padding-top: 5px; width: 220px; font-size: 10px;"><em>Guarantor's Signature & Date</em></p>
      </div>
      <div>
        <p style="border-top: 1px solid #000; padding-top: 5px; width: 180px; text-align: center; font-size: 10px;">Managing Director</p>
      </div>
    </div>
  </div>
</div>
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
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    Generating PDF...
                  </>
                ) : (
                  <>
                    <Download className="h-5 w-5 mr-2" />
                    Download Application Form (PDF)
                  </>
                )}
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
