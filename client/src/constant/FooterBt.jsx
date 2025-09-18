import React from "react";
import { Link, useLocation } from "react-router-dom";

const FooterBT = () =>
{
  const location = useLocation();

  // Determine background color based on the current path
  const getFooterBackgroundColor = () =>
  {
    switch (location.pathname)
    {
      case "/":
        return "bg-animate5";
      case "/process":
        return "bg-black";
      case "/farming":
        return "bg-prim";
      case "/sustainability":
        return "bg-pink-700";
      case "/contact":
        return "bg-gray-800";
      case "/order":
        return "bg-orange-700";
      case "/inaya":
        return "bg-amber-900";
      default:
        return "bg-gray-800";
    }
  };

  return (
    <footer
      className={`${getFooterBackgroundColor()} text-white py-2 w-full fixed bottom-0 left-0 z-50`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Company Branding */}
        <Link
          to="/"
          className="header text-sm md:text-lg font-bold hover:text-yellow-600 transition duration-300"
        >
          Evolve Pvt. Ltd.
        </Link>

        {/* Information section */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-xs md:text-sm">
          {/* Business Type */}
          <div className=" flex flex-col items-center animate-pulse">
            <span className="font-semibold">Industry: </span>
            <span className="text-green-400">Outsourcing Services</span>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center animate-pulse">
            <span className="font-semibold">Location:</span>
            <span className="text-green-400">Balkumari, Lalitpur, Nepal</span>
          </div>

          {/* Contact Number */}
          <div className="flex flex-col items-center animate-pulse">
            <span className="font-semibold">Contact:</span>
            <a href="tel:+9779851174646" className="text-green-400">
              +977 9851174646
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center animate-pulse">
            <span className="font-semibold">Email:</span>
            <a
              href="mailto:vudeviservices@gmail.com"
              className="text-green-400"
            >
              info@vudeviservices.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBT;
