import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const docsDir = path.join(__dirname, 'documents');
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

// -------------------------------------------------------------
// Helper function to create standard PDF
// -------------------------------------------------------------
function buildRaccineMediaStatement() {
  const doc = new PDFDocument({ margin: 54, size: 'A4' });
  const stream = fs.createWriteStream(path.join(docsDir, 'Raccine_Media_Draft_Statement.pdf'));
  doc.pipe(stream);

  // Header / Branding
  doc.fillColor('#1A202C').fontSize(20).font('Helvetica-Bold').text('DLA PIPER', { align: 'left' });
  doc.moveDown(0.5);
  doc.strokeColor('#CBD5E1').lineWidth(1).moveTo(54, doc.y).lineTo(541, doc.y).stroke();
  doc.moveDown(1);

  // Document Title
  doc.fillColor('#0F172A').fontSize(14).font('Helvetica-Bold').text('RACCINE ANNOUNCES UPDATE ON CYBERSECURITY INCIDENT AND ONGOING CONTAINMENT EFFORTS', { align: 'center' });
  doc.moveDown(1);

  // Body Paragraphs
  doc.fillColor('#334155').fontSize(10).font('Helvetica').lineGap(4);
  doc.text('Raccine is actively responding to a criminal cyberattack that has impacted our internal systems. Upon detecting the unauthorized activity, we immediately implemented security protocols to secure our network, initiated a comprehensive investigation with external cybersecurity specialists, and successfully notified the relevant data protection authorities.');
  doc.moveDown(0.8);

  doc.text('Our ongoing forensic review has confirmed that an unauthorized third party accessed a subset of our customer database and certain proprietary design files relating to upcoming product campaigns. Raccine is currently identifying the specific individuals affected by this incident to provide them with direct notifications, dedicated support, and credit monitoring resources. Our core operational systems have been safely restored from secure backups.');
  doc.moveDown(0.8);

  doc.text('Raccine’s leadership team is fully engaged in resolving this matter responsibly, cooperating comprehensively with law enforcement, and reinforcing our digital infrastructure. Safeguarding the data and trust of our customers, partners, and employees remains our absolute, unwavering priority. We will provide further verified updates as appropriate.');
  doc.moveDown(1.5);

  // Section 2: Revision Rationale Table Title
  doc.fillColor('#0F172A').fontSize(12).font('Helvetica-Bold').text('STATEMENT REVISION & LEGAL RATIONALE MATRIX');
  doc.moveDown(0.5);

  const rows = [
    {
      original: '"...conducting an investigation with leading digital forensics experts A788..."',
      action: 'Stripped the specific vendor name; replaced with "external cybersecurity specialists."',
      rationale: 'Operational Security (OpSec): Publicly identifying your active security vendor allows threat actors to study that specific firm\'s defensive playbooks and adapt their hacking tools to bypass them.'
    },
    {
      original: '"...We have paid a large ransom to the Threat Actor Kyberit."',
      action: 'Completely deleted any mention of ransom negotiations or payments.',
      rationale: 'Mitigation of Legal Liability & Shame: Admitting to a cryptocurrency payout exposes the board to immediate criminal and civil scrutiny under international economic sanctions regimes (e.g., LockBit blocklists). Furthermore, announcing that you paid a criminal who immediately backstabbed you and leaked the data anyway projects corporate incompetence and destroys brand equity.'
    },
    {
      original: '"...including names, addresses, payment information, order history, details of returns and complaints..."',
      action: 'Generalized the disclosure to "a subset of our customer database" and pivoted to direct consumer support.',
      rationale: 'Class-Action Evidentiary Defense: Explicitly cataloging every single compromised data point in a mass media release creates widespread public panic. It also serves as a permanent, legally binding admission of specific damages that plaintiff attorneys will weaponize in court before forensic verification is finalized. Detailed data lists belong in confidential, targeted Article 34 individual notices, not public press releases.'
    },
    {
      original: '"...and that our 2025-26 campaigns relating to the Marche and Apugliano brands, and Apugliano\'s designs for the sought after Gascony handbag, have been published."',
      action: 'Softened the language to "certain proprietary design files relating to upcoming product campaigns."',
      rationale: 'Protection of Brand Exclusivity: Explicitly naming the "Gascony handbag" in a global press release amplifies the dark web leak, functionally advertising the blueprints to fast-fashion counterfeiters and copycats. It validates the threat actor\'s leverage and accelerates the dilution of the luxury brand\'s market exclusivity.'
    },
    {
      original: '"At this time, we do not believe that personal information relating to our employees has been affected."',
      action: 'Completely removed this defensive statement.',
      rationale: 'Elimination of Speculation: Speculative or absolute statements regarding what was not taken are highly dangerous during active investigations. Even though the final public dump excluded employee data, employee records were present in the earlier "proof of life" files. Claiming employees are safe is factually misleading and violates the GDPR transparency principle.'
    },
    {
      original: '[Omission of the CEO\'s actions]',
      action: 'Framed the response around institutional stability ("Raccine\'s leadership team is fully engaged").',
      rationale: 'Crisis Governance Alignment: Following the disastrous public statement and subsequent resignation of CEO Peter Gibbons, the statement must purposefully project corporate continuity, institutional control, and calm professionalism to reassure nervous shareholders and luxury retail markets.'
    }
  ];

  rows.forEach((row, i) => {
    if (doc.y > 680) doc.addPage();
    
    doc.fillColor('#1E293B').fontSize(9).font('Helvetica-Bold').text(`Item ${i + 1}: Original Text Fragment`);
    doc.fillColor('#475569').fontSize(8.5).font('Helvetica-Oblique').text(row.original);
    doc.moveDown(0.3);

    doc.fillColor('#1E293B').fontSize(9).font('Helvetica-Bold').text('Revision / Action Taken:');
    doc.fillColor('#0284C7').fontSize(8.5).font('Helvetica').text(row.action);
    doc.moveDown(0.3);

    doc.fillColor('#1E293B').fontSize(9).font('Helvetica-Bold').text('Legal & Reputational Rationale:');
    doc.fillColor('#334155').fontSize(8.5).font('Helvetica').text(row.rationale);
    doc.moveDown(0.8);
    doc.strokeColor('#E2E8F0').lineWidth(0.5).moveTo(54, doc.y).lineTo(541, doc.y).stroke();
    doc.moveDown(0.8);
  });

  doc.end();
}

function buildPrivilegedMemo() {
  const doc = new PDFDocument({ margin: 54, size: 'A4' });
  const stream = fs.createWriteStream(path.join(docsDir, 'Privileged_and_Confidential_Memo.pdf'));
  doc.pipe(stream);

  // Header
  doc.fillColor('#DC2626').fontSize(11).font('Helvetica-Bold').text('PRIVILEGED AND CONFIDENTIAL', { align: 'center' });
  doc.fillColor('#991B1B').fontSize(9).font('Helvetica-Bold').text('ATTORNEY-CLIENT PRIVILEGED DOCUMENT // LEGAL WORK PRODUCT', { align: 'center' });
  doc.moveDown(1);
  doc.strokeColor('#DC2626').lineWidth(1.5).moveTo(54, doc.y).lineTo(541, doc.y).stroke();
  doc.moveDown(1);

  // Metadata Table
  doc.fillColor('#0F172A').fontSize(10).font('Helvetica-Bold');
  doc.text('TO: ', { continued: true }).font('Helvetica').text('The Board of Directors, Raccine Conglomerate');
  doc.font('Helvetica-Bold').text('FROM: ', { continued: true }).font('Helvetica').text('Global Data, Privacy, and Cybersecurity Practice, DLA Piper');
  doc.font('Helvetica-Bold').text('DATE: ', { continued: true }).font('Helvetica').text('June 29, 2026');
  doc.font('Helvetica-Bold').text('SUBJECT: ', { continued: true }).font('Helvetica').text('Legal Advice Memorandum: Risk Assessment and Strategic Guidance on Kyberite Ransom Demand');
  doc.moveDown(1);
  doc.strokeColor('#CBD5E1').lineWidth(0.5).moveTo(54, doc.y).lineTo(541, doc.y).stroke();
  doc.moveDown(1);

  // Foreword
  doc.fillColor('#0F172A').fontSize(12).font('Helvetica-Bold').text('Foreword');
  doc.moveDown(0.4);
  doc.fillColor('#334155').fontSize(9.5).font('Helvetica').lineGap(3);
  doc.text('This memorandum addresses the critical security incident first detected on November 18, 2024, involving unusual network activity on Raccine’s EU-based servers and the subsequent encryption of our internal Human Resources (HR) infrastructure.');
  doc.moveDown(0.5);
  doc.text('Following the immediate deployment of cybersecurity forensic specialists A788, network scans identified a highly sophisticated toolset deployed by a threat actor operating under the moniker "Kyberite." Intelligence reports indicate that Kyberite utilizes the notorious LockBit ransomware architecture and has successfully targeted at least 10 retail conglomerates globally this year alone, accumulating more than $50 million in illicit payouts.');
  doc.moveDown(0.5);
  doc.text('The incident has escalated via direct extortion messaging delivered to our newly appointed Chief Executive Officer, Peter Gibbons. Kyberite has provided verified "proof of life" files confirming the successful exfiltration of 3 gigabytes of sensitive data over a 90-day window. Crucially, while initial internal assessments assumed employee files were safe, the exfiltrated cache has been verified to contain personal records belonging to both 500,000 customers (including unencrypted names, addresses, payment information, order histories, and complaint files) and internal Raccine employees.');
  doc.moveDown(0.5);
  doc.text('Operationally, Raccine’s Information Security team has achieved a major win by safely rebuilding and restoring the HR system from secure offline backups, effectively mitigating the system encryption block. However, Kyberite has issued a final 7-day deadline demanding a ransom payment of $3 million USD in Bitcoin, threatening the immediate publication of all customer, employee, and proprietary design files (including upcoming campaigns for the Marche and Apugliano brands, and the Gascony handbag designs) on the dark web if payment is withheld.');
  doc.moveDown(1);

  // Executive Summary
  doc.fillColor('#0F172A').fontSize(12).font('Helvetica-Bold').text('Executive Summary');
  doc.moveDown(0.4);
  doc.fillColor('#334155').fontSize(9.5).font('Helvetica');
  doc.text('While the Board of Directors faces intense commercial pressure to protect Raccine’s brand reputation and safeguard the intellectual property of the upcoming 2025–2026 product lines, authorizing the $3 million ransom payment presents extraordinary, asymmetric legal risks.');
  doc.moveDown(0.5);
  doc.text('Our primary findings indicate that while an explicit, singular EU statute outlawing ransomware payments does not exist, executing a multi-million dollar cryptocurrency transfer to an organization deploying LockBit infrastructure directly intersects with strict liability international sanctions laws, anti-money laundering (AML) frameworks, and counter-terrorist financing (CTF) regulations.');
  doc.moveDown(0.5);
  doc.text('Because our technical teams have successfully restored operational data availability via backups, the primary business risk has shifted from operational survival to intellectual property exposure. Paying the ransom does not legally or technically guarantee that Kyberite will delete the exfiltrated data. Conversely, authorizing the transaction without exhaustive compliance clearances could expose Raccine to catastrophic regulatory penalties and place individual Board members at risk of personal civil and criminal liability for breach of fiduciary duties.');
  doc.moveDown(0.5);
  doc.text('We strongly recommend a complete suspension of payment logistics, immediate formal cooperation with European law enforcement, and the rapid execution of our mandatory customer and employee data breach notification campaigns.');
  doc.moveDown(1);

  if (doc.y > 600) doc.addPage();

  // Analysis
  doc.fillColor('#0F172A').fontSize(12).font('Helvetica-Bold').text('Analysis of Ransom Payments');
  doc.moveDown(0.5);

  doc.fontSize(10).font('Helvetica-Bold').text('1. Statutes or Case Law Prohibiting Ransom Payments');
  doc.fillColor('#334155').fontSize(9.5).font('Helvetica');
  doc.text('Under current EU and Member State jurisprudence, there is no blanket statutory prohibition that explicitly criminalizes the act of paying a ransom to recover encrypted or stolen corporate data. However, ransom payments do not exist in a legal vacuum. Under continental European legal frameworks, a corporate payment to an extortionist group sits in a dangerous grey area regarding facilitation of criminal association.');
  doc.moveDown(0.8);

  doc.fillColor('#0F172A').fontSize(10).font('Helvetica-Bold').text('2. Potential Implications of Sanctions Restrictions and Mitigation Strategies');
  doc.fillColor('#334155').fontSize(9.5).font('Helvetica');
  doc.text('The threat actor’s explicit reliance on LockBit ransomware tools triggers immediate and severe economic sanctions considerations. The Council of the European Union has prolonged its restrictive measures framework against malicious cyberactors through 2026.');
  doc.text('• The Strict Liability Trap: International sanctions frameworks (including EU Sanctions Map and US OFAC regulations) maintain explicit asset freezes against LockBit\'s core developers and affiliated digital wallets under a strict liability standard.');
  doc.text('• Mitigation Strategy: The Board cannot rely on a defense of "commercial necessity" or "duress". The only viable legal mitigation is enforcing an absolute block on fund transfers until exhaustive cryptographic forensic tracing is performed.');
  doc.moveDown(0.8);

  doc.fillColor('#0F172A').fontSize(10).font('Helvetica-Bold').text('3. Money Laundering or Terrorism Financing Concerns');
  doc.fillColor('#334155').fontSize(9.5).font('Helvetica');
  doc.text('• Anti-Money Laundering (AML) Directives: Injecting $3 million into an unverified digital wallet controlled by an extortion network engages corporate liability under EU Anti-Money Laundering Authority (AMLA) frameworks.');
  doc.text('• Counter-Terrorist Financing (CTF): Because LockBit operates on a Ransomware-as-a-Service model, payouts linked to state-aligned hybrid threat actors can trigger automatic criminal prosecution tracks.');
  doc.moveDown(0.8);

  doc.fillColor('#0F172A').fontSize(10).font('Helvetica-Bold').text('4. Personal Liability Risks for the Board');
  doc.fillColor('#334155').fontSize(9.5).font('Helvetica');
  doc.text('• The Corporate Waste Standard: Paying a ransom offers zero binding contractual protection. Empirical data confirms paying corporations are frequently retargeted. Authorizing $3 million with no guarantee represents corporate waste.');
  doc.text('• Individual Director Liability: Voting to approve a cryptocurrency transaction violating sanctions or AML without documented diligence exposes individual directors to personal civil litigation and potential criminal liability.');
  doc.moveDown(0.8);

  if (doc.y > 550) doc.addPage();

  doc.fillColor('#0F172A').fontSize(10).font('Helvetica-Bold').text('5. Relevant Regulatory Guidance and Compliance Considerations');
  doc.fillColor('#334155').fontSize(9.5).font('Helvetica');
  doc.text('Supervisory bodies—including the EDPB, Irish DPC, and UK NCSC—universally command a non-payment approach. From a GDPR standpoint, paying a ransom does not satisfy compliance duties. Failure to comply triggers maximum fine ceilings under GDPR Article 83(5): up to €20 million or 4% of total worldwide annual turnover.');
  doc.moveDown(1);

  // Recommendations
  doc.fillColor('#0F172A').fontSize(12).font('Helvetica-Bold').text('Recommendations');
  doc.moveDown(0.4);
  const recs = [
    '1. Formally Record Non-Payment Protocol: Maintain a meticulous, legally privileged minutes log documenting that the Board has evaluated the ransom demand and suspended payment to strictly comply with EU economic sanctions and AML regulations.',
    '2. Report the Extortion to Law Enforcement: Immediately report Kyberite\'s direct communication, Bitcoin address, and metadata to national cybersecurity units and Europol.',
    '3. Execute Dual-Track Notifications Without Undue Delay: Issue Track A notifications to 500,000 affected customers and Track B internal notices to staff regarding HR file exposure.',
    '4. Enforce Intellectual Property Countermeasures: Direct brand protection teams to establish automated online monitoring and prepare pre-drafted cease-and-desist and digital takedown notices.'
  ];
  recs.forEach(r => {
    doc.fillColor('#334155').fontSize(9.5).font('Helvetica').text(r);
    doc.moveDown(0.4);
  });

  doc.end();
}

function buildBlackacreB2CTerms() {
  const doc = new PDFDocument({ margin: 54, size: 'A4' });
  const stream = fs.createWriteStream(path.join(docsDir, 'Blackacre_Terms_of_Service_B2C.pdf'));
  doc.pipe(stream);

  doc.fillColor('#0F172A').fontSize(16).font('Helvetica-Bold').text('TERMS OF SERVICE', { align: 'center' });
  doc.fontSize(10).font('Helvetica-Oblique').text('Last Revised on July 2026', { align: 'center' });
  doc.moveDown(1);

  doc.fillColor('#334155').fontSize(9.5).font('Helvetica').lineGap(3);
  doc.text('Welcome to the Terms of Service (these "Terms") for the website, BlackacreTeddyBears.com (the "Website"), operated on behalf of Blackacre Teddy Bears, LLC ("Company", "we" or "us"). The Website and any content, tools, features and functionality offered on or through our Website are collectively referred to as the "Services".');
  doc.moveDown(0.6);
  doc.text('These Terms govern your access to and use of the Services. Please read these Terms carefully, as they include important information about your legal rights. By accessing and/or using the Services, you are agreeing to these Terms. If you do not understand or agree to these Terms, please do not use the Services.');
  doc.moveDown(0.6);
  doc.text('For purposes of these Terms, "you" and "your" means you as the user of the Services. If you use the Services on behalf of a company or other entity then "you" includes you and that entity, and you represent and warrant that (a) you are an authorized representative of the entity with the authority to bind the entity to these Terms, and (b) you agree to these Terms on the entity\'s behalf.');
  doc.moveDown(1);

  doc.fillColor('#0F172A').fontSize(11).font('Helvetica-Bold').text('TABLE OF CONTENTS');
  doc.moveDown(0.5);

  const sections = [
    { title: '1. Who May Use the Services', body: 'You must be eighteen (18) years of age or older and reside in the United States or any of its territories to use the Services. By using the Services, you represent and warrant that you meet these requirements.' },
    { title: '2. Location of Our Privacy Policy', body: 'Our Privacy Policy describes how we handle the information you provide to us when you use the Services. For an explanation of our privacy practices, please visit our Privacy Policy located at BlackacreTeddyBears.com/privacy.' },
    { title: '3. Rights We Grant You', body: '3.1 Right to Use Services. We hereby permit you to use the Services for your personal non-commercial use only, provided that you comply with these Terms.\n3.2 Restrictions On Your Use of the Services. You may not download, modify, copy, duplicate, reverse engineer, use bots/crawlers, or submit unlawful/defamatory material.' },
    { title: '4. Ownership and Content', body: '4.1 Ownership of the Services. The Services and content are protected under copyright, trademark, and intellectual property laws.\n4.2 Ownership of Trademarks. Company trademarks and logos belong to Blackacre Teddy Bears, LLC.\n4.3 Ownership of Feedback. Feedback becomes sole property of Company.\n4.4 Your Content License Grant. You grant Company a worldwide, royalty-free license to operate and provide the Services.' },
    { title: '5. Third-Party Services and Materials', body: '5.1 Use of Third-Party Materials in the Services. Third-party materials are provided solely as a convenience. Company is not responsible for examining third-party content.' },
    { title: '6. Disclaimers, Limitations of Liability and Indemnification', body: '6.1 Disclaimers. Services provided "AS IS" and "AS AVAILABLE".\n6.2 Limitations of Liability. Company liability limited to greater of $100 or amount paid in past 6 months.\n6.3 Indemnification. User agrees to defend and indemnify Company Entities against claims arising from breach or misuse.' },
    { title: '7. Additional Provisions', body: '7.1 SMS Messaging and Phone Calls.\n7.2 Updating These Terms.\n7.3 Termination of License.\n7.4 Injunctive Relief.\n7.5 Liquidated Damages ($200 per material breach).\n7.6 Severability.\n7.7 Assignment.\n7.8 Waiver.\n7.9 Section Headings.\n7.10 Where Services are Operated.\n7.11 Governing Law (State of Texas, Travis County / Western District of Texas).\n7.12 Arbitration; Class Action Waiver; Venue.\n7.13 Personal Account Security and Misappropriation Safe Harbor.\n7.14 Comprehensive Advertising and Referral Disclaimers.\n7.15 Integration of Separate Policies.\n7.16 How to Contact Us.\n7.17 California Residents Notice.' }
  ];

  sections.forEach(sec => {
    if (doc.y > 680) doc.addPage();
    doc.fillColor('#0F172A').fontSize(10).font('Helvetica-Bold').text(sec.title);
    doc.fillColor('#334155').fontSize(9).font('Helvetica').text(sec.body);
    doc.moveDown(0.6);
  });

  doc.end();
}

function buildRedlineTermsOfService() {
  const doc = new PDFDocument({ margin: 54, size: 'A4' });
  const stream = fs.createWriteStream(path.join(docsDir, 'Redline_Terms_of_Service.pdf'));
  doc.pipe(stream);

  doc.fillColor('#0F172A').fontSize(16).font('Helvetica-Bold').text('TERMS OF SERVICE (REDLINE DRAFT)', { align: 'center' });
  doc.fillColor('#2563EB').fontSize(10).font('Helvetica-Bold').text('[LATHAM & WATKINS SIMULATION REDLINE]', { align: 'center' });
  doc.moveDown(1);

  doc.fillColor('#334155').fontSize(9.5).font('Helvetica').lineGap(3);
  doc.text('This document represents the negotiated redline revisions for the B2C Terms of Service of Blackacre Teddy Bears, LLC, highlighting legal risks, age threshold corrections, governing law adjustments, and liability cap modifications.');
  doc.moveDown(1);

  const redlineItems = [
    {
      section: 'Section 1: Who May Use the Services',
      redline: 'Age requirement updated from [8 years] -> [eighteen (18) years of age or older]. Residency requirement corrected from [State of Alaska] -> [United States or any of its territories].'
    },
    {
      section: 'Section 3.1 & 3.2: Rights & Usage Restrictions',
      redline: 'Restored comprehensive restrictions on unauthorized copying, scraping, reverse engineering, and commercial exploitation. Deleted unilateral restriction on copying pictures without consent and replaced with standard IP protections.'
    },
    {
      section: 'Section 4.1 & 4.3: Ownership & Feedback',
      redline: 'Corrected "Company owns most of the content" -> "Company and/or its licensors own all right, title and interest". Clarified Feedback assignment clause.'
    },
    {
      section: 'Section 6.2: Limitations of Liability',
      redline: 'Corrected liability cap from [$1,000,000.00] -> [greater of $100.00 or amount paid in past 6 months] to reflect standard B2C consumer terms.'
    },
    {
      section: 'Section 7.1 & 7.2: Updating Terms & Communication',
      redline: 'Removed unworkable clause requiring "written consent of over 2/3 of users to update terms" and replaced with standard unilateral update protocol upon notice.'
    },
    {
      section: 'Section 7.11 & 7.12: Governing Law & Arbitration',
      redline: 'Updated governing law from [State of Georgia / Boston, MA] -> [State of Texas, Travis County / Western District of Texas]. Added mandatory AAA binding individual arbitration and class action waiver.'
    }
  ];

  redlineItems.forEach(item => {
    if (doc.y > 680) doc.addPage();
    doc.fillColor('#0F172A').fontSize(10.5).font('Helvetica-Bold').text(item.section);
    doc.fillColor('#16A34A').fontSize(9).font('Helvetica-Bold').text('Redline Revisions & Risk Mitigation:');
    doc.fillColor('#334155').fontSize(9).font('Helvetica').text(item.redline);
    doc.moveDown(0.8);
    doc.strokeColor('#E2E8F0').lineWidth(0.5).moveTo(54, doc.y).lineTo(541, doc.y).stroke();
    doc.moveDown(0.8);
  });

  doc.end();
}

console.log('Generating PDF files...');
buildRaccineMediaStatement();
buildPrivilegedMemo();
buildBlackacreB2CTerms();
buildRedlineTermsOfService();
console.log('PDF generation initiated successfully.');
