export default function Project() {
  return (
    <div id="projects" className="mt-36 snap-start scroll-mt-10">
      <h2 className="font-beautique text-[56px] font-medium text-[#193F53]">
        Dự án
      </h2>

      <div className="mt-8 flex justify-around">
        <div className="w-[380px]">
          <div className="mb-4 border-l-2 border-[#193F53] pl-3">
            <h3 className="font-beautique text-4xl font-extrabold leading-[50px] text-[#193F53]">
              Thiết kế căn hộ
            </h3>
            <span className="font-beautique text-2xl font-medium italic leading-none text-[#193F53]">
              [ Sao Đỏ - Hải Dương ]
            </span>
          </div>

          <div className="mb-48 font-montserrat text-[18px]">
            <p>
              <span className="font-bold">Vị trí:</span> Sao Đỏ - Hải Dương
            </p>
            <p className="text-justify">
              <span className="text-justify font-bold">Mô tả:</span> phong cách
              thiết kế hiện đại, sang trọng mang màu sắc trung tính tạo độ nhất
              quán cho không gian, nhưng không làm giảm đi tính độc đáo.
            </p>
          </div>

          <h3 className="mb-3 w-[300px] border-l-[3px] border-[#193F53] pl-3 pt-1 font-beautique text-[40px] font-medium italic leading-[50px] text-[#193F53]">
            Phòng khách & phòng bếp
          </h3>
        </div>

        <div className="flex w-[full] gap-4">
          <div className="flex flex-col gap-4">
            <img src="master-1.png" className="w-full object-cover" />
            <img src="ruou.png" className="w-full object-cover" />
          </div>

          <div>
            <img src="khach-1.png" className="w-full object-cover" />
            <img src="bep-1.png" className="w-full object-cover" />
            <img src="bep-2.png" className="w-full object-cover" />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="mx-auto max-w-fit">
          <h3 className="font-beautique text-5xl font-medium text-[#193F53]">
            Phòng ngủ
          </h3>
          <div className="mt-3 h-[3px] bg-[#193F53]"></div>
        </div>

        <div className="relative mt-16 flex min-h-[450px]">
          <div className="absolute left-9 w-[460px]">
            <img src="bedroom-01.png" className="w-full object-cover" />
            <h3 className="mt-6 border-l-2 border-[#193F53] pl-3 pt-1 font-beautique text-[32px] font-medium italic leading-none text-[#193F53]">
              Phòng ngủ 1
            </h3>
          </div>
          <div className="absolute left-1/2 top-7 z-10 w-[460px] translate-x-[-50%]">
            <h3 className="mx-auto mb-4 max-w-fit border-l-2 border-[#193F53] pl-3 pt-1 font-beautique text-[32px] font-medium italic leading-none text-[#193F53]">
              Phòng ngủ 2
            </h3>
            <img src="bedroom-02.png" className="w-full object-cover" />
          </div>
          <div className="absolute right-9 w-[460px]">
            <img src="bedroom-03.png" className="w-full object-cover" />
            <h3 className="mx-auto mt-6 max-w-fit border-l-2 border-[#193F53] pl-3 pt-1 font-beautique text-[32px] font-medium italic leading-none text-[#193F53]">
              Phòng ngủ 3
            </h3>
          </div>
        </div>
      </div>

      <div className="mx-auto my-20 h-[2px] w-[1010px] bg-[#193F53]"></div>

      <div className="flex justify-around">
        <div className="flex w-[full] gap-4">
          <div>
            <img src="khach-2.png" className="w-full object-cover" />
            <img src="khach-3.png" className="w-full object-cover" />
            <img src="khach-4.png" className="w-full object-cover" />
          </div>
          <div className="flex flex-col gap-4">
            <img src="bep-3.png" className="w-full object-cover" />
            <img src="bep-4.png" className="w-full object-cover" />
          </div>
        </div>

        <div className="w-[380px]">
          <div className="mb-4 border-l-2 border-[#193F53] pl-3">
            <h3 className="font-beautique text-4xl font-extrabold leading-[50px] text-[#193F53]">
              Thiết kế căn hộ
            </h3>
            <span className="font-beautique text-2xl font-medium italic leading-none text-[#193F53]">
              [ Hạ Long - Quảng Ninh ]
            </span>
          </div>

          <div className="mb-48 font-montserrat text-[18px]">
            <p>
              <span className="font-bold">Vị trí:</span> Hạ Long - Quảng Ninh
            </p>
            <p className="text-justify">
              <span className="text-justify font-bold">Mô tả:</span> phong cách
              thiết kế cổ điển, mang tone màu ấm, chất liệu nội thất được sử
              dụng chủ yếu là gỗ với màu sắc đậm và họa tiết vân rõ ràng, tăng
              thêm sự sang trọng cho không gian.
            </p>
          </div>

          <h3 className="ml-auto w-[300px] border-r-[3px] border-[#193F53] pr-3 pt-1 text-right font-beautique text-[40px] font-medium italic leading-[50px] text-[#193F53]">
            Phòng khách & phòng bếp
          </h3>
        </div>
      </div>

      <div className="mt-16">
        <div className="mx-auto max-w-fit">
          <h3 className="font-beautique text-5xl font-medium text-[#193F53]">
            Phòng ngủ
          </h3>
          <div className="mt-3 h-[3px] bg-[#193F53]"></div>
        </div>

        <div className="relative mt-16 flex min-h-[450px]">
          <div className="absolute left-9 w-[460px]">
            <img src="bedroom-4.png" className="w-full object-cover" />
            <h3 className="mt-6 border-l-2 border-[#193F53] pl-3 pt-1 font-beautique text-[32px] font-medium italic leading-none text-[#193F53]">
              Phòng ngủ 1
            </h3>
          </div>
          <div className="absolute left-1/2 top-7 z-10 w-[460px] translate-x-[-50%]">
            <h3 className="mx-auto mb-4 max-w-fit border-l-2 border-[#193F53] pl-3 pt-1 font-beautique text-[32px] font-medium italic leading-none text-[#193F53]">
              Phòng ngủ 2
            </h3>
            <img src="bedroom-5.png" className="w-full object-cover" />
          </div>
          <div className="absolute right-9 w-[460px]">
            <img src="bedroom-6.png" className="w-full object-cover" />
            <h3 className="mx-auto mt-6 max-w-fit border-l-2 border-[#193F53] pl-3 pt-1 font-beautique text-[32px] font-medium italic leading-none text-[#193F53]">
              Phòng ngủ 3
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
