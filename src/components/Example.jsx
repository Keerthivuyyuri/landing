import beforeCat from "../assets/before-desktop.png";
import afterCat from "../assets/after-desktop.png";
import beforeMobile from "../assets/before-mobile.png";

function CatCompare() {
  return (
    <div className="relative mx-auto w-[690px] h-[420px] overflow-hidden">
      {/* Before Cat */}
      <img
        src={beforeCat}
        alt="before cat"
        className="absolute left-[25px] top-[0px] w-[330px] h-[500px] object-contain
          z-10 "
      />

      {/* After Cat */}
      <img
        src={afterCat}
        alt="after cat"
        className=" absolute left-[345px] top-[0px] w-[300px] h-[610px] object-contain
          z-20 "
      />

      {/* Divider */}
      <div
        className=" absolute left-[345px] top-0 h-[420px] w-[2px] bg-white
          z-30"
      ></div>
    </div>
  );
}

function Slider({ mobile = false }) {
  return (
    <div
      className={`flex items-center justify-center gap-4 font-bold uppercase ${
        mobile ? "text-[12px]" : "text-[14px] md:text-[16px]"
      }`}
    >
      <span>Было</span>

      <div
        className={`relative h-[6px] rounded-full bg-[#dcdcdc] ${
          mobile ? "w-[70px]" : "w-[260px] md:w-[320px]"
        }`}
      >
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#cdcdcd] bg-white shadow ${
            mobile
              ? "h-[18px] w-[18px]"
              : "h-[30px] w-[30px] md:h-[34px] md:w-[34px]"
          }`}
        >
          <div className="absolute left-1/2 top-1/2 h-[8px] w-[8px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#68b738]"></div>
        </div>
      </div>

      <span>Стало</span>
    </div>
  );
}

function Example() {
  return (
    <section className="bg-white lg:-mt-[80px]">
      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="mx-auto max-w-[1200px] px-0 pt-[55px] pb-[45px]">
          <h2 className="text-[44px] font-normal leading-none">Живой пример</h2>
        </div>

        <div className="bg-[#f2f2f2]">
          <div className="relative mx-auto grid h-[400px] max-w-[1200px] grid-cols-[440px_1fr] px-[60px]">
            <div className="pt-[65px]">
              <p className="max-w-[430px] text-[14px] leading-6 text-[#444]">
                Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм
                на Cat Energy Slim. Отличный результат без изнуряющих
                тренировок! При этом он не менял своих привычек и по-прежнему
                спит по 16 часов в день.
              </p>

              <div className="mt-8 flex gap-8">
                <div className="relative w-[140px] border border-[#cdcdcd] py-3 text-center">
                  <h3 className="text-[24px] font-bold uppercase">5 КГ</h3>
                  <p className="absolute left-1/2 top-[52px] w-[95px] -translate-x-1/2 bg-[#f2f2f2] text-[11px] text-[#444]">
                    снижение веса
                  </p>
                </div>

                <div className="relative w-[140px] border border-[#cdcdcd] py-3 text-center">
                  <h3 className="text-[24px] font-bold uppercase">60 ДНЕЙ</h3>
                  <p className="absolute left-1/2 top-[52px] w-[120px] -translate-x-1/2 bg-[#f2f2f2] text-[11px] text-[#444]">
                    затраченное времени
                  </p>
                </div>
              </div>

              <div className="mt-10 flex max-w-[320px] justify-between text-[14px] font-bold uppercase">
                <span>Затраты на питание:</span>
                <span>15 000 руб.</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-[20px] top-[-145px]">
                <CatCompare />
              </div>

              <div className="absolute bottom-[45px] left-[40px] right-0">
                <Slider />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet */}
      <div className="hidden md:block lg:hidden">
        <div className="px-8 pt-10">
          <h2 className="text-[50px] font-normal leading-none">Живой пример</h2>

          <p className="mt-10 max-w-[700px] text-[16px] leading-6 text-[#444]">
            Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на
            Cat Energy Slim. Отличный результат без изнуряющих тренировок! При
            этом он не менял своих привычек и по-прежнему спит по 16 часов в
            день.
          </p>

          <div className="mt-8 flex items-start justify-between">
            <div className="flex gap-8">
              <div className="relative w-[140px] border border-[#cdcdcd] py-3 text-center">
                <h3 className="text-[26px] font-bold uppercase">5 КГ</h3>
                <p className="absolute left-1/2 top-[54px] w-[100px] -translate-x-1/2 bg-white text-[11px] text-[#444]">
                  снижение веса
                </p>
              </div>

              <div className="relative w-[140px] border border-[#cdcdcd] py-3 text-center">
                <h3 className="text-[26px] font-bold uppercase">60 ДНЕЙ</h3>
                <p className="absolute left-1/2 top-[54px] w-[120px] -translate-x-1/2 bg-white text-[11px] text-[#444]">
                  затрачено времени
                </p>
              </div>
            </div>

            <div className="text-right text-[15px] font-bold uppercase">
              <p>Затраты на питание:</p>
              <p>15 000 руб.</p>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-[#f2f2f2] pb-8 pt-0">
          <CatCompare />

          {/* Gap between cat and slider */}
          <div className="mt-[50px]">
            <Slider />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden bg-[#f2f2f2] px-5 py-8">
        <h2 className="text-[34px] font-normal leading-none">Живой пример</h2>

        <p className="mt-8 text-[14px] leading-5 text-[#444]">
          Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на
          Cat Energy Slim. Отличный результат без изнуряющих тренировок! При
          этом он не менял своих привычек и по-прежнему спит по 16 часов в день.
        </p>

        <div className="mt-6 flex gap-4">
          <div className="relative w-1/2 border border-[#cdcdcd] py-2 text-center">
            <h3 className="text-[22px] font-bold uppercase">5 КГ</h3>
            <p className="absolute left-1/2 top-[43px] w-[90px] -translate-x-1/2 bg-[#f2f2f2] text-[10px] text-[#444]">
              снижение веса
            </p>
          </div>

          <div className="relative w-1/2 border border-[#cdcdcd] py-2 text-center">
            <h3 className="text-[22px] font-bold uppercase">60 ДНЕЙ</h3>
            <p className="absolute left-1/2 top-[43px] w-[105px] -translate-x-1/2 bg-[#f2f2f2] text-[10px] text-[#444]">
              затрачено времени
            </p>
          </div>
        </div>

        <p className="mt-8 text-center text-[13px] font-bold uppercase">
          Затраты на питание: 15 000 руб.
        </p>
        {/* Mobile Cat */}
        <div className="mt-6 flex justify-center">
          <img
            src={beforeMobile}
            alt="cat"
            className="w-[311px] h-[232px] object-contain"
          />
        </div>

        {/* Slider */}
        <div className="mt-6 flex items-center justify-center gap-4 text-[14px] font-bold uppercase">
          <span>Было</span>

          <div className="relative h-[6px] w-[85px] rounded-full bg-[#dcdcdc]">
            <div className="h-[6px] w-[40px] rounded-full bg-[#68b738]"></div>

            <div className="absolute left-[40px] top-1/2 h-[14px] w-[14px] -translate-y-1/2 rounded-full border border-[#cdcdcd] bg-white">
              <div className="absolute left-1/2 top-1/2 h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#68b738]"></div>
            </div>
          </div>

          <span>Стало</span>
        </div>
      </div>
    </section>
  );
}

export default Example;
