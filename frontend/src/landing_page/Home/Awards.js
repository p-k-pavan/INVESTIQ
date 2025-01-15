import React from 'react';

function Awards() {
  return (
    <div className="container py-8 px-12 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Section - Image */}
        <div className="lg:w-1/2 py-2 flex justify-center">
          <img 
            src="/assets/largestBroker.svg" 
            alt="Largest stock broker award"
            className="h-[300px] w-auto"
          />
        </div>

        {/* Right Section - Text */}
        <div className="lg:w-1/2 py-2 px-6">
          <h1 className="font-bold text-xl mb-2 lg:text-3xl">Largest Stock Broker in India</h1>
          <p>
            2+ million InvestIQ clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
          </p>

          {/* List of items */}
          <div className="flex flex-wrap lg:my-4 justify-between">
            <div className="lg:w-1/2 mt-4 lg:mt-0">
              <ul className="list-disc pl-4">
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="lg:w-1/2 mt-4 lg:mt-0">
              <ul className="list-disc pl-4">
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Gold</li>
              </ul>
            </div>
          </div>
          <img src="/assets/pressLogos.png" alt="press logos" className="mt-4" />
        </div>
      </div>
    </div>
  );
}

export default Awards;
