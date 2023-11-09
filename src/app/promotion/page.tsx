"use client";
import React from "react";
import Image from "next/image";
import imgPromotion1 from "../../assets/image/ImagePromotion1.jpg";
import imgPromotion2 from "../../assets/image/ImagePromotion2.jpg";
import imgPromotion3 from "../../assets/image/ImagePromotion3.jpg";
const page = () => {
  const startDate = "01/11/2023";
  const endDate = "30/11/2023";

  return (
    <div className="bg-[#a72020] promotion-HAB__container">
      <div className=" pt-[30px] flex items-center justify-center font-[400] text-[25px] text-white w-[100%] text-center">
        Những khuyến mãi dành cho bạn
      </div>
      <div className="promotion-HAB-show flex flex-wrap p-[20px] w-[100%] items-center justify-center">
        <div className="promotion-HAB-detail p-[15px] bg-white rounded-[10px] mt-[20px]">
          <div className="promotion-HAB-detail-img  w-[200px] h-[200px] ">
            <Image
              alt=""
              src={imgPromotion1}
              loading="lazy"
              className="promotion-HAB-detail-img rounded-[10px]"
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="promotion-HAB-detail-date bg-white text-[14px] mt-[10px] text-[#a72020] font-[550] border border-solid border-[#a72020] p-[5px]">
              {`${startDate} - ${endDate}`}
            </div>
          </div>
        </div>
        <div className="promotion-HAB-detail p-[15px] bg-white rounded-[10px] mt-[20px] ml-[20px]">
          <div className="promotion-HAB-detail-img  w-[200px] h-[200px] ">
            <Image
              alt=""
              src={imgPromotion2}
              loading="lazy"
              className="promotion-HAB-detail-img rounded-[10px]"
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="promotion-HAB-detail-date bg-white text-[14px] mt-[10px] text-[#a72020] font-[550] border border-solid border-[#a72020] p-[5px]">
              {`${startDate} - ${endDate}`}
            </div>
          </div>
        </div>
        <div className="promotion-HAB-detail p-[15px] bg-white rounded-[10px] mt-[20px] ml-[20px]">
          <div className="promotion-HAB-detail-img  w-[200px] h-[200px] ">
            <Image
              alt=""
              src={imgPromotion3}
              loading="lazy"
              className="promotion-HAB-detail-img rounded-[10px]"
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="promotion-HAB-detail-date bg-white text-[14px] mt-[10px] text-[#a72020] font-[550] border border-solid border-[#a72020] p-[5px]">
              {`${startDate} - ${endDate}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
