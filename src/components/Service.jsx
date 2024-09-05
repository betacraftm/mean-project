export default function Service() {
  return (
    <>
      <div className="mx-auto mt-40 h-[4px] w-[1010px] bg-[#193F53]"></div>
      <div
        id="services"
        className="mt-8 flex snap-start scroll-mt-28 flex-col items-center"
      >
        <h3 className="w-[706px] text-center font-beautique text-5xl italic leading-[70px] text-[#193F53]">
          Chúng tôi đem đến sự sáng tạo trong đa dạng công trình !
        </h3>
        <div className="mt-10 flex justify-center">
          <div className="flex w-[400px] flex-col items-center">
            <img src="bed.png" alt="bed" />
            <p className="flex w-[200px] flex-col items-center font-montserrat text-3xl leading-[40px] text-[#193F53]">
              Thiết kế <span className="font-bold">NHÀ Ở</span>
            </p>
          </div>
          <div className="flex w-[400px] flex-col items-center justify-center border-l-4 border-r-4 border-[#193F53]">
            <img src="deck.png" className="pb-[26px]" alt="bed" />
            <p className="flex w-[200px] flex-col items-center font-montserrat text-3xl leading-[40px] text-[#193F53]">
              Thiết kế <span className="font-bold">DỊCH VỤ</span>
            </p>
          </div>
          <div className="flex w-[400px] flex-col items-center justify-center">
            <img src="build.png" className="pb-[30px]" alt="bed" />
            <p className="flex w-[200px] flex-col items-center font-montserrat text-3xl leading-[40px] text-[#193F53]">
              Trọn gói <span className="font-bold">THI CÔNG</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
