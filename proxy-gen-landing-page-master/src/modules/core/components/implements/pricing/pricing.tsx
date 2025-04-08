import React from "react";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0d0221] to-black flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-white mb-4">Pricing</h1>
      <p className="text-gray-400 mb-10 text-center">
        Choose the right plan to meet your SEO needs and start optimizing today.
      </p>

      {/* Switch placeholder */}
      <div className="flex items-center mb-10">
        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
          <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
          <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-purple-600 cursor-pointer"></label>
        </div>
        <span className="text-gray-300">dsad</span>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        
        {/* Basic Plan */}
        <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-700 rounded-2xl p-8 flex flex-col items-center shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-2">Pricing</h2>
          <p className="text-gray-400 mb-6">$29/mo</p>
          <ul className="text-gray-300 mb-8 space-y-3 text-center">
            <li>✓ Keyword optimization</li>
            <li>✓ Automated meta tags</li>
            <li>✓ SEO monitoring</li>
            <li>✓ Monthly reports</li>
          </ul>
          <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded-full">
            Join waitlist
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-gradient-to-b from-purple-900 to-black border border-purple-700 rounded-2xl p-8 flex flex-col items-center shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-2">Pro</h2>
          <p className="text-gray-400 mb-6">$79/mo</p>
          <ul className="text-gray-300 mb-8 space-y-3 text-center">
            <li>✓ Keyword optimization</li>
            <li>✓ Automated meta tags</li>
            <li>✓ SEO monitoring</li>
            <li>✓ Monthly reports</li>
            <li>✓ Content suggestions</li>
            <li>✓ Link optimization</li>
          </ul>
          <button className="bg-purple-700 hover:bg-purple-600 text-white py-2 px-6 rounded-full">
            Join waitlist
          </button>
        </div>

        {/* Business Plan */}
        <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-700 rounded-2xl p-8 flex flex-col items-center shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-2">Business</h2>
          <p className="text-gray-400 mb-6">$149/mo</p>
          <ul className="text-gray-300 mb-8 space-y-3 text-center">
            <li>✓ Keyword optimization</li>
            <li>✓ Automated meta tags</li>
            <li>✓ SEO monitoring</li>
            <li>✓ Monthly reports</li>
            <li>✓ Content suggestions</li>
            <li>✓ Link optimization</li>
            <li>✓ Multi-user access</li>
            <li>✓ API integration</li>
          </ul>
          <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded-full">
            Join waitlist
          </button>
        </div>

      </div>
    </div>
  );
}
