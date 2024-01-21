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
        <div className="flex items-center justify-center font-[400] text-[35px] py-[40px] text-white info-learnpage-tittle-container">
          <p>Thông tin tổng hợp</p>
        </div>
      </div>
      <div className="w-full text-justify text-[20px] px-[70px] info-learnpage-content-container">
        <div className="w-full">
          <div className="font-bold text-[23px] info-learnpage-tittle">
            Quy trình saffron thiên nhiên được canh tác và thu hoạch thế nào?
          </div>
          <div className=" mt-[15px]">
            Saffron nằm trong nhóm các gia vị đắt nhất thế giới. Để cho ra được
            1kg saffron, người ta cần thu hoạch đến 200.000 bông hoa nghệ tây.
            Nhuỵ hoa được phơi khô đến một mức độ nhất định. Gia vị saffron sẽ
            được tạo thành với một vị đặc trưng, hương thơm nhẹ nhàng.
          </div>
          <div className=" mt-[15px]">
            Một pound (0,45 kg) nghệ tây tương đương với 75.000 bông hoa.
            Saffron chứa 0,5 đến 1 phần trăm tinh dầu , thành phần chính là
            picrocrocin. Chất tạo màu là crocin.
          </div>
          <div className=" mt-[15px]">
            Mỗi loại Saffron khác nhau phụ thuộc vào quy trình sản xuất tại mỗi
            quốc gia, điều kiện khí hậu và thổ nhưỡng khác nhau, truyền thống
            lâu đời và kinh nghiệm chuyên môn khác nhau.
          </div>
        </div>
        <div className="w-full mt-[25px]">
          <div className="font-bold text-[23px] info-learnpage-tittle">
            Thu hoạch và tách nhuỵ hoa:
          </div>
          <div className="mt-[15px]">
            Hoa nghệ tây bắt đầu mọc vào giữa tháng 10, sau đó được hái, đặt vào
            những chiếc giỏ bởi các nhóm thường là phụ nữ. Công việc tốn nhiều
            công sức này đòi hỏi một mức độ kỹ năng nhất định, diễn ra từ lúc
            mặt trời mọc cho đến khi mặt trời lặn và kéo dài từ 20 - 25 ngày.
          </div>
          <div className="w-full h-full flex justify-center items-center mt-[15px]">
            <Image
              src="https://res.cloudinary.com/dkfg3xljc/image/upload/v1705119802/BeautyProject/Ch%C6%B0a_c%C3%B3_t%C3%AAn_580_x_500_px_580_x_400_px_580_x_350_px_570_x_350_px_3_deir3n.svg"
              alt=""
              height={350}
              width={555}
              className="w-[30%] h-[40%] info-learnpage-image"
            />
          </div>
        </div>
        <div className="w-[full] mt-[25px]">
          <div className="font-bold text-[23px] info-learnpage-tittle">
            Sấy khô và phân loại:
          </div>
          <div className="mt-[15px]">
            Làm khô nhụy hoa là công việc quan trọng và tinh tế nhất, đòi hỏi
            kinh nghiệm, sự cẩn thận và kỹ năng cao.
          </div>
          <div className="mt-[15px]">
            Nếu nghệ tây khô bình thường, nó sẽ giữ được các đặc tính, đặc trưng
            về màu sắc, hương thơm, đồng thời chất lượng của nó được cải thiện
            mà không làm mất đi độ bền màu và tinh dầu của nó.
          </div>
          <div className="mt-[15px]">
            Sau khi sấy khô, quá trình tách nhụy đỏ khỏi nhị vàng, phấn hoa và
            bất kỳ tạp chất nào sẽ bắt đầu. Phần này của quy trình được thực
            hiện thủ công, có thể kéo dài từ 20 - 60 ngày. Cuối cùng, sản phẩm
            sấy khô được phân tách dựa trên màu sắc (đỏ hoặc vàng) để sẵn sàng
            giao hàng.
          </div>
          <div className="mt-[15px] w-full h-full flex justify-center items-center">
            <Image
              src="https://res.cloudinary.com/dkfg3xljc/image/upload/v1705119794/BeautyProject/Ch%C6%B0a_c%C3%B3_t%C3%AAn_580_x_500_px_580_x_400_px_580_x_350_px_570_x_350_px_2_ftn08f.svg"
              alt=""
              height={350}
              width={555}
              className="w-[30%] h-[40%] info-learnpage-image"
            />
          </div>
        </div>
        <div className="w-[full] mt-[25px] ">
          <div className="font-bold text-[23px] info-learnpage-tittle">
            Năng suất cây trồng và diện tích trang trại:
          </div>
          <div className="mt-[15px]">
            Bình quân mỗi sào thu được 6kg nhụy hoa khô (sản phẩm cho ra màu
            đỏ).
          </div>
          <div className="mt-[15px]">
            Sản lượng của mỗi trang trại, nhà máy thấp hơn vào năm đầu tiên, và
            dần cao nhất vào năm thứ ba và thứ tư.
          </div>
          <div className="mt-[15px]">
            Charm Charm Saffron đảm bảo mỗi sản phẩm đưa đến tay người tiêu dùng
            luôn đạt chuẩn chất lượng của quy trình sấy khô nghiêm ngặt, hiện
            đại, cam kết giấy chứng nhận nhập khẩu chính ngạch từ Iran và
            ISO-Norm quốc tế.
          </div>
        </div>
        <div className="w-[full] mt-[25px] ">
          <div className="font-bold text-[23px] info-learnpage-tittle">
            Saffron thiên nhiên sinh trưởng trên thế giới như thế nào?
          </div>
          <div className="mt-[15px]">
            Thực tế, rất ít quốc gia trên thế giới có thể trồng được hoa nghệ
            tây.
          </div>
          <div className="mt-[15px]">
            Tuy nhiên, chất lượng và sản lượng cao nhất chỉ có ở Iran - vùng đất
            được coi là ‘cái nôi” của saffron nhờ thiên nhiên ưu ái điều kiện
            khí hậu và thổ nhưỡng.
          </div>
          <div className="mt-[15px]">
            Saffron được trồng chủ yếu ở Iran và một số nước như Tây Ban Nha,
            Pháp, Ý, Ấn Độ,... Ghi nhận cho thấy, có nhiều vùng đất ở Tây Nam Á
            và Địa Trung Hải đã thử mang giống cây trồng này để nhân giống ở các
            địa hình khác nhau.
          </div>
          <div className="mt-[15px]">
            Tuy nhiên, quốc gia cho sản lượng và chất lượng tốt nhất chỉ có ở
            vùng phía bắc Iran. Đây là quốc gia có diện tích trồng nghệ tây lớn
            nhất thế giới, và chiếm đến 90% sản lượng trên thị trường.
          </div>
          <div className="mt-[15px] w-full h-full flex justify-center items-center">
            <Image
              src="https://res.cloudinary.com/dkfg3xljc/image/upload/v1705119733/BeautyProject/Ch%C6%B0a_c%C3%B3_t%C3%AAn_580_x_500_px_580_x_400_px_580_x_350_px_570_x_350_px_1_omvypg.svg"
              alt=""
              height={350}
              width={555}
              className="w-[40%] h-[40%] info-learnpage-image"
            />
          </div>
          <div className="mt-[15px]">
            Trong lịch sử phát triển của loài nghệ tây thuộc giống cây Crocus
            Sativus (Diên vĩ), nguồn gốc của loài này xuất phát ở dãy núi Zargos
            ở Iran từ hơn 4000 năm trước. Sau đó, chúng được nhân rộng ra và
            được trồng ở nhiều vùng đất khác nhau có thể kể đến như: Hy Lạp, Ấn
            Độ, Tây Ban Nha, Maroc,…
          </div>
          <div className="mt-[15px]">
            Loại cây đặc biệt này khi gieo trồng cần nhiều lực lượng lao động.
            Sợi nhụy được hái thủ công từ mỗi bông hoa, trải trên khay và sấy
            khô trên lửa than để sử dụng làm gia vị “thần dược”.
          </div>
          <div className="mt-[15px]">
            Vì thế, với Charm Charm Saffron, chúng tôi trân trọng từng sợi nhuỵ
            hoa khi vượt xa quy chuẩn đánh giá quốc tế, tạo sứ mệnh đem lại sự
            tin tưởng cho khách hàng.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryStoryPage;
