'use client';

import Image from 'next/image';

export default function TestimonialsSection() {
  return (
<div className="flex flex-col items-center gap-[28px] px-[90px] py-[78px]">
  <div className="flex flex-col justify-center w-[289px] h-[48px] text-white text-center font-inter text-[56px] font-medium leading-[65px] tracking-[-0.84px]">
    Our clients
  </div>

  <div className="w-[433px] text-white text-center font-sans text-[20px] font-normal leading-[31px] tracking-[-0.002px]">
    Hear firsthand how our solutions have <br /> boosted online success for users like you.
  </div>

  <div className="w-[990px] h-[401px] relative">
    {/* Horizontal Line Top */}
    <div className="h-[86px]"></div>

    <div
      className="w-[990px] h-[1px] opacity-60"
      style={{
        background: "linear-gradient(90deg, #141315 0%, #FFF 16.5%, #EAEAEA 86.5%, #020103 100%)",
      }}
    ></div>

    {/* Vertical Lines */}
    <div className="absolute inset-0">
      <div
        className="absolute top-0 bottom-0"
        style={{
          left: "202px", // First vertical line
          width: "1px",
          height: "401px",
          opacity: 0.6,
          background: "linear-gradient(180deg, #141315 0%, #FFF 16.5%, #EAEAEA 86.5%, #020103 100%)",
        }}
      ></div>
      <div
       className="absolute top-0 bottom-0"
       style={{
         left: "419px", // Second vertical line
         width: "1px",
         height: "401px",
         opacity: 0.6,
         background: "linear-gradient(180deg, #141315 0%, #FFF 16.5%, #EAEAEA 86.5%, #020103 100%)",
       }}   
      ></div>
    </div>

    {/* Content Area */}
    <div className="h-[229px] relative">
      {/* Blur Circle */}
      <div className="absolute left-[170px] w-[312px] h-[234px] rounded-full bg-[#8C45FF]/50 blur-[127px]"></div>
      <div className="absolute top-[50%] left-[202px] translate-y-[-50%] w-[217px] h-[229px] rounded-[24px] border-[1px] border-[#8C45FF] p-[4px]">
      <img
        width={217}
        height={234}
        src="/images/Avatar.png"
        alt="Client"
        className="w-full h-full rounded-[20px] object-cover"
      />
      </div>
      <div className="flex flex-col items-start gap-[20px] absolute right-[100px] top-1/2 transform -translate-y-1/2">
        <div className="w-[339px] text-white font-inter text-[23px] not-italic font-medium leading-[34px] tracking-[-0.002px]">
          “This product has completely transformed how I manage my projects and deadlines”
        </div>
        <div className="flex flex-col justify-center flex-shrink-0 w-[127px] h-[17px] text-white font-inter text-[16px] not-italic font-normal leading-[26px] tracking-[-0.002px]">
          Talia Taylor
        </div>
        <div className="w-[289px] text-white/70 font-inter text-[14px] not-italic font-normal leading-[26px] tracking-[-0.001px]">
           Digital Marketing Director @ Quantum
        </div>


      </div>


     

      
      
      {/* Put your testimonial content here later */}
    </div>

    {/* Horizontal Line Bottom */}
    <div
      className="w-[990px] h-[1px] opacity-60"
      style={{
        background: "linear-gradient(90deg, #141315 0%, #FFF 16.5%, #EAEAEA 86.5%, #020103 100%)",
      }}
    ></div>
  </div>
</div>

  );
}
