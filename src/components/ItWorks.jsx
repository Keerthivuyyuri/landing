const steps = [
  "Функциональное питание содержит только полезные питательные вещества.",
  "Выпускается в виде порошка, который нужно просто добавить в миску.",
  "Замените один-два приема обычной еды на наше функциональное питание.",
  "Уже через месяц наслаждайтесь изменениями у вашего питомца.",
];

const icons = ["🌿", "🥣", "🍴", "⏱"];

function ItWorks() {
  return (
    <section id="program" className="bg-white lg:-mt-[40px]">
      <div className="mx-auto max-w-[1220px] px-5 pt-4 pb-8 md:px-8 md:pt-6 md:pb-10 lg:px-0 lg:pt-[20px] lg:pb-[10px]">
        <h2 className="text-[36px] font-normal md:text-[50px]">
          Как это работает
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-[80px]">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex items-center gap-5 md:block md:min-h-[280px]"
            >
              {/* Icon */}
              <div className="relative z-10 flex h-[60px] w-[60px] shrink-0 items-center justify-center bg-[#68b738] text-[28px] text-white md:h-[80px] md:w-[80px] md:text-[36px]">
                {icons[index]}
              </div>

              {/* Number */}
              <span className="absolute right-0 top-[-40px] hidden text-[240px] font-normal leading-none text-[#f2f2f2] md:block">
                {index + 1}
              </span>

              {/* Text */}
              <p className="relative z-10 text-[14px] leading-6 text-[#444] md:mt-8 md:text-[16px]">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ItWorks;