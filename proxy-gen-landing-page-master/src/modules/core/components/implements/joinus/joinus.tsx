import React from "react";

export default function JoinUs() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black p-6">
      <div className="bg-gradient-to-b from-purple-900/30 to-black border border-gray-700 rounded-2xl p-10 w-full max-w-2xl text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          AI-driven SEO<br />for everyone.
        </h1>
        
        {/* Email form */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
          <input 
            type="email" 
            placeholder="Your email" 
            className="px-4 py-3 rounded-lg bg-black/50 border border-gray-600 placeholder-gray-400 text-white w-full md:w-2/3 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
            Join waitlist
          </button>
        </div>

        {/* Subtext */}
        <p className="text-gray-400 text-sm">
          No credit card required · 7-days free trial
        </p>
      </div>
    </div>
  );
}
