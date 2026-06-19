import product from "../assets/product.png";

const catBg =
  "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=1200";

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      {/* Mobile */}
      <div className="relative bg-[#68b738] px-5 pt-[95px] pb-[135px] text-center md:hidden">
        <img
          src={catBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-15"
        />

        <div className="relative z-10">
          <h2 className="text-[32px] font-bold leading-[36px] text-white">
            Функциональное <br />
            питание для котов
          </h2>

          <p className="mt-5 text-[13px] font-bold uppercase text-white">
            Занялся собой? Займись котом!
          </p>
        </div>
      </div>

      <div className="relative -mt-[105px] flex justify-center md:hidden">
        <img
          src={product}
          alt="Cat Energy"
          className="w-[260px] rotate-[14deg] drop-shadow-2xl"
        />
      </div>

      <div className="px-5 pb-6 md:hidden">
        <button className="w-full bg-[#68b738] py-3 text-[12px] font-bold uppercase text-white">
          Подобрать программу
        </button>
      </div>

      {/* Tablet */}
      <div className="hidden bg-white px-8 pt-[150px] md:block lg:hidden">
        <div className="pl-[70px]">
          <h2 className="text-[48px] font-bold leading-[55px] text-black">
            Функциональное <br />
            питание для котов
          </h2>

          <p className="mt-7 text-[16px] font-bold uppercase">
            Занялся собой? Займись котом!
          </p>

          <button className="mt-7 bg-[#68b738] px-8 py-4 text-[14px] font-bold uppercase text-white">
            Подобрать программу
          </button>
        </div>

        <div className="relative -mt-[70px] flex justify-center pb-10">
          <img
            src={product}
            alt="Cat Energy"
            className="w-[560px] rotate-[14deg] drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden min-h-[520px] lg:grid lg:grid-cols-2">
        <div className="pl-[110px] pt-[180px]">
          <h2 className="text-[44px] font-bold leading-[52px]">
            Функциональное <br />
            питание для котов
          </h2>

          <p className="mt-7 text-[14px] font-bold uppercase">
            Занялся собой? Займись котом!
          </p>

          <button className="mt-8 bg-[#68b738] px-8 py-3 text-[14px] font-bold uppercase text-white">
            Подобрать программу
          </button>
        </div>

        <div className="relative bg-[#68b738]">
          <img
            src={catBg}
            alt=""
            className="h-full w-full object-cover opacity-20"
          />

          <img
            src={product}
            alt="Cat Energy"
            className="absolute left-[-80px] top-[90px] w-[340px] rotate-[14deg] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;