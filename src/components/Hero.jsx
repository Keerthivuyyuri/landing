import product from "../assets/product.png";
import background from "../assets/background.png";

function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-white">
      {/* Mobile */}
      <div className="relative px-5 pt-[95px] pb-[135px] text-center md:hidden">
  <img
    src={background}
    alt=""
    className="absolute inset-0 h-full w-full object-cover"
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
          className="w-[260px] rotate-[14deg] object-contain drop-shadow-2xl"
        />
      </div>

      <div className="px-5 pb-6 md:hidden">
        <button className="w-full bg-[#68b738] py-3 text-[12px] font-bold uppercase text-white">
          Подобрать программу
        </button>
      </div>

      {/* Tablet */}
      <div className="relative hidden min-h-[900px] bg-white px-8 pt-[135px] md:block lg:hidden">
        <div className="mx-auto max-w-[708px] pl-[40px]">
          <h2 className="text-[54px] font-bold leading-[58px] text-black">
            Функциональное <br />
            питание для котов
          </h2>

          <p className="mt-[32px] text-[16px] font-bold uppercase text-black">
            Занялся собой? Займись котом!
          </p>

          <button className="relative z-20 mt-[30px] bg-[#68b738] px-[28px] py-[14px] text-[15px] font-bold uppercase text-white">
            Подобрать программу
          </button>
        </div>

        <img
          src={product}
          alt="Cat Energy"
          className="absolute left-1/2 top-[300px] z-10 w-[620px] -translate-x-1/2 object-contain drop-shadow-2xl"
        />
      </div>

      {/* Desktop + Nest Hub */}
      <div className="relative hidden h-[540px] lg:flex min-[1024px]:max-[1199px]:h-[500px]">
        {/* Left side */}
        <div className="w-1/2 bg-white pt-[170px] min-[1024px]:max-[1199px]:pt-[130px]">
          <div className="ml-auto w-[600px] pl-[90px] min-[1024px]:max-[1199px]:w-[500px] min-[1024px]:max-[1199px]:pl-[40px]">
            <h2 className="text-[40px] font-bold leading-[48px] text-black min-[1024px]:max-[1199px]:text-[34px]">
              Функциональное <br />
              питание для котов
            </h2>

            <p className="mt-6 text-[14px] font-bold uppercase">
              Занялся собой? Займись котом!
            </p>

            <button className="mt-8 bg-[#68b738] px-8 py-3 text-[14px] font-bold uppercase text-white">
              Подобрать программу
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="relative w-1/2 overflow-hidden">
          <img src={background} alt="" className="h-full w-full object-cover" />
        </div>

        {/* Product Image */}
        <div
          className="
            absolute
            left-1/2
            top-[90px]
            z-20
            -translate-x-[35%]
            min-[1024px]:max-[1199px]:top-[120px]
            min-[1024px]:max-[1199px]:-translate-x-[40%]
          "
        >
          <img
            src={product}
            alt="Cat Energy"
            className="
              h-[450px]
              w-[500px]
              object-contain
              drop-shadow-2xl
              min-[1024px]:max-[1199px]:h-[380px]
              min-[1024px]:max-[1199px]:w-[430px]
            "
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
