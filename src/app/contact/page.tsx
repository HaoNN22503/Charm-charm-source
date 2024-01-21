import React from "react";

const ContactHABPage = () => {
  return (
    <div className="pb-[50px] w-full justify-evenly flex flex-col items-center text-white bg-[#a72020] contact-HAB__container">
      <div className="pt-[40px] items-center text-[23px] w-[70%] contact-HAB-tittle">
        <p>Ghé thăm showroom</p>
        <div className="flex justify-between items-start mt-[20px] contact-HAB-video-showroom">
          <div className="w-[50%]">
            <video
              controls
              autoPlay
              src="https://res.cloudinary.com/dkfg3xljc/video/upload/v1703917215/BeautyProject/B%C3%ACnh_lu%E1%BA%ADn_ienyv1.mp4"
              className="contact-HAB-video-showroom-detail w-full"
            ></video>
          </div>
          <div className="w-[48%] text-justify">
            <div>
              Với nỗ lực mang đến{" "}
              <span className="font-bold">5 hệ giá trị</span> cho các quý khách
              hàng và cộng đồng: trải nghiệm, mua sắm, tận hưởng dịch vụ, quyền
              lợi ưu đãi và khám phá văn hóa chăm sóc sức khỏe của người dân{" "}
              <span className="font-bold">vùng đất Trung Đông trù phú</span>;
              Charm Charm Saffron hân hạnh đón tiếp quý khách hàng.
            </div>
            <div className="mt-[10px]">
              Showroom có không gian rộng rãi, hiện đại, lung linh, tràn ngập
              ánh sáng, trưng bày đa dạng các sản phẩm chiết xuất từ nhuỵ hoa
              nghệ tây nhập khẩu chính ngạch từ Iran, đảm bảo tiêu chuẩn quốc
              tế.
            </div>
            <div className="mt-[10px]">
              Chúng tôi luôn mong muốn đem đến những trải nghiệm về chất lượng
              sản phẩm từ thiên nhiên cao cấp nhất, dịch vụ chăm sóc tư vấn bởi
              những <span className="font-bold">chuyên viên</span> giàu kinh
              nghiệm được chỉn chu, hoàn thiện nhất.
            </div>
            <div className="mt-[10px]">
              Từ đó, mỗi món quà sức khoẻ trao tay đến khách hàng đều là những
              giây phút hạnh phúc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHABPage;
