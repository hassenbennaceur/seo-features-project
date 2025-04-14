'use client';

export default function Sponsor() {
 

  return (
    
  <div className="flex w-[1200px] h-[390px] flex-col justify-center items-center gap-[40px]">

    <div className="text-white/70 text-center font-inter text-[16px] not-italic font-normal leading-[26px] tracking-[-0.002px]">
         Trusted by the world’s most innovative teams
    </div>
    <div className="flex flex-col gap-[10px]">
        <div className="flex items-start gap-2.5" >
              <div className="w-[255px] h-[98px] flex flex-col items-start gap-[10px] p-[32px] px-[40px] rounded-[10px] border border-white/15">
                        <img   src="/images/acme-crop.png"  alt="Acme Corp"   className="w-[163px] h-[70px] object-contain"  />
              </div>
              <div className="w-[255px] h-[98px] flex flex-col items-start gap-[10px] p-[32px] px-[40px] rounded-[10px] border border-white/15">
                        <img  src="/images/echo-valley.png"  alt="Echo Valley"   className="w-[163px] h-[70px] object-contain" />
              </div>
              <div className="w-[255px] h-[98px] flex flex-col items-start gap-[10px] p-[32px] px-[40px] rounded-[10px] border border-white/15">
                        <img    src="/images/quantum.png"    alt="Quantum"   className="w-[163px] h-[70px] object-contain" />
              </div>
              <div className="w-[255px] h-[98px] flex flex-col items-start gap-[10px] p-[32px] px-[40px] rounded-[10px] border border-white/15">
                        <img  src="/images/pulse.png"    alt="Pulse"       className="w-[163px] h-[70px] object-contain"  />
              </div>
        </div>
        <div className="flex items-start gap-2.5" >
              <div className="w-[255px] h-[98px] flex flex-col items-start gap-[10px] p-[32px] px-[40px] rounded-[10px] border border-white/15">
                        <img      src="/images/outside.png"    alt="Acme Outside"    className="w-[163px] h-[70px] object-contain"    />
              </div>
              <div className="w-[255px] h-[98px] flex flex-col items-start gap-[10px] p-[32px] px-[40px] rounded-[10px] border border-white/15">
                        <img    src="/images/apex.png"   alt="AcmeApex Outside"  className="w-[163px] h-[70px] object-contain"  />
              </div>
              <div className="w-[255px] h-[98px] flex flex-col items-start gap-[10px] p-[32px] px-[40px] rounded-[10px] border border-white/15">
                        <img   src="/images/celestial.png"  alt="celestial "   className="w-[163px] h-[70px] object-contain"   />
              </div>
              <div className="w-[255px] h-[98px] flex flex-col items-start gap-[10px] p-[32px] px-[40px] rounded-[10px] border border-white/15">
                        <img  src="/images/twice.png" alt="twice " className="w-[163px] h-[70px] object-contain" />
              </div>
        </div>
      </div>
  </div>
  
  );
}
