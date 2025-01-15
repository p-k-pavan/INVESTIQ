import React from 'react';

function Footer() {
  return (
    <div className="p-4">
      <div className="flex sm:flex-wrap lg:flex-nowrap mx-auto justify-between gap-4">
        {/* Column 1 - INVESTIQ */}
        <div className="flex flex-col w-full lg:w-1/4">
          <h1 className="text-xl font-bold">INVESTIQ</h1>
          <p>© 2010 - 2024, INVESTIQ Broking Ltd.</p>
          <p>All rights reserved.</p>

          <div className="flex gap-4 mt-4">
            <i className="fa-solid fa-x"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-telegram"></i>
          </div>
        </div>

        {/* Column 2 - Company Links */}
        <div className="flex flex-col w-full lg:w-1/4">
          <h3 className="font-semibold mb-4">Company</h3>
          <p className="leading-tight">About</p>
          <p className="leading-tight">Products</p>
          <p className="leading-tight">Pricing</p>
          <p className="leading-tight">Referral programme</p>
          <p className="leading-tight">Careers</p>
          <p className="leading-tight">InvestIQ.tech</p>
          <p className="leading-tight">Press & media</p>
          <p className="leading-tight">InvestIQ Cares (CSR)</p>
        </div>

        {/* Column 3 - Support Links */}
        <div className="flex flex-col w-full lg:w-1/4">
          <h3 className="font-semibold mb-4">Support</h3>
          <p className="leading-tight">Contact us</p>
          <p className="leading-tight">Support portal</p>
          <p className="leading-tight">InvestIQ blog</p>
          <p className="leading-tight">List of charges</p>
          <p className="leading-tight">Downloads & resources</p>
          <p className="leading-tight">Videos</p>
          <p className="leading-tight">Market overview</p>
          <p className="leading-tight">How to file a complaint?</p>
          <p className="leading-tight">Status of your complaints</p>
        </div>

        {/* Column 4 - Account Links */}
        <div className="flex flex-col w-full lg:w-1/4">
          <h3 className="font-semibold mb-4">Account</h3>
          <p className="leading-tight">Open an account</p>
          <p className="leading-tight">Fund transfer</p>
        </div>
      </div>

      {/* Optional Row for Footer Branding */}
      <div className="mt-8 text-xs p-4 lg:px-32 lg:mx-24 text-gray-500">
        <p className="leading-tight text-xs">
          INVESTIQ: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through INVESTIQ – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through INVESTIQ Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: INVESTIQ, #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@investiq.com, for DP related to dp@investiq.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
        </p>
        <p className="leading-tight text-xs">
          Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
        </p>
        <p className="leading-tight text-xs">
          Smart Online Dispute Resolution | Grievances Redressal Mechanism
        </p>
        <p className="leading-tight text-xs">
          Investments in securities market are subject to market risks; read all the related documents carefully before investing.
        </p>
        <p className="leading-tight text-xs">
          Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
        </p>
        <p className="leading-tight text-xs">
          "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary."
        </p>
        <p className="leading-tight text-xs">
          Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of INVESTIQ and offering such services, please create a ticket here.
        </p>
      </div>

      {/* Bottom Links Section */}
      <div className="flex flex-wrap gap-4 mt-8 justify-center">
        <a href="#" className="text-sm text-gray-500 hover:text-blue-500 text-decoration-none">NSE</a>
        <a href="#" className="text-sm text-gray-500 hover:text-blue-500 text-decoration-none">BSE</a>
        <a href="#" className="text-sm text-gray-500 hover:text-blue-500 text-decoration-none">MCX</a>
        <a href="#" className="text-sm text-gray-500 hover:text-blue-500 text-decoration-none">Terms & conditions</a>
        <a href="#" className="text-sm text-gray-500 hover:text-blue-500 text-decoration-none">Policies & Procedures</a>
        <a href="#" className="text-sm text-gray-500 hover:text-blue-500 text-decoration-none">Privacy policy</a>
        <a href="#" className="text-sm text-gray-500 hover:text-blue-500 text-decoration-none">Disclosure</a>
        <a href="#" className="text-sm text-gray-500 hover:text-blue-500 text-decoration-none">For Investors</a>
        <a href="#" className="text-sm text-gray-500 hover:text-blue-500 text-decoration-none">Attention</a>
        <a href="#" className="text-sm text-gray-500 hover:text-blue-500 text-decoration-none">Investor charter</a>
      </div>
    </div>
  );
}

export default Footer;
