import React from 'react';

function Hero() {
  return (
    <div className="container p-5">
      
      <div className="row">
        <img src="/assets/homeHero.png" alt="Home Hero" />
      </div>
      
      
      <div className="row text-center mt-12">
        <h1 className="font-bold text-3xl text-slate-700">Invest in everything</h1>
        <p className="text-xl mt-2">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
      </div>
      
     
      <div className="row mt-6 w-full">
        
          <button className="font-bold py-3 px-8 rounded bg-[#1da1f2] w-auto m-auto text-white text-xl">
            <a>Sign up for free</a>
          </button>

        
      </div>
    </div>
  );
}

export default Hero;
