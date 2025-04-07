'use client';

import Image from 'next/image';

export default function TestimonialsSection() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 bg-black text-center">
      
      {/* Heading */}
      <h2 className="text-white text-4xl font-bold mb-4">Our clients</h2>
      <p className="text-gray-400 text-lg max-w-xl mb-16">
        Hear firsthand how our solutions have boosted online success for users like you.
      </p>

      {/* Testimonial Card */}
      <div className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-gray-900 to-black p-10 rounded-2xl w-full max-w-5xl">
        
        {/* Image */}
        <div className="flex-shrink-0">
          <Image
            src="/client-photo.png" // The purple tinted client photo
            alt="Talia Taylor"
            width={220}
            height={220}
            className="rounded-2xl object-cover"
          />
        </div>

        {/* Text */}
        <div className="text-left">
          <p className="text-white text-2xl font-medium mb-6 leading-relaxed">
            “This product has completely transformed how I manage my projects and deadlines”
          </p>
          <div>
            <p className="text-white font-semibold">Talia Taylor</p>
            <p className="text-gray-400 text-sm">Digital Marketing Director @ Quantum</p>
          </div>
        </div>

      </div>

    </div>
  );
}
