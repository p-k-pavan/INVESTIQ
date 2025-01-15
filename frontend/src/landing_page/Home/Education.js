import React from 'react';
import { Link } from 'react-router-dom';

const educationLinks = [
  {
    title: 'Varsity',
    description:
      'Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.',
    to: '/', // use `to` instead of `href`
  },
  {
    title: 'TradingQ&A',
    description:
      'TradingQ&A, the most active trading and investment community in India for all your market-related queries.',
    to: '/', // use `to` instead of `href`
  },
];

function Education() {
  return (
    <section className="flex flex-col lg:flex-row ">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
        <div className="lg:w-1/2">
          <img
            src="assets/education.svg"
            alt="Varsity - Stock market education"
            className="max-w-full lg:max-w-[50%] mx-auto p-4"
          />
        </div>
        <div className="lg:w-1/2 p-6 lg:px-24">
          <h1 className="text-3xl font-bold mb-4">Free and open market education</h1>
          {educationLinks.map((link, index) => (
            <article key={index} className="mb-6">
              <p className="mb-2 text-gray-600">{link.description}</p>
              <Link
                to={link.to} // use `to` here
                className="text-blue-500 font-medium flex items-center text-decoration-none"
              >
                {link.title}
                <i
                  className="fa-solid fa-arrow-right ml-2 text-blue-500"
                  aria-hidden="true"
                ></i>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
