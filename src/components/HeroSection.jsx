/* eslint-disable react/prop-types */
export default function HeroSection({
  aboutUsRef,
  projectsRef,
  servicesRef,
  contactRef,
}) {
  return (
    <div className="bg-[url('/hero-image.png')] bg-cover bg-center bg-no-repeat">
      <div className="mx-auto flex min-h-screen flex-col justify-between px-3 py-7 md:max-w-2xl md:px-0 lg:max-w-4xl xl:max-w-7xl">
        <nav className="flex w-full justify-between">
          <img
            src="logo.svg"
            alt="Mean Agency"
            className="h-12 w-12 lg:h-16 lg:w-16"
          />
          <ul className="flex gap-8 self-center">
            <li
              className="cursor-pointer text-white"
              onClick={() => aboutUsRef.current?.scrollIntoView()}
            >
              <span className="font-montserrat text-sm font-normal hover:underline hover:underline-offset-8 lg:text-2xl">
                Về chúng tôi
              </span>
            </li>
            <li
              className="cursor-pointer text-white"
              onClick={() => projectsRef.current?.scrollIntoView()}
            >
              <span className="font-montserrat text-sm font-normal hover:underline hover:underline-offset-8 lg:text-2xl">
                Dự án
              </span>
            </li>
            <li
              className="cursor-pointer text-white"
              onClick={() => servicesRef.current?.scrollIntoView()}
            >
              <span className="font-montserrat text-sm font-normal hover:underline hover:underline-offset-8 lg:text-2xl">
                Dịch vụ
              </span>
            </li>
          </ul>
          <img
            src="logo.svg"
            alt="Mean Agency"
            className="invisible hidden h-12 w-12 sm:inline lg:h-16 lg:w-16"
          />
        </nav>

        <div className="relative flex flex-col items-center justify-center">
          <img
            src="vector-1.png"
            className="absolute hidden object-cover md:right-20 md:top-[-25px] md:inline-block md:h-7 lg:right-9 lg:h-11 xl:right-[165px] xl:top-[-40px] xl:h-fit"
          />
          <p className="absolute hidden font-montserrat text-white md:right-20 md:top-[-45px] md:inline-block md:text-xs lg:right-10 lg:top-[-60px] lg:text-xl xl:right-[165px] xl:top-[-80px] xl:text-2xl">
            Không gian sáng tạo
          </p>
          <img
            src="vector-2.png"
            className="absolute hidden md:bottom-[120px] md:left-14 md:inline-block md:h-7 lg:left-0 lg:h-11 xl:bottom-[120px] xl:left-[150px] xl:h-fit"
          />
          <p className="absolute hidden font-montserrat text-white md:left-14 md:inline-block md:text-xs lg:bottom-[85px] lg:left-1 lg:text-xl xl:bottom-[80px] xl:left-[150px] xl:text-2xl">
            Ý nghĩa thiết kế
          </p>
          <h1 className="font-beautique text-5xl leading-normal text-white sm:text-6xl md:text-7xl lg:text-9xl 2xl:text-[148px] 2xl:leading-[140px]">
            Mean Design
          </h1>
          <p className="font-montserrat text-xs text-white md:text-xl lg:text-3xl 2xl:text-4xl">
            Interior creative agency
          </p>
          <button
            onClick={() => contactRef.current?.scrollIntoView()}
            className="mt-6 border-[1px] border-white p-2 font-montserrat font-bold text-white transition hover:bg-white hover:text-black sm:mt-14 sm:px-6 sm:py-4 md:border-[3px]"
          >
            <span className="text-xs sm:text-base">ĐẶT LỊCH NGAY</span>
          </button>
        </div>

        <div className="flex justify-center">
          <p className="flex w-1/3 flex-col items-center font-montserrat text-xs text-white sm:text-2xl xl:w-[200px]">
            Thiết kế <span className="font-bold">SÁNG TẠO</span>
          </p>
          <p className="flex w-1/3 flex-col items-center border-l-2 border-r-2 font-montserrat text-xs text-white sm:text-2xl xl:w-fit xl:px-11">
            Thi công <span className="font-bold">HOÀN THIỆN</span>
          </p>
          <p className="flex w-1/3 flex-col items-center font-montserrat text-xs text-white sm:text-2xl xl:w-[200px]">
            Chi phí <span className="font-bold">TỐI ƯU</span>
          </p>
        </div>
      </div>
    </div>
  );
}
