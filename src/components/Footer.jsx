/* eslint-disable react/prop-types */
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

export default function Footer({ contactRef }) {
  return (
    <>
      <footer className="mx-auto flex max-w-7xl justify-between border-b border-black py-16 font-btbeau">
        <div>
          <h4 className="mb-9 text-xl font-bold text-[#193F53]">Văn phòng</h4>
          <p className="font-bold text-[#BEBEBE]">Địa chỉ</p>
          <p className="mt-1 text-[#4B4B4B]">V1- A03 Terra An Hưng,</p>
          <p className="text-[#4B4B4B]">Tố Hữu, La Khê,</p>
          <p className="text-[#4B4B4B]">Hà Đông, Hà Nội</p>
        </div>
        <div>
          <h4 className="mb-9 text-xl font-bold text-[#193F53]">Liên hệ</h4>
          <div className="flex flex-col gap-3">
            <div className="flex">
              <p className="w-[90px] font-bold text-[#BEBEBE]">Điện thoại</p>
              <p className="text-[#4B4B4B]">056 809 1111</p>
            </div>
            <div className="flex">
              <p className="w-[90px] font-bold text-[#BEBEBE]">Email</p>
              <p className="text-[#4B4B4B]">meandesigner.vp@gmail.com</p>
            </div>
            <div className="flex">
              <p className="w-[90px] font-bold text-[#BEBEBE]">Wedsite</p>
              <p className="text-[#4B4B4B]">http://meandesign.com</p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="mb-9 text-xl font-bold text-[#193F53]">Dịch vụ</h4>
          <div className="flex flex-col gap-2">
            <p className="text-[#4B4B4B]">Thiết kế nội thất nhà ở</p>
            <p className="text-[#4B4B4B]">Thiết kế nội thất dịch vụ</p>
            <p className="text-[#4B4B4B]">Thiết kế nội thất trọn gói</p>
          </div>
        </div>
        <div className="relative w-[330px]">
          <h4 className="w-[360px] text-xl font-bold text-[#193F53]">
            Hãy để lại thông tin để cùng nhau tạo nên không gian sống !
          </h4>
          <span
            className="absolute right-[-4px] top-7 cursor-pointer"
            onClick={() => contactRef.current?.scrollIntoView()}
          >
            <ArrowCircleUpIcon sx={{ height: "24px", width: "24px" }} />
          </span>
        </div>
      </footer>
      <p className="mx-auto max-w-7xl py-5 text-center font-montserrat">
        Copyright © {new Date().getFullYear()} Mean Design
      </p>
    </>
  );
}
