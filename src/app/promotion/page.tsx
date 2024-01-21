"use client";
import React from "react";
import Image from "next/image";
import imgPromotion1 from "../../assets/image/ImagePromotion (1).svg";
import imgPromotion2 from "../../assets/image/ImagePromotion (2).svg";
import imgPromotion3 from "../../assets/image/ImagePromotion (3).svg";

const page = () => {
  const startDate = "01/11/2023";
  const endDate = "30/11/2023";

  return (
    <div className="bg-[#a72020] promotion-HAB__container">
      <div className=" pt-[30px] flex items-center justify-center font-[400] text-[25px] text-white w-[100%] text-center">
        Những khuyến mãi dành cho bạn
      </div>
      <div className="promotion-HAB-show flex flex-wrap p-[20px] w-[100%] items-center justify-center">
        <div className="promotion-HAB-detail p-[15px] bg-white rounded-[10px] mt-[20px] w-[25%]">
          <div className="promotion-HAB-detail-img w-full">
            <Image
              alt=""
              src={imgPromotion1}
              loading="lazy"
              className="promotion-HAB-detail-img rounded-[10px] w-full"
            />
          </div>
          <div className="flex justify-center p-[5px] items-center bg-white text-[14px] mt-[10px] text-[#a72020] font-[550] border border-solid border-[#a72020]">
            <div className="promotion-HAB-detail-date flex justify-center items-center ">
              {`${startDate}`}
            </div>{" "}
            <div className="promotion-HAB-detail-date flex justify-center items-center">
              -
            </div>{" "}
            <div className="promotion-HAB-detail-date flex justify-center items-center">
              {`${endDate}`}
            </div>
          </div>
        </div>
        <div className="promotion-HAB-detail p-[15px] bg-white rounded-[10px] mt-[20px] ml-[20px] w-[25%]">
          <div className="promotion-HAB-detail-img w-full ">
            <Image
              alt=""
              src={imgPromotion2}
              loading="lazy"
              className="promotion-HAB-detail-img rounded-[10px]"
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center bg-white text-[14px] mt-[10px] text-[#a72020] font-[550] border border-solid border-[#a72020] p-[5px]">
              <div className="promotion-HAB-detail-date flex justify-center items-center ">
                {`${startDate}`}
              </div>{" "}
              <div className="promotion-HAB-detail-date flex justify-center items-center">
                -
              </div>{" "}
              <div className="promotion-HAB-detail-date flex justify-center items-center">
                {`${endDate}`}
              </div>
            </div>
          </div>
        </div>
        <div className="promotion-HAB-detail p-[15px] bg-white rounded-[10px] mt-[20px] ml-[20px] w-[25%]">
          <div className="promotion-HAB-detail-img  w-full">
            <Image
              alt=""
              src={imgPromotion3}
              loading="lazy"
              className="promotion-HAB-detail-img rounded-[10px]"
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center bg-white text-[14px] mt-[10px] text-[#a72020] font-[550] border border-solid border-[#a72020] p-[5px]">
              <div className="promotion-HAB-detail-date flex justify-center items-center ">
                {`${startDate}`}
              </div>{" "}
              <div className="promotion-HAB-detail-date flex justify-center items-center">
                -
              </div>{" "}
              <div className="promotion-HAB-detail-date flex justify-center items-center">
                {`${endDate}`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
