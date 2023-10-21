import Link from "next/link";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa6";
import { SiZalo } from "react-icons/si";
const FooterHAB = () => {
  return (
    <div className="max-w-[2000px] footer__container">
      <div className="flex items-start justify-center pl-[120px] pt-[60px] pr-[120px] pb-[30px] border-b-[#611a1a] border-solid border-[0.5px] gap-[80px] text-[#611a1a] footer-info__container">
        <div className="w-[350px]">
          <p className="h-[40px] text-xl ">GIỮ LIÊN LẠC</p>
          <p className="text-sm h-[70px]">
            Đăng kí để nhận thông tin khuyến mãi mới nhất từ Charm Charm
            Staffron
          </p>
          <div className="w-full">
            {" "}
            <input
              type="text"
              placeholder="Địa chỉ Email"
              className="text-[15px] pl-[10px] border-solid border-b-[#611a1a] border-[0.5px] border-l-white border-t-white border-r-white h-[35px] w-full focus:outline-none"
            />
          </div>
          <p className="flex justify-center mt-3 text-base underline cursor-pointer ">
            Đăng kí
          </p>
        </div>
        <div className="text-[14px] leading-[2.2]">
          <p className="h-[40px] text-[16px] font-[550]">
            CHARM CHARM STAFFRON
          </p>
          <p>Giới thiệu</p>
          <p>Làm đẹp</p>
          <p>Liên hệ</p>
          <p>HOTLINE: +84 (0) 855 567 4649</p>
          <p>Email: charmcharm.saffron@gmail.com</p>
          <p>Website: http://www.charmcharm-staffron.com</p>
        </div>
        <div className="text-[14px]">
          <p className="h-[40px] font-[500] text-[15px]">ĐỊA CHỈ SHOWROOM</p>

          <p>
            26/1/7 Đỗ Quang phường Trung <br /> Hòa quận Cầu Giấy Hà Nội
          </p>
        </div>
      </div>
      <div className=" flex items-center pl-[240px] pt-[40px] pr-[120px] text-[#611a1a] pb-[30px] footer-address__container">
        <div className="text-[14px]">
          <p className="text-base">
            CÔNG TY TNHH KẾ TOÁN VÀ TRUYỀN THÔNG ĐỨC THÀNH PHÁTPHÁT
          </p>
          <p className="mt-3">
            Địa chỉ: Tòa nhà Time Tower 35 Lê Văn Lương Phường Nhân Chính quận
            Thanh Xuân Hà <br /> Nội, VPĐD TPHCM : Tòa nhà 3 Bees Towew, 281
            Nguyễn Văn Trỗi, P10, Phú Nhuận, TP <br /> HCM{" "}
          </p>
        </div>
        <div className="flex gap-[20px] ml-auto mr-[150px] ">
          <Link
            href="https://www.facebook.com/Charmcharm.Saffronhn"
            className="cursor-pointer"
          >
            <BsFacebook size={30} />
          </Link>
          <Link
            href="https://www.facebook.com/messages/t/103055238233853"
            className="cursor-pointer"
          >
            <FaFacebookMessenger size={30} />
          </Link>
          <p className="cursor-pointer">
            <SiZalo size={30} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterHAB;
