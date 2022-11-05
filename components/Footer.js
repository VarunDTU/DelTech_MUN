import React from "react";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-gray-600 px-24">
        <div className="flex flex-col">
          <h2 className="text-4xl flex flex-row text-gray-900 font-semibold mb-4 md:text-5xl">
            <span>
              <FaLink className="mr-5 text-blue-500" />
            </span>
            <span>Connect</span>
          </h2>
          <div className="text-xl font-medium space-x-8 flex flex-col ml-12 mb-24 space-y-4 sm:flex-row">
            <p></p>
            <p className="hover:text-red-600">
              <Link href="/">Youtube</Link>
            </p>
            <p className="hover:text-blue-600">
              <Link href="/">Twitter</Link>
            </p>
            <p className="hover:text-green-600">
              <Link href="/">Facebook</Link>
            </p>
            <p className="hover:text-purple-600">
              <Link href="/">LinkedIn</Link>
            </p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
