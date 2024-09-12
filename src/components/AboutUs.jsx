/* eslint-disable react/prop-types */
import Service from "./Service";
import Project from "./Project";

export default function AboutUs({ aboutUsRef, projectsRef, servicesRef }) {
  return (
    <div
      id="about-us"
      className="mx-auto min-h-screen snap-start px-3 min-[320px]:max-w-[320px] min-[375px]:max-w-sm sm:max-w-xl sm:pb-20 md:max-w-2xl md:px-0 lg:max-w-4xl xl:max-w-6xl xl:px-0 xl:pb-24 xl:pt-5 2xl:max-w-7xl"
      ref={aboutUsRef}
    >
      <div className="flex justify-between">
        <div className="w-64 pr-2 sm:w-80 md:w-[400px] lg:w-[500px] xl:w-[700px] 2xl:w-3/5">
          <div className="relative">
            <h2
              id="about_us_h2"
              className="font-beautique text-2xl font-medium text-[#193F53] sm:text-3xl lg:text-4xl 2xl:text-[56px]"
            >
              Về chúng tôi
            </h2>
            <p
              id="about_us_p"
              className="text-justify font-montserrat text-xs sm:text-sm lg:text-base 2xl:mt-5 2xl:text-lg"
            >
              Với phương châm “Không gian là trải nghiệm sáng tạo” chúng tôi
              luôn đảm bảo đem đến cho khách hàng những giải pháp tối ưu nhất
              cho không gian cùng với đó là những sản phẩm nội thất chất lượng
              cao.
            </p>
          </div>
          <div className="mt-4 flex gap-2 md:mt-12 xl:mt-20 xl:gap-4 2xl:mt-28">
            <div className="relative w-1/2 md:w-1/3">
              <h3
                id="number-01"
                className="font-beautique text-3xl font-medium text-[#193F53] sm:text-4xl lg:text-5xl 2xl:text-[64px]"
              >
                100
              </h3>
              <p className="text-justify font-montserrat text-xs sm:text-sm lg:text-base 2xl:text-lg">
                Ra đời vào 2023, Mean là công ty nội thất với đội ngũ nhân sự
                trẻ, giàu nhiệt huyết và đam mê với sáng tạo, cùng với đó là sự
                tỉ mỉ và cẩn thận trong từng giai đoạn.
              </p>
            </div>

            <div className="relative w-1/2 md:w-1/3">
              <p className="mb-5 text-justify font-montserrat text-xs sm:text-sm lg:text-base xl:mb-10 2xl:text-lg">
                Chúng tôi tự tin đem đến những không gian sống sáng tạo, và mang
                đậm tính cá nhân của người chủ sở hữu.
              </p>
              <h3
                id="number-02"
                className="pl-5 font-beautique text-3xl font-medium leading-[50px] text-[#193F53] sm:text-4xl md:pl-0 lg:text-5xl 2xl:text-[64px]"
              >
                60
              </h3>
            </div>

            <div className="relative hidden w-1/3 md:block">
              <h3
                id="number-03"
                className="w-4/5 font-beautique text-lg font-bold italic text-[#193F53] lg:text-xl xl:text-2xl 2xl:text-[32px] 2xl:leading-10"
              >
                Chất lượng & cam kết
              </h3>
              <p className="text-justify font-montserrat text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg">
                Mean Design luôn chú trọng đến từng khía cạnh trong quá trình
                thiết kế và thi công. Từ việc lựa chọn vật liệu, phối màu, cho
                đến sắp xếp không gian, tất cả đều được thực hiện với tiêu chuẩn
                cao nhất.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-7 w-28 sm:w-36 md:w-52 lg:w-64 xl:w-80 2xl:flex 2xl:w-fit">
          <img
            src="master-bedroom.png"
            alt="Mean Design"
            className="object-cover"
          />
          <img
            src="master-bedroom-r.png"
            alt="Mean Design"
            className="mt-2 w-full object-cover min-[768px]:hidden"
          />
        </div>
      </div>

      <div className="mt-4 flex justify-between min-[768px]:hidden">
        <h3
          id="number-03"
          className="w-28 font-beautique text-lg font-bold italic text-[#193F53] sm:text-xl"
        >
          Chất lượng & cam kết
        </h3>
        <p className="mt-7 w-2/3 text-justify font-montserrat text-xs sm:text-sm">
          Mean Design luôn chú trọng đến từng khía cạnh trong quá trình thiết kế
          và thi công. Từ việc lựa chọn vật liệu, phối màu, cho đến sắp xếp
          không gian, tất cả đều được thực hiện với tiêu chuẩn cao nhất.
        </p>
      </div>

      <div className="relative scroll-mt-10">
        <p
          id="about-us-slogan"
          className="mt-5 font-beautique text-base font-medium italic leading-3 text-[#193F53] sm:mt-10 sm:w-3/5 sm:text-lg lg:text-2xl xl:text-3xl 2xl:ml-12 2xl:mt-24 2xl:text-4xl 2xl:leading-[56px]"
        >
          Mang đến không gian là một hành trình TRẢI NGHIỆM & SÁNG TẠO
        </p>
      </div>

      <div className="ml-[65px] mt-20 hidden items-center justify-center md:flex">
        <div>
          <img src="room-1.png" />
          <p className="mt-2 border-l-2 border-[#193F53] pl-1 pt-1 font-beautique font-bold leading-none text-[#193F53] lg:mt-4 lg:pl-2 lg:text-3xl">
            Tinh tế
          </p>
        </div>
        <div className="relative left-[-20px] top-11 z-10 md:top-24">
          <img src="room-2.png" />
          <p className="ml-3 mt-2 border-l-2 border-[#193F53] pl-1 font-beautique font-bold text-[#193F53] lg:mt-4 lg:pl-2 lg:text-3xl">
            Tận tâm
          </p>
        </div>
        <div className="relative left-[-45px]">
          <img src="room-3.png" />
          <p className="ml-7 mt-2 border-l-2 border-[#193F53] pl-1 font-beautique font-bold text-[#193F53] lg:mt-4 lg:pl-2 lg:text-3xl">
            Tỉ mỉ
          </p>
        </div>
      </div>

      <div className="relative mx-auto mt-10 flex min-h-60 min-[375px]:min-h-72 md:hidden">
        <div className="absolute left-0">
          <img
            src="room-4.png"
            className="w-32 object-cover min-[375px]:w-36 sm:w-52"
          />
          <p className="mt-2 border-l border-[#193F53] pl-1 pt-1 font-beautique font-bold leading-none text-[#193F53] lg:mt-4 lg:pl-2 lg:text-3xl">
            Tinh tế
          </p>
        </div>
        <div className="absolute left-1/2 top-9 z-10 translate-x-[-50%]">
          <img
            src="room-5.png"
            className="w-32 object-cover min-[375px]:w-36 sm:w-52"
          />
          <p className="ml-3 mt-2 border-l border-[#193F53] pl-1 font-beautique font-bold text-[#193F53] lg:mt-4 lg:pl-2 lg:text-3xl">
            Tận tâm
          </p>
        </div>
        <div className="absolute right-0">
          <img
            src="room-6.png"
            className="w-32 object-cover min-[375px]:w-36 sm:w-52"
          />
          <p className="ml-12 mt-2 border-l border-[#193F53] pl-1 font-beautique font-bold text-[#193F53] min-[375px]:ml-11 lg:mt-4 lg:pl-2 lg:text-3xl">
            Tỉ mỉ
          </p>
        </div>
      </div>

      <Project projectsRef={projectsRef} />
      <Service servicesRef={servicesRef} />
    </div>
  );
}
