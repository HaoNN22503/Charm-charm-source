"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";
const HealthyWayPage = () => {
  const router = useRouter();
  return (
    <div className="text-white py-[40px] bg-[#a72020] cuisine-container">
      <div className="w-full flex justify-evenly">
        <div
          onClick={() => {
            router.back();
          }}
          className="cursor-pointer w-[90%] flex items-center Cuisine-profile-main-return hover:underline"
        >
          <p>
            <BsArrowLeft />
          </p>
          <p className="ml-[5px]">Quay lại</p>
        </div>
      </div>
      <div className="w-full justify-evenly flex mt-[10px]">
        <div className="flex items-center justify-center font-[400] text-[35px] py-[40px] text-white healthy-learnpage-tittle-container">
          9 Công dụng diệu kỳ của nhuỵ hoa nghệ tây Iran
        </div>
      </div>
      <div className="w-full text-justify flex justify-evenly text-[20px] px-[70px] healthyWay-learnpage-content-container">
        <div className="w-[50%] healthyWay-learnpage-content">
          <div className="w-full mb-[15px]">
            Theo báo cáo của nhiều tài liệu nghiên cứu nước ngoài, saffron chứa
            hàm lượng dinh dưỡng khá cao. 100g saffron có chứa khoảng 65,37 gam
            carbohydrate; 11,43 gam protein; 5,85 gam chất béo; 0mg cholesterol;
            3.9 gram chất xơ các khoáng chất khác; 111mg canxi; 0.328mg đồng;
            11.10mg sắt; 264mg magiê và 28mg mangan, đồng thời cung cấp cho cơ
            thể 310 kcal.
          </div>
          <div className="w-full mb-[15px]">
            Thành phần vitamin C có trong saffron cũng góp phần giúp cơ thể
            chống lại các nhiễm trùng thông thường, đồng thời hỗ trợ hấp thu
            chất sắt.
          </div>
          <div className="w-full mb-[15px]">
            Hơn nữa, saffron giúp tăng cường sức đề kháng, phòng ngừa nguy cơ
            mắc các bệnh về tim mạch, điều hoà huyết áp, làm dịu các triệu chứng
            tiền kinh nguyệt, hỗ trợ hệ thống miễn dịch,... nhờ các thành phần
            hóa học có trong nó. Nhuỵ hoa chứa thành phần chống oxy hóa, góp
            phần phòng tránh ung thư như: crocin, picrocrocin, safranal,
            kaempferol và crocetin. Nhờ đó, chúng giúp chống lại gốc tự do trong
            cơ thể và bảo vệ sức khỏe của người sử dụng.
          </div>
          <div className="w-full mb-[15px]">
            Chúng còn cải thiện tâm trạng, chất lượng giấc ngủ ngon hơn và đem
            lại cảm giác tươi tỉnh nhờ sự hiện diện của các thành phần hoạt tính
            là safranal và crocin, làm tăng mức serotonin trong cơ thể. Mùi
            hương còn giúp người sử dụng giảm stress.
          </div>
          <div className="w-full mb-[15px]">
            Trà nhụy hoa nghệ tây rất tốt cho hệ tiêu hóa, không chỉ giúp kích
            thích vị giác, giúp ăn ngon miệng hơn mà còn tăng cường hệ miễn
            dịch, da dẻ tươi trẻ và láng mịn. Uống saffron mỗi ngày, đặc biệt là
            trước khi đi ngủ, giúp bạn có một giấc ngủ sâu hơn.{" "}
          </div>
          <div className="w-full mb-[15px]">
            Saffron chứa hàm lượng Mangan cao, giúp điều chỉnh lượng đường trong
            máu và hỗ trợ cho sự hoạt động của xương, khớp, các mô, hormone,…
          </div>
          <div className="w-full">
            Đặc biệt, nghệ tây giúp ngăn ngừa và điều trị mụn, xóa mờ vết thâm,
            phục hồi tình trạng da sau tổn thương, chống lão hóa, loại bỏ thâm,
            nám hay tàn nhang vì chứa nhiều vitamin, khoáng chất thiết yếu và
            các chất chống oxy hóa.
          </div>
        </div>
        <div className="w-[50%] healthyWay-learnpage-image">
          <Image
            src="https://res.cloudinary.com/dkfg3xljc/image/upload/v1705057417/Thi%E1%BA%BFt_k%E1%BA%BF_ch%C6%B0a_c%C3%B3_t%C3%AAn_7_ttlvpo.svg"
            alt=""
            width={580}
            height={450}
            className="w-full h-full healthyWay-learnpage-image-detail"
          />
        </div>
      </div>

      <div className="mt-[20px] w-full flex flex-col justify-center items-center text-[20px] text-justify">
        <div className="w-[90%] healthy-learnpage-content-container">
          <div className="w-full justify-center items-center flex">
            <div className="font-[600] text-[25px] my-[20px] text-center healthy-learnpage-tittle-container">
              Charm Charm Saffron khác biệt gì với các loại nhuỵ hoa nghệ tây
              thông thường trên thị trường?{" "}
            </div>
          </div>
          <div className="healthyWay-learnpage-content-container">
            <div className="w-full mt-[15px]">
              Charm Charm Saffron tuyển chọn từ những cây nghệ tây 4-5 năm tuổi
              (thời kỳ đỉnh cao nhất trong vòng đời 8 năm tuổi thọ của cây).
            </div>
            <div className="w-full mt-[15px]">
              Chỉ nhập khẩu nhuỵ hoa loại Super Negin cao cấp nhất, được nghiên
              cứu dựa trên hàm lượng dinh dưỡng, màu sắc, mùi vị, độ ẩm,...
              Người tiêu dùng thông thái có thể nhận biết qua chiều dài sợi,
              không vụn, màu sắc sợi đỏ sẫm, không lẫn gốc vàng hay cam. Trong
              khi, các loại Negin, Sargol hay Pushal thông thường khác có nhiều
              bụi, sợi gãy, nhiều phần gốc vàng xen trong gốc đỏ.
            </div>
            <div className="w-full mt-[15px]">
              Xử lý công nghệ sấy khô giữ nguyên dược tính tự nhiên nhất cho sản
              phẩm. Chất lượng đã được kiểm duyệt dựa trên đánh giá ISO-Norm
              3632-2 quốc tế:
            </div>
            <div className="w-full mt-[15px] leading-[1.5]">
              <li>Crocin (màu sắc): ~ 240 USP</li>
              <li>Safranal (hương thơm): ~ 50</li>
              <li>Picrocrocin (hương vị): ~ 95</li>
              <li>Moisture (độ ẩm): {`<`} 8.2%</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthyWayPage;
