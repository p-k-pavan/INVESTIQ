import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-blue-500 text-white py-10">
      {/* Header Section */}
      <div className="flex justify-between items-center px-10 mb-6">
        <h4 className="text-lg font-semibold">Support Portal</h4>
        <Link to="/track-tickets" className="text-white underline hover:no-underline">
          Track Tickets
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row px-10 gap-8">
        {/* Left Column */}
        <div className="flex-1">
          <h1 className="text-xl font-bold mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="text"
            placeholder="Eg. how do I activate F&O"
            className="w-full p-4 mb-4 text-lg rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <div className="flex flex-col gap-3">
            <Link to="/track-account-opening" className="text-white text-decoration-none">
              Track account opening
            </Link>
            <Link to="/track-segment-activation" className="text-white text-decoration-none">
              Track segment activation
            </Link>
            <Link to="/intraday-margins" className="text-white text-decoration-none">
              Intraday margins
            </Link>
            <Link to="/kite-user-manual" className="text-white text-decoration-none">
              Kite user manual
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1">
          <h1 className="text-xl font-bold mb-4">Featured</h1>
          <ol className="list-decimal ml-5 space-y-3">
            <li>
              <Link to="/takeovers-and-delisting" className="text-white text-decoration-none">
                Current Takeovers and Delisting - January 2024
              </Link>
            </li>
            <li>
              <Link to="/intraday-leverages" className="text-white text-decoration-none">
                Latest Intraday leverages - MIS & CO
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
