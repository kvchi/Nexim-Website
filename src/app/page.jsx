"use client";

import { useState } from "react";
import Chat from "../../components/Chatbot/Chat";
import { FaArrowRightLong } from "react-icons/fa6";

import partnerLogos from "@/data/partnerLogos";
import sliderData from "@/data/sliderData";
import newsData from "@/data/newsData";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Home() {
  const [showChat, setShowChat] = useState(false);
  const [showSecondImage, setShowSecondImage] = useState(false);

  const toggleImages = () => {
    setShowSecondImage((prev) => !prev);
  };

  const toggleChat = () => {
    setShowChat((prev) => !prev);
  };

  const logos = [
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos,
  ];

  return (
    <main className="mx-auto">
      <section className="relative bg-[url('/images/hero.png')] bg-no-repeat bg-cover w-full h-auto pt-[100px] md:pt-[150px] lg:pt-[169px] pb-[150px] md:pb-[250px] lg:pb-[374px] px-4 md:px-10 lg:px-[138px]">
        <div className="flex items-center md:justify-start z-10 text-white w-full">
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="text-2xl md:text-5xl lg:text-[90px] font-semibold text-start leading-[110%] md:leading-[100%]">
              <span>Financing the</span> <br />
              <span>Future of Nigerian</span> <br />
              <span>Trade</span>
            </h1>
            <div className="text-start max-w-[90%] md:max-w-[500px]">
              <p className="font-medium text-sm md:text-base lg:text-[20px]">
                Empowering Nigerian exporters with financing and support to
                thrive in global markets
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="group flex items-center gap-2 cursor-pointer">
                <p className="border-b-2 border-white text-sm md:text-base group-hover:text-red-400 group-hover:border-red-400 transition-all duration-300">
                  Explore our services
                </p>
                <FaArrowRightLong className="text-white w-4 h-4 transform transition-all duration-300 group-hover:text-red-400 group-hover:-rotate-90" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 right-5 max-sm:static max-sm:mt-8 flex justify-center">
          <div className="relative w-[250px] sm:w-[300px] md:w-[250px] lg:w-[316px]">
            <img
              src="/images/PlayBox.png"
              width={316}
              height={268}
              alt="Play"
              className="object-cover w-full"
            />
          </div>
        </div>
      </section>

      <aside className="flex flex-col lg:flex-row items-start px-4 md:px-14 lg:px-[8.5rem] pt-[8rem] md:pt-[12rem] lg:pt-[16.5rem] gap-10 md:gap-16 lg:gap-20">
        <div className="w-full md:w-[30.5rem] h-auto leading-8 md:leading-10">
          <h3 className="font-semibold text-2xl md:text-4xl lg:text-[48px] leading-snug">
            Driving Economic Growth with Purpose & Partnership
          </h3>
          <div className="inline-flex items-center gap-2 cursor-pointer group">
            <p className="border-b-2 border-black text-sm md:text-base transition-all duration-300 group-hover:text-[#037F4D] group-hover:border-[#037F4D]">
              Learn more about us
            </p>
            <FaArrowRightLong className="text-black w-4 h-4 transform transition-all duration-300 group-hover:text-[#037F4D] group-hover:-rotate-90" />
          </div>
        </div>

        <div className="text-sm md:text-base lg:text-[20px] font-light space-y-4 w-full md:w-[40.5rem]">
          <p>
            The Nigerian Export Import Bank (NEXIM) is a government owned
            financial institution established to promote the diversification of
            Nigeria’s economy and strengthen the country’s export sector.
          </p>
          <p>
            With a core mandate to provide financing, risk mitigation, and
            advisory services for non-oil exports, NEXIM plays a pivotal role in
            driving inclusive growth and enhancing Nigeria’s presence in global
            markets.
          </p>
          <p>
            Through strategic partnerships and tailored financial solutions, the
            Bank empowers businesses, especially SMEs, to scale, compete
            internationally, and contribute meaningfully to national
            development.
          </p>
        </div>
      </aside>

      <section className="pt-[3.45rem] md:pt-[10.5rem]">
        <div className="flex justify-center items-center">
          <h2 className="text-[32px] font-medium">Our Partners</h2>
        </div>

        <div className="py-10 overflow-hidden whitespace-nowrap">
          <div className="animate-scroll flex w-max gap-10 items-center">
            {logos.map((logo, index) => (
              <div key={index} className="inline-block">
                <img
                  src={logo}
                  alt={`logo ${index}`}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className=" flex flex-col justify-center items-center py-25">
        <div className=" md:w-[37.5rem] text-center px-4 md:px-0">
          <p>
            Looking to grow your export business? Access flexible funding
            through our Loan Application services and take advantage of our
            Export Facility for Specialized support that helps you scale into
            global markets
          </p>
        </div>
        <aside className="flex flex-col lg:flex-row items-start justify-center pt-[7.5rem] gap-10 md:gap-5">
          {[
            {
              image: "/images/Apply.png",
              title: "Apply for loans",
              desc: "Access tailored loan solutions designed to support your export journey and grow your business with confidence.",
            },
            {
              image: "/images/Export.png",
              title: "Export Facility",
              desc: "Our Export Facility empowers Nigerian exporters with expert guidance, reliable financing, and access to the global marketplace.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className=" w-[23rem] md:w-[30rem] lg:w-[35rem] overflow-hidden rounded-2xl flex flex-col group mx-auto md:m-0"
            >
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  width={560}
                  height={200}
                  className="object-cover w-full rounded-t-2xl block transform group-hover:scale-110 transition-transform duration-300 bg-[#050B3D]"
                />
              </div>
              <div className="bg-[#050B3D] w-full rounded-b-2xl flex flex-col h-full">
                <div className="text-white p-10 flex flex-col flex-grow">
                  <h3 className="text-[20px] mb-2">{item.title}</h3>
                  <p className="text-[14px] leading-6">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </aside>
      </section>
      <section className="pt-27 w-full h-auto">
        <div className="bg-[#050B3D] w-full">
          <div className="px-[2rem] md:px-[8.3rem]">
            <div className="flex justify-between">
              <div className="pt-[6.5rem] text-white">
                <h3 className="text-[32px] md:text-[48px] font-semibold">
                  Our Products.
                </h3>
                <p className="text-[14px] font-light w-[15rem] leading-5">
                  Explore our range of financial solutions designed to support
                  and grow your export business.
                </p>
              </div>

              <div className="hidden md:flex items-center gap-4">
                <div className="group border border-gray-800 p-3 rounded-full hover:bg-white transition duration-500">
                  <img
                    src="/images/ArrowLeft.svg"
                    alt="arrow left"
                    width={14}
                    height={12}
                  />
                </div>
                <div className="group border border-white p-3 rounded-full hover:bg-white transition duration-500">
                  <img
                    src="/images/ArrowRight.svg"
                    alt="arrow right"
                    width={14}
                    height={12}
                    className="group-hover:invert transition duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="py-20 w-full overflow-x-auto hide-scrollbar">
            <div className="flex items-center gap-8 min-w-max px-[2rem] md:px-[8.3rem]">
              {sliderData.map((item, index) => (
                <div key={index} className="w-[333px]">
                  <div className="h-[24.25rem] relative overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="mt-2 text-sm font-medium text-white w-full line-clamp-2 text-left">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex md:hidden items-center gap-4 pb-12 pl-2">
            <div className="group border border-gray-800 p-4 rounded-full hover:bg-white transition duration-500">
              <img
                src="/images/ArrowLeft.svg"
                alt="arrow left"
                width={14}
                height={12}
              />
            </div>
            <div className="group border border-white p-4 rounded-full hover:bg-white transition duration-500">
              <img
                src="/images/ArrowRight.svg"
                alt="arrow right"
                width={14}
                height={12}
                className="group-hover:invert transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-40">
        <div className=" pt-[8.5rem] flex flex-col items-center justify-center">
          <h3 className="font-medium text-2xl">WHAT OUR CLIENTS SAY</h3>

          <div className="px-4 md:px-0">
            <p className="max-w-md md:max-w-xl font-normal text-xl pt-20 ">
              "Nexim bank has been a solid backbone to the growth and expansion
              of our company capacity. Our products are distributed all over the
              sub region and beyond"
            </p>
            <h4 className={`${poppins.className} mt-6 font-semibold text-lg`}>
              Kayode Olayemi
            </h4>
            <p className={`${poppins.className} text-sm text-gray-500`}>
              KAYBEE SOLUTION
            </p>
            <div className="pt-16">
              <div className="flex items-center gap-2">
                <div className="group border hover:border-black p-6 rounded-full bg-black hover:bg-white transition duration-500">
                  <img
                    src="/images/ArrowLeftWhite.svg"
                    alt="arrowleft icon"
                    width={16.73}
                    height={16.73}
                    className="group-hover:invert transition duration-500"
                  />
                </div>
                <div className="group border hover:border-black p-6 rounded-full bg-black hover:bg-white transition duration-500">
                  <img
                    src="/images/ArrowRightWhite.svg"
                    alt="arrowleft icon"
                    width={16}
                    height={16}
                    className="group-hover:invert transition duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-[url('/images/Small.png')] w-full px-4 py-16 bg-no-repeat bg-cover bg-center">
        <div
          className={`relative max-w-md md:max-w-xl ml-auto md:ml-[60%] p-4 rounded-lg mr-4 ${poppins.className}`} >
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Get in Touch with Us
          </h2>
          <form action="" className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="bg-white w-full p-3 rounded-xl"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Email Address
              </label>
              <input
                type="Email"
                placeholder="JohnDoe@gmail.com"
                className="bg-white w-full p-3 rounded-xl"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Subject
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="bg-white w-full p-3 rounded-xl"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                {" "}
                Message
              </label>
              <textarea
                placeholder="Leave a message"
                className="bg-white w-full p-3 rounded-xl"
                rows="4"
              ></textarea>
            </div>

            <div className="text-white bg-[#037F4D] w-full p-3 text-center rounded-xl mt-14">
              <button className=" ">Contact Us</button>
            </div>
          </form>
        </div>
      </section>
      <section className="w-full h-auto py-[6.5rem]">
        <div className="max-w-[1000px] xl:max-w-[1224px] px-4 xl:px-[2rem] mx-auto w-full">
          <h4 className="text-2xl font-bold mb-6 ">Latest News</h4>

          {/* Card Slider for smaller screens */}
          <div className="xl:hidden overflow-x-auto  flex gap-6 ">
            {newsData.map((item, index) => (
              <div key={index} className="w-[200px] flex-shrink-0 snap-start">
                <div className="relative rounded-lg">
                  <div className="w-full h-[228px] relative rounded-lg">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                  <div className="mt-3">
                    <h5 className="text-lg font-semibold text-gray-800 line-clamp-2 min-h-[3.5rem]">
                      {item.title}
                    </h5>
                    <p className="text-sm text-[#767676] pt-4">{item.desc}</p>
                  </div>
                  <div className="text-xs mt-2 flex items-center gap-2 pt-8">
                    <span className="text-[#FF8C53]">{item.date}</span>
                    <div className="w-2 h-2 bg-[#767676] rounded-full"></div>
                    <span className="text-gray-500">{item.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden xl:flex gap-6">
            {newsData.map((item, index) => (
              <div key={index} className="w-[200px] xl:w-[288px] flex-shrink-0">
                <div className="relative rounded-lg">
                  <div className="w-full h-[228px] relative rounded-lg">
                    <img
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-3">
                    <h5 className="text-lg font-semibold text-gray-800 line-clamp-2 min-h-[3.5rem]">
                      {item.title}
                    </h5>
                    <p className="text-sm text-[#767676] pt-4">{item.desc}</p>
                  </div>
                  <div className="text-xs mt-2 flex items-center gap-2 pt-8">
                    <span className="text-[#FF8C53]">{item.date}</span>
                    <div className="w-2 h-2 bg-[#767676] rounded-full"></div>
                    <span className="text-gray-500">{item.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div>
        <div className="fixed bottom-10 right-10">
          {/* First image */}
          <img
            src="/images/chatbot1.svg"
            alt="messagebot"
            onClick={() => {
              toggleImages();
              toggleChat();
            }}
            className={`cursor-pointer transition-opacity duration-500 ${
              showSecondImage ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        <div className="fixed bottom-10 right-10">
          {/* Second image */}
          <img
            src="/images/chatbot2.svg"
            alt="messagebot2"
            onClick={() => {
              toggleImages();
              toggleChat();
            }}
            className={`cursor-pointer transition-opacity duration-500 ${
              showSecondImage ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
      <div
        className={`fixed bottom-20 right-10 transition-all duration-500 ${
          showChat ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <Chat />
      </div>
    </main>
  );
}
