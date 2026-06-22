import catSlim from "../assets/cat-slim.png";
import catPro from "../assets/cat-pro.png";

const programs = [
  {
    image: catSlim,
    title: "Похудение",
    text: "Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Cat Energy Slim поможет ему сбросить лишний вес.",
    link: "Каталог Slim",
  },
  {
    image: catPro,
    title: "Набор массы",
    text: "Заработать авторитет среди дворовых котов и даже собак? Cat Energy Pro поможет вашему коту стать сильнее.",
    link: "Каталог Pro",
  },
];

function ProgramCards() {
  return (
    <section id="catalog" className="bg-white ">
      <div className="mx-auto max-w-[1220px] px-5 py-6 md:px-8 md:py-8 lg:px-0 lg:py-[82px]">
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-[40px] xl:gap-[80px]">
          {programs.map((item, index) => (
            <div
              key={index}
              className="bg-[#f2f2f2] px-5 py-8 md:px-[52px] md:py-[50px] lg:h-[374px] lg:w-[490px] xl:w-[570px]"
            >
              <div className="flex items-center gap-5 md:gap-[42px]">
                <div
                  className={`relative shrink-0 ${
                    index === 0 ? "h-[100px] w-[100px]" : "h-[100px] w-[134px]"
                  }`}
                >
                  <div
                    className={`absolute rounded-full bg-[#68b738] ${
                      index === 0
                        ? "left-0 top-0 h-[100px] w-[100px]"
                        : "left-[17px] top-0 h-[100px] w-[100px]"
                    }`}
                  />

                  <img
                    src={item.image}
                    alt=""
                    className={`absolute z-10 object-contain ${
                      index === 0
                        ? "left-[10px] top-[-6px] h-[106px] w-[80px]"
                        : "left-0 top-[22px] h-[56px] w-[134px]"
                    }`}
                  />
                </div>

                <h3 className="text-[24px] font-normal uppercase md:text-[36px]">
                  {item.title}
                </h3>
              </div>

              <p className="mt-8 border-b border-[#d9d9d9] pb-6 text-[14px] leading-6 text-[#444] md:border-none md:text-[16px]">
                {item.text}
              </p>

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
