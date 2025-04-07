"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AuthModal from "@/modules/auth/components/auth-modal";
import useSticky from "@/modules/core/hooks/use-sticky";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sticky = useSticky();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header
      className={`left-0 top-0 z-10 w-full px-8 py-8 lg:px-2 lg:py-12 ${
        sticky
          ? "fadeInAnimation header-linear-gradient fixed z-50"
          : "absolute hover:bg-black"
      }`}
    >
      <div className="max-w-auto flex items-center justify-between lg:justify-center lg:gap-20 xl:gap-32 2xl:gap-40">
        <div className="flex items-center">
          <Link href={"/"}>
            <Image
              className="w-36 xl:w-52 2xl:w-60"
              src={"/images/logo.png"}
              width={282}
              height={89}
              alt="logo"
            />
          </Link>
        </div>
        <nav className="hidden items-center lg:flex">
          <ul className="flex items-center space-x-5 xl:space-x-10">
            <li>
              <Link
                href="/#come-funziona"
                className="urbanist text-xl font-semibold leading-sm text-white xl:text-xl 2xl:text-2xl"
              >
                Come funziona?
              </Link>
            </li>
            <li>
              <Link
                href="/#dettagli"
                className="urbanist text-xl font-semibold leading-sm text-white xl:text-xl 2xl:text-2xl"
              >
                Dettagli
              </Link>
            </li>
            <li>
              <Link
                href="/#faq"
                className="urbanist text-xl font-semibold leading-sm text-white xl:text-xl 2xl:text-2xl"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/#prezzo"
                className="urbanist text-xl font-semibold leading-sm text-white xl:text-xl 2xl:text-2xl"
              >
                Prezzo
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="focus:outline-none lg:hidden"
          aria-label="mobile menu"
          onClick={toggleMobileMenu}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M28.9 18.619H23.8C20.9831 18.619 18.7 20.7934 18.7 23.4762V28.3333C18.7 31.0161 20.9831 33.1905 23.8 33.1905H28.9C31.7169 33.1905 34 31.0161 34 28.3333V23.4762C34 20.7934 31.7169 18.619 28.9 18.619ZM10.2 18.619H5.1C2.2831 18.619 0 20.7934 0 23.4762V28.3333C0 31.0161 2.2831 33.1905 5.1 33.1905H10.2C13.0169 33.1905 15.3 31.0161 15.3 28.3333V23.4762C15.3 20.7934 13.0169 18.619 10.2 18.619ZM28.9 0.809509H23.8C20.9831 0.809509 18.7 2.98389 18.7 5.66665V10.5238C18.7 13.2066 20.9831 15.3809 23.8 15.3809H28.9C31.7169 15.3809 34 13.2066 34 10.5238V5.66665C34 2.98389 31.7169 0.809509 28.9 0.809509ZM15.3 5.66665V10.5238C15.3 13.2066 13.0169 15.3809 10.2 15.3809H5.1C2.2831 15.3809 0 13.2066 0 10.5238V5.66665C0 2.98389 2.2831 0.809509 5.1 0.809509H10.2C13.0169 0.809509 15.3 2.98389 15.3 5.66665Z"
              fill="white"
            />
          </svg>
        </button>
        {!isMobileMenuOpen && (
          <div className="hidden items-center lg:flex">
            <AuthModal />
          </div>
        )}
      </div>
      {isMobileMenuOpen && (
        <div className="flex-column mobileMenuWrap fixed left-0 top-0 flex h-[500px] w-full flex-wrap justify-between px-10 py-8 lg:hidden">
          <nav className="flex w-full items-start justify-between">
            <ul className="mb-12">
              <li className="mb-4">
                <Link
                  href="/#come-funziona"
                  className="urbanist text-4lg font-semibold leading-sm text-white"
                >
                  Come funziona?
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/#dettagli"
                  className="urbanist text-4lg font-semibold leading-sm text-white"
                >
                  Dettagli
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/#faq"
                  className="urbanist text-4lg font-semibold leading-sm text-white"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/#prezzo"
                  className="urbanist text-4lg font-semibold leading-sm text-white"
                >
                  Prezzo
                </Link>
              </li>
            </ul>
            <button onClick={toggleMobileMenu} aria-label="mobile menu">
              <svg
                width="28"
                height="28"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.4469 0.55316C32.7094 -0.184387 31.5135 -0.184387 30.776 0.55316L17 14.3292L3.22401 0.55316C2.48648 -0.184387 1.29069 -0.184387 0.553161 0.55316C-0.184387 1.29069 -0.184387 2.48648 0.553161 3.22401L14.3292 17L0.553199 30.7759C-0.184349 31.5135 -0.184349 32.7092 0.553199 33.4469C1.29073 34.1844 2.48652 34.1844 3.22405 33.4469L17 19.6708L30.776 33.4469C31.5135 34.1844 32.7094 34.1844 33.4469 33.4469C34.1844 32.7092 34.1844 31.5135 33.4469 30.7761L19.6708 17L33.4469 3.22401C34.1844 2.48648 34.1844 1.29069 33.4469 0.55316Z"
                  fill="white"
                />
              </svg>
            </button>
          </nav>
          <div className="flex w-full flex-wrap items-center justify-center text-center">
            <AuthModal />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
