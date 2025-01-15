import React from 'react';

const pricingFeatures = [
  {
    imgSrc: 'assets/pricing0.svg',
    text: 'Free account opening',
  },
  {
    imgSrc: 'assets/pricing0.svg',
    text: 'Free equity delivery and direct mutual funds',
  },
  {
    imgSrc: 'assets/intradayTrades.svg',
    text: 'Low-cost intraday and F&O trades',
  },
];



function Pricing() {
  return (

      <section className="flex flex-col lg:flex-row lg:px-24">
        <div className='lg:w-1/2 p-6'>
        <h1 className="text-3xl font-bold mb-4">Unbeatable pricing</h1>
        <p className="mb-6 text-gray-600">
          We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
        </p>
        </div>
        <div className="flex flex-wrap md-flex-nowrap p-4 gap-6 leading-tight lg:w-1/2">
          {pricingFeatures.map((feature, index) => (
            <div key={index} className="flex items-center text-sm">
              <img
                src={feature.imgSrc}
                alt={feature.text}
                className="max-w-[80px] md:max-w-[100px]"
              />
              <p className="text-gray-400 leading-tight text-xs">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
      
   
  );
}

export default Pricing;
