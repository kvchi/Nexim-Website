import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#050b3d]">
    <div className="flex flex-col md:flex-row xl:flex-row justify-between pt-20 px-11.5 pb-16 gap-[90px]">
      <div className="max-w-xs md:max-w-[20%]">
        <div className="relative w-[173px] h-[38px]">
          <img
            src="/images/Logo-1.svg"
           
            className="object-cover"
            alt="logo-1"
          />
        </div>
        <p className="text-white font-regular pt-3">
          Empowering Nigerian exporters with financing and support to thrive
          in global markets.
        </p>
        <div className="bg-[#E81005] px-2.5 py-0.5 inline-flex gap-2 rounded-lg items-center mt-3">
          <p className="text-white">reportgov</p>
          <div className="bg-[#037F4D] text-white p-2 rounded-md h-4.5 items-center flex">
            <p>.ng</p>
          </div>
        </div>
      </div>
  
      <div className="flex flex-col space-y-4 font-light max-w-xs md:max-w-[20%]">
        <Link href="/" className="text-white">
          Home
        </Link>
        <Link href="/about" className="text-white">
          About Us
        </Link>
        <Link href="/services" className="text-white">
          Services We Offer
        </Link>
        <Link href="/contact" className="text-white">
          Contact Us
        </Link>
      </div>
  
      <div className="flex flex-col space-y-4 font-light max-w-xs md:max-w-[20%]">
        <Link href="/" className="text-white">
          News
        </Link>
        <Link href="/" className="text-white">
          Media
        </Link>
        <Link href="/about" className="text-white">
          Events
        </Link>
        <Link href="/services" className="text-white">
          Resources
        </Link>
        <Link href="/contact" className="text-white">
          Whistle Blowing
        </Link>
      </div>
  
      <div className="flex flex-col space-y-4 font-light max-w-xs md:max-w-[20%]">
        <div className="text-white">Location</div>
        <p className="text-white">
          NEXIM House, Plot 975 Cadastral Zone AO, Central Business District,
          Garki, Abuja, Nigeria.
        </p>
        <p className="text-white">Social Media</p>
        <div className="flex items-center gap-5 pt-2">
          <img src="/images/twitter.svg" alt="X" width={18} height={18} />
          <img src="/images/insta.svg" alt="X" width={18} height={18} />
          <img
            src="/images/facebook.svg"
            alt="facebook"
            width={18}
            height={18}
          />
          <img
            src="/images/youtube.svg"
            alt="youtube"
            width={18}
            height={18}
          />
          <img
            src="/images/linkedin.svg"
            alt="linkedin"
            width={18}
            height={18}
          />
        </div>
      </div>
  
      <div className="flex-1 flex justify-end items-start">
        <div className="bg-white inline-flex gap-2 p-2 rounded-full items-center mr-50 md:mr-0">
          <img src="/images/globe.svg" alt="globe" width={10} height={10} />
          <p className="text-gray-700">English</p>
          <img
            src="/images/Caret_Down_MD.svg"
            alt="arrow down"
            width={10}
            height={10}
          />
        </div>
      </div>
    </div>
  
    <div className="text-white text-left md:space-y-0 space-y-2 flex flex-col md:flex-row xl:flex-row md:justify-center md:items-center p-8 border-t border-gray-800">
      <p className="w-[12rem] md:w-fit">
        &copy; {new Date().getFullYear()} NeximBank Ltd. All Rights Reserved.
      </p>
      <span className="border-b border-white w-fit md:mx-2">
        Terms of service.
      </span>
      <span className="border-b border-white w-fit md:mx-2">
        Privacy policy.
      </span>
      <span className="border-b border-white w-fit md:mx-2">
        Cookies Settings.
      </span>
    </div>
  </footer>
  
  );
};

export default Footer;
