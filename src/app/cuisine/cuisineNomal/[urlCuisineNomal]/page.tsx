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
    <div className="py-[40px] text-white bg-[#a72020] Cuisine-profile-nomal__container">
      <div className="w-full flex justify-evenly">
        <div
          onClick={() => {
            router.back();
          }}
          className="cursor-pointer w-[90%] flex items-center Cuisine-profile-nomal-return hover:underline"
        >
          <p>
            <BsArrowLeft />
          </p>
          <p className="ml-[5px]">Quay lại</p>
        </div>
      </div>

      {CuisineList.filter((items: CuisineListTypes) => {
        return items.urlCuisine === params.urlCuisineNomal;
      }).map((items: CuisineListTypes) => {
        return (
          <div key={items.idCuisine}>
            <div className="w-full flex justify-evenly">
              <div className="mt-[40px] w-[80%] Cuisine-profile-normal-tittle">
                <p className="text-[28px]   w-full font-[550] Cuisine-profile-normal-tittle">
                  {items.tittleCuisine}
                </p>
                <p className="text-[16px] mt-[10px] Cuisine-profile-normal-types">
                  {items.typeCuisine}
                </p>
              </div>
            </div>
            <div className="w-full flex justify-evenly mt-[20px] cuisine-profile-normal-container">
              <div className="flex Cuisine-profile-normal-detail-content w-[80%] justify-between">
                <div className="Cuisine-profile-normal-detail-image h-[400px] w-[48%]">
                  <Image
                    src={items.imgCuisine.src}
                    alt={items.imgCuisine.alt}
                    width={items.imgCuisine.width}
                    height={items.imgCuisine.height}
                    loading="lazy"
                    className="flex flex-shrink-0 w-full h-full Cuisine-profile-nomal-detail-image-detail"
                  />
                </div>
                <div className="w-[48%] text-justify text-[20px] Cuisine-profile-nomal-content-all">
                  <div className="w-full">
                    <p className="font-[550] text-[25px] Cuisine-profile-nomal-tittle">
                      {items.contentCuisine.contentTittle1}
                    </p>
                    <p className="mt-[10px] Cuisine-profile-nomal-content">
                      {items.contentCuisine.content2}
                    </p>
                    <p className="font-[550] text-[25px] mt-[20px] Cuisine-profile-nomal-tittle">
                      {items.contentCuisine.contentTittle3}
                    </p>
                    <div className="mt-[10px] Cuisine-profile-nomal-content">
                      <p>{items.contentCuisine.content4}</p>
                      <p className="mt-[10px] Cuisine-profile-nomal-content">
                        {items.contentCuisine.content5}
                      </p>
                      <p className="mt-[10px] Cuisine-profile-nomal-content">
                        {items.contentCuisine.content6}
                      </p>
                      <p className="mt-[10px] Cuisine-profile-nomal-content">
                        {items.contentCuisine.content7}
                      </p>
                      <p className="mt-[10px] Cuisine-profile-nomal-content">
                        {items.contentCuisine.content8}
                      </p>
                      <p className="mt-[10px] Cuisine-profile-nomal-content">
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

export default CuisineNomal;
