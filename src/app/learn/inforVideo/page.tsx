"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

const VideoPage = () => {
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
        <div className="flex items-center justify-center font-[400] text-[35px] py-[40px] text-white cuisine-tittle">
          <p>Video</p>
        </div>
      </div>
      <div className="w-full mt-[10px] text-justify text-[20px] px-[70px] leading-[1.5] video-learnpage-content-container">
        <div className="">
          Nhuỵ hoa nghệ tây được ví như “Viên kim cương quý nhất của chiếc nhẫn”{" "}
          <span className="font-bold text-[21px] video-learnpage-tittle">
            (The diamond on a ring)
          </span>{" "}
          - món quà{" "}
          <span className="font-bold text-[21px] video-learnpage-tittle">
            “Vàng đỏ”
          </span>{" "}
          quý giá của thiên nhiên ban tặng. Đại diện của{" "}
          <span className="font-bold text-[21px] video-learnpage-tittle">
            Tổ chức Lương thực và Nông nghiệp Liên Hợp Quốc FAO
          </span>{" "}
          cho biết “Saffron Iran là tốt nhất thế giới”.
        </div>
        <div className="w-full mt-[25px] flex justify-between video-info-container">
          <div className="w-[40%] video-learnpage-content">
            Mời quý vị theo dõi trải nghiệm tiêu dùng của quý khách hàng khi lựa
            chọn sản phẩm vì sức khỏe:
          </div>
          <div className=" w-[50%] video-learnpage-video">
            <video
              src={require("../../../assets/video/videoLearn (2).mp4")}
              autoPlay
              muted
              loop
              controls
              className="w-[80%] video-learnpage-video-detail"
            />
          </div>
        </div>
        <div className="w-full mt-[25px] flex justify-between video-info-container">
          <div className="w-[40%] video-learnpage-content">
            Video về thông tin khoa học sức khoẻ của sợi nhuỵ hoa nghệ tây
            saffron:
          </div>
          <div className=" w-[50%] video-learnpage-video">
            <video
              src={require("../../../assets/video/videoLearn (1).mp4")}
              muted
              loop
              controls
              className="w-[80%] video-learnpage-video-detail"
            />
          </div>
        </div>
        <div className="w-full mt-[25px] flex justify-between video-info-container">
          <div className="w-[40%] video-learnpage-content">
            Video về không gian showroom Trung Đông của Charm Charm Saffron:
          </div>
          <div className=" w-[50%] video-learnpage-video">
            <video
              src={require("../../../assets/video/videoLearn (3).mp4")}
              muted
              loop
              controls
              className="w-[80%] video-learnpage-video-detail"
            />
          </div>
        </div>
      </div>
      <div className="mt-[20px] w-full flex flex-col justify-center items-center text-[20px] text-justify">
        <div className="w-[90%] video-learnpage-info-content">
          <div className="w-full justify-center items-center flex">
            <div className="font-[600] text-[25px] w-[90%] my-[20px] text-center video-learnpage-tittle-container">
              Charm Charm Saffron khác biệt gì với các loại nhuỵ hoa nghệ tây
              thông thường trên thị trường?{" "}
            </div>
          </div>
          <div className="video-learnpage-content-container">
            {" "}
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

export default VideoPage;
