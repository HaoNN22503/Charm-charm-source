"use client";
import React, { useState } from "react";
import CuisineMain from "./cuisineMain/[urlCuisineMain]/page";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CuisineList, CuisineListMain } from "@/data/data";
import { CuisineListMainTypes, CuisineListTypes } from "@/types/Interface";
const CuisineHABPage = () => {
  const router = useRouter();
  return (
    <div className="bg-[#611a1a] Cuisine-container">
      <div className="flex items-center justify-center font-[400] text-[35px] pt-[40px] pb-[20px] text-white Cuisine-tittle">
        <p>Ẩm thực</p>
      </div>
      <div className="flex items-center justify-center p-[5px] text-white text-[16px] gap-[100px]  Cuisine-option-tittle">
        <p className="cursor-pointer">Xem tất cả</p>
        <p className="cursor-pointer">Xu hướng</p>
      </div>
      {CuisineListMain.map((items: CuisineListMainTypes) => {
        return (
          <div key={items.idCuisine} className="flex pt-[40px]">
            <div className="w-[60%] h-[500px]">
              <Image
                src={items.imgCuisine.src}
                alt={items.imgCuisine.alt}
                width={items.imgCuisine.width}
                height={items.imgCuisine.height}
                className="w-[100%] h-[500px]"
              />
            </div>
            <div className="w-[40%] bg-white p-[20px] ml-auto text-[#a72020] px-[60px] py-[80px] Cuisine-info">
              <p className="text-[30px] font-[550] ">{items.tittleCuisine}</p>
              <p className="pt-[40px] text-[19px] text-[#611a1a]">
                Cuối tuần đén rồi! Hãy cùng Charm Charm vào bếp cùng những món
                ngon đẹp mắt, bổ dưỡng nhé!
              </p>
              <p className=" mt-[10px] text-[19px] text-[#611a1a]">
                Hôm nay sẽ là một món ngon tráng miệng cực hợp mùa hè!
              </p>
              <div
                onClick={() => {
                  router.push(`/cuisine/cuisineMain/${items.urlCuisineMain}`);
                }}
                className="mt-[40px] pt-[7px] pr-[15px] pb-[7px] pl-[15px] cursor-pointer bg-transparent border-solid border-2 border-[#a72020] h-fit w-fit rounded-[7px]"
              >
                <p>Tiếp tục đọc</p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="p-[50px] flex flex-wrap">
        {CuisineList.map((items: CuisineListTypes) => {
          return (
            <div
              key={items.idCuisine}
              className="bg-white flex flex-col w-[300px] h-[450px] mt-[40px] p-[15px] rounded-[7px]  mr-[25px] ml-[25px]"
            >
              <div>
                <div className="w-[270px] h-[250px] mb-[10px] flex justify-center items-center">
                  <Image
                    src={items.imgCuisine.src}
                    alt={items.imgCuisine.alt}
                    width={270}
                    height={250}
                    className="h-[250px] w-[270px] object-fill"
                  />
                </div>
                <div>
                  <p className="font-[550] text-[16px] text-[#a72020] mt-[10px] mb-[10px]">
                    {items.tittleCuisine}
                  </p>
                  <p className="text-[13px]">
                    Mỗi ngày một ly nước mật ong bạc hà Saffron cho tinh thần
                    tươi trẻ hơn. Mật ong bạc hà ngọt dịu, thơm mát hoà quyện
                    với Saffron thoảng hương cỏ khô sẽ là thức uống bổ dưỡng,
                    mang tới năng
                  </p>
                </div>
                <div
                  onClick={() => {
                    router.push(`/cuisine/cuisineNomal/${items.urlCuisine}`);
                  }}
                  className="mt-[30px] text-[14px] pt-[5px] pr-[10px] pb-[5px] pl-[10px] cursor-pointer bg-transparent border-solid border-2 border-[#a72020] h-fit w-fit text-[#a72020] rounded-[7px]"
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
