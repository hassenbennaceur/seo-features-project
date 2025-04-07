"use client";
import { useRef, useEffect, useState } from "react";
import { useCountUp } from "use-count-up";

interface CountUpProps {
  start: number;
  end: number;
  duration?: number;
  separator?: string;
  decimals?: number;
  decimal?: string;
  text?: string;
}

const CountUpComponent: React.FC<CountUpProps> = ({
  start,
  end,
  duration = 2, // Default duration in seconds
  separator = ",",
  decimals = 0, // Number of decimal places
  text = "",
}) => {
  const [isOnViewPort, setIsOnViewPort] = useState(false);
  const elementRef = useRef(null);
  const { value } = useCountUp({
    isCounting: true,
    start,
    end,
    duration,
    easing: "easeOutCubic",
    decimalPlaces: decimals,
    decimalSeparator: separator,
  });
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsOnViewPort(true);
      } else {
        setIsOnViewPort(false);
      }
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [elementRef]);

  return (
    <div className="flex items-center justify-center" ref={elementRef}>
      {isOnViewPort && (
        <>
          <span className="text-3xxl font-black leading-md text-white md:text-3xll xl:!text-[96px]">
            {value}
          </span>
          <span className="text-3xxl font-black leading-md text-white md:text-3xll xl:text-[96px]">
            &nbsp;
            {text}
          </span>
        </>
      )}
    </div>
  );
};

export default CountUpComponent;
