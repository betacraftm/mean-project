import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export default function Contact() {
  const [service, setService] = useState("");
  return (
    <div className="flex min-h-screen items-center justify-center bg-[url('contact.png')] bg-cover bg-no-repeat">
      <div
        id="contact"
        className="flex max-w-7xl justify-center py-16 2xl:py-0"
      >
        <div className="w-1/2">
          <h2 className="font-beautique text-5xl font-medium italic leading-[70px] text-white">
            Hãy cùng nhau tạo nên điều gì đó tuyệt vời !
          </h2>
        </div>
        <div className="w-1/2">
          <p className="font-btbeau mb-11 text-4xl font-bold text-white">
            Để lại thông tin của bạn ở đây nhé!
          </p>
          <form autoComplete="off" className="mb-72">
            <FormControl fullWidth>
              <TextField
                required
                fullWidth
                variant="standard"
                label="Họ và Tên"
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
                id="service"
              >
                Chọn hạng mục muốn thi công
              </InputLabel>
              <Select
                IconComponent={KeyboardArrowDownOutlinedIcon}
                labelId="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
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
                  value={10}
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
                  value={20}
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
                  value={30}
                >
                  Thi công
                </MenuItem>
              </Select>
            </FormControl>
          </form>
          <div className="flex justify-end">
            <button className="border-[3px] border-white px-6 py-4 font-montserrat text-2xl font-bold text-white transition hover:bg-white hover:text-black">
              ĐẶT LỊCH NGAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
