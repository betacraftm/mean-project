/* eslint-disable react/prop-types */
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  CssBaseline,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

export default function Contact({ contactRef }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    service: "",
    address: "",
    createdAt: "",
  });

  const formRegex = () => {
    const vietnamCharacter =
      "ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ";
    const fullNameReg = new RegExp(`^[A-Za-z${vietnamCharacter}\\s]{2,}$`, "g");
    const phoneNumberReg = new RegExp(`^\\d+$`, "g");
    const { fullName, phoneNumber, service, address } = formData;
    if (!fullName || !phoneNumber || !service || !address)
      return toast.error("Xin hãy điền vào tất cả các ô");
    if (!fullNameReg.test(fullName)) return toast.error("Tên không hợp lệ");
    if (!phoneNumberReg.test(phoneNumber))
      return toast.error("Số điện thoại không hợp lệ");
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formRegex()) {
      return;
    }
    const now = new Date();
    const vietnameseDateTime = now.toLocaleString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    formData.createdAt = vietnameseDateTime;
    const form_data = new FormData();
    for (let key in formData) {
      form_data.append(key, formData[key]);
    }

    const toastId = toast.loading("Đang gửi dữ liệu");
    try {
      await axios.post(
        "https://script.google.com/macros/s/AKfycbzJuY_FqsejcAgR18o789TI2C2-gk_LGTqTPpe9VOeT_D17Fa9bFeJcfLGMz6x6pRcYPQ/exec",
        form_data,
      );
      toast.success("Chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất", {
        id: toastId,
      });
      setFormData({
        ...formData,
        fullName: "",
        service: "",
        phoneNumber: "",
        address: "",
        createdAt: "",
      });
    } catch (error) {
      console.log(error.message);
      toast.error("Có lỗi trong quá trình gửi dữ liệu", {
        id: toastId,
      });
    }
  };

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        ref={contactRef}
        id="contact"
        className="flex min-h-screen snap-start items-center justify-center bg-[url('/contact.png')] bg-cover bg-center bg-no-repeat"
      >
        <div>
          <Toaster
            position="bottom-center"
            toastOptions={{
              style: {
                fontSize: "24px",
                fontFamily: "Montserrat",
                maxWidth: "fit-content",
                padding: "15px",
              },
            }}
          />
        </div>
        <div className="flex max-w-sm flex-col justify-center px-3 py-6 sm:max-w-xl sm:flex-row sm:gap-4 md:max-w-2xl md:gap-6 lg:max-w-4xl xl:max-w-6xl xl:px-0 2xl:max-w-7xl">
          <div className="sm:w-1/2">
            <h2 className="mb-8 font-beautique text-2xl font-medium italic leading-10 text-white sm:mb-0 lg:text-3xl xl:text-5xl xl:leading-[70px]">
              Hiện thực hóa không gian gian mơ ước của bạn !
            </h2>
          </div>
          <div className="mt-2 sm:w-1/2">
            <p className="mb-4 font-btbeau font-bold text-white sm:text-lg lg:text-2xl xl:mb-11 xl:text-4xl">
              Để lại thông tin của bạn ở đây nhé!
            </p>
            <form id="customer-form" autoComplete="off">
              <FormControl fullWidth>
                <TextField
                  required
                  fullWidth
                  variant="standard"
                  label="Họ và Tên"
                  value={formData?.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  type="text"
                  sx={{
                    marginBottom: { xs: "18px", sm: "30px" },
                    input: {
                      color: "white",
                      fontFamily: "Montserrat",
                      fontSize: {
                        xs: "14px",
                        sm: "14px",
                        md: "16px",
                        lg: "20px",
                      },
                      paddingTop: { xs: "5px", sm: "10px" },
                      paddingBottom: { xs: "10px", sm: "10px" },
                      fontWeight: "300",
                    },
                    "& .MuiInputLabel-standard": {
                      color: "white",
                      fontSize: {
                        xs: "14px",
                        sm: "14px",
                        md: "16px",
                        lg: "20px",
                      },
                      fontWeight: "400",
                      fontFamily: "Montserrat",
                      "&.Mui-focused": {
                        color: "white",
                      },
                      "& .MuiFormLabel-asterisk": {
                        display: "none",
                      },
                    },
                    "& .MuiInput-root": {
                      ":hover:not(.Mui-focused)": {
                        "&:before": {
                          borderColor: "white",
                        },
                      },
                      "&:before": {
                        borderColor: "white",
                      },
                      "&:after": {
                        transition: "none",
                        borderColor: "white",
                      },
                    },
                  }}
                />
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  required
                  fullWidth
                  variant="standard"
                  label="Số điện thoại"
                  type="text"
                  value={formData?.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                  sx={{
                    marginBottom: { xs: "18px", sm: "30px" },
                    input: {
                      color: "white",
                      fontFamily: "Montserrat",
                      fontSize: {
                        xs: "14px",
                        sm: "14px",
                        md: "16px",
                        lg: "20px",
                      },
                      paddingTop: { xs: "5px", sm: "10px" },
                      paddingBottom: { xs: "10px", sm: "10px" },
                      fontWeight: "300",
                    },
                    "& .MuiInputLabel-standard": {
                      color: "white",
                      fontSize: {
                        xs: "14px",
                        sm: "14px",
                        md: "16px",
                        lg: "20px",
                      },
                      fontWeight: "400",
                      fontFamily: "Montserrat",
                      "&.Mui-focused": {
                        color: "white",
                      },
                      "& .MuiFormLabel-asterisk": {
                        display: "none",
                      },
                    },
                    "& .MuiInput-root": {
                      ":hover:not(.Mui-focused)": {
                        "&:before": {
                          borderColor: "white",
                        },
                      },
                      "&:before": {
                        borderColor: "white",
                      },
                      "&:after": {
                        transition: "none",
                        borderColor: "white",
                      },
                    },
                  }}
                />
              </FormControl>

              <FormControl
                required
                variant="standard"
                fullWidth
                sx={{
                  "& .MuiInputBase-root": {
                    ":hover:not(.Mui-focused)": {
                      "&:before": {
                        borderColor: "white",
                      },
                    },
                    "&:before": {
                      borderColor: "white",
                    },
                    "&:after": {
                      transition: "none",
                      borderColor: "white",
                    },
                    "& .MuiSvgIcon-root": {
                      height: {
                        xs: "24px",
                        lg: "32px",
                      },
                      width: {
                        xs: "24px",
                        lg: "32px",
                      },
                    },
                    "& .MuiSelect-select": {
                      paddingTop: {
                        xs: "4px",
                        sm: "15px",
                      },
                      paddingBottom: {
                        xs: "7px",
                        sm: "7px",
                        md: "10px",
                      },
                      fontSize: {
                        xs: "14px",
                        sm: "14px",
                        md: "16px",
                        lg: "20px",
                      },
                    },
                  },
                  "& .MuiFormLabel-root": {
                    "& .MuiFormLabel-asterisk": {
                      display: "none",
                    },
                    fontSize: {
                      xs: "14px",
                      sm: "14px",
                      md: "16px",
                      lg: "20px",
                    },
                  },
                  marginBottom: { xs: "18px", sm: "30px" },
                }}
              >
                <InputLabel
                  sx={{
                    color: "white",
                    fontFamily: "Montserrat",
                    fontSize: "20px",
                    "&.Mui-focused": {
                      color: "white",
                    },
                  }}
                  id="service-list"
                >
                  Chọn hạng mục muốn thi công
                </InputLabel>
                <Select
                  IconComponent={KeyboardArrowDownOutlinedIcon}
                  labelId="service-list"
                  value={formData?.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  label="Service"
                  defaultValue={""}
                  sx={{
                    "& .MuiSvgIcon-root": {
                      color: "white",
                      top: "5px",
                      height: "32px",
                      width: "32px",
                    },
                    "& .MuiSelect-select": {
                      fontFamily: "Montserrat",
                      fontSize: "20px",
                      color: "white",
                      paddingTop: "15px",
                      paddingBottom: "10px",
                      fontWeight: "300",
                    },
                  }}
                >
                  <MenuItem
                    sx={{
                      "&.MuiButtonBase-root": {
                        fontSize: "20px",
                        fontFamily: "Montserrat",
                        color: "white",
                        padding: "20px 8px",
                        borderRadius: "2px",
                        transition: "all 150ms",
                        "&:hover": {
                          backgroundColor: "white",
                          color: "black",
                        },
                        borderBottom: "1px solid white",
                      },
                    }}
                    value={"Nhà ở"}
                  >
                    Nhà ở
                  </MenuItem>
                  <MenuItem
                    sx={{
                      "&.MuiButtonBase-root": {
                        fontSize: "20px",
                        fontFamily: "Montserrat",
                        color: "white",
                        padding: "20px 8px",
                        borderRadius: "2px",
                        transition: "all 150ms",
                        "&:hover": {
                          backgroundColor: "white",
                          color: "black",
                        },
                        borderBottom: "1px solid white",
                      },
                    }}
                    value={"Dịch vụ"}
                  >
                    Dịch vụ
                  </MenuItem>
                  <MenuItem
                    sx={{
                      "&.MuiButtonBase-root": {
                        fontSize: "20px",
                        fontFamily: "Montserrat",
                        color: "white",
                        padding: "20px 8px",
                        borderRadius: "2px",
                        transition: "all 150ms",
                        "&:hover": {
                          backgroundColor: "white",
                          color: "black",
                        },
                      },
                    }}
                    value={"Thi công"}
                  >
                    Thi công
                  </MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  required
                  fullWidth
                  variant="standard"
                  label="Địa chỉ"
                  type="text"
                  value={formData?.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  sx={{
                    marginBottom: "55px",
                    input: {
                      color: "white",
                      fontFamily: "Montserrat",
                      fontSize: {
                        xs: "14px",
                        sm: "14px",
                        md: "16px",
                        lg: "20px",
                      },
                      paddingTop: { xs: "5px", sm: "10px" },
                      paddingBottom: { xs: "10px", sm: "10px" },
                      fontWeight: "300",
                    },
                    "& .MuiInputLabel-standard": {
                      color: "white",
                      fontSize: {
                        xs: "14px",
                        sm: "14px",
                        md: "16px",
                        lg: "20px",
                      },
                      fontWeight: "400",
                      fontFamily: "Montserrat",
                      "&.Mui-focused": {
                        color: "white",
                      },
                      "& .MuiFormLabel-asterisk": {
                        display: "none",
                      },
                    },
                    "& .MuiInput-root": {
                      ":hover:not(.Mui-focused)": {
                        "&:before": {
                          borderColor: "white",
                        },
                      },
                      "&:before": {
                        borderColor: "white",
                      },
                      "&:after": {
                        transition: "none",
                        borderColor: "white",
                      },
                    },
                  }}
                />
              </FormControl>

              <div className="flex justify-end">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="border-[2px] border-white px-5 py-3 font-montserrat text-base font-bold text-white transition hover:bg-white hover:text-black sm:border-[3px] sm:text-xl"
                >
                  ĐẶT LỊCH NGAY
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
