"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsArrowLeft } from "react-icons/bs";
import { CuisineListMain } from "@/data/data";
import { CuisineListMainTypes } from "@/types/Interface";
import { useRouter } from "next/navigation";

const CuisineMain = ({ params }: { params: { urlCuisineMain: string } }) => {
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
        return items.urlCuisineMain === params.urlCuisineMain;
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
              <div className="flex Cuisine-profile-main-detail-content w-[80%] justify-between">
                <div className="Cuisine-profile-main-detail-image w-[48%]">
                  <Image
                    src={items.imgCuisine.src}
                    alt={items.imgCuisine.alt}
                    width={items.imgCuisine.width}
                    height={items.imgCuisine.height}
                    loading="lazy"
                    className="flex flex-shrink-0 h-[450px] w-full Cuisine-profile-main-detail-image"
                  />
                </div>

                <div className="text-[20px] Cuisine-profile-content-all w-[48%] text-justify">
                  <div className="w-full">
                    <p className="font-[550] text-[25px] Cuisine-profile-tittle">
                      {items.contentCuisine.contentTittle1}
                    </p>
                    <p className="mt-[10px] Cuisine-profile-content">
                      {items.contentCuisine.content2}
                    </p>
                  </div>
                  <div className="w-[100%]">
                    <p className="font-[550] text-[25px] mt-[20px] Cuisine-profile-tittle">
                      {items.contentCuisine.contentTittle3}
                    </p>
                    <div className="mt-[10px] Cuisine-profile-content">
                      <p>{items.contentCuisine.content4}</p>
                      <p className="mt-[10px]  Cuisine-profile-content">
                        {items.contentCuisine.content5}
                      </p>
                      <p className="mt-[10px]  Cuisine-profile-content">
                        {items.contentCuisine.content6}
                      </p>
                      <p className="mt-[10px]  Cuisine-profile-content">
                        {items.contentCuisine.content7}
                      </p>
                      <p className="mt-[10px]  Cuisine-profile-content">
                        {items.contentCuisine.content8}
                      </p>
                      <p className="mt-[10px]  Cuisine-profile-content">
                        {items.contentCuisine.content9}
                      </p>
                    </div>
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
