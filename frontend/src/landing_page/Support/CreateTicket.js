import React from "react";
import { Link } from "react-router-dom";

function CreateTicket() {
  const categories = [
    {
      title: "Account Opening",
      topics: [
        "Online",
        "Offline",
        "Charges",
        "Company, Partnership and HUF",
        "Non Resident Indian (NRI)",
      ],
    },
    {
      title: "Your Zerodha Account",
      topics: [
        "Login credentials",
        "Your Profile",
        "Account modification and segment addition",
        "CMR & DP ID",
        "Nomination",
        "Transfer and conversion of shares",
      ],
    },
    {
      title: "Trading and Markets",
      topics: [
        "Trading FAQs",
        "Kite",
        "Margins",
        "Product and order types",
        "Corporate actions",
        "Kite features",
      ],
    },
    {
      title: "Funds",
      topics: ["Fund withdrawal", "Adding funds", "Adding bank accounts", "eMandates"],
    },
    {
      title: "Console",
      topics: ["IPO", "Portfolio", "Funds statement", "Profile", "Reports", "Referral program"],
    },
    {
      title: "Coin",
      topics: [
        "Understanding mutual funds and Coin",
        "Coin app",
        "Coin web",
        "Transactions and reports",
        "National Pension Scheme (NPS)",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-5 py-10">
      <h1 className="text-2xl font-bold mb-8">
        To create a ticket, select a relevant topic
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="p-5 border rounded-lg shadow-md bg-white space-y-4"
          >
            <h4 className="text-lg font-semibold flex items-center space-x-2">
              <i className="fa fa-plus-circle text-blue-500" aria-hidden="true"></i>
              <span>{category.title}</span>
            </h4>
            <div className="space-y-2">
              {category.topics.map((topic, i) => (
                <Link
                  key={i}
                  to={`/create-ticket/${topic.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block text-blue-500 hover:underline"
                >
                  {topic}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
