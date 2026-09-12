import React from "react";
import footerlogo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <footer className="bg-mist-100  pt-9 pb-5">
      <div className="grid grid-cols-1 container mx-auto md:grid-cols-4  ">
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={footerlogo} className="w-50" />
          <h5 className="block items-center text-center ">
            Curated tools, technologies, and resources for developers building
            modern software.
          </h5>
          <ul className="list-disc flex  items-center justify-center my-5  gap-10  ">
            <li>GitHub</li>
            <li>twitter</li>
            <li>LInkedin</li>
          </ul>
        </div>
        <div className="hidden md:block  items-baseline pt-10 ">
          <ul className="pl-7">
            <li className=" text-[1.3rem] font-semibold">PRODUCT</li>
            <li>Home</li>
            <li>Technology</li>
            <li>Projects</li>
          </ul>
        </div>
        <div className="hidden md:block   items-baseline pt-10">
          <ul className="pl-7">
            <li className="text-[1.3rem] font-semibold">COMPANY</li>
            <li className="">About</li>
            <li>Contact</li>
            <li>Careers </li>
          </ul>
        </div>
        <div className=" hidden md:block items-baseline pt-10">
          <ul className="pl-7">
            <li className="text-[1.3rem] font-semibold">LEGAL</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>

      <div className="divider"></div>

      <div className="flex justify-between">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-3">
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
