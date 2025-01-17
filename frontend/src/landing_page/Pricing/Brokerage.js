import React from "react";
import { Link } from "react-router-dom";

function Brokerage() {
  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col lg:flex-row p-5 mt-5 border-t">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 p-4">
          <Link to={'/'} className="text-decoration-none text-gray-400 text-sm">
            <h3 className="text-lg font-semibold text-black ">Brokerage Calculator</h3>
            <p className="text-sm mt-2">Securities/Commodities transaction tax</p>
            <p>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on the selling side when trading intraday or on F&O.
            </p>
            <p>
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>

            <h3 className="text-lg font-semibold text-black mt-4">
              Transaction/Turnover Charges
            </h3>
            <p>
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions.
            </p>
            <p>
              BSE has revised transaction charges in XC, XD, XT, Z, and ZP
              groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups
              have been merged into a new group X w.e.f 01.12.2017)
            </p>
            <p>
              BSE has revised transaction charges in SS and ST groups to
              ₹1,00,000 per crore of gross turnover.
            </p>
            <p>
              BSE has revised transaction charges for group A, B, and other
              non-exclusive scrips (non-exclusive scrips from group E, F, FC,
              G, GC, W, T) at ₹375 per crore of turnover on a flat rate basis
              w.e.f. December 1, 2022.
            </p>
            <p>
              BSE has revised transaction charges in M, MT, TS, and MS groups
              to ₹275 per crore of gross turnover.
            </p>

            <h3 className="text-lg font-semibold text-black mt-4">Call & Trade</h3>
            <p>
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including auto square off orders.
            </p>

            <h3 className="text-lg font-semibold text-black mt-4">Stamp Charges</h3>
            <p>
              Stamp charges by the Government of India as per the Indian Stamp
              Act of 1899 for transacting in instruments on the stock exchanges
              and depositories.
            </p>

            <h3 className="text-lg font-semibold text-black mt-4">NRI Brokerage Charges</h3>
            <ul className="list-disc pl-5">
              <li>₹100 per order for futures and options.</li>
              <li>
                For a non-PIS account, 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                For a PIS account, 0.5% or ₹200 per executed order for equity
                (whichever is lower).
              </li>
              <li>₹500 + GST as yearly account maintenance charges (AMC).</li>
            </ul>

            <h3 className="text-lg font-semibold text-black mt-4">Account with Debit Balance</h3>
            <p>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </p>

            <h3 className="text-lg font-semibold text-black mt-4">
              Charges for Investor's Protection Fund Trust (IPFT) by NSE
            </h3>
            <ul className="list-disc pl-5">
              <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
              <li>
                Options - ₹50 per crore + GST of traded value (premium value).
              </li>
              <li>
                Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                per lakh + GST of premium for Options.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-black mt-4">
              Margin Trading Facility (MTF)
            </h3>
            <ul className="list-disc pl-5">
              <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.</li>
              <li>
                MTF Brokerage: 0.03% or Rs. 20/executed order, whichever is lower.
              </li>
              <li>MTF pledge charge: ₹30 + GST per pledge request per ISIN.</li>
            </ul>
          </Link>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 p-4">
          <Link to={'/'} className="text-decoration-none text-gray-400 text-sm">
            <h3 className="text-lg font-semibold text-black ">List of Charges</h3>

            <h3 className="text-lg font-semibold text-black mt-4">GST</h3>
            <p>
              Tax levied by the government on the services rendered. 18% of (
              brokerage + SEBI charges + transaction charges)
            </p>

            <h3 className="text-lg font-semibold text-black mt-4">SEBI Charges</h3>
            <p>
              Charged at ₹10 per crore + GST by Securities and Exchange Board
              of India for regulating the markets.
            </p>

            <h3 className="text-lg font-semibold text-black mt-4">DP (Depository Participant) Charges</h3>
            <p>
              ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST)
              is charged on the trading account ledger when stocks are sold,
              irrespective of quantity.
            </p>
            <p>
              Female demat account holders (as first holder) will enjoy a
              discount of ₹0.25 per transaction on the CDSL fee.
            </p>
            <p>
              Debit transactions of mutual funds & bonds get an additional
              discount of ₹0.25 on the CDSL fee.
            </p>

            <h3 className="text-lg font-semibold text-black mt-4">Pledging Charges</h3>
            <p>₹30 + GST per pledge request per ISIN.</p>

            <h3 className="text-lg font-semibold text-black mt-4">AMC (Account Maintenance Charges)</h3>
            <ul className="list-disc pl-5">
              <li>
                For BSDA demat account: Zero charges if the holding value is
                less than ₹4,00,000.
              </li>
              <li>
                For non-BSDA demat accounts: ₹300/year + 18% GST charged
                quarterly (90 days).
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-black mt-4">Corporate Action Order Charges</h3>
            <p>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>

            <h3 className="text-lg font-semibold text-black mt-4">Off-market Transfer Charges</h3>
            <p>₹25 per transaction.</p>

            <h3 className="text-lg font-semibold text-black mt-4">Physical CMR Request</h3>
            <p>
              First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
              for subsequent requests.
            </p>

            <h3 className="text-lg font-semibold text-black mt-4">Payment Gateway Charges</h3>
            <p>₹9 + GST (Not levied on transfers done via UPI)</p>

            <h3 className="text-lg font-semibold text-black mt-4">Delayed Payment Charges</h3>
            <p>
              Interest is levied at 18% a year or 0.05% per day on the debit
              balance in your trading account.
            </p>
          </Link>
        </div>
      </div>
      <div className="">
        <p className="text-lg">Disclaimer</p>
        <p className="text-xs">For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
      </div>
      <div className="mt-24">
        <h3 className="text-xl font-semibold">Charges for account opening</h3>
        <div className="border border-gray-400 flex flex-col mt-12 rounded-lg">
          <div className="flex justify-between border-b bg-gray-100">
            <p className="px-4 py-2 w-1/2 font-semibold">Type of account</p>
            <p className="px-4 py-2 w-1/2 font-semibold text-center">Charges</p>
          </div>
          <div className="flex justify-between">
            <p className="px-4 py-2 w-1/2">Online account</p>
            <p className="px-4 py-2 w-1/2 text-green-500 text-center">Free</p>
          </div>
          <div className="flex justify-between">
            <p className="px-4 py-2 w-1/2 ">Offline account</p>
            <p className="px-4 py-2 w-1/2 text-green-500 text-center">Free</p>
          </div>
          <div className="flex justify-between">
            <p className="px-4 py-2 w-1/2">NRI account (offline only)</p>
            <p className="px-4 py-2 w-1/2 text-center">₹ 500</p>
          </div>
          <div className="flex justify-between">
            <p className="px-4 py-2 w-1/2">Partnership, LLP, HUF, or Corporate accounts (offline only)</p>
            <p className="px-4 py-2 w-1/2 text-center">₹ 500</p>
          </div>
        </div>
      </div>
      <div className="my-12">
        <h3 className="text-xl font-semibold">Charges for optional value-added services</h3>
        <div className="border border-gray-400 flex flex-col mt-12 rounded-lg">
          <div className="flex justify-between border-b bg-gray-100">
            <p className="px-4 py-2 w-1/3">Service</p>
            <p className="px-4 py-2 w-1/3">Billing Frequency</p>
            <p className="px-4 py-2 w-1/3">Charges</p>
          </div>
          <div className="flex justify-between">
            <p className="px-4 py-2 w-1/3">Tickertape</p>
            <p className="px-4 py-2 w-1/3">Monthly / Annual</p>
            <p className="px-4 py-2 w-1/3">Free: 0 | Pro: 249/2399</p>
          </div>
          <div className="flex justify-between">
            <p className="px-4 py-2 w-1/3">Smallcase</p>
            <p className="px-4 py-2 w-1/3">Per transaction</p>
            <p className="px-4 py-2 w-1/3">Buy & Invest More: 100 | SIP: 10</p>
          </div>
          <div className="flex justify-between">
            <p className="px-4 py-2 w-1/3">Kite Connect</p>
            <p className="px-4 py-2 w-1/3">Monthly</p>
            <p className="px-4 py-2 w-1/3">Connect: 2000 | Historical: 2000</p>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Brokerage;
