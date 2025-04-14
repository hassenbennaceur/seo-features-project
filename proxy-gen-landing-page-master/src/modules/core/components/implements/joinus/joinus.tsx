import React from "react";

export default function JoinUs() {
  return (
    <div className="relative w-[1200px] h-[558px]">
      <div className="absolute left-[50px] top-[16px] w-[1100px] h-[473px] overflow-hidden rounded-[15px]">
        <div 
          className="w-full h-full rounded-[15px] bg-no-repeat bg-cover relative"
          style={{
            backgroundImage: "url('/images/pattern.png')",
            backgroundPosition: "-97.376px -16.627px",
          }}
        >
          <div className="absolute left-[216px] top-[-342px] w-[686px] h-[622px] shrink-0 rounded-full bg-[rgba(140,69,255,0.49)] blur-[152px]" />
          
          <div className="flex flex-col justify-center absolute left-[330px] top-[116px] text-white text-center font-inter text-[56px] font-medium leading-[65px] tracking-[-0.84px] w-[422px] h-[132px]">
             AI-driven SEO for everyone.
          </div>

          <div className="absolute left-1/2 top-[251px] transform -translate-x-1/2 w-[401px]">
            {/* Outer input-like box */}
            <div className="flex items-center justify-between w-full p-[8px] rounded-[8px] border border-white/15 bg-white/5">
              {/* Add an input or placeholder if needed */}
              <input 
                type="text" 
                placeholder="Enter your email" 
                className="flex-1 bg-transparent outline-none text-white placeholder-white/60 px-4 text-[15px]"
              />
              {/* Button */}
              <button className="px-4 py-2 rounded-lg bg-white text-black font-inter text-[15px] font-medium leading-[31px] tracking-[-0.151px]">
                Join Waitlist
              </button>
            </div>
          </div>

          <div className="flex absolute left-[385px] top-[326px] w-[316px] h-[26px] justify-center items-center gap-2">
            <div className="text-white/50 font-inter text-base font-normal leading-[26px] tracking-[-0.002px]">
               No credit card required . 7-days free trial
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
