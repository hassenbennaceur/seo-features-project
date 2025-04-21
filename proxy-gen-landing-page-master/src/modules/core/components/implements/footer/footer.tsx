import React from "react";
import { FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="w-full flex flex-col lg:flex-row flex-wrap items-start content-start gap-y-10 lg:gap-y-0 lg:gap-x-[483px] border border-white/15 p-[41px_20px] lg:p-[41px_45px] max-w-[1195px] mx-auto">
      <img
        src="/images/logokit-1.png"
        alt="Description"
        width={137.66}
        height={38}
        className="w-[137.66px] h-[38px] shrink-0 rounded-[8px] object-cover"
      />

      <div className="flex flex-wrap gap-y-10 gap-x-[60px] w-full max-w-[430px] lg:flex-nowrap">

        {/* Column: Product */}
        <div className="flex flex-col gap-[20px] w-[67px]">
          <div className="text-white text-[13px] font-medium leading-[26px] tracking-[-0.001px]">Product</div>
          {["Features", "Integration", "Updates", "FAQ", "Pricing"].map((item) => (
            <div key={item} className="text-white/50 text-[13px] font-normal leading-[26px] tracking-[-0.001px]">{item}</div>
          ))}
        </div>

        {/* Column: Company */}
        <div className="flex flex-col gap-[20px] w-[67px]">
          <div className="text-white text-[13px] font-medium leading-[26px] tracking-[-0.001px]">Company</div>
          {["About", "Blog", "Careers", "Manifesto", "Press", "Contact"].map((item) => (
            <div key={item} className="text-white/50 text-[13px] font-normal leading-[26px] tracking-[-0.001px]">{item}</div>
          ))}
        </div>

        {/* Column: Resources */}
        <div className="flex flex-col gap-[20px] w-[67px]">
          <div className="text-white text-[13px] font-medium leading-[26px] tracking-[-0.001px]">Resources</div>
          {["Examples", "Community", "Guides", "Docs", "Press"].map((item) => (
            <div key={item} className="text-white/50 text-[13px] font-normal leading-[26px] tracking-[-0.001px]">{item}</div>
          ))}
        </div>

        {/* Column: Legal */}
        <div className="flex flex-col gap-[20px] w-[67px]">
          <div className="text-white text-[13px] font-medium leading-[26px] tracking-[-0.001px]">Legal</div>
          {["Privacy", "Terms", "Security"].map((item) => (
            <div key={item} className="text-white/50 text-[13px] font-normal leading-[26px] tracking-[-0.001px]">{item}</div>
          ))}
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex items-start gap-[30px] mt-10 lg:mt-0">
        <FaXTwitter className="text-white opacity-40 w-6 h-6" />
        <FaInstagram className="text-white opacity-40 w-6 h-6" />
        <FaYoutube className="text-white opacity-40 w-6 h-6" />
      </div>
    </div>
  );
}
