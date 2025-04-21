'use client';

export default function Sponsor() {
  return (
    <div className="w-full max-w-[1200px] min-h-[390px] flex flex-col justify-center items-center gap-[40px] px-4 mx-auto">
      <div className="text-white/70 text-center font-inter text-[16px] not-italic font-normal leading-[26px] tracking-[-0.002px]">
        Trusted by the world’s most innovative teams
      </div>

      <div className="flex flex-col gap-[10px]">
        {/* Row 1 */}
        <div className="flex flex-wrap justify-center gap-2.5">
          {[
            { src: "/images/acme-crop.png", alt: "Acme Corp" },
            { src: "/images/echo-valley.png", alt: "Echo Valley" },
            { src: "/images/quantum.png", alt: "Quantum" },
            { src: "/images/pulse.png", alt: "Pulse" },
          ].map((logo, index) => (
            <div
              key={index}
              className="w-full sm:w-[255px] h-[98px] flex flex-col items-start gap-[10px] p-[32px] px-[40px] rounded-[10px] border border-white/15"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-[163px] h-[70px] object-contain"
              />
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap justify-center gap-2.5">
          {[
            { src: "/images/outside.png", alt: "Acme Outside" },
            { src: "/images/apex.png", alt: "AcmeApex Outside" },
            { src: "/images/celestial.png", alt: "Celestial" },
            { src: "/images/twice.png", alt: "Twice" },
          ].map((logo, index) => (
            <div
              key={index}
              className="w-full sm:w-[255px] h-[98px] flex flex-col items-start gap-[10px] p-[32px] px-[40px] rounded-[10px] border border-white/15"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-[163px] h-[70px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
