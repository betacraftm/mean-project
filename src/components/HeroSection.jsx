/* eslint-disable react/prop-types */
export default function HeroSection({
  aboutUsRef,
  projectsRef,
  servicesRef,
  contactRef,
}) {
  return (
    <div className="bg-[url('/hero-image.png')] bg-cover bg-no-repeat">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-between py-7">
        <nav className="flex w-full justify-between">
          <img src="logo.svg" alt="Mean Agency" className="h-16 w-16" />
          <ul className="flex gap-8 self-center">
            <li
              className="cursor-pointer text-white"
              onClick={() => aboutUsRef.current?.scrollIntoView()}
            >
              <span className="font-montserrat text-2xl font-normal hover:underline hover:underline-offset-8">
                Về chúng tôi
              </span>
            </li>
            <li
              className="cursor-pointer text-white"
              onClick={() => projectsRef.current?.scrollIntoView()}
            >
              <span className="font-montserrat text-2xl font-normal hover:underline hover:underline-offset-8">
                Dự án
              </span>
            </li>
            <li
              className="cursor-pointer text-white"
              onClick={() => servicesRef.current?.scrollIntoView()}
            >
              <span className="font-montserrat text-2xl font-normal hover:underline hover:underline-offset-8">
                Dịch vụ
              </span>
            </li>
          </ul>
          <img
            src="logo.svg"
            alt="Mean Agency"
            className="invisible h-16 w-16"
          />
        </nav>

        <div className="relative flex flex-col items-center justify-center">
          <img
            src="vector-1.png"
            className="absolute right-[165px] top-[-40px]"
          />
          <p className="absolute right-[165px] top-[-80px] font-montserrat text-2xl text-white">
            Không gian sáng tạo
          </p>
          <img
            src="vector-2.png"
            className="absolute bottom-[120px] left-[60px]"
          />
          <p className="absolute bottom-[80px] left-[63px] font-montserrat text-2xl text-white">
            Ý nghĩa thiết kế
          </p>
          <h1 className="font-beautique text-4xl text-[148px] leading-[140px] text-white">
            Mean Design
          </h1>
          <p className="font-montserrat text-4xl text-white">
            Interior creative agency
          </p>
          <button
            onClick={() => contactRef.current?.scrollIntoView()}
            className="mt-14 border-[3px] border-white px-6 py-4 font-montserrat font-bold text-white transition hover:bg-white hover:text-black"
          >
            <span>ĐẶT LỊCH NGAY</span>
          </button>
        </div>

        <div className="flex justify-center">
          <p className="flex w-[200px] flex-col items-center font-montserrat text-2xl text-white">
            Thiết kế <span className="font-bold">SÁNG TẠO</span>
          </p>
          <p className="flex flex-col items-center border-l-2 border-r-2 px-14 font-montserrat text-2xl text-white">
            Thi công <span className="font-bold">HOÀN THIỆN</span>
          </p>
          <p className="flex w-[200px] flex-col items-center font-montserrat text-2xl text-white">
            Chi phí <span className="font-bold">TỐI ƯU</span>
          </p>
        </div>
      </div>
    </div>
  );
}
