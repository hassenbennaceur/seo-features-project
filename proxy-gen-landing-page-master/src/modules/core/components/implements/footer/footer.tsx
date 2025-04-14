import React from "react";
import { FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";


export default function Footer() {
  return (
    <div className="flex w-[1195px] p-[41px_45px] items-start content-start gap-x-[483px] gap-y-0 flex-wrap border border-white/15">
        <img
          width={137.66}
          height={38}
          src="/images/logokit-1.png"
          alt="Description"
          className="w-[137.66px] h-[38px] shrink-0 rounded-[8px] object-cover"
        />
        <div className="flex justify-center items-start gap-[60px] w-[430px] h-[302px]">
            <div className="flex justify-center items-start gap-[60px] w-[109px] h-[302px]">
                <div className="flex flex-col justify-center items-start gap-[20px] w-[67px] h-[256px]">
                  <div className="text-white font-inter text-[13px] not-italic font-medium leading-[26px] tracking-[-0.001px]">
                      Product
                  </div>
                  <div className="text-white/50 font-inter text-[13px] not-italic font-normal leading-[26px] tracking-[-0.001px]">
                    Features
                  </div>
                  <div className="text-white/50 font-inter text-[13px] not-italic font-normal leading-[26px] tracking-[-0.001px]">
                    Integration
                  </div>
                  <div className="text-white/50 font-inter text-[13px] not-italic font-normal leading-[26px] tracking-[-0.001px]">
                    Updates
                  </div>
                  <div className="text-white/50 font-inter text-[13px] not-italic font-normal leading-[26px] tracking-[-0.001px]">
                    FAQ
                  </div>
                  <div className="text-white/50 font-inter text-[13px] not-italic font-normal leading-[26px] tracking-[-0.001px]">
                    Pricing
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-[20px] w-[67px] h-[302px]">
                  <div className="text-white font-inter text-[13px] not-italic font-medium leading-[26px] tracking-[-0.001px]">
                      Company
                  </div>
                  <div className="text-white/50 font-inter text-[13px] not-italic font-normal leading-[26px] tracking-[-0.001px]">
                    About
                  </div>
                  <div className="text-white/50 font-inter text-[13px] not-italic font-normal leading-[26px] tracking-[-0.001px]">
                    Blog
                  </div>
                  <div className="text-white/50 font-inter text-[13px] not-italic font-normal leading-[26px] tracking-[-0.001px]">
                    Careers
                  </div>
                  <div className="text-white/50 font-inter text-[13px] not-italic font-normal leading-[26px] tracking-[-0.001px]">
                    Manifesto
                  </div>
                  <div className="text-white/50 font-inter text-[13px] not-italic font-normal leading-[26px] tracking-[-0.001px]">
                    Press
                  </div>
                  <div className="text-white/50 font-inter text-[13px] not-italic font-normal leading-[26px] tracking-[-0.001px]">
                    Contact
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-[20px] w-[67px] h-[256px]">
                  <div className="text-white font-inter text-[13px] not-italic font-medium leading-[26px] tracking-[-0.001px]">
                      Resources
                  </div>
                  <div className="text-white/50 font-inter text-[13px] not-italic font-normal leading-[26px] tracking-[-0.001px]">
                    Examples
                  </div>
                  <div className="text-white/50 font-inter text-[13px] not-italic font-normal leading-[26px] tracking-[-0.001px]">
                    Community
                  </div>
                  <div className="text-white/50 font-inter text-[13px] not-italic font-normal leading-[26px] tracking-[-0.001px]">
                    Guides
                  </div>
                  <div className="text-white/50 font-inter text-[13px] not-italic font-normal leading-[26px] tracking-[-0.001px]">
                    Docs
                  </div>
                  <div className="text-white/50 font-inter text-[13px] not-italic font-normal leading-[26px] tracking-[-0.001px]">
                    Press
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-[20px] w-[67px] h-[302px]">
                  <div className="text-white font-inter text-[13px] not-italic font-medium leading-[26px] tracking-[-0.001px]">
                      Legal
                  </div>
                  <div className="text-white/50 font-inter text-[13px] not-italic font-normal leading-[26px] tracking-[-0.001px]">
                    Privacy
                  </div>
                  <div className="text-white/50 font-inter text-[13px] not-italic font-normal leading-[26px] tracking-[-0.001px]">
                    Terms
                  </div>
                  <div className="text-white/50 font-inter text-[13px] not-italic font-normal leading-[26px] tracking-[-0.001px]">
                    Security
                  </div>
                </div>
            </div>
        </div>
        <div className="flex items-start gap-[30px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g opacity="0.4">
            <path d="M20.1562 20.6109C20.0917 20.7286 19.9967 20.8267 19.8813 20.8951C19.7659 20.9636 19.6342 20.9998 19.5 21H15C14.8738 21 14.7496 20.9681 14.639 20.9073C14.5284 20.8465 14.4349 20.7587 14.3672 20.6522L10.5712 14.6869L5.055 20.7544C4.92053 20.8988 4.73454 20.9845 4.53735 20.9927C4.34017 21.0009 4.14769 20.9311 4.00163 20.7984C3.85558 20.6657 3.76773 20.4807 3.75713 20.2836C3.74653 20.0866 3.81403 19.8933 3.945 19.7456L9.73594 13.3706L3.86719 4.15313C3.79491 4.03973 3.75444 3.90898 3.75004 3.77458C3.74563 3.64018 3.77744 3.50707 3.84213 3.38918C3.90683 3.27129 4.00203 3.17296 4.11777 3.10449C4.23351 3.03603 4.36552 2.99993 4.5 3H9C9.12622 3.00004 9.2504 3.03194 9.36102 3.09274C9.47164 3.15353 9.56512 3.24127 9.63281 3.34781L13.4287 9.31312L18.945 3.24562C19.0795 3.10117 19.2655 3.01555 19.4626 3.00731C19.6598 2.99907 19.8523 3.06888 19.9984 3.20161C20.1444 3.33435 20.2323 3.51929 20.2429 3.71636C20.2535 3.91343 20.186 4.10674 20.055 4.25438L14.2641 10.6247L20.1328 19.8478C20.2047 19.9613 20.2448 20.0919 20.2489 20.2262C20.253 20.3604 20.221 20.4933 20.1562 20.6109Z" fill="white"/>
            </g>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g opacity="0.4">
              <path d="M16.5 2.25H7.5C6.10807 2.25149 4.77358 2.80509 3.78933 3.78933C2.80509 4.77358 2.25149 6.10807 2.25 7.5V16.5C2.25149 17.8919 2.80509 19.2264 3.78933 20.2107C4.77358 21.1949 6.10807 21.7485 7.5 21.75H16.5C17.8919 21.7485 19.2264 21.1949 20.2107 20.2107C21.1949 19.2264 21.7485 17.8919 21.75 16.5V7.5C21.7485 6.10807 21.1949 4.77358 20.2107 3.78933C19.2264 2.80509 17.8919 2.25149 16.5 2.25ZM12 16.5C11.11 16.5 10.24 16.2361 9.49993 15.7416C8.75991 15.2471 8.18314 14.5443 7.84254 13.7221C7.50195 12.8998 7.41283 11.995 7.58647 11.1221C7.7601 10.2492 8.18868 9.44736 8.81802 8.81802C9.44736 8.18868 10.2492 7.7601 11.1221 7.58647C11.995 7.41283 12.8998 7.50195 13.7221 7.84254C14.5443 8.18314 15.2471 8.75991 15.7416 9.49993C16.2361 10.24 16.5 11.11 16.5 12C16.4988 13.1931 16.0243 14.337 15.1806 15.1806C14.337 16.0243 13.1931 16.4988 12 16.5ZM17.625 7.5C17.4025 7.5 17.185 7.43402 17 7.3104C16.815 7.18679 16.6708 7.01109 16.5856 6.80552C16.5005 6.59995 16.4782 6.37375 16.5216 6.15552C16.565 5.93729 16.6722 5.73684 16.8295 5.5795C16.9868 5.42217 17.1873 5.31502 17.4055 5.27162C17.6238 5.22821 17.85 5.25049 18.0555 5.33564C18.2611 5.42078 18.4368 5.56498 18.5604 5.74998C18.684 5.93499 18.75 6.1525 18.75 6.375C18.75 6.67337 18.6315 6.95952 18.4205 7.1705C18.2095 7.38147 17.9234 7.5 17.625 7.5ZM15 12C15 12.5933 14.8241 13.1734 14.4944 13.6667C14.1648 14.1601 13.6962 14.5446 13.1481 14.7716C12.5999 14.9987 11.9967 15.0581 11.4147 14.9424C10.8328 14.8266 10.2982 14.5409 9.87868 14.1213C9.45912 13.7018 9.1734 13.1672 9.05764 12.5853C8.94189 12.0033 9.0013 11.4001 9.22836 10.8519C9.45542 10.3038 9.83994 9.83524 10.3333 9.50559C10.8266 9.17595 11.4067 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12Z" fill="white"/>
            </g>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g opacity="0.4">
              <path d="M21.9684 6.5175C21.8801 6.17189 21.7109 5.85224 21.4747 5.58491C21.2385 5.31758 20.9421 5.11024 20.61 4.98C17.3962 3.73875 12.2812 3.75 12 3.75C11.7188 3.75 6.60375 3.73875 3.39 4.98C3.0579 5.11024 2.76153 5.31758 2.52534 5.58491C2.28915 5.85224 2.1199 6.17189 2.03156 6.5175C1.78875 7.45313 1.5 9.16313 1.5 12C1.5 14.8369 1.78875 16.5469 2.03156 17.4825C2.11977 17.8283 2.28895 18.1481 2.52515 18.4156C2.76136 18.6831 3.0578 18.8906 3.39 19.0209C6.46875 20.2088 11.2875 20.25 11.9381 20.25H12.0619C12.7125 20.25 17.5341 20.2088 20.61 19.0209C20.9422 18.8906 21.2386 18.6831 21.4748 18.4156C21.711 18.1481 21.8802 17.8283 21.9684 17.4825C22.2113 16.545 22.5 14.8369 22.5 12C22.5 9.16313 22.2113 7.45313 21.9684 6.5175ZM15.0553 12.6113L11.3053 15.2363C11.1931 15.3148 11.0616 15.3612 10.9249 15.3703C10.7883 15.3794 10.6517 15.351 10.5301 15.288C10.4085 15.225 10.3064 15.1299 10.235 15.013C10.1636 14.8962 10.1256 14.762 10.125 14.625V9.375C10.125 9.2378 10.1627 9.10324 10.2339 8.98597C10.3051 8.86869 10.4071 8.77319 10.5289 8.70987C10.6506 8.64655 10.7873 8.61783 10.9242 8.62683C11.0611 8.63584 11.1929 8.68222 11.3053 8.76094L15.0553 11.3859C15.154 11.4551 15.2345 11.547 15.2901 11.6539C15.3457 11.7608 15.3747 11.8795 15.3747 12C15.3747 12.1205 15.3457 12.2392 15.2901 12.3461C15.2345 12.453 15.154 12.5449 15.0553 12.6141V12.6113Z" fill="white"/>
            </g>
          </svg>
        </div>
    </div>

  );
}
