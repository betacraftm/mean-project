import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    service: "",
    createdAt: "",
  });

  const formRegex = () => {
    const vietnamCharacter =
      "ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ";
    const fullNameReg = new RegExp(`^[A-Za-z${vietnamCharacter}\\s]{2,}$`, "g");
    const phoneNumberReg = new RegExp(`^\\d+$`, "g");
    const { fullName, phoneNumber, service } = formData;
    if (!fullName || !phoneNumber || !service)
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
        createdAt: "",
      });
    } catch (error) {
      console.log(error.message);
      toast.error("Có lỗi trong quá trình gửi dữ liệu", {
        id: toastId,
      });
    }
  };

  return (
    <div
      id="contact"
      className="flex min-h-screen items-center justify-center bg-[url('contact.png')] bg-cover bg-no-repeat"
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
      <div className="flex max-w-7xl justify-center py-16 2xl:py-0">
        <div className="w-1/2">
          <h2 className="font-beautique text-5xl font-medium italic leading-[70px] text-white">
            Hãy cùng nhau tạo nên điều gì đó tuyệt vời !
          </h2>
        </div>
        <div className="w-1/2">
          <p className="mb-11 font-btbeau text-4xl font-bold text-white">
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
                  marginBottom: "55px",
                  input: {
                    color: "white",
                    fontFamily: "Montserrat",
                    fontSize: "20px",
                    paddingTop: "15px",
                    paddingBottom: "10px",
                    fontWeight: "300",
                  },
                  "& .MuiInputLabel-standard": {
                    color: "white",
                    fontSize: "20px",
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
                  marginBottom: "55px",
                  input: {
                    color: "white",
                    fontFamily: "Montserrat",
                    fontSize: "20px",
                    paddingTop: "15px",
                    paddingBottom: "10px",
                    fontWeight: "300",
                  },
                  "& .MuiInputLabel-standard": {
                    color: "white",
                    fontSize: "20px",
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
                },
                "& .MuiFormLabel-root": {
                  "& .MuiFormLabel-asterisk": {
                    display: "none",
                  },
                },
                marginBottom: "288px",
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
                      padding: "20px 0px",
                      borderRadius: "2px",
                      transition: "all 150ms",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "black",
                      },
                      borderBottom: "1px solid white",
                    },
                  }}
                  value={"nha_o"}
                >
                  Nhà ở
                </MenuItem>
                <MenuItem
                  sx={{
                    "&.MuiButtonBase-root": {
                      fontSize: "20px",
                      fontFamily: "Montserrat",
                      color: "white",
                      padding: "20px 0px",
                      borderRadius: "2px",
                      transition: "all 150ms",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "black",
                      },
                      borderBottom: "1px solid white",
                    },
                  }}
                  value={"dich_vu"}
                >
                  Dịch vụ
                </MenuItem>
                <MenuItem
                  sx={{
                    "&.MuiButtonBase-root": {
                      fontSize: "20px",
                      fontFamily: "Montserrat",
                      color: "white",
                      padding: "20px 0px",
                      borderRadius: "2px",
                      transition: "all 150ms",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "black",
                      },
                    },
                  }}
                  value={"thi_cong"}
                >
                  Thi công
                </MenuItem>
              </Select>
            </FormControl>
            <div className="flex justify-end">
              <button
                type="submit"
                onClick={handleSubmit}
                className="border-[3px] border-white px-6 py-4 font-montserrat text-2xl font-bold text-white transition hover:bg-white hover:text-black"
              >
                ĐẶT LỊCH NGAY
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
