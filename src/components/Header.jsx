import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="absolute top-0 left-0 z-30 w-full">
      <div className="mx-auto flex h-[105px] max-w-[1200px] items-center justify-between px-5 md:px-8 lg:px-0">

        {/* Logo */}
        <div className="flex items-center lg:w-1/2 lg:pl-[70px]">
          <img
            src={logo}
            alt="Cat Energy"
            className="h-[32px] md:h-[40px]"
          />
        </div>

        {/* Desktop nav */}
<div className="hidden lg:flex lg:w-1/2 lg:justify-start lg:pl-[70px]">
  <nav className="flex w-[478px] items-center justify-between text-[14px] font-bold uppercase text-white">
    <a href="#home" className="border-b-2 border-white pb-[8px]">
      Главная
    </a>

    <a href="#catalog">Каталог продукции</a>

    <a href="#program">Подбор программы</a>
  </nav>
</div>

        {/* Tablet nav */}
        <nav className="hidden md:flex lg:hidden items-center gap-8 text-[14px] font-bold uppercase text-black">
          <a href="#home" className="border-b-2 border-[#68b738] pb-2">
            Главная
          </a>
          <a href="#catalog">Каталог продукции</a>
          <a href="#program">Подбор программы</a>
        </nav>

        {/* Mobile menu */}
        <button className="text-[30px] text-black md:hidden">
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;