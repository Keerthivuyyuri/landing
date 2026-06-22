import logo from "../assets/logo.png";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-30 w-full">
      <div className="mx-auto flex h-[105px] max-w-[1200px] items-center justify-between px-5 md:px-8 lg:px-[110px]">
        {/* Logo */}
        <div className="flex h-[50px] w-[202px] items-center lg:-ml-[90px]">
          <img
            src={logo}
            alt="Cat Energy"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex absolute top-[40px] right-[20px] w-[450px] items-center
           justify-between text-[12px] font-bold uppercase text-white xl:right-[110px] xl:w-[520px] xl:text-[14px]"
        >
          <a href="#home" className="border-b-2 border-white pb-[8px]">
            Главная
          </a>
          <a href="#catalog">Каталог продукции</a>
          <a href="#program">Подбор программы</a>
        </nav>

        {/* Tablet Navigation */}
        <nav className="hidden items-center gap-8 text-[14px] font-bold uppercase text-black md:flex lg:hidden">
          <a href="#home" className="border-b-2 border-[#68b738] pb-[8px]">
            Главная
          </a>

          <a href="#catalog">Каталог продукции</a>

          <a href="#program">Подбор программы</a>
        </nav>

        {/* Mobile Menu */}
        <button
          className="text-[30px] text-black md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute left-0 top-[65px] w-full bg-white shadow-lg md:hidden">
            <nav className="flex flex-col items-center text-[16px] font-bold uppercase">
              <a
                href="#home"
                className="w-full border-b border-gray-200 py-4 text-center"
                onClick={() => setIsOpen(false)}
              >
                Главная
              </a>

              <a
                href="#catalog"
                className="w-full border-b border-gray-200 py-4 text-center"
                onClick={() => setIsOpen(false)}
              >
                Каталог продукции
              </a>

              <a
                href="#program"
                className="w-full py-4 text-center"
                onClick={() => setIsOpen(false)}
              >
                Подбор программы
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
