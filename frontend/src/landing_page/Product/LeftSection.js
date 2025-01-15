import React from 'react';
import { Link } from 'react-router-dom';

const LeftSection = ({ image, title, description, links, additionalImages }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center p-12 ">
      {/* Left Image Section */}
      <div className="lg:w-2/3 flex justify-center">
        <img src={image} alt={title} className="max-w-full h-auto" />
      </div>

      {/* Right Content Section */}
      <div className="lg:w-1/3 px-4 lg:px-12">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <p className="mb-4">{description}</p>
        {links && (
          <div className="flex flex-col gap-2">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="text-blue-500 font-semibold flex items-center"
              >
                {link.text}
                {link.icon && (
                  <i
                    className="fa-solid fa-arrow-right ml-2 text-blue-500"
                    aria-hidden="true"
                  ></i>
                )}
              </Link>
            ))}
          </div>
        )}
        <div className="flex gap-4 mt-6">
          {additionalImages.map((img, index) => (
            <img key={index} src={img.src} alt={img.alt} className="h-12" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
