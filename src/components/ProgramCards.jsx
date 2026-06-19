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
    <section id="catalog" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-6 md:px-8 md:py-8 lg:px-[60px] lg:py-[82px]">
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-[80px]">
          {programs.map((item, index) => (
            <div
              key={index}
              className="bg-[#f2f2f2] px-5 py-8 md:px-[52px] md:py-[50px]"
            >
              {/* Top */}
              <div className="flex items-center gap-5">
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#68b738] text-[28px] md:h-[100px] md:w-[100px] md:text-[48px]">
                  {item.icon}
                </div>

                <h3 className="text-[24px] font-normal uppercase md:text-[36px]">
                  {item.title}
                </h3>
              </div>

              {/* Text */}
              <p className="mt-8 border-b border-[#d9d9d9] pb-6 text-[14px] leading-6 text-[#444] md:border-none md:text-[16px]">
                {item.text}
              </p>

              {/* Link */}
              <button className="mt-6 text-[16px] font-bold uppercase">
                {item.link} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramCards;