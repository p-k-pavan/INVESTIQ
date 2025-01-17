import React from "react";

function Hero() {
  return (
    <div className="container mx-auto px-5">
      <div className="text-center p-5 mt-5 border-b">
        <h1 className="text-3xl font-bold">Pricing</h1>
        <h3 className="text-muted mt-3 text-lg">
          Free equity investments and flat ₹20 traday and F&O trades
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row p-5 mt-5 text-center gap-8">
        <div className="w-full lg:w-1/3 p-4">
          <img src="assets/pricingEquity.svg" alt="" className="mx-auto" />
          <h1 className="text-2xl font-semibold mt-4">Free equity delivery</h1>
          <p className="text-muted mt-2">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="w-full lg:w-1/3 p-4">
          <img src="assets/intradayTrades.svg" alt="" className="mx-auto" />
          <h1 className="text-2xl font-semibold mt-4">Intraday and F&O trades</h1>
          <p className="text-muted mt-2">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="w-full lg:w-1/3 p-4">
          <img src="assets/pricingEquity.svg" alt="" className="mx-auto" />
          <h1 className="text-2xl font-semibold mt-4">Free direct MF</h1>
          <p className="text-muted mt-2">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
