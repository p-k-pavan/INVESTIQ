import React from 'react';
import {Link} from 'react-router-dom'

const AboutPage = () => {
  return (
    <div className="px-4 py-6 lg:px-12 lg:py-12">
      {/* Introduction Section */}
      <div className="mb-6">
        <h1 className="text-3xl lg:text-4xl font-bold text-center">
          We pioneered the discount broking model in India.
        </h1>
        <h1 className="text-3xl lg:text-4xl font-bold mt-2 text-center">
          Now, we are breaking ground with our technology.
        </h1>
        <hr className="my-4 border-gray-300 border-solid-gray-100" />
      </div>

      {/* Description Section */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 px-6 lg:px-48 py-6 text-lg">
        <div className="lg:w-1/2">
          <p className="mb-4">
            We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha," the Sanskrit word for barrier.
          </p>
          <p className="mb-4">
            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
          </p>
          <p className="mb-4">
            Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="lg:w-1/2">
          <p className="mb-4">
            In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
          </p>
          <p className="mb-4">
            Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
          </p>
          <p className="mb-4">
            And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.
          </p>
        </div>
      </div>

      {/* People Section */}
      <div className="mt-12 flex flex-col lg:flex-row gap-6 lg:gap-12">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-center text-center lg:text-left ">
          <h1 className="text-2xl font-bold mb-4">People</h1>
          <img
            src="/assets/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="rounded-lg w-[400px] h-[400px] lg:w-[250px] lg:h-[250px] object-cover rounded-full"
          />
          <h3 className="text-xl font-semibold mt-4">Nithin Kamath</h3>
          <p className="text-gray-600">Founder, CEO</p>
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center text-lg lg:pr-48">
          <p className="mb-4">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade-long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="mb-4">
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="mb-4">Playing basketball is his zen.</p>
          <p className="text-blue-500">
            Connect on <Link to={"/"}>Homepage</Link> / <Link to={"/"}>TradingQnA</Link> / <Link to={"/"}>Twitter</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
