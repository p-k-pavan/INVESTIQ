import React from 'react';

function Awards() {
  return (
    <div className="container py-8 px-12 lg:px-24">
      <div className="row">
       
        <div className="col-6 py-2 my-auto">
          <img src="/assets/largestBroker.svg" alt="Largest stock broker award" 
          style={{ height: '300px', width: 'auto' }}
          />
        </div>

        
        <div className="col-6 py-2 my-auto">
          <h1 className="font-bold text-xl mb-2 lg:text-3xl">Largest Stock Broker in India</h1>
          <p >
            2+ million InvestIQ clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
          </p>

         
          <div className="row my-4">
            <div className="col">
              <ul className="list-disc pl-4">
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col">
              <ul className="list-disc pl-4">
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Gold</li>
              </ul>
            </div>
          </div>
          <img src="/assets/pressLogos.png" alt="png" />
        </div>
      </div>
    </div>
  );
}

export default Awards;
