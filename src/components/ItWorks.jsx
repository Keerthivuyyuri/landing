const steps = [
  "Функциональное питание содержит только полезные питательные вещества.",
  "Выпускается в виде порошка, который нужно просто добавить в миску.",
  "Замените один-два приема обычной еды на наше функциональное питание.",
  "Уже через месяц наслаждайтесь изменениями у вашего питомца.",
];

function ItWorks() {
  return (
    <section id="program" className="px-5 py-4 md:px-8 lg:px-20">
      <h2 className="text-[28px] md:text-[38px]">Как это работает</h2>

      <div className="mt-6 space-y-5 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex items-center gap-5 md:block md:min-h-[170px]"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#68b738] text-white">
              {index === 0
                ? "🌿"
                : index === 1
                ? "🥣"
                : index === 2
                ? "🍴"
                : "⏱"}
            </div>

            <p className="relative z-10 text-[12px] leading-5 text-gray-600 md:mt-5">
              {step}
            </p>

            <span className="absolute right-0 top-0 hidden text-[110px] leading-none text-gray-100 md:block">
              {index + 1}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ItWorks;