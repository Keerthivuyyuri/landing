const programs = [
  {
    icon: "🐈",
    title: "Похудение",
    text: "Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Cat Energy Slim поможет ему сбросить лишний вес.",
    link: "Каталог Slim",
  },
  {
    icon: "🐆",
    title: "Набор массы",
    text: "Заработать авторитет среди дворовых котов и даже собак? Cat Energy Pro поможет вашему коту стать сильнее.",
    link: "Каталог Pro",
  },
];

function ProgramCards() {
  return (
    <section
      id="catalog"
      className="grid gap-5 px-5 py-6 md:gap-6 md:px-8 lg:grid-cols-2 lg:px-20 lg:py-14"
    >
      {programs.map((item, index) => (
        <div key={index} className="bg-[#f2f2f2] p-5 md:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#68b738] text-4xl md:h-24 md:w-24">
              {item.icon}
            </div>

            <h3 className="text-[22px] uppercase md:text-[28px]">
              {item.title}
            </h3>
          </div>

          <p className="mt-5 border-b border-gray-300 pb-5 text-[12px] leading-5 text-gray-700 md:border-none md:text-[14px]">
            {item.text}
          </p>

          <p className="mt-4 text-[13px] uppercase md:text-[15px]">
            {item.link} →
          </p>
        </div>
      ))}
    </section>
  );
}

export default ProgramCards;