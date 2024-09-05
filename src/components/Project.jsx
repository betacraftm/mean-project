export default function Project() {
  return (
    <div id="projects" className="mt-36 snap-start scroll-mt-10">
      <h2 className="font-beautique text-[56px] font-medium text-[#193F53]">
        Dự án
      </h2>
      <div className="flex">
        <div className="w-[648px]">
          <div>
            <div className="mb-4 border-l-2 border-[#193F53] pl-3">
              <h3 className="font-beautique text-4xl font-bold leading-[50px] text-[#193F53]">
                Thiết kế căn hộ
              </h3>
              <span className="font-beautique text-2xl font-medium italic leading-none text-[#193F53]">
                [ Sao Đỏ - Hải Dương ]
              </span>
            </div>

            <div className="mb-4 font-montserrat text-[18px]">
              <p>
                <span className="font-bold">Vị trí:</span> Sao Đỏ - Hải Dương
              </p>
              <p className="mr-4 text-justify">
                <span className="text-justify font-bold">Mô tả:</span> phong
                cách thiết kế hiện đại, sang trọng mang màu sắc trung tính tạo
                độ nhất quán cho không gian, nhưng không làm giảm đi tính độc
                đáo.
              </p>
            </div>

            <h3 className="mb-3 border-l-2 border-[#193F53] pl-3 pt-1 font-beautique text-[32px] font-medium italic leading-none text-[#193F53]">
              Tủ rượu
            </h3>

            <img src="ruou.png" className="mb-3 w-full object-cover" />

            <h3 className="ml-auto mr-4 max-w-fit border-r-2 border-[#193F53] pr-3 pt-1 font-beautique text-[32px] font-medium italic leading-none text-[#193F53]">
              Phòng bếp
            </h3>
          </div>
        </div>
        <div className="w-full">
          <h3 className="mb-3 border-l-2 border-[#193F53] pl-3 pt-1 font-beautique text-[32px] font-medium italic leading-none text-[#193F53]">
            Phòng khách
          </h3>

          <img src="khach-01.png" className="w-full object-cover" />
          <div className="flex">
            <img src="bep-101.png" className="w-1/2 object-cover" />
            <img src="bep-102.png" className="w-1/2 object-cover" />
          </div>
        </div>
      </div>
      <div className="mt-16">
        <div className="mx-auto max-w-fit">
          <h3 className="font-beautique text-5xl font-medium text-[#193F53]">
            Phòng ngủ
          </h3>
          <div className="ml-2 mt-3 h-[2px] bg-[#193F53]"></div>
        </div>

        <div className="relative mb-20 mt-16 flex min-h-[450px]">
          <div className="absolute w-[490px]">
            <img src="bedroom-01.png" className="w-full object-cover" />
            <h3 className="mt-6 border-l-2 border-[#193F53] pl-3 pt-1 font-beautique text-[32px] font-medium italic leading-none text-[#193F53]">
              Phòng ngủ 1
            </h3>
          </div>
          <div className="absolute left-1/2 top-7 z-10 w-[490px] translate-x-[-50%]">
            <h3 className="mx-auto mb-4 max-w-fit border-l-2 border-[#193F53] pl-3 pt-1 font-beautique text-[32px] font-medium italic leading-none text-[#193F53]">
              Phòng ngủ 2
            </h3>
            <img src="bedroom-02.png" className="w-full object-cover" />
          </div>
          <div className="absolute right-0 w-[490px]">
            <img src="bedroom-03.png" className="w-full object-cover" />
            <h3 className="mx-auto mt-6 max-w-fit border-l-2 border-[#193F53] pl-3 pt-1 font-beautique text-[32px] font-medium italic leading-none text-[#193F53]">
              Phòng ngủ 3
            </h3>
          </div>
        </div>
      </div>
      <div className="mx-auto h-[2px] w-[1010px] bg-[#193F53]"></div>
    </div>
  );
}
