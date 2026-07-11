import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import logo from "./photos/logodesign.png";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Shop", path: "/all_products" },
    { name: "Blog", path: "/all_blogs" },
    { name: "Consultation", path: "/Consultation" },
    { name: "Contact Us", path: "/Contact" },
  ];

  return (
    <footer className="w-full bg-[#050816] text-gray-300 border-t border-white/10 border-2 border-solid border-red-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 flex items-center justify-between gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-3 group w-fit">
            <img
              src={logo}
              alt="AquaHari"
              className="h-16 object-contain transition duration-300 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            />
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Natural blackwater solutions for a healthy, stress-free aquarium.
            Healthy fish, happy tank.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:justify-self-center">
          <h3 className="text-white font-semibold mb-4 tracking-wide text-end">
            Quick Links
          </h3>
          <ul className="flex items-center justify-between gap-8 text-sm">
            {quickLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        {/* <div className="md:justify-self-end">
          <h3 className="text-white font-semibold mb-4 tracking-wide">
            Connect
          </h3>
          <div className="flex items-center gap-4 text-xl">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:aquahariofficial@gmail.com"
              aria-label="Email"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div> */}
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 text-center text-sm text-gray-400">
          © 2026 AquaHari. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
