import React from 'react';

const Universe = () => {
  const platforms = [
    {
      imgSrc: 'assets/zerodhaFundhouse.png',
      description:
        'Our asset management venture creating simple and transparent index funds to help you save for your goals.',
    },
    {
      imgSrc: 'assets/streakLogo.png',
      description:
        'Systematic trading platform that allows you to create and backtest strategies without coding.',
    },
    {
      imgSrc: 'assets/sensibullLogo.svg',
      description:
        'Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.',
    },
    {
      imgSrc: 'assets/smallcaseLogo.png',
      description:
        'Thematic investing platform that helps you invest in diversified baskets of stocks and ETFs.',
    },
    {
      imgSrc: 'assets/tijori.svg',
      description:
        'Investment research platform offering detailed insights on stocks, sectors, supply chains, and more.',
    },
    {
      imgSrc: 'assets/dittoLogo.png',
      description:
        'Personalized advice on life and health insurance. No spam and no mis-selling.',
    },
  ];

  return (
    <div className="p-6 mt-12 lg:px-24 mb-12">
      <h1 className="text-3xl font-bold text-center mb-4">The Zerodha Universe</h1>
      <p className="text-center mb-24">
        Extend your trading and investment experience even further with our partner platforms.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {platforms.map((platform, index) => (
          <div key={index} className="text-center">
            <img
              src={platform.imgSrc}
              alt={`Platform ${index + 1}`}
              className="h-16 mx-auto mb-4"
            />
            <p className="text-sm text-gray-600">{platform.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Universe;
