"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";
const HistoryStoryPage = () => {
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
        <div className="flex items-center justify-center font-[400] text-[35px] py-[40px] text-white history-learnpage-tittle-container">
          <p>Câu chuyện lịch sử</p>
        </div>
      </div>
      <div className="w-full text-justify text-[20px] px-[70px] history-learnpage-content-container">
        <div className="w-full">
          <div className="font-bold text-[23px] history-learnpage-tittle">
            Khởi nguồn lịch sử của Nhuỵ hoa nghệ tây Saffron
          </div>
          <div className=" mt-[15px]">
            Nhụy hoa nghệ tây là một loại thảo dược thiên nhiên, được sử dụng
            làm dòng gia vị đắt nhất trên thế giới với giá lên đến gần 1 tỷ
            đồng/ kilogram. Saffron được xem là “niềm tự hào” của người dân tại
            vùng đất Trung Đông, bởi giá trị dinh dưỡng mà nó mang đến không chỉ
            cho sức khỏe mà còn là sắc đẹp. Nói riêng về làm đẹp, Saffron được
            mệnh danh là “thần dược” và được ưa chuộng bởi rất nhiều phụ nữ trên
            thế giới.
          </div>
        </div>
        <div className="w-full mt-[25px] ">
          <div className="font-bold text-[23px] history-learnpage-tittle">
            Bí mật dưỡng nhan của Nữ hoàng Cleopatra
          </div>
          <div className="mt-[15px]">
            Từ hơn 3.000 năm trước, Nữ hoàng Ai Cập Cleopatra đã thường xuyên sử
            dụng saffron để gìn giữ sắc đẹp và tăng sự quyến rũ của mình. Lịch
            sử ghi chép lại, một trong những bí thuật làm nên vẻ đẹp vạn người
            mê của bà là thói quen thường xuyên bỏ một ít nhuỵ hoa nghệ tây này
            vào nước tắm để làn da luôn trẻ đẹp.
          </div>
          <div className="mt-[15px]">
            Đặc biệt, đây cũng là phương thức giúp bà trở nên quyến rũ hơn trong
            chuyện phòng the. Tương truyền, nữ hoàng Ai Cập Cleopatra có làn da
            óng ánh và hương thơm quyến rũ, sinh lực dồi dào khiến vị hoàng đế
            La Mã Caesar như bị mê hoặc hoàn toàn.{" "}
          </div>
          <div className="w-full h-full flex justify-center items-center mt-[15px]">
            <Image
              src="https://res.cloudinary.com/dkfg3xljc/image/upload/v1705116425/BeautyProject/Ch%C6%B0a_c%C3%B3_t%C3%AAn_580_x_500_px_580_x_400_px_580_x_350_px_570_x_350_px_c0ompj.svg"
              alt=""
              height={350}
              width={555}
              className="w-[40%] h-[40%] history-learnpage-image"
            />
          </div>
          <div className="mt-[15px]">
            Tắm vàng đỏ từ xa xưa đã là phương pháp được sử dụng để giúp làn da
            trở nên láng mịn và trắng sáng, bởi những dưỡng chất chống oxy hóa
            tuyệt vời có trong loại thảo dược quý giá này.
          </div>
          <div className="mt-[15px]">
            Việc sử dụng saffron xuất hiện từ bình minh của lịch sử nhân loại. Ở
            tây bắc Iran, các nhà khảo cổ học đã tìm thấy các hang động với hình
            ảnh 50.000 năm tuổi có chứa các chất màu son của saffron.
          </div>
        </div>
        <div className="w-[full] mt-[25px] ">
          <div className="font-bold text-[23px] history-learnpage-tittle">
            Thảo dược được giới quý tộc “săn đón” khắp lịch sử thế giới
          </div>
          <div className="mt-[15px]">
            Từ thời cổ đại, nhiều tác giả, thần thoại Hy Lạp, thậm chí cả Cựu
            Ước có nhắc đến sợi nhuỵ hoa nghệ tây được sử dụng với khả năng tăng
            cường sinh lý và khả năng sinh sản.
          </div>
          <div className="mt-[15px]">
            Ở Ấn Độ, nó được sử dụng rộng rãi như một loại hương trong các nghi
            lễ tôn giáo, cũng như để sơn áo choàng của các thầy tu, một phong
            tục mà người Ai Cập và La Mã cổ đại cũng có.
          </div>
          <div className="mt-[15px]">
            Ngay cả vua Alexander Đại Đế, ngài cũng thường xuyên dùng saffron để
            hồi phục sức khỏe và lành hóa vết thương sau mỗi trận chiến.
          </div>
          <div className="mt-[15px] w-full h-full flex justify-center items-center">
            <Image
              src="https://res.cloudinary.com/dkfg3xljc/image/upload/v1705117034/BeautyProject/2_zvfzz3.svg"
              alt=""
              height={350}
              width={555}
              className="w-[40%] h-[40%] history-learnpage-image"
            />
          </div>
          <div className="mt-[15px]">
            Trên đảo Thera của Hy Lạp, ở biển Aegean, những bức tranh tường
            3.500 năm mô tả một nữ thần Minoan giám sát việc sản xuất và áp dụng
            một loại thuốc được làm từ saffron.
          </div>
          <div className="mt-[15px]">
            Từ xa xưa, người Ả Rập dùng saffron để trang điểm mí mắt và sơn móng
            tay; các anh hùng cũng dùng để nhuộm áo của họ, tượng trưng cho sự
            vẻ vang, vinh quang.
          </div>
          <div className="mt-[15px]">
            Tại Trung Quốc, từ năm 2600 TCN đã đề cập đến tác dụng chữa bệnh của
            saffron trong một cuốn sách. Người Ai Cập dùng nó để chữa bệnh, làm
            nước hoa, thuốc nhuộm và nấu ăn. Người Ba Tư cổ đại tin rằng saffron
            chữa được chứng trầm cảm và thường pha vào trà nóng.
          </div>
          <div className="mt-[15px] w-full h-full flex justify-center items-center">
            <Image
              src="https://res.cloudinary.com/dkfg3xljc/image/upload/v1705117030/BeautyProject/3_podged.svg"
              alt=""
              height={350}
              width={555}
              className="w-[40%] h-[40%] history-learnpage-image"
            />
          </div>
          <div className="mt-[15px]">
            Các nghệ sĩ Byzantine thường dùng nó trong dược phẩm, bánh kẹo, nấu
            ăn, làm pho mát, chưng cất rượu, thậm chí cả trong hội họa.
          </div>
          <div className="mt-[15px]">
            Vào thế kỷ VIII, người Hồi giáo mang thứ gia vị này đến Tây Ban Nha
            và nó được sử dụng trong các món ăn cao cấp cho đến nay. Trong thời
            Phục hưng, saffron thực sự có giá trị ngang bằng vàng. Vua Henry
            VIII của Anh từng dọa giết bất kỳ ai pha trộn saffron với những loại
            gia vị rẻ tiền hơn.
          </div>
          <div className="mt-[15px]">
            Ngày nay, nó vẫn được ưa chuộng rộng rãi như một loại gia vị trong
            các món ăn khác nhau ở mọi quốc gia có nền kinh tế phát triển, đặc
            biệt là Châu Âu.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryStoryPage;
