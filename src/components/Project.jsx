/* eslint-disable react/prop-types */
export default function Project({ projectsRef }) {
  return (
    <div
      id="projects"
      className="mt-36 snap-start scroll-mt-10"
      ref={projectsRef}
    >
      <h2 className="font-beautique text-2xl font-medium text-[#193F53] min-[500px]:ml-9 min-[600px]:ml-20 sm:ml-0 sm:text-3xl lg:text-[56px]">
        Dự án
      </h2>

      <div className="mx-auto mt-8 hidden justify-around gap-5 sm:flex sm:max-w-xl md:max-w-none">
        <div className="w-[510px] md:w-[400px]">
          <div className="mb-4 border-l-2 border-[#193F53] pl-3">
            <h3 className="font-beautique text-2xl font-extrabold text-[#193F53] lg:text-4xl lg:leading-[50px]">
              Thiết kế căn hộ
            </h3>
            <span className="font-beautique text-xl font-medium italic leading-none text-[#193F53] lg:text-2xl">
              [ Sao Đỏ - Hải Dương ]
            </span>
          </div>

          <div className="mb-14 font-montserrat text-base md:mb-40 lg:mb-48 lg:text-[18px]">
            <p>
              <span className="font-bold">Vị trí:</span> Sao Đỏ - Hải Dương
            </p>
            <p className="text-justify">
              <span className="text-justify font-bold">Mô tả:</span> phong cách
              thiết kế hiện đại, sang trọng mang màu sắc trung tính tạo độ nhất
              quán cho không gian, nhưng không làm giảm đi tính độc đáo.
            </p>
          </div>

          <h3 className="mb-3 w-[180px] border-l-[3px] border-[#193F53] pl-3 pt-1 font-beautique text-[24px] font-medium italic text-[#193F53] lg:w-[300px] lg:text-[40px] lg:leading-[50px]">
            Phòng khách & phòng bếp
          </h3>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col gap-2 lg:gap-4">
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

      <div className="mx-auto mt-3 max-w-sm sm:hidden">
        <div>
          <div className="mb-4 border-l border-[#193F53] pl-3">
            <h3 className="font-beautique text-[20px] font-extrabold text-[#193F53]">
              Thiết kế căn hộ
            </h3>
            <span className="font-beautique text-sm font-medium italic leading-none text-[#193F53]">
              [ Sao Đỏ - Hải Dương ]
            </span>
          </div>

          <div className="relative flex justify-between">
            <div className="w-1/3 text-xs">
              <p className="font-montserrat">
                <span className="font-bold">Vị trí:</span> Sao Đỏ - Hải Dương
              </p>
              <p className="text-justify font-montserrat">
                <span className="text-justify font-bold">Mô tả:</span> phong
                cách thiết kế hiện đại, sang trọng mang màu sắc trung tính tạo
                độ nhất quán cho không gian, nhưng không làm giảm đi tính độc
                đáo.
              </p>
              <h3 className="absolute bottom-1 w-[120px] border-l border-[#193F53] pl-3 pt-1 font-beautique text-[15px] font-medium italic text-[#193F53]">
                Phòng khách & phòng bếp
              </h3>
            </div>

            <div className="flex gap-2">
              <div className="flex flex-col gap-1">
                <img src="master-mb.png" className="w-full object-cover" />
                <img src="ruou-mb.png" className="w-full object-cover" />
              </div>
              <div className="flex flex-col gap-[6px]">
                <img src="khach-1-mb.png" className="w-full object-cover" />
                <img src="bep-1-mb.png" className="w-full object-cover" />
                <img src="bep-2-mb.png" className="w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 hidden sm:block sm:max-w-xl md:max-w-none">
        <div className="mx-auto max-w-fit">
          <h3 className="font-beautique text-3xl font-medium text-[#193F53] lg:text-5xl xl:text-[56px]">
            Phòng ngủ
          </h3>
          <div className="mt-1 h-[3px] bg-[#193F53] lg:mt-3"></div>
        </div>

        <div className="relative mt-9 flex min-h-[240px] lg:mt-16 lg:min-h-[300px] xl:min-h-[430px]">
          <div className="absolute left-0 w-[240px] lg:left-9 lg:w-[300px] xl:w-[460px]">
            <img src="bedroom-01.png" className="w-full object-cover" />
            <h3 className="mt-2 border-l-2 border-[#193F53] pl-2 pt-1 font-beautique font-medium italic leading-none text-[#193F53] md:pt-0 md:text-lg lg:mt-6 lg:pl-3 lg:text-[32px]">
              Phòng ngủ 1
            </h3>
          </div>
          <div className="absolute left-1/2 top-7 z-10 w-[240px] translate-x-[-50%] lg:w-[300px] xl:w-[460px]">
            <h3 className="mx-auto mb-2 max-w-fit border-l-2 border-[#193F53] pl-2 pt-1 font-beautique font-medium italic leading-none text-[#193F53] md:pt-0 md:text-lg lg:mb-4 lg:pl-3 lg:text-[32px]">
              Phòng ngủ 2
            </h3>
            <img src="bedroom-02.png" className="w-full object-cover" />
          </div>
          <div className="absolute right-0 w-[240px] lg:right-9 lg:w-[300px] xl:w-[460px]">
            <img src="bedroom-03.png" className="w-full object-cover" />
            <h3 className="mx-auto mr-14 mt-2 max-w-fit border-l-2 border-[#193F53] pl-2 pt-1 font-beautique font-medium italic leading-none text-[#193F53] md:pt-0 md:text-lg lg:mt-6 lg:pl-3 lg:text-[32px]">
              Phòng ngủ 3
            </h3>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-sm sm:hidden">
        <div className="mx-auto max-w-fit">
          <h3 className="font-beautique text-xl font-medium text-[#193F53]">
            Phòng ngủ
          </h3>
          <div className="mt-1 h-[1px] bg-[#193F53]"></div>
        </div>

        <div className="relative mt-5 flex min-h-[130px]">
          <div className="absolute left-0 w-[144px]">
            <img src="bedroom-01-mb.png" className="w-full object-cover" />
            <h3 className="mt-2 border-l-2 border-[#193F53] pl-1 pt-1 font-beautique text-[13px] font-medium italic leading-none text-[#193F53]">
              Phòng ngủ 1
            </h3>
          </div>
          <div className="absolute left-1/2 top-0 z-10 w-[144px] translate-x-[-50%]">
            <h3 className="mx-auto mb-2 max-w-fit border-l-2 border-[#193F53] pl-1 pt-1 font-beautique text-[13px] font-medium italic leading-none text-[#193F53]">
              Phòng ngủ 2
            </h3>
            <img src="bedroom-02-mb.png" className="w-full object-cover" />
          </div>
          <div className="absolute right-0 w-[144px]">
            <img src="bedroom-03-mb.png" className="w-full object-cover" />
            <h3 className="ml-auto mr-3 mt-2 max-w-fit border-l-2 border-[#193F53] pl-1 pt-1 font-beautique text-[13px] font-medium italic leading-none text-[#193F53]">
              Phòng ngủ 3
            </h3>
          </div>
        </div>
      </div>

      <div className="mx-auto my-6 h-[1px] w-[320px] bg-[#193F53] sm:my-20 sm:h-[2px] sm:w-3/4 2xl:w-[1010px]"></div>

      <div className="mx-auto mt-8 hidden justify-around gap-5 sm:flex sm:max-w-xl md:max-w-none">
        <div className="flex gap-4">
          <div>
            <img src="khach-2.png" className="w-full object-cover" />
            <img src="khach-3.png" className="w-full object-cover" />
            <img src="khach-4.png" className="w-full object-cover" />
          </div>

          <div className="flex flex-col gap-2 lg:gap-4">
            <img src="bep-3.png" className="w-full object-cover" />
            <img src="bep-4.png" className="w-full object-cover" />
          </div>
        </div>

        <div className="w-[510px] md:w-[400px]">
          <div className="mb-4 border-l-2 border-[#193F53] pl-3">
            <h3 className="font-beautique text-2xl font-extrabold text-[#193F53] lg:text-4xl lg:leading-[50px]">
              Thiết kế căn hộ
            </h3>
            <span className="font-beautique text-xl font-medium italic leading-none text-[#193F53] lg:text-2xl">
              [ Hạ Long - Quảng Ninh ]
            </span>
          </div>

          <div className="mb-3 font-montserrat text-base md:mb-32 lg:mb-48 lg:text-[18px]">
            <p>
              <span className="font-bold">Vị trí:</span> Hạ Long - Quảng Ninh
            </p>
            <p className="text-justify">
              <span className="text-justify font-bold">Mô tả:</span> phong cách
              thiết kế cổ điển, mang tone màu ấm, chất liệu nội thất được sử
              dụng chủ yếu là gỗ với màu sắc đậm và họa tiết vân rõ ràng, tăng
              thêm sự sang trọng cho không gian
            </p>
          </div>

          <h3 className="mb-3 w-[180px] border-l-[3px] border-[#193F53] pl-3 pt-1 font-beautique text-[24px] font-medium italic text-[#193F53] lg:w-[300px] lg:text-[40px] lg:leading-[50px]">
            Phòng khách & phòng bếp
          </h3>
        </div>
      </div>

      <div className="mx-auto mt-3 max-w-sm sm:hidden">
        <div>
          <div className="mb-4 border-l border-[#193F53] pl-3">
            <h3 className="font-beautique text-[20px] font-extrabold text-[#193F53]">
              Thiết kế căn hộ
            </h3>
            <span className="font-beautique text-sm font-medium italic leading-none text-[#193F53]">
              [ Hạ Long - Quảng Ninh ]
            </span>
          </div>

          <div className="relative flex justify-between">
            <div className="flex gap-2">
              <div className="flex flex-col gap-[6px]">
                <img src="khach-2-mb.png" className="w-full object-cover" />
                <img src="khach-3-mb.png" className="w-full object-cover" />
                <img src="khach-4-mb.png" className="w-full object-cover" />
              </div>
              <div className="flex flex-col gap-1">
                <img src="bep-3-mb.png" className="w-full object-cover" />
                <img src="bep-4-mb.png" className="w-full object-cover" />
              </div>
            </div>

            <div className="w-1/3 text-xs">
              <p className="font-montserrat">
                <span className="font-bold">Vị trí:</span> Hạ Long - Quảng Ninh
              </p>
              <p className="text-justify font-montserrat">
                <span className="text-justify font-bold">Mô tả:</span> phong
                cách thiết kế cổ điển, mang tone màu ấm, chất liệu nội thất được
                sử dụng chủ yếu là gỗ với màu sắc đậm và họa tiết vân rõ ràng,
                tăng thêm sự sang trọng cho không gian
              </p>
              <h3 className="absolute bottom-1 w-[120px] border-l border-[#193F53] pl-3 pt-1 font-beautique text-[15px] font-medium italic text-[#193F53]">
                Phòng khách & phòng bếp
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 hidden sm:block sm:max-w-xl md:max-w-none">
        <div className="mx-auto max-w-fit">
          <h3 className="font-beautique text-3xl font-medium text-[#193F53] lg:text-5xl xl:text-[56px]">
            Phòng ngủ
          </h3>
          <div className="mt-1 h-[3px] bg-[#193F53] lg:mt-3"></div>
        </div>

        <div className="relative mt-9 flex min-h-[240px] lg:mt-16 lg:min-h-[300px] xl:min-h-[430px]">
          <div className="absolute left-0 w-[240px] lg:left-9 lg:w-[300px] xl:w-[460px]">
            <img src="bedroom-4.png" className="w-full object-cover" />
            <h3 className="mt-2 border-l-2 border-[#193F53] pl-2 pt-1 font-beautique font-medium italic leading-none text-[#193F53] md:pt-0 md:text-lg lg:mt-6 lg:pl-3 lg:text-[32px]">
              Phòng ngủ 1
            </h3>
          </div>
          <div className="absolute left-1/2 top-7 z-10 w-[240px] translate-x-[-50%] lg:w-[300px] xl:w-[460px]">
            <h3 className="mx-auto mb-2 max-w-fit border-l-2 border-[#193F53] pl-2 pt-1 font-beautique font-medium italic leading-none text-[#193F53] md:pt-0 md:text-lg lg:mb-4 lg:pl-3 lg:text-[32px]">
              Phòng ngủ 2
            </h3>
            <img src="bedroom-5.png" className="w-full object-cover" />
          </div>
          <div className="absolute right-0 w-[240px] lg:right-9 lg:w-[300px] xl:w-[460px]">
            <img src="bedroom-6.png" className="w-full object-cover" />
            <h3 className="mx-auto mr-14 mt-2 max-w-fit border-l-2 border-[#193F53] pl-2 pt-1 font-beautique font-medium italic leading-none text-[#193F53] md:pt-0 md:text-lg lg:mt-6 lg:pl-3 lg:text-[32px]">
              Phòng ngủ 3
            </h3>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-sm sm:hidden">
        <div className="mx-auto max-w-fit">
          <h3 className="font-beautique text-xl font-medium text-[#193F53]">
            Phòng ngủ
          </h3>
          <div className="mt-1 h-[1px] bg-[#193F53]"></div>
        </div>

        <div className="relative mt-5 flex min-h-[130px]">
          <div className="absolute left-0 w-[144px]">
            <img src="bedroom-4-mb.png" className="w-full object-cover" />
            <h3 className="mt-2 border-l-2 border-[#193F53] pl-1 pt-1 font-beautique text-[13px] font-medium italic leading-none text-[#193F53]">
              Phòng ngủ 1
            </h3>
          </div>
          <div className="absolute left-1/2 top-0 z-10 w-[144px] translate-x-[-50%]">
            <h3 className="mx-auto mb-2 max-w-fit border-l-2 border-[#193F53] pl-1 pt-1 font-beautique text-[13px] font-medium italic leading-none text-[#193F53]">
              Phòng ngủ 2
            </h3>
            <img src="bedroom-5-mb.png" className="w-full object-cover" />
          </div>
          <div className="absolute right-0 w-[144px]">
            <img src="bedroom-6-mb.png" className="w-full object-cover" />
            <h3 className="ml-auto mr-3 mt-2 max-w-fit border-l-2 border-[#193F53] pl-1 pt-1 font-beautique text-[13px] font-medium italic leading-none text-[#193F53]">
              Phòng ngủ 3
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
