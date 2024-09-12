/* eslint-disable react/prop-types */
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
export default function Footer({ contactRef }) {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xxl: 1536,
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <footer className="mx-auto flex max-w-sm flex-col justify-between gap-4 border-b border-black px-3 py-16 font-btbeau sm:max-w-xl md:max-w-2xl lg:max-w-4xl lg:gap-8 xl:max-w-6xl xl:flex-row xl:px-0 2xl:max-w-7xl">
          <div>
            <h4 className="mb-2 text-sm font-bold text-[#193F53] lg:mb-4 lg:text-xl xl:mb-9">
              Văn phòng
            </h4>
            <p className="text-xs font-bold text-[#BEBEBE] lg:text-base">
              Địa chỉ
            </p>
            <p className="mt-1 text-xs text-[#4B4B4B] lg:text-base">
              V1- A03 Terra An Hưng,
            </p>
            <p className="text-xs text-[#4B4B4B] lg:text-base">
              Tố Hữu, La Khê,
            </p>
            <p className="text-xs text-[#4B4B4B] lg:text-base">
              Hà Đông, Hà Nội
            </p>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-bold text-[#193F53] lg:mb-4 lg:text-xl xl:mb-9">
              Liên hệ
            </h4>
            <div className="flex flex-col gap-3 text-xs lg:text-base">
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
            <h4 className="mb-2 text-sm font-bold text-[#193F53] lg:mb-4 lg:text-xl xl:mb-9">
              Dịch vụ
            </h4>
            <div className="flex flex-col gap-2 text-xs lg:text-base">
              <p className="text-[#4B4B4B]">Thiết kế nội thất nhà ở</p>
              <p className="text-[#4B4B4B]">Thiết kế nội thất dịch vụ</p>
              <p className="text-[#4B4B4B]">Thiết kế nội thất trọn gói</p>
            </div>
          </div>
          <div className="relative w-[330px]">
            <h4 className="w-[250px] text-sm font-bold text-[#193F53] lg:w-[360px] lg:text-xl">
              Hãy để lại thông tin để cùng nhau tạo nên không gian sống !
            </h4>
            <span
              className="absolute right-28 top-5 cursor-pointer lg:right-[-4px] lg:top-7"
              onClick={() => contactRef.current?.scrollIntoView()}
            >
              <ArrowCircleUpIcon
                sx={{
                  height: { xs: "20px", lg: "24px" },
                  width: { xs: "20px", lg: "24px" },
                }}
              />
            </span>
          </div>
        </footer>
        <p className="mx-auto max-w-sm px-3 py-5 text-center font-montserrat text-xs sm:max-w-xl sm:text-base md:max-w-2xl lg:max-w-4xl xl:max-w-6xl xl:px-0 2xl:max-w-7xl">
          Copyright © {new Date().getFullYear()} Mean Design
        </p>
      </ThemeProvider>
    </>
  );
}
