"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { CuisineList } from "@/data/data";
import { CuisineListTypes } from "@/types/Interface";
const CuisineNomal = ({ params }: { params: { urlCuisineNomal: string } }) => {
  const router = useRouter();
  return (
    <div className="py-[50px] px-[150px] text-white bg-[#a72020] Cuisine-profile-nomal__container">
      <div
        onClick={() => {
          router.back();
        }}
        className="cursor-pointer flex items-center Cuisine-profile-nomal-return hover:underline"
      >
        <p>
          <BsArrowLeft />
        </p>
        <p className="ml-[5px]">Quay lại</p>
      </div>
      {CuisineList.filter((items: CuisineListTypes) => {
        return items.urlCuisine === params.urlCuisineNomal;
      }).map((items: CuisineListTypes) => {
        return (
          <div key={items.idCuisine}>
            <div className="mt-[40px] pl-[50px] Cuisine-profile-main-tittle">
              <p className="text-[28px] font-[550] Cuisine-profile-tittle">
                {items.tittleCuisine}
              </p>
              <p className="text-[16px] mt-[10px] Cuisine-profile-types">
                {items.typeCuisine}
              </p>
            </div>
            <div className="flex flex-col items-center mt-[50px] Cuisine-profile-main-detail">
              <div className="flex Cuisine-porfile-nomal-content">
                <div className=" h-[500px] screen mt-[20px] max-w-[2000px] Cuisine-profile-image mr-[80px]">
                  <Image
                    src={items.imgCuisine.src}
                    alt={items.imgCuisine.alt}
                    width={items.imgCuisine.width}
                    height={items.imgCuisine.height}
                    loading="lazy"
                    className="flex flex-shrink-0 w-[400px] h-[500px] Cuisine-profile-image"
                  />
                </div>
                <div className="w-[600px] text-[20px] Cuisine-profile-nomal-info">
                  <p className="font-[550] text-[25px] Cuisine-profile-nomal-tittle">
                    {items.contentCuisine.contentTittle1}
                  </p>
                  <p className="mt-[10px]">{items.contentCuisine.content2}</p>
                  <p className="font-[550] text-[25px] mt-[50px] Cuisine-profile-nomal-tittle">
                    {items.contentCuisine.contentTittle3}
                  </p>
                  <div className="mt-[15px] ">
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

export default CuisineNomal;
