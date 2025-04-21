'use client';

import Image from 'next/image';

export default function FeatureSection1() {
  return (
    <div className="w-full flex justify-center bg-black px-4">
      <div className="w-full max-w-[1200px] px-4 pt-[80px] pb-[80px] flex flex-col gap-[31px] items-center">
        {/* Title */}
        <div className="w-full">
          <div className="max-w-[553px] mx-auto text-white text-center font-medium text-[32px] leading-[38px] tracking-[-0.013px] font-sans">
            Harness the power of AI, making search engine optimization intuitive and effective for all skill levels.
          </div>
        </div>

        {/* Top Row */}
        <div className="flex flex-col lg:flex-row items-start gap-[10px] w-full justify-center">
          {/* Left (Smaller) Card */}
          <div className="w-full lg:w-[346px] h-[400px] flex-shrink-0 rounded-[10px] border border-white/15 bg-[rgba(0,0,0,0.06)]">
            <div className="flex justify-center pt-[29px] px-[40px]">
              <Image
                src="/images/Visual.png"
                alt="SEO Goal Setting"
                width={265}
                height={206}
                className="object-contain"
              />
            </div>
            <div className="text-white font-INTER text-[16px] font-medium leading-[31px] tracking-[-0.002px] mt-[46px] ml-[40px]">
              SEO goal setting
            </div>
            <div className="text-white/70 font-inter text-[16px] font-normal leading-[26px] tracking-[-0.002px] mt-[10px] ml-[40px] w-[259px]">
              Helps you set and achieve SEO goals with guided assistance.
            </div>
          </div>

          {/* Right (Bigger) Card */}
          <div className="relative w-full lg:w-[744px] h-[400px] flex-shrink-0 rounded-[10px] overflow-hidden">
            <Image
              src="/images/dashboard-crop.png"
              alt="User-friendly dashboard"
              fill
              className="object-contain translate-x-[50px] translate-y-[40px] scale-200"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#361764]"></div>
            <div className="absolute bottom-10 left-10">
              <div className="text-white font-INTER text-[16px] font-medium leading-[31px] tracking-[-0.002px]">
                User-friendly dashboard
              </div>
              <div className="text-white/70 font-INTER text-[16px] font-normal leading-[26px] tracking-[-0.002px] mt-[10px] w-[259px]">
                Perform complex SEO audits and optimizations with a single click.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col-reverse lg:flex-row items-start gap-[10px] w-full justify-center">
          {/* Left (Bigger) Card */}
          <div className="relative w-full lg:w-[744px] h-[400px] flex-shrink-0 rounded-[10px] overflow-hidden">
            <Image
              src="/images/dashboard-crop2.png"
              alt="Visual reports"
              fill
              className="object-contain translate-x-[50px] translate-y-[40px] scale-200"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#361764]"></div>
            <div className="absolute bottom-10 left-10">
              <div className="text-white font-INTER text-[16px] font-medium leading-[31px] tracking-[-0.002px]">
                Visual reports
              </div>
              <div className="text-white/70 font-INTER text-[16px] font-normal leading-[26px] tracking-[-0.002px] mt-[10px] w-[259px]">
                Visual insights into your site’s performance.
              </div>
            </div>
          </div>

          {/* Right (Smaller) Card */}
          <div className="w-full lg:w-[346px] h-[400px] flex-shrink-0 rounded-[10px] border border-white/15 bg-[rgba(0,0,0,0.06)]">
            <div className="flex justify-center pt-[10px] px-[40px]">
              <Image
                src="/images/Visual2.png"
                alt="Smart Keyword Generator"
                width={234}
                height={234}
                className="object-contain"
              />
            </div>
            <div className="text-white font-INTER text-[16px] font-medium leading-[31px] tracking-[-0.002px] mt-[30px] ml-[40px] w-[199px]">
              Smart Keyword Generator
            </div>
            <div className="text-white/70 font-inter text-[16px] font-normal leading-[26px] tracking-[-0.002px] mt-[10px] ml-[40px] w-[225px]">
              Automatic suggestions and <br />the best keywords to target.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
