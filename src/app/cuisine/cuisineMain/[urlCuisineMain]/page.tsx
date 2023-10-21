"use client";
import React, { useState } from "react";

import Image from "next/image";
import { BsArrowLeft } from "react-icons/bs";
import { CuisineListMain } from "@/data/data";
import { CuisineListMainTypes } from "@/types/Interface";
import { useRouter } from "next/navigation";

const CuisineMain = ({ params }: { params: { urlCuisineMain: string } }) => {
  const [closeCuisineProfile, setCloseCuisineProfile] = useState(true);
  const [returnCuisine, setReturnCuisine] = useState(false);
  const router = useRouter();
  return (
    <div className="px-[150px] py-[50px] text-white bg-[#611a1a] Cuisine-profile-main__container">
      <div
        onClick={() => {
          router.back();
        }}
        className="cursor-pointer flex items-center gap-[5px] Cuisine-profile-main-return hover:underline"
      >
        <p>
          <BsArrowLeft />
        </p>
        <p>Quay lại</p>
      </div>
      {CuisineListMain.filter((items: CuisineListMainTypes) => {
        return items.urlCuisineMain === params.urlCuisineMain;
      }).map((items: CuisineListMainTypes) => {
        return (
          <div key={items.idCuisine}>
            <div className="mt-[40px] pl-[50px] Cuisine-profile-main-tittle">
              <p className="text-[28px] font-[550]">{items.tittleCuisine}</p>
              <p className="text-[16px] mt-[10px] ">{items.typeCuisine}</p>
            </div>
            <div className="flex flex-col items-center mt-[50px] Cuisine-profile-main-detail">
              <div className="flex gap-[80px]">
                <Image
                  src={items.imgCuisine.src}
                  alt={items.imgCuisine.alt}
                  width={items.imgCuisine.width}
                  height={items.imgCuisine.height}
                  className="flex flex-shrink-0 w-[400px] h-[500px]"
                />
                <div className="w-[600px] text-[20px] ">
                  <p className="font-[550] text-[25px]">
                    {items.contentCuisine.contentTittle1}
                  </p>
                  <p className="mt-[10px]">{items.contentCuisine.content2}</p>
                  <p className="font-[550] text-[25px] mt-[50px] ">
                    {items.contentCuisine.contentTittle3}
                  </p>
                  <div className="mt-[15px]">
                    <p>{items.contentCuisine.content4}</p>
                    <p className="mt-[20px]">{items.contentCuisine.content5}</p>
                    <p className="mt-[20px]">{items.contentCuisine.content6}</p>
                    <p className="mt-[20px]">{items.contentCuisine.content7}</p>
                    <p className="mt-[20px]">{items.contentCuisine.content8}</p>
                    <p className="mt-[20px]">{items.contentCuisine.content9}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CuisineMain;
