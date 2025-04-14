'use client';


export default function Dashboard() {
  return (
    
    <div className="w-[1200px] min-h-screen flex flex-col items-center bg-black text-white px-4">
  
  {/* Title + Button */}
  <div className="flex flex-col items-center text-center gap-6 mt-20">
    
    {/* Badge */}
    <div className="px-[14px] py-1 flex items-center justify-center rounded-full border border-white/20 bg-black text-purple-400 text-xs font-semibold">
      <span className="mr-[6px] text-purple-300">NEW</span> Latest integration just arrived
    </div>

    {/* Heading */}
    <h1 className="font-inter text-[82px] font-medium leading-[84px] tracking-[-4px] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#B372CF]">
      Boost your <br /> rankings with AI.
    </h1>

    {/* Subtext */}
    <p className="max-w-[544px] text-white text-[20px] leading-[31px]">
      Elevate your site’s visibility effortlessly with AI, where <br /> smart technology meets user-friendly SEO tools.
    </p>

    {/* Button */}
    <button className="mt-4 px-6 py-3 rounded-[8px] bg-white text-black font-medium text-[15px] leading-[31px]">
      Start for free
    </button>
  </div>

  {/* Dashboard */}
  <div className="gap-[40px] mt-16 w-[1120px] h-[683px] rounded-[10px] p-[11px] border border-white/10 bg-gradient-to-l from-[#0D0718] via-transparent to-[#0B0614] shadow-[0px_-20px_70px_0px_rgba(140,69,255,0.25),0px_-19px_70px_0px_rgba(140,69,255,0.40)]">
    <div 
      className="w-full h-full rounded-[8px] border border-white/10 bg-top bg-no-repeat bg-contain" 
      style={{ backgroundImage: "url('/images/dashboard.png')" }}
    >
    </div>
    
  </div>

</div>
                                                                                                 
 
  );
}
