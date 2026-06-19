function MapSection() {
  const mapUrl =
    "https://static-maps.yandex.ru/1.x/?ll=30.323036,59.938631&z=14&size=650,450&l=map";

  const markerUrl =
    "https://cdn-icons-png.flaticon.com/512/616/616430.png";

  return (
    <section className="bg-white">
      {/* Mobile + Tablet Address */}
      <div className="lg:hidden">
        <div className="mx-auto max-w-[1200px] grid grid-cols-2 gap-6 px-5 py-7 md:px-8 md:py-14">
          <h3 className="text-[16px] font-bold uppercase leading-[22px] md:text-[20px] md:leading-[28px]">
            Приглашаем <br />
            к сотрудничеству <br />
            дилеров!
          </h3>

          <p className="text-[14px] leading-[22px] text-[#444] md:text-[16px] md:leading-[26px]">
            ул. Большая <br />
            Конюшенная, д. 19/8
            <br />
            <br />
            Санкт-Петербург
          </p>
        </div>
      </div>

      {/* Map */}
      <div
        className="relative h-[360px] bg-cover bg-center md:h-[400px]"
        style={{
          backgroundImage: `url(${mapUrl})`,
        }}
      >
        {/* Desktop Address Card */}
        <div className="absolute left-[60px] top-[95px] hidden bg-white px-[70px] py-[55px] lg:block">
          <div className="grid w-[520px] grid-cols-2 gap-10">
            <h3 className="text-[20px] font-bold uppercase leading-[28px]">
              Приглашаем <br />
              к сотрудничеству <br />
              дилеров!
            </h3>

            <p className="text-[16px] leading-[26px] text-[#444]">
              ул. Большая <br />
              Конюшенная, д. 19/8
              <br />
              <br />
              Санкт-Петербург
            </p>
          </div>
        </div>

        {/* Marker */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-[900px] lg:top-[180px] lg:translate-x-0 lg:translate-y-0">
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white shadow-lg md:h-[72px] md:w-[72px]">
            <img
              src={markerUrl}
              alt="cat marker"
              className="h-[42px] w-[42px] object-contain md:h-[52px] md:w-[52px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapSection;