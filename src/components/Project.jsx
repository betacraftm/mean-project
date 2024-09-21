/* eslint-disable react/prop-types */
import ModalGallery from "./ModalGallery";

export default function Project({ projectsRef }) {
  return (
    <div
      id="projects"
      className="mt-16 snap-start scroll-mt-10 sm:mt-36"
      ref={projectsRef}
    >
      <h2 className="font-beautique text-2xl font-medium text-[#193F53] sm:text-3xl lg:text-[56px]">
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

          <div className="mb-14 font-montserrat text-sm md:mb-40 md:text-base lg:mb-48 lg:text-[18px]">
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
            <ModalGallery
              modalSrc={[
                "modal-image/img-01/image-1.jpg",
                "modal-image/img-01/image-2.jpg",
                "modal-image/img-01/image-3.jpg",
              ]}
              src="master-1.png"
              className="w-full cursor-pointer object-cover"
            />
            <ModalGallery
              modalSrc={[
                "modal-image/img-02/image-1.jpg",
                "modal-image/img-02/image-2.jpg",
                "modal-image/img-02/image-3.jpg",
              ]}
              src="ruou.png"
              className="w-full cursor-pointer object-cover"
            />
          </div>

          <div>
            <ModalGallery
              modalSrc={[
                "modal-image/img-03/image-1.jpg",
                "modal-image/img-03/image-2.jpg",
                "modal-image/img-03/image-3.jpg",
              ]}
              src="khach-1.png"
              className="w-full cursor-pointer object-cover"
            />
            <ModalGallery
              modalSrc={[
                "modal-image/img-04/image-1.jpg",
                "modal-image/img-04/image-2.jpg",
                "modal-image/img-04/image-3.jpg",
              ]}
              src="bep-1.png"
              className="w-full cursor-pointer object-cover"
            />
            <ModalGallery
              modalSrc={[
                "modal-image/img-05/image-1.jpg",
                "modal-image/img-05/image-2.jpg",
                "modal-image/img-05/image-3.jpg",
              ]}
              src="bep-2.png"
              className="w-full cursor-pointer object-cover"
            />
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
            <div className="mr-3 w-2/5 text-[9px] min-[375px]:mr-0 min-[375px]:w-1/3 min-[375px]:text-xs">
              <p className="font-montserrat">
                <span className="font-bold">Vị trí:</span> Sao Đỏ - Hải Dương
              </p>
              <p className="text-justify font-montserrat">
                <span className="text-justify font-bold">Mô tả:</span> phong
                cách thiết kế hiện đại, sang trọng mang màu sắc trung tính tạo
                độ nhất quán cho không gian, nhưng không làm giảm đi tính độc
                đáo.
              </p>
              <h3 className="absolute bottom-1 w-24 border-l border-[#193F53] pl-3 pt-1 font-beautique text-xs font-medium italic text-[#193F53] min-[375px]:w-[120px] min-[375px]:text-[15px]">
                Phòng khách & phòng bếp
              </h3>
            </div>

            <div className="flex gap-2">
              <div className="flex flex-col gap-1">
                <ModalGallery
                  src="master-mb.png"
                  className="w-full cursor-pointer object-cover"
                  modalSrc={[
                    "modal-image/img-01/image-1.jpg",
                    "modal-image/img-01/image-2.jpg",
                    "modal-image/img-01/image-3.jpg",
                  ]}
                />
                <ModalGallery
                  src="ruou-mb.png"
                  className="w-full cursor-pointer object-cover"
                  modalSrc={[
                    "modal-image/img-02/image-1.jpg",
                    "modal-image/img-02/image-2.jpg",
                    "modal-image/img-02/image-3.jpg",
                  ]}
                />
              </div>
              <div className="flex flex-col gap-[6px]">
                <ModalGallery
                  src="khach-1-mb.png"
                  className="w-full cursor-pointer object-cover"
                  modalSrc={[
                    "modal-image/img-03/image-1.jpg",
                    "modal-image/img-03/image-2.jpg",
                    "modal-image/img-03/image-3.jpg",
                  ]}
                />
                <ModalGallery
                  src="bep-1-mb.png"
                  className="w-full cursor-pointer object-cover"
                  modalSrc={[
                    "modal-image/img-04/image-1.jpg",
                    "modal-image/img-04/image-2.jpg",
                    "modal-image/img-04/image-3.jpg",
                  ]}
                />
                <ModalGallery
                  src="bep-2-mb.png"
                  className="w-full cursor-pointer object-cover"
                  modalSrc={[
                    "modal-image/img-05/image-1.jpg",
                    "modal-image/img-05/image-2.jpg",
                    "modal-image/img-05/image-3.jpg",
                  ]}
                />
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
            <ModalGallery
              modalSrc={[
                "modal-image/img-06/image-1.jpg",
                "modal-image/img-06/image-2.jpg",
                "modal-image/img-06/image-3.jpg",
              ]}
              src="bedroom-01.png"
              className="w-full cursor-pointer object-cover"
            />
            <h3 className="mt-2 border-l-2 border-[#193F53] pl-2 pt-1 font-beautique font-medium italic leading-none text-[#193F53] md:pt-0 md:text-lg lg:mt-6 lg:pl-3 lg:text-[32px]">
              Phòng ngủ 1
            </h3>
          </div>
          <div className="absolute left-[28%] top-7 z-10 w-[240px] md:left-[32%] lg:left-[33%] lg:w-[300px] xl:left-[30%] xl:w-[460px] 2xl:left-[32%]">
            <h3 className="mx-auto mb-2 max-w-fit border-l-2 border-[#193F53] pl-2 pt-1 font-beautique font-medium italic leading-none text-[#193F53] md:pt-0 md:text-lg lg:mb-4 lg:pl-3 lg:text-[32px]">
              Phòng ngủ 2
            </h3>
            <ModalGallery
              modalSrc={[
                "modal-image/img-07/image-1.jpg",
                "modal-image/img-07/image-2.jpg",
                "modal-image/img-07/image-3.jpg",
                "modal-image/img-07/image-4.jpg",
              ]}
              src="bedroom-02.png"
              className="w-full cursor-pointer object-cover"
            />
          </div>
          <div className="absolute right-0 w-[240px] lg:right-9 lg:w-[300px] xl:w-[460px]">
            <ModalGallery
              modalSrc={[
                "modal-image/img-08/image-1.jpg",
                "modal-image/img-08/image-2.jpg",
                "modal-image/img-08/image-3.jpg",
              ]}
              src="bedroom-03.png"
              className="w-full cursor-pointer object-cover"
            />
            <h3 className="mx-auto mr-12 mt-2 max-w-fit border-l-2 border-[#193F53] pl-2 pt-1 font-beautique font-medium italic leading-none text-[#193F53] md:pt-0 md:text-lg lg:mt-6 lg:pl-3 lg:text-[32px] xl:mr-16 2xl:mr-24">
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

        <div className="relative mt-5 flex min-h-[115px] min-[375px]:min-h-[130px]">
          <div className="absolute left-0 w-[130px] min-[375px]:w-[144px]">
            <ModalGallery
              modalSrc={[
                "modal-image/img-06/image-1.jpg",
                "modal-image/img-06/image-2.jpg",
                "modal-image/img-06/image-3.jpg",
              ]}
              src="bedroom-01-mb.png"
              className="w-full cursor-pointer object-cover"
            />
            <h3 className="mt-2 border-l border-[#193F53] pl-1 pt-1 font-beautique text-[10px] font-medium italic leading-none text-[#193F53] min-[375px]:text-[13px]">
              Phòng ngủ 1
            </h3>
          </div>
          <div className="absolute left-[28%] top-0 z-10 w-[130px] min-[375px]:left-[30%] min-[375px]:w-[144px]">
            <h3 className="mx-auto mb-2 max-w-fit border-l border-[#193F53] pl-1 pt-1 font-beautique text-[10px] font-medium italic leading-none text-[#193F53] min-[375px]:text-[13px]">
              Phòng ngủ 2
            </h3>
            <ModalGallery
              modalSrc={[
                "modal-image/img-07/image-1.jpg",
                "modal-image/img-07/image-2.jpg",
                "modal-image/img-07/image-3.jpg",
                "modal-image/img-07/image-4.jpg",
              ]}
              src="bedroom-02-mb.png"
              className="w-full cursor-pointer object-cover"
            />
          </div>
          <div className="absolute right-0 w-[130px] min-[375px]:w-[144px]">
            <ModalGallery
              modalSrc={[
                "modal-image/img-08/image-1.jpg",
                "modal-image/img-08/image-2.jpg",
                "modal-image/img-08/image-3.jpg",
              ]}
              src="bedroom-03-mb.png"
              className="w-full cursor-pointer object-cover"
            />
            <h3 className="ml-auto mr-3 mt-2 max-w-fit border-l border-[#193F53] pl-1 pt-1 font-beautique text-[10px] font-medium italic leading-none text-[#193F53] min-[375px]:text-[13px]">
              Phòng ngủ 3
            </h3>
          </div>
        </div>
      </div>

      <div className="mx-auto my-6 h-[1px] w-[280px] bg-[#193F53] min-[375px]:w-[320px] sm:my-20 sm:h-[2px] sm:w-3/4 2xl:w-[1010px]"></div>

      <div className="mx-auto mt-8 hidden justify-around gap-5 sm:flex sm:max-w-xl md:max-w-none">
        <div className="flex gap-4">
          <div>
            <ModalGallery
              modalSrc={[
                "modal-image/img-09/image-1.jpg",
                "modal-image/img-09/image-2.jpg",
                "modal-image/img-09/image-3.jpg",
              ]}
              src="khach-2.png"
              className="w-full cursor-pointer object-cover"
            />
            <ModalGallery
              modalSrc={[
                "modal-image/img-10/image-1.jpg",
                "modal-image/img-10/image-2.jpg",
                "modal-image/img-10/image-3.jpg",
              ]}
              src="khach-3.png"
              className="w-full cursor-pointer object-cover"
            />
            <ModalGallery
              modalSrc={[
                "modal-image/img-11/image-1.jpg",
                "modal-image/img-11/image-2.jpg",
              ]}
              src="khach-4.png"
              className="w-full cursor-pointer object-cover"
            />
          </div>

          <div className="flex flex-col gap-2 lg:gap-4">
            <ModalGallery
              modalSrc={[
                "modal-image/img-12/image-1.jpg",
                "modal-image/img-12/image-2.jpg",
              ]}
              src="bep-3.png"
              className="w-full cursor-pointer object-cover"
            />
            <ModalGallery
              modalSrc={[
                "modal-image/img-13/image-1.jpg",
                "modal-image/img-13/image-2.jpg",
              ]}
              src="bep-4.png"
              className="w-full cursor-pointer object-cover"
            />
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

          <div className="mb-9 font-montserrat text-sm md:mb-32 md:text-base lg:mb-48 lg:text-[18px]">
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
                <ModalGallery
                  modalSrc={[
                    "modal-image/img-09/image-1.jpg",
                    "modal-image/img-09/image-2.jpg",
                    "modal-image/img-09/image-3.jpg",
                  ]}
                  src="khach-2-mb.png"
                  className="w-full cursor-pointer object-cover"
                />
                <ModalGallery
                  modalSrc={[
                    "modal-image/img-10/image-1.jpg",
                    "modal-image/img-10/image-2.jpg",
                    "modal-image/img-10/image-3.jpg",
                  ]}
                  src="khach-3-mb.png"
                  className="w-full cursor-pointer object-cover"
                />
                <ModalGallery
                  modalSrc={[
                    "modal-image/img-11/image-1.jpg",
                    "modal-image/img-11/image-2.jpg",
                  ]}
                  src="khach-4-mb.png"
                  className="w-full cursor-pointer object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 min-[375px]:gap-1">
                <ModalGallery
                  modalSrc={[
                    "modal-image/img-12/image-1.jpg",
                    "modal-image/img-12/image-2.jpg",
                  ]}
                  src="bep-3-mb.png"
                  className="w-full cursor-pointer object-cover"
                />
                <ModalGallery
                  modalSrc={[
                    "modal-image/img-13/image-1.jpg",
                    "modal-image/img-13/image-2.jpg",
                  ]}
                  src="bep-4-mb.png"
                  className="w-full cursor-pointer object-cover"
                />
              </div>
            </div>

            <div className="ml-3 w-2/5 text-[9px] min-[375px]:ml-0 min-[375px]:w-1/3 min-[375px]:text-xs">
              <p className="font-montserrat">
                <span className="font-bold">Vị trí:</span> Hạ Long - Quảng Ninh
              </p>
              <p className="text-justify font-montserrat">
                <span className="text-justify font-bold">Mô tả:</span> phong
                cách thiết kế cổ điển, mang tone màu ấm, chất liệu nội thất được
                sử dụng chủ yếu là gỗ với màu sắc đậm và họa tiết vân rõ ràng,
                tăng thêm sự sang trọng cho không gian
              </p>
              <h3 className="absolute bottom-1 w-24 border-l border-[#193F53] pl-3 pt-1 font-beautique text-xs font-medium italic text-[#193F53] min-[375px]:w-[120px] min-[375px]:text-[15px]">
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
            <ModalGallery
              modalSrc={[
                "modal-image/img-14/image-1.jpg",
                "modal-image/img-14/image-2.jpg",
                "modal-image/img-14/image-3.jpg",
                "modal-image/img-14/image-4.jpg",
              ]}
              src="bedroom-4.png"
              className="w-full cursor-pointer object-cover"
            />
            <h3 className="mt-2 border-l-2 border-[#193F53] pl-2 pt-1 font-beautique font-medium italic leading-none text-[#193F53] md:pt-0 md:text-lg lg:mt-6 lg:pl-3 lg:text-[32px]">
              Phòng ngủ 1
            </h3>
          </div>
          <div className="absolute left-[28%] top-7 z-10 w-[240px] md:left-[32%] lg:left-[33%] lg:w-[300px] xl:left-[30%] xl:w-[460px] 2xl:left-[32%]">
            <h3 className="mx-auto mb-2 max-w-fit border-l-2 border-[#193F53] pl-2 pt-1 font-beautique font-medium italic leading-none text-[#193F53] md:pt-0 md:text-lg lg:mb-4 lg:pl-3 lg:text-[32px]">
              Phòng ngủ 2
            </h3>
            <ModalGallery
              modalSrc={[
                "modal-image/img-15/image-1.jpg",
                "modal-image/img-15/image-2.jpg",
                "modal-image/img-15/image-3.jpg",
                "modal-image/img-15/image-4.jpg",
              ]}
              src="bedroom-5.png"
              className="w-full cursor-pointer object-cover"
            />
          </div>
          <div className="absolute right-0 w-[240px] lg:right-9 lg:w-[300px] xl:w-[460px]">
            <ModalGallery
              modalSrc={[
                "modal-image/img-16/image-1.jpg",
                "modal-image/img-16/image-2.jpg",
                "modal-image/img-16/image-3.jpg",
                "modal-image/img-16/image-4.jpg",
              ]}
              src="bedroom-6.png"
              className="w-full cursor-pointer object-cover"
            />
            <h3 className="mx-auto mr-12 mt-2 max-w-fit border-l-2 border-[#193F53] pl-2 pt-1 font-beautique font-medium italic leading-none text-[#193F53] md:pt-0 md:text-lg lg:mt-6 lg:pl-3 lg:text-[32px] xl:mr-16 2xl:mr-24">
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

        <div className="relative mt-5 flex min-h-[115px] min-[375px]:min-h-[130px]">
          <div className="absolute left-0 w-[130px] min-[375px]:w-[144px]">
            <ModalGallery
              modalSrc={[
                "modal-image/img-14/image-1.jpg",
                "modal-image/img-14/image-2.jpg",
                "modal-image/img-14/image-3.jpg",
                "modal-image/img-14/image-4.jpg",
              ]}
              src="bedroom-4-mb.png"
              className="w-full cursor-pointer object-cover"
            />
            <h3 className="mt-2 border-l border-[#193F53] pl-1 pt-1 font-beautique text-[10px] font-medium italic leading-none text-[#193F53] min-[375px]:text-[13px]">
              Phòng ngủ 1
            </h3>
          </div>
          <div className="absolute left-[28%] top-0 z-10 w-[130px] min-[375px]:left-[30%] min-[375px]:w-[144px]">
            <h3 className="mx-auto mb-2 max-w-fit border-l border-[#193F53] pl-1 pt-1 font-beautique text-[10px] font-medium italic leading-none text-[#193F53] min-[375px]:text-[13px]">
              Phòng ngủ 2
            </h3>
            <ModalGallery
              modalSrc={[
                "modal-image/img-15/image-1.jpg",
                "modal-image/img-15/image-2.jpg",
                "modal-image/img-15/image-3.jpg",
                "modal-image/img-15/image-4.jpg",
              ]}
              src="bedroom-5-mb.png"
              className="w-full cursor-pointer object-cover"
            />
          </div>
          <div className="absolute right-0 w-[130px] min-[375px]:w-[144px]">
            <ModalGallery
              modalSrc={[
                "modal-image/img-16/image-1.jpg",
                "modal-image/img-16/image-2.jpg",
                "modal-image/img-16/image-3.jpg",
                "modal-image/img-16/image-4.jpg",
              ]}
              src="bedroom-6-mb.png"
              className="w-full cursor-pointer object-cover"
            />
            <h3 className="ml-auto mr-3 mt-2 max-w-fit border-l border-[#193F53] pl-1 pt-1 font-beautique text-[10px] font-medium italic leading-none text-[#193F53] min-[375px]:text-[13px]">
              Phòng ngủ 3
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
