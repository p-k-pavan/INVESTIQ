import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Customer-first always',
    description:
      "That's why 1.5+ crore customers trust InvestIQ with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.",
  },
  {
    title: 'No spam or gimmicks',
    description:
      'No gimmicks, spam, "gamification", or annoying push notifications. High-quality apps that you use at your pace, the way you like.',
  },
  {
    title: 'The InvestIQ universe',
    description:
      'Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.',
  },
  {
    title: 'Do better with money',
    description:
      'With initiatives like Nudge and Kill Switch, we don’t just facilitate transactions, but actively help you do better with your money.',
  },
];

const links = [
  {
    href: '/products',
    text: 'Explore our products',
  },
  {
    href: '/kite-demo',
    text: 'Try Kite demo',
  },
];

function Stats() {
  return (
    <div className="container mx-auto px-12 pt-6 lg:px-24 py-24">
      <div className="flex flex-col lg:flex-row flex-wrap lg:flex-nowrap">
        {/* Left Section */}
        <div className="lg:w-1/3 p-3 lg:p-12">
          <h1 className="text-3xl font-bold mb-6">Trust with confidence</h1>
          {features.map((feature, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="mb-4">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="lg:w-2/3 flex flex-col items-center">
          <img
            src="/assets/ecosystem.png"
            alt="Visual representation of the InvestIQ ecosystem"
            className="max-w-[75%] lg:max-w-[60%] mx-auto"
          />
          <div className="w-full mt-6 text-center">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-blue-500 mr-10 last:mr-0 font-semibold text-decoration-none"
              >
                {link.text}{' '}
                <i
                  className="fa-solid fa-arrow-right text-blue-500"
                ></i>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
