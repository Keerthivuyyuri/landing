import { FaVk, FaInstagram, FaFacebookF } from "react-icons/fa";
import { SiHtmlacademy } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-[#F2F2F2]">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-[110px]">
        <div className="flex min-h-[149px] flex-col items-center justify-center md:flex-row md:justify-between">

          {/* Logo */}
          <div className="w-full border-b border-[#d9d9d9] py-8 text-center md:w-auto md:border-none md:py-0 md:text-left">
            <h2 className="text-[28px] font-bold uppercase text-[#111]">
              CAT <span className="font-normal">ENERGY</span>
            </h2>
          </div>

          {/* Social Icons */}
          <div className="flex w-full items-center justify-center gap-8 border-b border-[#d9d9d9] py-8 text-[22px] text-[#666] md:w-auto md:border-none md:py-0">
            <FaVk className="cursor-pointer transition hover:text-[#68B738]" />
            <FaInstagram className="cursor-pointer transition hover:text-[#68B738]" />
            <FaFacebookF className="cursor-pointer transition hover:text-[#68B738]" />
          </div>

          {/* HTML Academy */}
          <div className="flex w-full items-center justify-between py-8 text-[16px] text-[#444] md:w-auto md:gap-5 md:py-0">
            <span>HTML Academy</span>

            <SiHtmlacademy className="text-[28px] text-[#666] transition hover:text-[#68B738]" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;