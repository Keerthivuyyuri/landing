import beforeCat from "../assets/before-desktop.png";
import afterCat from "../assets/after-desktop.png";

function Example() {
  return (
    <section className="bg-[#f2f2f2]">
      <div className="mx-auto max-w-[1440px] px-5 py-8 md:px-8 lg:h-[656px] lg:px-[110px] lg:py-0">
        
        <h2 className="text-[30px] font-bold md:text-[42px] lg:pt-[65px] lg:text-[52px]">
          Живой пример
        </h2>

        <div className="grid lg:grid-cols-[440px_1fr] lg:gap-[90px]">
          {/* Left */}
          <div className="lg:pt-[90px]">
            <p className="max-w-[430px] text-[14px] leading-6 text-[#444] md:text-[16px]">
              Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм
              на Cat Energy Slim. Отличный результат без изнуряющих тренировок!
              При этом он не менял своих привычек и по-прежнему спит по 16 часов
              в день.
            </p>

            <div className="mt-8 flex gap-8">
              <div className="relative w-[162px] border border-[#cdcdcd] py-3 text-center">
                <h3 className="text-[30px] font-bold">5 КГ</h3>
                <p className="absolute left-1/2 top-[58px] w-[110px] -translate-x-1/2 bg-[#f2f2f2] text-[12px]">
                  снижение веса
                </p>
              </div>

              <div className="relative w-[162px] border border-[#cdcdcd] py-3 text-center">
                <h3 className="text-[30px] font-bold">60 ДНЕЙ</h3>
                <p className="absolute left-1/2 top-[58px] w-[130px] -translate-x-1/2 bg-[#f2f2f2] text-[12px]">
                  затрачено времени
                </p>
              </div>
            </div>

            <div className="mt-12 flex max-w-[365px] justify-between text-[18px] font-bold uppercase">
              <span>Затраты на питание:</span>
              <span>15 000 руб.</span>
            </div>
          </div>

          {/* Right Cat */}
          <div className="relative h-[390px] md:h-[520px] lg:h-[520px]">
            <div className="absolute left-1/2 top-[-125px] h-[430px] w-[560px] -translate-x-1/2 md:h-[500px] md:w-[650px] lg:top-[-130px]">
              <div className="absolute left-0 top-0 h-full w-1/2 overflow-hidden">
                <img
                  src={beforeCat}
                  alt="before cat"
                  className="absolute left-0 top-0 h-full w-[650px] max-w-none object-contain object-left"
                />
              </div>

              <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden">
                <img
                  src={afterCat}
                  alt="after cat"
                  className="absolute right-0 top-0 h-full w-[650px] max-w-none object-contain object-right"
                />
              </div>
            </div>

            <div className="absolute bottom-[55px] left-1/2 flex -translate-x-1/2 items-center gap-5 text-[16px] font-bold uppercase">
              <span>Было</span>

              <div className="relative h-[6px] w-[340px] rounded-full bg-[#dcdcdc]">
                <div className="absolute left-1/2 top-1/2 h-[34px] w-[34px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#cdcdcd] bg-white">
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