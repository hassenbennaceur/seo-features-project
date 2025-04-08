import React from "react";
import { FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 p-8 md:p-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left side: Logo */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            {/* Replace with your logo image if you have */}
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-900 rounded-full"></div>
            <span className="text-white font-semibold text-lg">AI Startup Kit</span>
          </div>

          {/* Social icons */}
          <div className="flex space-x-6 mt-12">
            <FaXTwitter className="w-5 h-5 hover:text-white cursor-pointer" />
            <FaInstagram className="w-5 h-5 hover:text-white cursor-pointer" />
            <FaYoutube className="w-5 h-5 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Right side: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>Features</li>
              <li>Integration</li>
              <li>Updates</li>
              <li>FAQ</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Manifesto</li>
              <li>Press</li>
              <li>Contract</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>Examples</li>
              <li>Community</li>
              <li>Guides</li>
              <li>Docs</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Security</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
