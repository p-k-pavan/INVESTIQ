import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

const ProductPage = () => {
  const sectionsData = [
    {
      component: 'LeftSection',
      data: {
        image: '/assets/kite.png',
        title: 'Kite',
        description:
          'Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.',
        links: [
          { to: '/', text: 'Try demo', icon: true },
          { to: '/', text: 'Learn More', icon: true },
        ],
        additionalImages: [
          { src: '/assets/googlePlayBadge.svg', alt: 'Google Play Badge' },
          { src: '/assets/appstoreBadge.svg', alt: 'Apple Store Badge' },
        ],
      },
    },
    {
      component: 'RightSection',
      data: {
        image: '/assets/console.png',
        title: 'Console',
        description:
          'The central dashboard for your InvestIQ account. Gain insights into your trades and investments with in-depth reports and visualisations.',
        links: [{ to: '/', text: 'Learn more', icon: true }],
      },
    },
    {
      component: 'LeftSection',
      data: {
        image: '/assets/coin.png',
        title: 'Coin',
        description:
          'Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.',
        links: [{ to: '/', text: 'Coin', icon: true }],
        additionalImages: [
          { src: '/assets/googlePlayBadge.svg', alt: 'Google Play Badge' },
          { src: '/assets/appstoreBadge.svg', alt: 'Apple Store Badge' },
        ],
      },
    },
    {
      component: 'RightSection',
      data: {
        image: '/assets/kiteconnect.png',
        title: 'Kite Connect API',
        description:
          'Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.',
        links: [{ to: '/', text: 'Kite connect', icon: true }],
      },
    },
    {
      component: 'LeftSection',
      data: {
        image: '/assets/varsity.png',
        title: 'Varsity mobile',
        description:
          'An easy-to-grasp collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.',
        additionalImages: [
          { src: '/assets/googlePlayBadge.svg', alt: 'Google Play Badge' },
          { src: '/assets/appstoreBadge.svg', alt: 'Apple Store Badge' },
        ],
      },
    },
  ];

  return (
    <div>
      <Hero />
      <hr />
      {sectionsData.map((section, index) => {
        const Component = section.component === 'LeftSection' ? LeftSection : RightSection;
        return (
          <Component
            key={index}
            image={section.data.image}
            title={section.data.title}
            description={section.data.description}
            links={section.data.links}
            additionalImages={section.data.additionalImages}
          />
        );
      })}
      <h1 className="px-4 text-center">Want to know more about our technology stack? Check out the Zerodha.tech blog.</h1>
      <Universe />
    </div>
  );
};

export default ProductPage;
