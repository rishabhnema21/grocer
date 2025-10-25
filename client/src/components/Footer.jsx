import React from "react";

const Footer = () => {
  return (
    <div className="border-t border-[#797575] mt-20 flex gap-8 md:gap-0 flex-col md:flex-row justify-center md:justify-between items-center md:items-start py-12 md:py-18">
      <div className="logo flex flex-col justify-center items-center">
        <img src="/grocerLogo.png" className="h-18" alt="" />
        <div className="socials text-center text-sm md:text-start mt-8 text-gray-600">&#169; 2025 Grocer. All rights reserved.</div>
      </div>

      <div className="">
        <h2 className="text-2xl mb-4 md:mb-8 font-medium">Our services</h2>
        <ul className="leading-8 text-center md:text-start text-sm font-medium text-gray-700">
          <li>Pricing</li>
          <li>Tracking</li>
          <li>Report a bug</li>
          <li>Terms of Services</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl mb-4 md:mb-8 font-medium">Our company</h2>
        <ul className="leading-8 text-center md:text-start text-sm font-medium text-gray-700">
          <li>Reporting</li>
          <li>Get in touch</li>
          <li>Management</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl text-center md:text-start mb-4 md:mb-8 font-medium">Address</h2>
        <div className="leading-8 text-center md:text-start text-sm font-medium text-gray-700">
          <p>712 Moon Street</p>
          <p>123-456-7890</p>
          <p>johndoe@grocer.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
