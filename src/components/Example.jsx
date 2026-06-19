import beforeCat from "../assets/before-desktop.png";
import afterCat from "../assets/after-desktop.png";

function Example() {
  return (
    <section className="bg-white">
      {/* Title area */}
      <div className="mx-auto max-w-[1200px] px-5 pt-10 pb-8 md:px-8 md:pt-12 lg:px-[60px] lg:pt-[70px]">
        <h2 className="text-[36px] font-normal md:text-[50px]">
          Живой пример
        </h2>
      </div>

      {/* Content grey area */}
      <div className="bg-[#f2f2f2]">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-5 py-8 md:px-8 md:py-12 lg:grid-cols-[440px_1fr] lg:gap-[90px] lg:px-[60px] lg:py-[70px]">
          {/* Left content */}
          <div>
            <p className="max-w-[440px] text-[14px] leading-6 text-[#444] md:text-[16px]">
              Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм
              на Cat Energy Slim. Отличный результат без изнуряющих тренировок!
              При этом он не менял своих привычек и по-прежнему спит по 16 часов
              в день.
            </p>

            <div className="mt-8 flex gap-5 md:gap-8">
              <div className="relative w-1/2 max-w-[162px] border border-[#cdcdcd] py-3 text-center">
                <h3 className="text-[24px] font-normal uppercase md:text-[30px]">
                  5 КГ
                </h3>
                <p className="absolute left-1/2 top-[58px] w-[105px] -translate-x-1/2 bg-[#f2f2f2] text-[11px] text-[#444] md:w-[115px] md:text-[12px]">
                  снижение веса
                </p>
              </div>

              <div className="relative w-1/2 max-w-[162px] border border-[#cdcdcd] py-3 text-center">
                <h3 className="text-[24px] font-normal uppercase md:text-[30px]">
                  60 ДНЕЙ
                </h3>
                <p className="absolute left-1/2 top-[58px] w-[120px] -translate-x-1/2 bg-[#f2f2f2] text-[11px] text-[#444] md:w-[135px] md:text-[12px]">
                  затрачено времени
                </p>
              </div>
            </div>

            <div className="mt-12 flex max-w-[365px] justify-between gap-5 text-[14px] font-bold uppercase md:text-[18px]">
              <span>Затраты на питание:</span>
              <span>15 000 руб.</span>
            </div>
          </div>

          {/* Right cat comparison */}
          <div className="relative h-[360px] overflow-hidden md:h-[520px] lg:h-[430px]">
            <div className="absolute left-1/2 top-0 h-[300px] w-[520px] -translate-x-1/2 md:h-[430px] md:w-[650px] lg:top-[-120px] lg:h-[500px] lg:w-[650px]">
              {/* Before */}
              <div className="absolute left-0 top-0 h-full w-1/2 overflow-hidden">
                <img
                  src={beforeCat}
                  alt="before cat"
                  className="absolute left-0 top-0 h-full w-[650px] max-w-none object-contain object-left"
                />
              </div>

              {/* After */}
              <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden">
                <img
                  src={afterCat}
                  alt="after cat"
                  className="absolute right-0 top-0 h-full w-[650px] max-w-none object-contain object-right"
                />
              </div>
            </div>

            {/* Slider */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-4 text-[14px] font-bold uppercase md:bottom-8 md:gap-6 md:text-[18px] lg:bottom-0">
              <span>Было</span>

              <div className="relative h-[6px] w-[180px] rounded-full bg-[#dcdcdc] md:w-[320px]">
                <div className="absolute left-1/2 top-1/2 h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#cdcdcd] bg-white shadow md:h-[34px] md:w-[34px]">
                  <div className="absolute left-1/2 top-1/2 h-[8px] w-[8px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#68b738]"></div>
                </div>
              </div>

              <span>Стало</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Example;