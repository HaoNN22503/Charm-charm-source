import React from "react";
import Link from "next/link";
import { SiZalo } from "react-icons/si";
import { FaFacebookMessenger } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { IoLogoFacebook } from "react-icons/io5";
const ContactHABPage = () => {
  return (
    <div className="max-w-[2000px] pb-[50px] flex flex-col items-center text-white bg-[#611a1a] contact-HAB__container">
      <div className="pt-[80px] text-[23px] w-[880px] ">
        <p>Chăm sóc khách hàng</p>
      </div>
      <div className="flex pt-[50px] text-[20px] gap-[500px]">
        <p>Liên hệ</p>
        <p className="flex flex-col items-center justify-center">
          <p>Kết nối với Charm Charm Saffron</p>
          <p className="mt-[15px] flex gap-[15px] items-center justify-center">
            <Link
              href="https://www.facebook.com/Charmcharm.Saffronhn"
              className="cursor-pointer"
            >
              <IoLogoFacebook size={40} />
            </Link>
            <Link
              href="https://www.facebook.com/messages/t/103055238233853"
              className="cursor-pointer"
            >
              <FaFacebookMessenger size={40} />
            </Link>
            <p className="cursor-pointer">
              <SiZalo size={40} />
            </p>
          </p>
          <p className="bg-white rounded-[10px] p-[20px] text-black mt-[20px] flex items-center justify-center flex-col w-fit">
            <p>
              <FiPhone size={40} />
            </p>
            <p className="mt-[15px] text-[14px] w-fit">
              HOTLINE: +84 (0) 855 567 4649
            </p>
          </p>
          <p className="bg-white rounded-[10px] p-[20px] text-black mt-[20px] flex items-center justify-center flex-col w-fit">
            <p>
              <FiMail size={40} />
            </p>
            <p className="mt-[15px] text-[12px] w-fit">
              Email: charmcharm.saffron@gmail.com
            </p>
          </p>
        </p>
      </div>
    </div>
  );
};

export default ContactHABPage;
