'use client';

import Image from 'next/image';

export default function FeatureSection1() {
  return (
    <div className='w-[1200px] h-[1136px] px-[50px] pt-[80px] pb-[80px] flex flex-col gap-[31px]'>

      <div className="w-full">
        <div className="w-[553px] mx-auto text-white text-center font-medium text-[32px] leading-[38px] tracking-[-0.013px] font-sans">
          Harness the power of AI, making search engine optimization intuitive and effective for all skill levels.
        </div>
      </div>

      <div className="flex items-start gap-[10px]">
            {/* Left (Smaller) Card */}
            <div className="w-[346px] h-[400px] flex-shrink-0 rounded-[10px] border border-white/15" style={{ background: "rgba(0, 0, 0, 0.06)" }}>
              <div className="flex justify-center p-[29px_40px_0_41px]">
                <Image
                  src="/images/Visual.png"// Put the left 3D image here
                  alt="SEO Goal Setting"
                  width={265}
                  height={206}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center w-[127px] h-[17px] flex-shrink-0 text-white font-INTER text-[16px] font-medium leading-[31px] tracking-[-0.002px] mt-[46px] ml-[40px]">
                SEO goal setting
              </div>
              <div className="w-[259px] text-white/70 font-inter text-[16px] font-normal leading-[26px] tracking-[-0.002px] mt-[10px] ml-[40px]">
                 Helps you set and achieve SEO goals with guided assistance.
              </div>
            </div>

            {/* Right (Bigger) Card */}
            <div className="relative w-[744px] h-[400px] flex-shrink-0 rounded-[10px] overflow-hidden">
                <Image
                  src="/images/dashboard-crop.png" // Your dashboard screenshot
                  alt="User-friendly dashboard"
                  fill
                  className="object-contain  translate-x-[50px] translate-y-[40px] scale-200"
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

      <div className="flex items-start gap-[10px]">
          {/* Left (Bigger) Card */}
          <div className="relative w-[744px] h-[400px] flex-shrink-0 rounded-[10px] overflow-hidden">
                <Image
                  src="/images/dashboard-crop2.png" // Your dashboard screenshot
                  alt="User-friendly dashboard"
                  fill
                  className="object-contain  translate-x-[50px] translate-y-[40px] scale-200"
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
            {/* LRight (Smaller) Card */}
            <div className="w-[346px] h-[400px] flex-shrink-0 rounded-[10px] border border-white/15" style={{ background: "rgba(0, 0, 0, 0.06)" }}>
              <div className="flex justify-center p-[10px_62px_0_50px]">
                <Image
                  src="/images/Visual2.png"// Put the left 3D image here
                  alt="SEO Goal Setting"
                  width={234}
                  height={234}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center w-[199px] h-[31px] flex-shrink-0 text-white font-INTER text-[16px] font-medium leading-[31px] tracking-[-0.002px] mt-[30px] ml-[40px]">
                 Smart Keyword Generator
              </div>
              <div className="w-[225px] h-[52px] text-white/70 font-inter text-[16px] font-normal leading-[26px] tracking-[-0.002px] mt-[10px] ml-[40px]">
                  Automatic suggestions and <br/>the best keywords to target.
              </div>
            </div>

            

      </div>


    </div>
   
  );
}

 