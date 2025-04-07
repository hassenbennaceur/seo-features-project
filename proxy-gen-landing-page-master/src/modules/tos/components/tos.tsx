/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Typography } from "@/modules/core/components/typography";
import Image from "next/image";
import Link from "next/link";

const TOS = () => {
  return (
    <section className="tosGradient flex w-screen flex-col items-center justify-start gap-[76px] px-[32px] py-[60px] sm:px-[120px] sm:py-[104px]">
      <div className="flex flex-col gap-1">
        <Typography
          Tag="h2"
          variant={"title"}
          className="urbanist text-center !text-xxl font-black uppercase !leading-9 text-black lg:!text-3xxl lg:!leading-[60px]"
        >
          TERMINI E CONDIZIONI
        </Typography>
        <Typography
          Tag="span"
          className="cousine text-center text-sm uppercase !leading-5 tracking-[0.625em] text-black sm:leading-7 lg:!text-base"
        >
          Ultimo aggiornamento: 15/02/2024
        </Typography>
      </div>
      <div className="flex w-full flex-col gap-7 rounded-[40px] bg-[#F8F0FF] px-[40px] py-[30px] shadow-lg sm:gap-10 sm:px-[102px] sm:py-[72px]">
        <Typography
          Tag="span"
          className="urbanist text-left text-4lg font-black leading-8 text-black sm:text-2xl sm:leading-[60px]"
        >
          1. Introduction
        </Typography>
        <div className="flex flex-col gap-4 sm:gap-6">
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            Welcome to iProxy.online (“Company”, “we”, “our”, “us”, “iProxy”)!
          </Typography>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            These Terms of Service (“Terms”, “Terms of Service”) govern Customer
            use of our software service available at{" "}
            <Link href={"/"}>https://genproxy.com</Link> and our mobile
            application iProxy – Mobile Proxies (together or individually
            “Service”) operated by iProxy.
          </Typography>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            Our Privacy Policy also governs Customer use of our Service and
            explains how we collect, safeguard and disclose information that
            results from Customer use of our web pages. Please read it here{" "}
            <Link href={"/privacy"}>https://genproxy.com/privacy</Link> .
          </Typography>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            Customer agreement with us includes these Terms and our Privacy
            Policy (“Agreements”). Customer acknowledges that he/she has read
            and understood Agreements and agrees to be bound by them. If
            Customer does not agree with (or cannot comply with) Agreements,
            then he/she may not use the Service.
          </Typography>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            These Terms apply to all visitors, users and others who wish to
            access or use the Service.
          </Typography>
        </div>
        <div className="flex flex-col gap-2">
          <Typography
            Tag="span"
            className="urbanist text-left text-4lg font-black leading-8 text-black sm:text-2xl sm:leading-[60px]"
          >
            2. About our Service
          </Typography>
          <Typography
            Tag="span"
            className="cousine text-left text-sm font-normal uppercase leading-5 tracking-[0.625em] text-black sm:text-base sm:leading-7"
          >
            2.1 Description of services
          </Typography>
        </div>
        <div className="mb-20 flex flex-col gap-4 sm:gap-6">
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            2.1.1 iProxy provides the Service of software infrastructure (
            <Link className="border-b border-black" href={"/"}>
              Software as a Service
            </Link>{" "}
            or SaaS). iProxy does not engage in the creation, generation, sale,
            or provision of mobile proxy servers. iProxy solely provides its
            Сustomers with the infrastructure to independently create and
            configure their own mobile proxies on their Android devices. Using a
            single Android device, a customer can establish one proxy access,
            which allows them to change their IP address. However, it's
            important to note that regardless of the IP address change, the
            geolocation of this IP address will always correspond to the
            location of the phone. (For more detailed information, you can refer
            to our YouTube video{" "}
            <Link className="border-b border-black" href={"/"}>
              https://www.youtube.com/watch?v=4TRrE0ZOb-M&ab_channel=iProxy.onlineWorldWide
            </Link>
            ). The Service and its functionalities consist of:
          </Typography>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            2.1.1.1. Mobile application for cell phones that are working on the
            operational system Android 5+.
          </Typography>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            2.1.1.2. Web application located by address{" "}
            <Link className="border-b border-black" href={"/"}>
              https://iproxy.online/app/
            </Link>
          </Typography>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            2.1.1.3. Open VPN application for Android platform{" "}
            <Link className="border-b border-black" href={"/"}>
              https://play.google.com/store/apps/detailsid=de.blinkt.openvpn
            </Link>
            . (Please also read the{" "}
            <Link className="border-b border-black" href={"/"}>
              Privacy Policy
            </Link>{" "}
            of OpenVPN).
          </Typography>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            2.1.1.4. Telegram bot{" "}
            <Link className="border-b border-black" href={"/"}>
              @iproxy_online_bot
            </Link>
          </Typography>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            2.1.2 iProxy service supports three types of connections: HTTP,
            SOCKS5, and OpenVPN (OVPN)
          </Typography>
          <ul className=" ml-3 flex list-inside list-disc flex-col gap-2 text-black">
            <li>
              <Typography
                Tag="span"
                variant={"text"}
                className="redhat text-left text-sm leading-6 text-black sm:text-xl sm:leading-[36px]"
              >
                HTTP: HTTP (Hypertext Transfer Protocol) is a protocol used for
                transmitting data over the internet. It is commonly used for
                website browsing and accessing web resources. iProxy allows
                users to establish secure and encrypted HTTP connections for
                browsing or accessing online content.
              </Typography>
            </li>
            <li>
              <Typography
                Tag="span"
                variant={"text"}
                className="redhat text-left text-sm leading-6 text-black sm:text-xl sm:leading-[36px]"
              >
                SOCKS5: SOCKS5 is a protocol used for routing network packets
                between a client and a server. It provides authentication and
                encryption capabilities, making it ideal for applications that
                require secure data transmission. iProxy enables users to
                establish SOCKS5 connections, allowing them to route network
                traffic through a remote server.
              </Typography>
            </li>
            <li>
              <Typography
                Tag="span"
                variant={"text"}
                className="redhat text-left text-sm leading-6 text-black sm:text-xl sm:leading-[36px]"
              >
                OpenVPN (OVPN): OpenVPN is an open-source virtual private
                network (VPN) software. It creates secure connections between
                computers or networks over the internet. iProxy supports OpenVPN
                connections, allowing users to establish encrypted and secure
                connections to access resources or browse the internet
                privately.
              </Typography>
            </li>
          </ul>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            2.1.3 The Service and its functionalities are provided on an “as is”
            and “as available” basis and all further developments exceeding the
            scope provided in this Terms of Service will be agreed upon
            separately. Please read also our{" "}
            <Link className="border-b border-black" href={"/"}>
              web page
            </Link>{" "}
            for additional information.
          </Typography>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            2.1.4 In order to prevent unauthorized user actions, IProxy reserves
            the right to restrict access to certain websites using our service.
            These websites may include government websites, loan application
            sites, or other sites at our discretion.
          </Typography>
          <Typography
            Tag="span"
            className="cousine text-left text-sm font-normal uppercase leading-5 tracking-[0.625em] text-black sm:text-base sm:leading-7"
          >
            2.2 Use of service
          </Typography>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            2.2.1 Service is intended only for access and uses by individuals at
            least eighteen (18) years old. By accessing or using any of our
            Services, Customer warrant and represent that he/she are at least
            eighteen (18) years of age and/or he/she have the full authority,
            right, and capacity to enter into this Agreement and abide by all of
            the terms and conditions of Terms, but if it is not, then he/she is
            prohibited from both the access and usage of Service.
          </Typography>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            2.2.2 Customers must use mobile phones to use our Service, download
            our mobile application and create an account to subscribe to our
            Services. Please read additional guidelines on our website.
          </Typography>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            2.2.3 Customer acknowledges that the purpose of using iProxy Service
            is entirely on Customer’s responsibility and such purpose must be in
            accordance with section 3. “Prohibited Uses” of this Terms of
            Service.
          </Typography>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            2.2.4 Customer acknowledges that he/she is entirely responsible for
            applicable mobile network operator (connection service provider)
            terms of service. Such terms may contain the restrictions of sharing
            or reselling the network operator’s services, data and connections.
            iProxy does not verify such restrictions and cannot be held
            responsible for breaching such terms as it only provides the
            software infrastructure. Customer is fully responsible for any
            restrictions, posed penalties, financial and other damages
            applicable to the proxy he/she creates.
          </Typography>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            2.2.5 Customer will be provided with an account on the Platform,
            access to which is restricted using the login password specified
            when creating the account, as described in section 2.3. “Accounts”.
          </Typography>
          <Typography
            Tag="span"
            className="cousine text-left text-sm font-normal uppercase leading-5 tracking-[0.625em] text-black sm:text-base sm:leading-7"
          >
            2.3 Accounts
          </Typography>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            2.3.1 Accounts may be registered only by adults that fulfill the
            requirements described in section 2.2.1.
          </Typography>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            2.3.2 The Account and the Service are protected by information
            security safeguards by us and our service providers according to the
            risk level posed to such platforms and services. Customer data, such
            as passwords, are protected by Argon2 encryption.
          </Typography>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            2.3.3 To create a iProxy account Customer must:
          </Typography>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            2.3.3.1. open official iProxy.online web page{" "}
            <Link className="border-b border-black" href={"/"}>
              https://iproxy.online
            </Link>{" "}
            and start sign-up process;
          </Typography>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            2.3.3.2. complete the sign-up form on the web page;
          </Typography>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            2.3.3.3. accept these Terms by clicking “Sign up”;
          </Typography>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            2.3.3.4. download application from Google Play (or APK file);
          </Typography>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            2.3.3.5. Open the iProxy application and login to your account;
          </Typography>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            2.3.3.6. To complete setup follow the on-screen instructions to
            allow the application to access the necessary functions or settings
            on your device according to the video instructions:{" "}
            <Link className="border-b border-black" href={"/"}>
              https://iproxy.online/blog/guide-for-setting-up-mobile-proxies-in-iproxyonline
            </Link>
          </Typography>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            2.3.4 Customer responsibilities when creating and managing iProxy
            account:
          </Typography>
          <ul className=" ml-3 flex list-inside list-disc flex-col gap-2 text-black">
            <li>
              <Typography
                Tag="span"
                variant={"text"}
                className="redhat text-left text-sm leading-6 text-black sm:text-xl sm:leading-[36px]"
              >
                When creating an account with us, Customer guarantees that the
                information he/she provides is accurate, complete, and current
                at all times. Inaccurate, incomplete, or obsolete information
                may result in the immediate termination of Customer account on
                Service (also described in section 15. „Termination").
              </Typography>
            </li>
            <li>
              <Typography
                Tag="span"
                variant={"text"}
                className="redhat text-left text-sm leading-6 text-black sm:text-xl sm:leading-[36px]"
              >
                Customer may not use as a username the name of another person or
                entity or that is not lawfully available for use, a name or
                trademark that is subject to any rights of another person or
                entity other than the Customer, without appropriate
                authorization. Customer may not use as a username any name that
                is offensive, vulgar or obscene. We reserve the right to refuse
                Service, terminate accounts, remove or edit content, or cancel
                orders in our sole discretion.
              </Typography>
            </li>
            <li>
              <Typography
                Tag="span"
                variant={"text"}
                className="redhat text-left text-sm leading-6 text-black sm:text-xl sm:leading-[36px]"
              >
                Customer is responsible for maintaining the confidentiality of
                his/her account and password, including but not limited to the
                restriction of access to his/her computer and/or account.
              </Typography>
            </li>
            <li>
              <Typography
                Tag="span"
                variant={"text"}
                className="redhat text-left text-sm leading-6 text-black sm:text-xl sm:leading-[36px]"
              >
                Customer agrees to accept responsibility for any and all
                activities or actions that occur under his/her account and
                password, whether his/her password is with our Service or a
                third-party service.
              </Typography>
            </li>
            <li>
              <Typography
                Tag="span"
                variant={"text"}
                className="redhat text-left text-sm leading-6 text-black sm:text-xl sm:leading-[36px]"
              >
                Customer must notify us immediately upon becoming aware of or
                suspects of any breach of security or unauthorized use of
                his/her account through the official contacts provided under the
                section 20. “Contacts”.
              </Typography>
            </li>
          </ul>
          <Typography
            Tag="span"
            className="cousine text-left text-sm font-normal uppercase leading-5 tracking-[0.625em] text-black sm:text-base sm:leading-7"
          >
            2.4 Know Your Customer
          </Typography>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            iProxy performs Customer background checks (Know Your Customer
            „KYC") procedures in certain situations at our sole discretion or
            when required by law. We give Customer further information on the
            KYC process if such needs arise. For the KYC process we use a third
            party service provider, which means that certain information
            regarding Customer needs to be transferred to such a service
            provider for the purpose of identity check (
            <Link className="border-b border-black" href={"/"}>
              https://sumsub.com/
            </Link>
            ), international sanctions lists check or other legally binding
            background checks for iProxy.
          </Typography>
          <Typography
            Tag="span"
            className="cousine text-left text-sm font-normal uppercase leading-5 tracking-[0.625em] text-black sm:text-base sm:leading-7"
          >
            2.5 Team mode
          </Typography>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            2.5.1 iProxy offers the option of collaborative management of proxy
            accesses for multiple Customers. This feature is available in the
            settings of each individual proxy access under the "Pro" section
            when the "Team" mode is enabled.
          </Typography>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            2.5.2 With this feature, Customers can grant access to manage
            specific proxy connections to another user or users by providing
            their iProxy account login. Once added, another user will have the
            proxy access in their connection list and will be able to manage it,
            except for paying and deleting the proxy connection.
          </Typography>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            2.5.3 Each Customer has the ability to remove himself from the team
            access to the connection.
          </Typography>
          <Typography
            Tag="p"
            variant={"text"}
            className="redhat text-left text-base leading-5 text-black sm:max-w-[1476px] sm:text-xl  sm:leading-[36px]"
          >
            2.5.4 The payment for such proxy access can only be made by the
            owner of proxy connections, and other team members cannot make
            payment or extend the tariff.
          </Typography>
        </div>
        <div className="privacyCard sm:px-auto w-full rounded-[40px] px-[50px] py-8 sm:py-[18px]">
          <div className="mx-auto flex flex-col items-center justify-center gap-9 sm:flex-row sm:gap-[238px]">
            <div className="flex flex-col items-center gap-4 sm:items-start sm:gap-8">
              <Typography
                Tag="h2"
                className="urbanist max-w-[200px] text-center text-4lg font-black leading-[30px] text-white sm:max-w-none sm:text-left sm:text-2xl sm:leading-[60px]"
              >
                Dai un occhiata alla nostra Privacy Policy
              </Typography>
              <Link href={"/privacy"}>
                <button
                  aria-label="privacy button"
                  className="bg-transparant urbanist px-auto w-[160px] rounded-[25px] border border-solid border-white text-base font-bold uppercase leading-[50px] sm:w-[256px] sm:rounded-[70px] sm:text-xl"
                >
                  Privacy policy
                </button>
              </Link>
            </div>
            <Image
              className="w-60 xl:w-[352px]"
              src={"/images/tos/privacy.webp"}
              width={352}
              height={234}
              alt="privacy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TOS;
