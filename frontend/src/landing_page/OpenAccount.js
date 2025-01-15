import React from 'react';

function OpenAccount() {
  return (
    <div className="container mx-auto px-6 py-12 lg:py-24">
      <div className="text-center">
        {/* Heading */}
        <h1 className="text-2xl lg:text-4xl font-bold mb-4">
          Open an InvestIQ account
        </h1>
        
        {/* Description */}
        <p className="text-slate-500 text-lg lg:text-xl mb-6">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
        
        {/* Button */}
        <a 
          href="/sign-up" 
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-lg lg:text-xl font-semibold rounded-md px-6 py-3 transition text-decoration-none"
        >
          Sign up for free
        </a>
      </div>
    </div>
  );
}

export default OpenAccount;
