"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CuisineList, CuisineListMain } from "@/data/data";
import { CuisineListMainTypes, CuisineListTypes } from "@/types/Interface";
import Link from "next/link";
const CuisineHABPage = () => {
  const router = useRouter();
  return (
    <div className="bg-[#a72020] cuisine-container">
      <div className="flex items-center justify-center font-[400] text-[35px] py-[40px] text-white cuisine-tittle">
        <p>Ẩm thực</p>
      </div>
      <div className="flex items-center justify-center p-[5px] text-white text-[16px] cuisine-option-tittle">
        <p className="cursor-pointer mr-[100px]">Xem tất cả</p>
        <p className="cursor-pointer">Xu hướng</p>
      </div>
      {CuisineListMain.map((items: CuisineListMainTypes) => {
        return (
          <div
            key={items.idCuisine}
            className="flex pt-[40px] w-[100%] h-[500px] cuisine-HAB-main-option"
          >
            <div className="w-[60%] h-full cuisine-HAB-main-option-image">
              <Image
                src={items.imgCuisine.src}
                alt={items.imgCuisine.alt}
                width={items.imgCuisine.width}
                height={items.imgCuisine.height}
                loading="lazy"
                className="w-[100%] h-full cuisine-HAB-main-option-image"
              />
            </div>
            <div className="w-[40%] h-full bg-white p-[20px] text-[#a72020] px-[60px] py-[80px] cuisine-info">
              <p className="text-[30px] font-[550] cuisine-info-tittle">
                {items.tittleCuisine}
              </p>
              <p className="pt-[40px] text-[19px] text-[#611a1a] cuisine-info-content">
                Cuối tuần đén rồi! Hãy cùng Charm Charm vào bếp cùng những món
                ngon đẹp mắt, bổ dưỡng nhé!
              </p>
              <p className=" mt-[10px] text-[19px] text-[#611a1a] cuisine-info-content">
                Hôm nay sẽ là một món ngon tráng miệng cực hợp mùa hè!
              </p>
              <div
                onClick={() => {
                  router.push(`/cuisine/cuisineMain/${items.urlCuisineMain}`);
                }}
                className="mt-[40px] px-[15px] py-[7px] cursor-pointer bg-transparent border-solid border-2 border-[#a72020] h-fit w-fit rounded-[7px] cuisine-info-btn"
              >
                <p>Tiếp tục đọc</p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="p-[50px] w-full flex flex-wrap justify-evenly cuisine-HAB-nomal-option">
        {CuisineList.map((items: CuisineListTypes) => {
          return (
            <div
              key={items.idCuisine}
              className="bg-white flex flex-col w-[24%] h-[450px] mt-[40px] rounded-[7px] cuisine-HAB-nomal"
            >
              <div className="w-full h-[40%] flex justify-center items-center cuisine-HAB-nomal-image">
                <Image
                  src={items.imgCuisine.src}
                  alt={items.imgCuisine.alt}
                  width={270}
                  height={250}
                  loading="lazy"
                  className="h-full w-[95%] object-fill cuisine-HAB-nomal-image rounded-[7px] "
                />
              </div>
              <div className="p-[10px] h-[60%]">
                <div className="cusine-profile-normal-content h-[80%]">
                  <p className="font-[550] text-[16px] text-[#a72020] my-[10px]">
                    {items.tittleCuisine}
                  </p>
                  <p className="text-[13px] text-justify">
                    Mỗi ngày một ly nước mật ong bạc hà Saffron cho tinh thần
                    tươi trẻ hơn. Mật ong bạc hà ngọt dịu ,Mật ong bạc hà ngọt
                    dịu ,Mật ong bạc hà ngọt dịu
                  </p>
                </div>
                <div
                  onClick={() => {
                    router.push(`/cuisine/cuisineNomal/${items.urlCuisine}`);
                  }}
                  className="cusine-profile-normal-btn text-[14px] px-[10px] py-[5px] cursor-pointer bg-transparent border-solid border-2 border-[#a72020] h-fit w-fit text-[#a72020] rounded-[7px]"
                >
                  <p>Tiếp tục đọc</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CuisineHABPage;
