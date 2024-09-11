/* eslint-disable react/prop-types */
export default function Service({ servicesRef }) {
  return (
    <>
      <div className="mx-auto my-6 h-[1px] w-[280px] bg-[#193F53] min-[375px]:w-[320px] sm:my-20 sm:h-[3px] sm:w-3/4 md:my-14 lg:w-full xl:w-[1010px]"></div>
      <div
        id="services"
        ref={servicesRef}
        className="mx-auto mb-6 flex max-w-sm snap-start scroll-mt-28 flex-col items-center sm:mb-0 sm:max-w-xl md:mb-14 md:max-w-none"
      >
        <h3 className="w-5/6 text-center font-beautique text-base italic text-[#193F53] min-[375px]:text-[18px] sm:mb-6 sm:text-3xl sm:leading-10 lg:text-5xl lg:leading-[70px] 2xl:w-[706px]">
          Chúng tôi đem đến sự sáng tạo trong đa dạng công trình !
        </h3>

        <div className="mt-3 flex justify-center sm:mt-6 xl:mt-10">
          <div className="flex w-[95px] flex-col items-center min-[375px]:w-[120px] sm:w-[180px] md:w-[200px] lg:w-[270px] xl:w-[400px]">
            <img
              src="bed.png"
              alt="bed"
              className="h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 xl:h-fit xl:w-fit"
            />
            <p className="flex flex-col items-center font-montserrat text-[10px] text-[#193F53] min-[375px]:text-sm lg:text-2xl xl:w-[200px] xl:text-3xl xl:leading-[40px]">
              Thiết kế <span className="font-bold">NHÀ Ở</span>
            </p>
          </div>
          <div className="flex w-[95px] flex-col items-center justify-center border-l-2 border-r-2 border-[#193F53] min-[375px]:w-[120px] sm:w-[180px] md:w-[200px] lg:w-[270px] xl:w-[400px] xl:border-l-4 xl:border-r-4">
            <img
              src="deck.png"
              className="h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 xl:h-fit xl:w-fit xl:pb-[26px]"
              alt="bed"
            />
            <p className="flex flex-col items-center font-montserrat text-[10px] text-[#193F53] min-[375px]:text-sm lg:text-2xl xl:w-[200px] xl:text-3xl xl:leading-[40px]">
              Thiết kế <span className="font-bold">DỊCH VỤ</span>
            </p>
          </div>
          <div className="flex w-[95px] flex-col items-center justify-center min-[375px]:w-[120px] sm:w-[180px] md:w-[200px] lg:w-[270px] xl:w-[400px]">
            <img
              src="build.png"
              className="h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 xl:h-fit xl:w-fit xl:pb-[30px]"
              alt="bed"
            />
            <p className="flex flex-col items-center font-montserrat text-[10px] text-[#193F53] min-[375px]:text-sm lg:text-2xl xl:w-[200px] xl:text-3xl xl:leading-[40px]">
              Trọn gói <span className="font-bold">THI CÔNG</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
