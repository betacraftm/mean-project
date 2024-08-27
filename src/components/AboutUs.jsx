export default function AboutUs() {
  return (
    <div id="about-us" className="mx-auto min-h-screen max-w-7xl">
      <div className="w-3/5">
        <div className="relative">
          <h2
            id="about_us_h2"
            className="font-beautique text-[56px] font-medium text-[#193F53]"
          >
            Về chúng tôi
          </h2>
          <p id="about_us_p" className="text-justify font-montserrat text-lg">
            Với phương châm “Không gian là trải nghiệm sáng tạo” chúng tôi luôn
            đảm bảo đem đến cho khách hàng những giải pháp tối ưu nhất cho không
            gian cùng với đó là những sản phẩm nội thất chất lượng cao.
          </p>
        </div>
        <div className="mt-28 flex gap-4">
          <div className="w-1/3">
            <h3 className="font-beautique text-[64px] font-medium text-[#193F53]">
              100
            </h3>
            <p className="text-justify font-montserrat text-lg">
              Ra đời vào 2023, Mean là công ty nội thất với đội ngũ nhân sự trẻ,
              giàu nhiệt huyết và đam mê với sáng tạo, cùng với đó là sự tỉ mỉ
              và cẩn thận trong từng giai đoạn.
            </p>
          </div>
          <div className="w-1/3">
            <p className="text-justify font-montserrat text-lg">
              Chúng tôi tự tin đem đến những không gian sống sáng tạo, và mang
              đậm tính cá nhân của người chủ sở hữu.
            </p>
            <h3 className="font-beautique text-[64px] font-medium text-[#193F53]">
              60
            </h3>
          </div>
          <div className="w-1/3">
            <h3 className="font-beautique text-[64px] font-medium text-[#193F53]">
              60
            </h3>
            <p className="text-justify font-montserrat text-lg">
              Chúng tôi tự tin đem đến những không gian sống sáng tạo, và mang
              đậm tính cá nhân của người chủ sở hữu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
