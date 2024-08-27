export default function AboutUs() {
  return (
    <div id="about-us" className="mx-auto min-h-screen max-w-7xl pb-24 pt-11">
      <div className="flex gap-28">
        <div className="w-3/5">
          <div className="relative">
            <h2
              id="about_us_h2"
              className="font-beautique text-[56px] font-medium text-[#193F53]"
            >
              Về chúng tôi
            </h2>
            <p id="about_us_p" className="text-justify font-montserrat text-lg">
              Với phương châm “Không gian là trải nghiệm sáng tạo” chúng tôi
              luôn đảm bảo đem đến cho khách hàng những giải pháp tối ưu nhất
              cho không gian cùng với đó là những sản phẩm nội thất chất lượng
              cao.
            </p>
          </div>
          <div className="mt-28 flex gap-4">
            <div className="relative w-1/3">
              <h3
                id="number-01"
                className="font-beautique text-[64px] font-medium text-[#193F53]"
              >
                100
              </h3>
              <p className="text-justify font-montserrat text-lg">
                Ra đời vào 2023, Mean là công ty nội thất với đội ngũ nhân sự
                trẻ, giàu nhiệt huyết và đam mê với sáng tạo, cùng với đó là sự
                tỉ mỉ và cẩn thận trong từng giai đoạn.
              </p>
            </div>
            <div className="relative w-1/3">
              <p className="mb-5 text-justify font-montserrat text-lg">
                Chúng tôi tự tin đem đến những không gian sống sáng tạo, và mang
                đậm tính cá nhân của người chủ sở hữu.
              </p>
              <h3
                id="number-02"
                className="font-beautique text-[64px] font-medium text-[#193F53]"
              >
                60
              </h3>
            </div>
            <div className="relative w-1/3">
              <h3
                id="number-03"
                className="font-beautique text-[64px] font-medium text-[#193F53]"
              >
                60
              </h3>
              <p className="text-justify font-montserrat text-lg">
                Chúng tôi tự tin đem đến những không gian sống sáng tạo, và mang
                đậm tính cá nhân của người chủ sở hữu.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-7 flex items-center justify-between">
          <img src="about-us.png" alt="Mean Design" className="" />
        </div>
      </div>
      <div id="projects" className="relative scroll-mt-10">
        <p
          id="about-us-slogan"
          className="ml-12 mt-24 w-3/5 font-beautique text-4xl font-medium italic leading-[56px] text-[#193F53]"
        >
          Mang đến không gian là một hành trình TRẢI NGHIỆM & SÁNG TẠO
        </p>
      </div>
      <div className="ml-[65px] mt-20 flex items-center justify-center">
        <div>
          <p className="mb-10 border-l-2 border-[#193F53] pl-2 pt-1 font-beautique text-3xl leading-none text-[#193F53]">
            Tinh tế
          </p>
          <img src="room-1.png" />
        </div>
        <div className="relative left-[-20px] top-24">
          <p className="mb-10 ml-5 border-l-2 border-[#193F53] pl-2 font-beautique text-3xl text-[#193F53]">
            Tận tâm
          </p>
          <img src="room-2.png" />
        </div>
        <div className="relative left-[-45px]">
          <p className="mb-10 border-l-2 border-[#193F53] pl-2 font-beautique text-3xl text-[#193F53]">
            Tỉ mỉ
          </p>
          <img src="room-3.png" />
        </div>
      </div>
      <div className="mx-auto mt-40 h-[4px] w-[1010px] bg-[#193F53]"></div>
      <div id="services" className="mt-8 flex flex-col items-center">
        <p className="w-[706px] text-center font-beautique text-5xl italic leading-[70px] text-[#193F53]">
          Chúng tôi đem đến sự sáng tạo trong đa dạng công trình !
        </p>
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
    </div>
  );
}
