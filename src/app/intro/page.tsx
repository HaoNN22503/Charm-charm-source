import React from "react";
import Image from "next/image";
import imageIntro from "../../assets/image/ImageIntro.png";
const IntroHABPage = () => {
  return (
    <div className="flex items-center justify-center p-[50px] gap-[150px] bg-[#a72020] text-white  intro-HAB__container">
      <div className="w-[600px] intro-HAB-content">
        <p className="font-[550] text-[30px] intro-HAB-content-tittle">
          Về chúng tôi
        </p>
        <p className="mt-[30px]">
          Công ty TNHH Đức Thành Phát là một trong những công ty hàng đầu tại
          Việt Nam chuyên nhập khẩu và phân phối các sản phẩm cao cấp, đặc biệt
          là saffron tại Iran. Với nhiều năm kinh nghiệm trong lĩnh vực này,
          công ty đã xây dựng được một thương hiệu uy tín và đáng tin cậy trên
          thị trường.
        </p>
        <p className="mt-[20px]">
          Trong đó, Charm Charm Saffron là một trong những thương hiệu nổi bật
          nhất của công ty. Với sản phẩm được nhập khẩu chính ngạch từ Iran và
          đảm bảo chất lượng cao nhất. Charm Charm Saffron sử dụng dòng saffron
          Extra Super Negin, loại saffron có chất lượng tốt nhất và được đánh
          giá là thượng hạng trong thị trường saffron hiện nay.
        </p>
        <p className="mt-[20px]">
          Ngoài chất lượng sản phẩm, Charm Charm Saffron cũng được đánh giá cao
          về phong cách phục vụ chuyên nghiệp và tận tâm. Công ty cam kết đưa
          đến cho khách hàng những sản phẩm saffron tốt nhất và đáp ứng mọi yêu
          cầu của khách hàng.
        </p>
        <p className="mt-[20px]">
          {" "}
          Sự phát triển không ngừng của công nghệ, Charm Charm Saffron cũng cập
          nhật những xu hướng mới nhất để mang đến những sản phẩm saffron đa
          dạng và phong phú cho người tiêu dùng. Đặc biệt, công ty cũng có những
          chương trình khuyến mãi hấp dẫn để khách hàng có thể tiết kiệm chi phí
          và trải nghiệm sản phẩm saffron chất lượng cao.
        </p>
        <p className="mt-[20px]">
          {" "}
          Với tất cả những điều trên, Charm Charm Saffron là một thương hiệu
          đáng tin cậy cho khách hàng mong muốn tìm kiếm sản phẩm saffron cao
          cấp và chất lượng tốt nhất.
        </p>
      </div>
      <div className="w-[445px] h-[600px] object-contain intro-HAB-img">
        <Image
          src="https://res.cloudinary.com/dkfg3xljc/image/upload/v1697618388/BeautyProject/SFT-14_op6e08.jpg"
          alt=""
          width={445}
          height={600}
          loading="lazy"
          className="w-[445px] h-[600px] object-fill intro-HAB-img"
        />
      </div>
    </div>
  );
};

export default IntroHABPage;
