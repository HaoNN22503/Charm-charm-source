"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsArrowLeft } from "react-icons/bs";
import { CuisineListMain } from "@/data/data";
import { CuisineListMainTypes } from "@/types/Interface";
import { useRouter } from "next/navigation";

const CuisineMain = ({ params }: { params: { url: string } }) => {
  const router = useRouter();
  return (
    <div className="text-white py-[40px] bg-[#a72020] Cuisine-profile-main__container">
      <div className="w-full flex justify-evenly">
        <div
          onClick={() => {
            router.back();
          }}
          className="cursor-pointer w-[90%] flex items-center Cuisine-profile-main-return hover:underline"
        >
          <p>
            <BsArrowLeft />
          </p>
          <p className="ml-[5px]">Quay lại</p>
        </div>
      </div>
      {CuisineListMain.filter((items: CuisineListMainTypes) => {
        return items.idCuisine === params.url;
      }).map((items: CuisineListMainTypes) => {
        return (
          <div key={items.idCuisine}>
            <div className="w-full flex justify-evenly">
              <div className="mt-[40px] w-[80%] Cuisine-profile-main-tittle">
                <p className="text-[28px] w-full font-[550] Cuisine-profile-main-tittle-detail">
                  {items.tittleCuisine}
                </p>
                <p className="text-[16px] mt-[10px] Cuisine-profile-main-types">
                  {items.typeCuisine}
                </p>
              </div>
            </div>
            <div className="w-full flex justify-evenly mt-[20px] cuisine-profile-main-container">
              <div className="Cuisine-profile-main-detail-content w-[80%] text-[20px] text-justify leading-[1.5]">
                <div className="mt-[25px] w-full">
                  <div>{items.contentCuisine.content1}</div>
                  <div className="mt-[10px]">
                    {items.contentCuisine.content2}
                  </div>
                  <div className="mt-[10px]">
                    {items.contentCuisine.content3}
                  </div>
                  <div className="mt-[10px]">
                    {items.contentCuisine.content4}
                  </div>
                  <div className="Cuisine-profile-main-detail-image flex justify-evenly w-full h-[450px]">
                    <Image
                      src={items.imgCuisine[0].src}
                      alt={items.imgCuisine[0].alt}
                      width={items.imgCuisine[0].width}
                      height={items.imgCuisine[0].height}
                      loading="lazy"
                      className="flex flex-shrink-0 h-full w-[50%] Cuisine-profile-main-detail-image-detail"
                    />
                  </div>
                  <div className="mt-[10px]">
                    {items.contentCuisine.content5}
                  </div>
                  <div className="mt-[10px]">
                    {items.contentCuisine.content6}
                  </div>
                  <div className="Cuisine-profile-main-detail-image flex justify-between w-full mt-[10px] h-[450px]">
                    <Image
                      src={items.imgCuisine[1].src}
                      alt={items.imgCuisine[1].alt}
                      width={items.imgCuisine[1].width}
                      height={items.imgCuisine[1].height}
                      loading="lazy"
                      className="flex flex-shrink-0 h-full w-full Cuisine-profile-main-detail-image-detail"
                    />
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
