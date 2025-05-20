"use client"

import { FaPlus } from "react-icons/fa6";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import managementData from "@/data/managementData";
import { Inter } from "next/font/google";
import { useRef } from "react";


const inter = Inter({ subsets: ["latin"] });

export default function About() {

  const scrollRef = useRef(null);

  const scrollToSection = (id) => {
    const container = scrollRef.current;
    const target = document.getElementById(id);
  
    if (container && target) {
      const containerTop = container.getBoundingClientRect().top;
      const targetTop = target.getBoundingClientRect().top;
      const offset = targetTop - containerTop + container.scrollTop - 20; // fine-tune offset as needed
  
      container.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };
  
  return (
    <main>
      <section className="pt-10 sm:pt-20 md:pt-30 px-4 sm:px-6 md:px-10">
        <div className="max-w-sm">
          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl md:font-semibold">
            At the Core of Nigeria's Trade Transformation
          </h1>
          <div className="w-full sm:w-72 md:w-80 pt-4 sm:pt-6 md:pt-8">
            <p>
              Empowering Nigerian exportes with financing and support to thrive
              in global markets.
            </p>
          </div>
        </div>
      </section>
      <div className="relative bg-[url('/images/aboutBg.png')] bg-no-repeat bg-cover w-full h-[515px] mt-[71px]"></div>
      <aside className="px-4 sm:px-10 md:px-20 flex flex-col lg:flex-row gap-10 lg:gap-14">
        <section className="w-full lg:w-[30%]">
          <div className="space-y-3 pt-10 lg:pt-[111px]">
            <h2 className="font-semibold">About Us</h2>
            <ul className="text-[#A39F9F] font-normal text-base sm:text-lg md:text-[20px] space-y-2 cursor-pointer">
            <li onClick={() => scrollToSection('board-members')}>Board members</li>
            <li onClick={() => scrollToSection('management')}>Management Team</li>
            <li onClick={() => scrollToSection('core')}>Core Values</li>
            <li onClick={() => scrollToSection('csb')}>CSB</li>
            <li onClick={() => scrollToSection('development')}>Development Initiative</li>
            <li onClick={() => scrollToSection('test')}>Testimonials</li>
            </ul>
          </div>
        </section>
        <section ref={scrollRef} id="scrollable-section" className="w-full lg:w-[70%] h-screen overflow-y-auto relative hide-scrollbar">
           <div className="pt-10 lg:pt-[111px]">
            <h1 className="font-semibold text-2xl md:text-3xl">
              About NEXIM Bank
            </h1>
            <div className="max-w-xl pt-8">
              <p>
                The Nigerian Export-Import Bank (NEXIM) was established by Act
                38 of 1991 as an Export Credit Agency (ECA) with a share capital
                of N50, 000,000,000 (Fifty Billion Naira) held equally by the
                Federal Ministry of Finance Incorporated and the Central Bank of
                Nigeria. The Bank which replaced the Nigerian Export Credit
              </p>
              <div className="pt-8">
                <p>
                  Guarantee & Insurance Corporation earlier set up under Act 15
                  of 1988, has the following main statutory functions:{" "}
                </p>
                <ul className="list-disc pl-5 space-y-3 pt-3">
                  <li>
                    Provision of export credit guarantee and export credit
                    insurance facilities to its clients.
                  </li>
                  <li>
                    Provision of credit in local currency to its clients in
                    support of exports.
                  </li>
                  <li>
                    Establishment and management of funds connected with
                    exports.
                  </li>
                  <li>
                    Maintenance of a foreign exchange revolving fund for lending
                    to exporters who need to import foreign inputs to facilitate
                    export production.
                  </li>
                  <li>
                    Provision of domestic credit insurance where such a facility
                    is likely to assist exports.
                  </li>
                  <li>
                    Maintenance of a trade information system in support of
                    export business.
                  </li>
                </ul>
                <p className="pt-3">
                  The Bank presently provides short and medium term loans to
                  Nigerian exporters. It also provides short term guarantees for
                  loans granted by Nigerian Banks to exporters as well as credit
                  insurance against political and commercial risks in the event
                  of non-payment by foreign buyers.
                </p>
                <p className="pt-3">
                  The Bank is also the government’s National Guarantor under the
                  ECOWAS Inter-state Road Transit programme.
                </p>
              </div>
            </div>
          </div> 
           <aside className="mt-10 border-t border-[#dedede] border-b flex flex-col md:flex-row w-full md:w-[65%] gap-6 md:gap-10 py-10 mb-10">
            <div className="">
              <h2 className="font-semibold text-2xl">Our Mission</h2>
              <p>
                To facilitate export diversification and economic growth in
                Nigeria
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-2xl">Our Vision</h2>
              <p>To be the leading Export Development Bank in Africa</p>
            </div>
          </aside> 
           <div className="py-6 w-full md:w-[70%] space-y-4">
            <h2 className="text-2xl font-semibold">
              Performance Target/Customer Expectation
            </h2>
            <div className="flex items-center justify-between border-b pb-2">
              <p>Performance Target/Customer Expectation</p>
              <FaPlus />
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <p>Obligation of Customers</p>
              <FaPlus />
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <p>Limitation to Service Delivery</p>
              <FaPlus />
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <p>Stakeholder Participation in Service Provision</p>
              <FaPlus />
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <p>Our Commitment to You</p>
              <FaPlus />
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <p>Complaints and Grivance Mechanism</p>
              <FaPlus />
            </div>
          </div>
          <div className="py-10">
            <img
              src="/images/nexim-org.png"
              className="w-full md:w-[70%]"
              alt=""
            />
          </div> 
          <section className="">
          <div id="board-members" className="py-10 w-full md:w-[70%] space-y-12 ">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">
              Board Members
            </h2>
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
              <img src="/images/Abba.png" className="w-110 h-110" alt="" />
              <div className="">
                <h3>ABUBAKAR A.BELLO</h3>
                <p>Managing Director/CEO</p>
                <p className="text-[13px] font-light leading-4">
                  Abba Bello has over 30 years’ experience in banking, where he
                  has held senior management positions in corporate banking,
                  regional and commercial banking, and public sector banking in
                  more than a decade.
                  <span className="block h-3" />
                  Abba also had a brief stint in auditing. Until his appointment
                  as Managing Director and Chief Executive Officer of Nigerian
                  Export-Import Bank in April 2017, he was Executive Director,
                  Unity Bank Plc, in charge of Corporate Banking, Agriculture
                  and North Directorate.
                  <span className="block h-3" />
                  Abba has cognate experience in international banking. He was
                  the pioneer Managing Director/CEO of United Bank for Africa
                  Plc’s subsidiaries in the Republic of Chad and Zambia for
                  several years.
                  <span className="block h-3" />
                  Abba has attended several courses in Nigeria and abroad in
                  leadership, advanced management, and executive management.
                  <span className="block h-3" />
                  He is a member of Chartered Institute of Bankers Nigeria, a
                  Fellow, Institute of Credit Administration, and a member of
                  the Institute of Directors.
                </p>
                <div className="flex items-center gap-2 text-[#037F4D] pt-8">
                  <p className="border-b-2">Read more</p>
                  <GoArrowRight />
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
              <img src="/images/stella.png" className="w-110 h-110" alt="" />
              <div className="">
                <h3>HON. STELLA OKOTETE</h3>
                <p>Executive Director,Business Development</p>
                <p className="text-[13px] font-light leading-4">
                  Hon. Stella Okotete possesses significant experience in public
                  policy design and implementation, public-private partnership
                  management, international development and general
                  administration.
                  <span className="block h-3" />
                  A graduate of the Benson Idahosa University, Benin City, from
                  where she earned a Bachelor of Arts in International Relations
                  and Diplomacy, Stella also holds a Diploma in Law from the
                  Rivers State College of Arts and Sciences.
                  <span className="block h-3" />
                  Until her appointment as Executive Director, Business
                  Development, Stella had a rich mix of professional experience
                  in both the public and private sectors.
                  <span className="block h-3" />
                  In 2015, she founded and led a start-up company where she was
                  responsible for providing local and international clients with
                  expert advice, scalable industrial solutions, and
                  opportunities to utilize turnkey solutions for various
                  industrial needs and requirements.
                  <span className="block h-3" />
                  Between 2011 and 2015, she served as the Special Assistant and
                  Adviser to the Executive Governor of Delta State on the
                  Millennium Development Goals (MDGs)...
                </p>
                <div className="flex items-center gap-2 text-[#037F4D] pt-5">
                  <p className="border-b-2">Read more</p>
                  <GoArrowRight />
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
              <img src="/images/edcs.png" className="w-110 h-110" alt="" />
              <div className="">
                <h3>MR. IBRAHIM KHALIL GAGA,</h3>
                <p>Executive Director, Corporate Services</p>
                <p className="text-[13px] font-light leading-4">
                  Mr. Ibrahim Khalil Gaga graduated from the Bayero University,
                  Kano with an LLB Degree in Law and BL from the prestigious
                  Nigerian Law School.
                  <span className="block h-3" />
                  He obtained his Master of Laws from the Lagos State University
                  Ojo, Lagos in 2002 and a postgraduate Diploma in Management
                  from the National Open University and also currently studying
                  for his PHD in Leadership and Strategic studies at the Nigeria
                  Defense Academy.
                  <span className="block h-3" />
                  Over the last 2 decades, he has obtained a wide range of
                  experience ranging from private legal practice and the Banking
                  sector with a brief stint in a law firm, Ikiebe & Co.in Lagos.
                  <span className="block h-3" />
                  His work experience spans through Liberty Bank Plc, Pacific
                  Bank Limited, MBC International Bank Limited, First Bank of
                  Nigeria Plc, Fidelity Bank Plc, ASO Savings & Loans Plc with
                  expertise in Litigation, Recovery, security documentation,
                  Risk Administration and Company Secretarial Practice.
                  <span className="block h-3" />
                  He was involved in the documentation for the first Independent
                  Power Project between Lagos State/ Island...
                </p>
                <div className="flex items-center gap-2 text-[#037F4D] pt-8">
                  <p className="border-b-2">Read more</p>
                  <GoArrowRight />
                </div>
              </div>
            </div>
          </div>
          <div id="management" className="pt-20">
            <div className="flex justify-between">
              <div className="">
                <h3 className="text-[32px] md:text-[48px] font-semibold">
                  Management Team
                </h3>
              </div>
              <div className="hidden md:flex items-center gap-4">
                <div className="bg-black text-white p-3 rounded-full">
                  <GoArrowLeft />
                </div>
                <div className="bg-black p-3 text-white rounded-full">
                  <GoArrowRight />
                </div>
              </div>
            </div>
            <div className="py-10 w-full overflow-x-auto hide-scrollbar">
              <div className="flex items-center gap-8 min-w-max">
                {managementData.map((item, index) => (
                  <div key={index} className="w-[417px]">
                    <div className=" relative overflow-hidden">
                      <img
                        src={item.src}
                        alt={item.title}
                        className=" w-[417px] h-[389px]"
                      />
                    </div>
                    <p className="mt-2 text-2xl font-semibold text-black w-full line-clamp-2 text-left">
                      {item.name}
                    </p>
                    <p className="mt-2 text-sm font-medium text-black w-full line-clamp-2 text-left">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm font-medium text-black w-full text-left ">
                      {item.desc}
                    </p>

                    <div className="flex items-center gap-2 text-[#037F4D] pt-3 pb-20">
                      <span className="  border-b-2 border-[#037F4D]">
                        {item.read}
                      </span>
                      <GoArrowRight />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div id="core" className={inter.className}>
            <h3 className="text-2xl md:text-[32px] font-semibold">
              Core Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 rounded-md w-full max-w-[90%]">
              {[
                {
                  title: "Innovation",
                  text: "Driving progress with fresh ideas and forward-thinking solutions.",
                  icon: "images/Group.png",
                },
                {
                  title: "Merit Driven",
                  text: "Committed to excellence through merit and performance.",
                  icon: "images/Goal.png",
                },
                {
                  title: "Professionalism",
                  text: "Delivering excellence with integrity, skill, and respect.",
                  icon: "images/hexagon.png",
                },
                {
                  title: "Accountability",
                  text: "Taking ownership to build trust and deliver results.",
                  icon: "images/shield-outline.png",
                },
                {
                  title: "Commitment",
                  text: "Dedicated to our mission, partners, and national growth.",
                  icon: "images/thumbs-up.png",
                },
                {
                  title: "Team Work",
                  text: "Collaborating to achieve more, together.",
                  icon: "images/team-fill.png",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="px-4 pt-6 pb-3 bg-gray-200 relative rounded shadow"
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="absolute right-4 top-4 w-6 h-6"
                  />
                  <div className="mt-10">
                    <h3 className="text-base md:text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-[12px] text-gray-700 line-clamp-2">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="py-10 w-full max-w-[85%]">
              <p>
                The Bank's 5-years Strategic Plan is anchored on 4 Strategic
                Pillars and 3 enablers. Our Strategic pillars are:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[90%] pb-10">
              {[
                {
                  text: "Key player in the Target Priority non-oil sector",
                  icon: "images/chart-arc.png",
                },
                {
                  text: "Financial soundness and performance",
                  icon: "images/material.png",
                },
                {
                  text: "Export financing solution expert",
                  icon: "images/database-export.png",
                },
                {
                  text: "Strategic partnership & development impact",
                  icon: "images/symbols_partner.png",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="pt-10 pb-4 px-4 bg-gray-200 relative rounded shadow"
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="absolute right-4 top-4 w-6 h-6"
                  />
                  <div className="mt-10">
                    <p className="text-[12px] text-gray-700">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                Critical Enablers:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[90%] pt-8 pb-10">
                {[
                  {
                    text: "Sound Risk Management & Governance",
                    icon: "images/carbon.png",
                  },
                  {
                    text: "Robust Technology & Operations",
                    icon: "images/data-management.png",
                  },
                  {
                    text: "Highly Professional Workforce",
                    icon: "images/chart-3d.png",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="pt-10 pb-4 px-4 bg-gray-200 relative rounded shadow"
                  >
                    <img
                      src={item.icon}
                      alt=""
                      className="absolute right-4 top-4 w-6 h-6"
                    />
                    <div className="mt-10">
                      <p className="text-[12px] text-gray-700">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div id="csb" className="mt-24 w-[70%]">
            <h2 className="text-3xl font-semibold pb-8">
              Corporate Social Responsibility
            </h2>
            <img src="/images/pexels-guilman.png" alt="" />
            <div className="pt-8 space-y-3 pb-30">
              <p>
                The Bank under its Corporate Social Responsibility Programmes is
                committed towards supporting structures and initiatives across
                diverse areas of healthcare, education, sports, environment,
                human capital development and the Arts.
              </p>
              <p className="">
                The Bank’s CSR initiative embodies an ardent commitment and
                social pact with all the stakeholders. Thus, the Bank is
                committed to creating enduring partnerships for sustainable
                development whilst adding immense value to its diverse
                beneficiaries and stakeholders.
              </p>
              <p className="">
                In 2019, NEXIM Bank intends to engage and reach out to various
                entities by promoting skills development and acquisition,
                supporting small and medium scale enterprises, sports and
                educational development, healthcare management, sponsorship and
                support to Associations, and Disadvantaged groups.
              </p>
              <p>
                This the Bank intends to achieve by incorporating its CSR
                philosophy with a robust strategy to enable us pro-actively meet
                and exceed the social, environmental and growth expectations in
                line with international best practices.
              </p>
            </div>
          </div>
          <div id="development" className="mt-20 w-[70%]">
            <h2 className="text-3xl font-semibold pb-8">
              Developmental Initiative
            </h2>
            <img src="/images/pexels-altaf.png" alt="" />
            <div className="pt-8 space-y-3 pb-40">
              <p>
                (i) THE SEALINK PROJECT:{" "}
                <span className="block">
                  NEXIM is currently facilitating the establishment of a
                  regional maritime transnational company (the Sealink Project)
                  in collaboration with the Organized Private Sector under the
                  auspices of the Federation of West African Chambers of
                  Commerce and Industry (FEWACCI). The proposed Sealink Project
                  is aimed at mitigating current non-tariff barriers and high
                  logistics costs that has hindered the growth of intra-regional
                  trade and competitiveness of Nigerian manufactured exports
                  regionally.
                </span>
              </p>
              <p className="">
                Though initiated and partly being facilitated by NEXIM, the
                Sealink Project is essentially conceived as a Public Private
                Partnership initiative to be managed by the private sector.
              </p>
              <p className="">
                Currently, the Sealink is about to commence a pilot run of its
                services and is engaging with potential customers for service
                offtake, especially for bulk cargo in West and Central Africa,
                and is working with the National Inland Waterways Authority
                (NIWA) on collaborative partnership (between NIWA, NEXIM and
                Sealink) to undertake a joint survey of the lower Niger river,
                with a view to promote the use of Nigerian inland waterways for
                moving bulk cargo.
                <span className="block">
                  (ii) FACTORING SERVICES: The Bank, under the auspices of FSS
                  2020 is currently collaborating with the African Export-Import
                  Bank (Afreximbank) and the Factor Chain International (FCI) to
                  develop and implement a legal framework for Factoring in
                  Nigeria.
                </span>
              </p>
              <p>
                The Draft bill has been developed and is undergoing legislative
                processes following which it is expected to be passed into law
                towards promoting a legal/regulatory environment for factoring
                and integrating Nigeria into the global factoring market.
              </p>
              <p>
                As an alternative trade finance instrument, Factoring is
                expected to promote financial inclusion and enhance the
                contributions of the Small and Medium Enterprises to exports,
                thereby reducing the incidents of informal trade.
              </p>
            </div>
          </div>
          <div id="test" className="pt-20">
            <div className="flex justify-between">
              <div className="">
                <h3 className="text-[32px] md:text-[48px] font-semibold">
                  Testimonials
                </h3>
              </div>
              <div className="hidden md:flex items-center gap-4">
                <div className="bg-black text-white p-3 rounded-full">
                  <GoArrowLeft />
                </div>
                <div className="bg-black p-3 text-white rounded-full">
                  <GoArrowRight />
                </div>
              </div>
            </div>
            <div className="py-10 w-full overflow-x-auto hide-scrollbar">
              <div className="flex items-center gap-8 min-w-max">
                {managementData.map((item, index) => (
                  <div key={index} className="w-[417px]">
                    <div className=" relative overflow-hidden">
                      <img
                        src={item.src}
                        alt={item.title}
                        className=" w-[417px] h-[389px]"
                      />
                    </div>
                    <p className="mt-2 text-2xl font-semibold text-black w-full line-clamp-2 text-left">
                      {item.name}
                    </p>
                    <p className="mt-2 text-sm font-medium text-black w-full line-clamp-2 text-left">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </section>
        </section>
      </aside>
    </main>
  );
}
