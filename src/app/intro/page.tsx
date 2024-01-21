import React from "react";
import Image from "next/image";

const IntroHABPage = () => {
  return (
    <div className="flex items-center justify-around p-[50px] bg-[#a72020] text-white  intro-HAB__container  w-[100%]">
      <div className="w-[50%] intro-HAB-content text-justify">
        <p className="font-[550] text-[30px] intro-HAB-content-tittle">
          Về chúng tôi
        </p>
        <p className="mt-[30px]">
          <span className="font-bold text-[16px]">
            Công ty TNHH Đức Thành Phát
          </span>{" "}
          là một trong những công ty hàng đầu tại Việt Nam{" "}
          <span className="font-bold text-[16px]">
            chuyên nhập khẩu và phân phối
          </span>{" "}
          các sản phẩm cao cấp, đặc biệt là saffron tại Iran. Với nhiều năm kinh
          nghiệm trong lĩnh vực này, công ty đã xây dựng được một thương hiệu uy
          tín và đáng tin cậy trên thị trường.
        </p>
        <p className="mt-[20px]">
          Trong đó,{" "}
          <span className="font-bold text-[16px]">Charm Charm Saffron</span> là
          một trong những thương hiệu nổi bật nhất của công ty. Với sản phẩm
          được nhập khẩu chính ngạch từ Iran và đảm bảo chất lượng cao nhất.
          Charm Charm Saffron sử dụng dòng saffron{" "}
          <span className="font-bold text-[16px]">Extra Super Negin</span>, loại
          saffron có chất lượng tốt nhất và được đánh giá là thượng hạng trong
          thị trường saffron hiện nay.
        </p>
        <p className="mt-[20px]">
          Ngoài chất lượng sản phẩm, Charm Charm Saffron cũng được đánh giá cao
          về{" "}
          <span className="font-bold text-[16px]">
            phong cách phục vụ tận tâm
          </span>
          . Công ty cam kết đưa đến cho khách hàng những sản phẩm saffron tốt
          nhất và đáp ứng mọi yêu cầu của khách hàng.
        </p>
        <p className="mt-[20px]">
          Sự phát triển không ngừng của công nghệ, Charm Charm Saffron cũng cập
          nhật những xu hướng mới nhất để mang đến những sản phẩm saffron đa
          dạng và phong phú cho người tiêu dùng. Đặc biệt, công ty cũng có những
          chương trình khuyến mãi hấp dẫn để khách hàng có thể{" "}
          <span className="font-bold text-[16px]">tiết kiệm chi phí</span> và
          trải nghiệm sản phẩm saffron chất lượng cao.
        </p>
        <p className="mt-[20px]">
          Chúng tôi tự hào là thương hiệu đem sự uy tín trong mỗi sản phẩm tới
          quý khách hàng với{" "}
          <span className="font-bold text-[16px]">chứng nhận chính ngạch</span>{" "}
          từ Iran, công nhận của Bộ Y tế, Kiểm Dịch Thực vật, Cục Quản lý Chất
          lượng Nông, Lâm Sản & Thuỷ sản.
        </p>
      </div>
      <div className="w-[50%] object-contain flex justify-center items-center intro-HAB-img">
        <Image
          src="https://res.cloudinary.com/dkfg3xljc/image/upload/v1705043500/BeautyProject/Thi%E1%BA%BFt_k%E1%BA%BF_ch%C6%B0a_c%C3%B3_t%C3%AAn_5_intctl.svg"
          alt=""
          width={445}
          height={600}
          loading="lazy"
          className="object-cover intro-HAB-img"
        />
      </div>
    </div>
  );
};

export default IntroHABPage;
