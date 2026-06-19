function MapSection() {
  const mapUrl =
    "https://static-maps.yandex.ru/1.x/?ll=30.323036,59.938631&z=14&size=650,450&l=map";

  const markerUrl =
    "https://cdn-icons-png.flaticon.com/512/616/616430.png";

  return (
    <section className="bg-white">
      {/* Address block - mobile/tablet */}
      <div className="grid grid-cols-2 gap-5 px-5 py-7 md:px-[70px] md:py-14 lg:hidden">
        <h3 className="text-[16px] font-bold uppercase leading-[21px] md:text-[20px] md:leading-[28px]">
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

      {/* Map */}
      <div
        className="relative h-[360px] bg-cover bg-center md:h-[400px] lg:h-[400px]"
        style={{ backgroundImage: `url(${mapUrl})` }}
      >
        {/* Desktop address card */}
        <div className="absolute left-[110px] top-[95px] hidden w-[570px] bg-white px-[75px] py-[60px] lg:block">
          <div className="grid grid-cols-2 gap-10">
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
        <div className="absolute left-1/2 top-[120px] -translate-x-1/2 md:top-[150px] lg:left-[920px] lg:top-[145px] lg:translate-x-0">
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white shadow-md md:h-[72px] md:w-[72px]">
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