import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="absolute left-0 top-0 z-30 w-full">
      <div className="mx-auto flex h-[65px] max-w-[1200px] items-center justify-between px-5 md:h-[90px] md:px-8 lg:h-[105px] lg:px-[60px]">
        {/* Logo */}
        <img
          src={logo}
          alt="Cat Energy"
          className="h-[32px] w-auto object-contain md:h-[40px]"
        />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex w-[500px] items-center justify-between text-[14px] font-bold uppercase text-white">
          <a
            href="#home"
            className="border-b-2 border-white pb-[8px]"
          >
            Главная
          </a>

          <a href="#catalog">Каталог продукции</a>

          <a href="#program">Подбор программы</a>
        </nav>

        {/* Tablet Navigation */}
        <nav className="hidden md:flex lg:hidden items-center gap-8 text-[14px] font-bold uppercase text-black">
          <a
            href="#home"
            className="border-b-2 border-[#68b738] pb-[8px]"
          >
            Главная
          </a>

          <a href="#catalog">Каталог продукции</a>

          <a href="#program">Подбор программы</a>
        </nav>

        {/* Mobile Menu */}
        <button className="text-[30px] text-black md:hidden">
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;