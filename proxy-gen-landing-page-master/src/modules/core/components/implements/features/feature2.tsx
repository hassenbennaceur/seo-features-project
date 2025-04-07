'use client';

import Image from 'next/image';

export default function FeatureSection2() {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-black rounded-2xl">
      
      {/* Left (Bigger) Card */}
      <div className="relative flex flex-col justify-end p-6 border border-gray-800 rounded-2xl bg-gradient-to-t from-[#6D28D9] to-black md:w-2/3 overflow-hidden">
        <Image
          src="/traffic-graph.png" // Your new purple graph image
          alt="Visual reports"
          fill
          className="object-cover opacity-30"
        />
        <div className="relative z-10">
          <h3 className="text-white text-xl font-semibold mb-2">Visual reports</h3>
          <p className="text-gray-300 text-sm">
            Visual insights into your site's performance.
          </p>
        </div>
      </div>

      {/* Right (Smaller) Card */}
      <div className="flex flex-col justify-between p-6 border border-gray-800 rounded-2xl bg-gradient-to-b from-gray-900 to-black md:w-1/3">
        <div className="flex justify-center">
          <Image
            src="/smart-keyword-cone.png" // The new 3D cone image
            alt="Smart Keyword Generator"
            width={180}
            height={180}
            className="object-contain"
          />
        </div>
        <div className="mt-6">
          <h3 className="text-white text-xl font-semibold mb-2">Smart Keyword Generator</h3>
          <p className="text-gray-400 text-sm">
            Automatic suggestions and the best keywords to target.
          </p>
        </div>
      </div>

    </div>
  );
}
