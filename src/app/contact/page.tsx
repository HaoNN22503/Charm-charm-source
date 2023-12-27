import React from "react";
import Link from "next/link";
import { SiZalo } from "react-icons/si";
import { FaFacebookMessenger } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { IoLogoFacebook } from "react-icons/io5";
const ContactHABPage = () => {
  return (
    <div className="pb-[50px] flex flex-col items-center text-white bg-[#a72020] contact-HAB__container">
      <div className="pt-[80px] items-center text-[23px] w-[880px] contact-HAB-tittle">
        <p>Ghé thăm showroom</p>
      </div>
      <div className="flex pt-[50px] text-[20px] w-[880px] contact-HAB-profile">
        <div className="w-[100%]">Liên hệ</div>
        <div className="flex flex-col items-center justify-center w-[100%]">
          <div>Kết nối với Charm Charm Saffron</div>
          <div className="mt-[15px] flex items-center justify-center">
            <Link
              href="https://www.facebook.com/Charmcharm.Saffronhn"
              className="cursor-pointer mr-[15px]"
            >
              <IoLogoFacebook size={40} />
            </Link>
            <Link
              href="https://www.facebook.com/messages/t/103055238233853"
              className="cursor-pointer mr-[15px]"
            >
              <FaFacebookMessenger size={40} />
            </Link>
            <p className="cursor-pointer mr-[15px]">
              <SiZalo size={40} />
            </p>
          </div>
          <div className="bg-white rounded-[10px] p-[18px] text-black mt-[20px] flex items-center justify-center flex-col w-fit">
            <p>
              <FiPhone size={40} />
            </p>
            <p className="mt-[15px] text-[14px] w-fit contact-HAB-phone">
              HOTLINE: +84 (0) 855 567 4649
            </p>
          </div>
          <div className="bg-white rounded-[10px] p-[20px] text-black mt-[20px] flex items-center justify-center flex-col w-fit">
            <p>
              <FiMail size={40} />
            </p>
            <p className="mt-[15px] text-[12px] w-fit">
              Email: charmcharm.saffron@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHABPage;
