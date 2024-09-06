import { List, ListItemButton, ListItemText, Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";

export default function Question() {
  const [openQuestion1, setOpenQuestion1] = useState(false);
  const [openQuestion2, setOpenQuestion2] = useState(false);
  const [openQuestion3, setOpenQuestion3] = useState(false);
  const [openQuestion4, setOpenQuestion4] = useState(false);

  return (
    <div id="questions" className="mx-auto max-w-7xl snap-start py-16">
      <h2 className="mb-12 font-beautique text-5xl font-medium text-[#193F53]">
        Một số câu hỏi thường gặp
      </h2>
      <div>
        <List
          sx={{
            "&.MuiList-root": {
              backgroundColor: "white !important",
              padding: "0px !important",
            },
            "& .MuiButtonBase-root": {
              padding: "0px !important",
            },
          }}
        >
          <ListItemButton
            disableRipple
            onClick={() => setOpenQuestion1(!openQuestion1)}
          >
            <ListItemText
              sx={{
                "& .MuiTypography-root": {
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  fontSize: "24px",
                  color: "#193F53",
                },
              }}
              primary="1. Chi phí thiết kế và thi công nội thất là bao nhiêu?"
            />
            {openQuestion1 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openQuestion1} timeout="auto" unmountOnExit>
            <p className="ml-6 text-justify font-montserrat text-[#193F53]">
              Chi phí thiết kế và thi công nội thất là một trong những yếu tố
              quan trọng mà chúng tôi luôn cân nhắc kỹ lưỡng để đáp ứng tốt nhất
              nhu cầu của bạn. Chi phí này phụ thuộc vào nhiều yếu tố, bao gồm:
            </p>
            <ul className="my-2 ml-12 list-disc font-montserrat font-medium italic">
              <li>Diện tích không gian</li>
              <li>Phong cách thiết kế</li>
              <li>Chất lượng vật liệu</li>
              <li>Mức độ tùy chỉnh</li>
              <li>Dịch vụ trọn gói hay từng phần</li>
              <li>Khu vực và thời gian thi công</li>
            </ul>
            <p className="ml-6 text-justify font-montserrat text-[#193F53]">
              Để đưa ra một con số chính xác, chúng tôi cần gặp bạn để hiểu rõ
              nhu cầu, thảo luận chi tiết về dự án và sau đó cung cấp một báo
              giá cụ thể. Mean Design cam kết cung cấp giá trị xứng đáng với
              từng đồng bạn bỏ ra, và sẽ luôn giữ sự minh bạch trong từng khoản
              chi phí để đảm bảo không có bất ngờ phát sinh.
            </p>
          </Collapse>
          <div className="my-6 h-[1px] bg-[#193F53]"></div>

          <ListItemButton
            disableRipple
            onClick={() => setOpenQuestion2(!openQuestion2)}
          >
            <ListItemText
              sx={{
                "& .MuiTypography-root": {
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  fontSize: "24px",
                  color: "#193F53",
                },
              }}
              primary="2. Thời gian hoàn thành thiết kế và thi công là bao lâu?"
            />
            {openQuestion2 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openQuestion2} timeout="auto" unmountOnExit>
            <p className="ml-6 text-justify font-montserrat text-[#193F53]">
              Thời gian hoàn thành thiết kế và thi công phụ thuộc vào nhiều yếu
              tố như quy mô dự án, mức độ phức tạp của không gian, và yêu cầu cụ
              thể của bạn. Tuy nhiên, để giúp bạn có cái nhìn rõ ràng hơn, quá
              trình thường diễn ra theo các bước sau:
            </p>
            <ol className="my-2 ml-12 list-decimal text-justify font-montserrat font-semibold italic">
              <li>
                Giai đoạn Khảo sát và Lên ý tưởng:{" "}
                <span className="font-normal not-italic">
                  Thường mất từ 5 đến 7 ngày. Trong thời gian này, chúng tôi sẽ
                  khảo sát không gian, lắng nghe nhu cầu của bạn và lên ý tưởng
                  sơ bộ.Thường mất từ 5 đến 7 ngày. Trong thời gian này, chúng
                  tôi sẽ khảo sát không gian, lắng nghe nhu cầu của bạn và lên ý
                  tưởng sơ bộ.
                </span>
              </li>
              <li>
                Giai đoạn Thiết kế chi tiết:{" "}
                <span className="font-normal not-italic">
                  Sau khi thống nhất ý tưởng, chúng tôi bắt đầu thiết kế chi
                  tiết bao gồm bản vẽ 2D và 3D, chọn lựa vật liệu và nội thất.
                  Giai đoạn này kéo dài từ 1 đến 3 tuần, tùy thuộc vào quy mô và
                  độ phức tạp của dự án.
                </span>
              </li>
              <li>
                Giai đoạn Thi công:{" "}
                <span className="font-normal not-italic">
                  Sau khi bản thiết kế được duyệt, quá trình thi công sẽ bắt đầu
                  và kéo dài từ 4 đến 8 tuần. Thời gian này có thể thay đổi dựa
                  trên diện tích, số lượng phòng cần thi công, và các yếu tố kỹ
                  thuật khác như hệ thống điện, nước, và các yếu tố kỹ thuật
                  khác.
                </span>
              </li>
              <li>
                Giai đoạn Hoàn thiện và Bàn giao:{" "}
                <span className="font-normal not-italic">
                  Sau khi thi công, chúng tôi sẽ tiến hành kiểm tra, hoàn thiện
                  các chi tiết nhỏ và bàn giao công trình. Giai đoạn này thường
                  mất từ 1 đến 2 tuần để đảm bảo mọi thứ hoàn hảo trước khi bạn
                  chính thức sử dụng.
                </span>
              </li>
            </ol>
            <p className="ml-6 text-justify font-montserrat text-[#193F53]">
              Tổng thời gian từ khi bắt đầu đến khi hoàn thiện có thể dao động
              từ 8 đến 14 tuần. Mean Design luôn đặt chất lượng lên hàng đầu,
              nên chúng tôi cam kết hoàn thành đúng tiến độ, đồng thời đảm bảo
              từng chi tiết đều đạt chuẩn mực cao nhất.
            </p>
          </Collapse>
          <div className="my-6 h-[2px] bg-[#193F53]"></div>

          <ListItemButton
            disableRipple
            onClick={() => setOpenQuestion3(!openQuestion3)}
          >
            <ListItemText
              sx={{
                "& .MuiTypography-root": {
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  fontSize: "24px",
                  color: "#193F53",
                },
              }}
              primary="3. Bảo hành và hỗ trợ sau khi hoàn thành dự án như thế nào?"
            />
            {openQuestion3 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openQuestion3} timeout="auto" unmountOnExit>
            <p className="ml-6 text-justify font-montserrat text-[#193F53]">
              Tại Mean Design, chúng tôi cam kết không chỉ mang đến thiết kế đẹp
              và chất lượng thi công mà còn đảm bảo dịch vụ bảo hành và hỗ trợ
              sau khi hoàn thành dự án để bạn hoàn toàn yên tâm. Dưới đây là các
              thông tin chi tiết về chính sách bảo hành và hỗ trợ của chúng tôi:
            </p>
            <ol className="my-2 ml-12 list-decimal text-justify font-montserrat font-semibold italic">
              <li>
                Chính sách bảo hành:{" "}
                <ul className="ml-5 list-disc font-normal not-italic">
                  <li>
                    Chúng tôi cung cấp bảo hành cho các công trình hoàn thành,
                    bao gồm các lỗi kỹ thuật, vật liệu và thi công. Thời gian
                    bảo hành thường là 1 đến 2 năm, tùy thuộc vào loại công việc
                    và vật liệu được sử dụng.
                  </li>
                  <li>
                    Bảo hành bao gồm việc sửa chữa hoặc thay thế các hỏng hóc do
                    lỗi từ nhà thầu hoặc vật liệu. Điều này không bao gồm các hư
                    hỏng do sự cố bên ngoài, tai nạn hoặc sử dụng sai cách.
                  </li>
                </ul>
              </li>
              <li>
                Quy trình yêu cầu bảo hành:{" "}
                <ul className="ml-5 list-disc font-normal not-italic">
                  <li>
                    Nếu bạn gặp vấn đề hoặc cần yêu cầu bảo hành, bạn có thể
                    liên hệ với chúng tôi qua số điện thoại 0328.118.688. Chúng
                    tôi sẽ cử đội ngũ kỹ thuật viên đến kiểm tra và đánh giá
                    tình hình.
                  </li>
                  <li>
                    Chúng tôi cam kết phản hồi và xử lý yêu cầu bảo hành trong
                    vòng 48 giờ. Sau khi xác nhận vấn đề, chúng tôi sẽ lên kế
                    hoạch sửa chữa và thông báo cho bạn về thời gian và quy
                    trình thực hiện.
                  </li>
                </ul>
              </li>
              <li>
                Hỗ trợ kỹ thuật và bảo trì:{" "}
                <ul className="ml-5 list-disc font-normal not-italic">
                  <li>
                    Ngoài chính sách bảo hành, chúng tôi cung cấp dịch vụ hỗ trợ
                    kỹ thuật và bảo trì định kỳ. Bạn có thể đăng ký dịch vụ bảo
                    trì định kỳ để kiểm tra và bảo dưỡng không gian của bạn,
                    giúp duy trì chất lượng và vẻ đẹp lâu dài.
                  </li>
                  <li>
                    Chúng tôi cũng cung cấp các gói bảo trì tùy chọn, bao gồm
                    việc kiểm tra, bảo trì và làm mới các yếu tố thiết kế và nội
                    thất để giữ cho không gian của bạn luôn trong tình trạng tốt
                    nhất.
                  </li>
                </ul>
              </li>
              <li>
                Hỗ trợ sau dự án:{" "}
                <ul className="ml-5 list-disc font-normal not-italic">
                  <li>
                    Chúng tôi duy trì mối liên hệ với bạn ngay cả sau khi dự án
                    hoàn thành. Đội ngũ của chúng tôi luôn sẵn sàng lắng nghe
                    phản hồi và hỗ trợ bạn trong việc giải quyết các vấn đề nhỏ
                    hoặc yêu cầu thay đổi sau khi bàn giao công trình.
                  </li>
                  <li>
                    Nếu bạn có bất kỳ câu hỏi nào về việc sử dụng hoặc bảo trì
                    các sản phẩm và vật liệu, chúng tôi sẽ cung cấp hướng dẫn
                    chi tiết và lời khuyên để đảm bảo bạn có thể tận dụng tối đa
                    không gian mới của mình.
                  </li>
                </ul>
              </li>
              <li>
                Chương trình chăm sóc khách hàng:{" "}
                <ul className="ml-5 list-disc font-normal not-italic">
                  <li>
                    Chúng tôi có chương trình chăm sóc khách hàng đặc biệt, bao
                    gồm các cuộc khảo sát định kỳ để thu thập phản hồi và cải
                    thiện dịch vụ. Chúng tôi coi trọng ý kiến của bạn và sử dụng
                    thông tin đó để nâng cao chất lượng dịch vụ của mình.
                  </li>
                </ul>
              </li>
            </ol>
            <p className="ml-6 text-justify font-montserrat text-[#193F53]">
              Tại Mean Design, sự hài lòng của bạn là ưu tiên hàng đầu. Chính
              sách bảo hành và hỗ trợ của chúng tôi được thiết kế để đảm bảo
              rằng bạn không chỉ nhận được một công trình hoàn hảo mà còn có sự
              hỗ trợ liên tục và tận tâm trong suốt quá trình sử dụng.
            </p>
          </Collapse>
          <div className="my-6 h-[1.5px] bg-[#193F53]"></div>

          <ListItemButton
            disableRipple
            onClick={() => setOpenQuestion4(!openQuestion4)}
          >
            <ListItemText
              sx={{
                "& .MuiTypography-root": {
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  fontSize: "24px",
                  color: "#193F53",
                },
              }}
              primary="4. Tại sao cần phải đặt cọc trước khi bắt đầu thiết kế?"
            />
            {openQuestion4 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openQuestion4} timeout="auto" unmountOnExit>
            <p className="ml-6 text-justify font-montserrat text-[#193F53]">
              Chúng tôi hiểu rằng việc đặt cọc có thể là một quyết định quan
              trọng, và chúng tôi muốn làm rõ lý do và lợi ích của việc này để
              bạn cảm thấy yên tâm và tin tưởng hơn.
            </p>
            <ol className="my-2 ml-12 list-decimal text-justify font-montserrat font-semibold italic">
              <li>
                Cam kết và Đảm bảo Quy trình làm việc:{" "}
                <span className="font-normal not-italic">
                  Việc đặt cọc giúp chúng tôi xác nhận cam kết của bạn đối với
                  dự án và dành thời gian và nguồn lực cần thiết để chuẩn bị và
                  bắt đầu thiết kế. Nó cho phép chúng tôi sắp xếp lịch trình làm
                  việc và đảm bảo rằng dự án của bạn sẽ được triển khai đúng
                  thời gian.
                </span>
              </li>
              <li>
                Bảo vệ Quyền lợi của Khách hàng và Công ty:{" "}
                <span className="font-normal not-italic">
                  Đặt cọc là một hình thức bảo đảm rằng cả hai bên đều nghiêm
                  túc và cam kết thực hiện dự án. Nó giúp chúng tôi chuẩn bị các
                  bước thiết kế một cách chuyên nghiệp và giảm thiểu rủi ro
                  không đáng có, đồng thời bảo vệ quyền lợi của bạn khỏi các sự
                  cố không mong muốn.
                </span>
              </li>
              <li>
                Đảm bảo Sự Chất lượng và Tinh thần Đổi mới:{" "}
                <span className="font-normal not-italic">
                  Số tiền đặt cọc cho phép chúng tôi tập trung vào việc nghiên
                  cứu và phát triển ý tưởng thiết kế tốt nhất cho bạn. Điều này
                  đảm bảo rằng chúng tôi có thể dành đủ thời gian và công sức để
                  tạo ra một thiết kế phù hợp nhất với mong đợi của bạn.
                </span>
              </li>
              <li>
                Quy trình Thanh toán Minh bạch:{" "}
                <span className="font-normal not-italic">
                  Chúng tôi cam kết đảm bảo tính minh bạch trong mọi khoản chi
                  phí. Số tiền đặt cọc sẽ được trừ vào tổng chi phí thiết kế và
                  thi công, và chúng tôi sẽ cung cấp báo giá chi tiết để bạn
                  hoàn toàn hiểu rõ về các khoản chi phí liên quan.
                </span>
              </li>
              <li>
                Chính sách Hoàn tiền:{" "}
                <span className="font-normal not-italic">
                  Trong trường hợp nếu bạn thay đổi quyết định trước khi bắt đầu
                  thiết kế, chúng tôi có chính sách hoàn tiền một phần của số
                  tiền đặt cọc (tuỳ theo điều kiện và thời gian thông báo). Điều
                  này giúp bạn cảm thấy yên tâm hơn khi quyết định đặt cọc.
                </span>
              </li>
            </ol>
            <p className="ml-6 text-justify font-montserrat text-[#193F53]">
              Chúng tôi rất mong nhận được sự thông cảm và hợp tác từ bạn. Đặt
              cọc không chỉ là một bước quan trọng trong quy trình làm việc của
              chúng tôi mà còn là sự khởi đầu cho một mối quan hệ hợp tác thành
              công và hiệu quả. Chúng tôi cam kết mang đến cho bạn dịch vụ thiết
              kế và thi công chất lượng cao nhất, và việc đặt cọc là một phần
              của sự chuẩn bị để đảm bảo điều đó.
            </p>
          </Collapse>
          <div className="my-6 h-[2px] bg-[#193F53]"></div>
        </List>
      </div>
    </div>
  );
}
