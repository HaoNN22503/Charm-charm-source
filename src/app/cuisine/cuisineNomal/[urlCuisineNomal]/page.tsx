"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { CuisineList } from "@/data/data";
import { CuisineListTypes } from "@/types/Interface";
import { dividerClasses } from "@mui/material";
const CuisineNomal = ({ params }: { params: { url: string } }) => {
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
        return items.idCuisine === params.url;
      }).map((items: CuisineListTypes) => {
        return (
          <div key={items.idCuisine}>
            <div className="w-full flex justify-evenly">
              <div className="mt-[40px] w-[80%] Cuisine-profile-normal-tittle">
                <p className="text-[28px] w-full font-[550] Cuisine-profile-normal-tittle-detail">
                  {items.tittleCuisine1}
                </p>
                <p className="text-[16px] mt-[10px] Cuisine-profile-normal-types">
                  {items.typeCuisine}
                </p>
              </div>
            </div>
            <div className="w-full flex justify-evenly mt-[20px] text-[20px] cuisine-profile-normal-container">
              {items.imgCuisine[0].width === 400 ? (
                <div className="Cuisine-profile-normal-detail-content w-[80%] ">
                  <div className="leading-[1.5] mt-[10px]">
                    <div>{items.contentCuisine.content1}</div>

                    <div className="mt-[10px]">
                      {items.contentCuisine.content2}
                    </div>
                  </div>
                  <div className="Cuisine-profile-normal-detail-image h-[400px] w-full justify-evenly flex mt-[10px]">
                    <Image
                      src={items.imgCuisine[0].src}
                      alt={items.imgCuisine[0].alt}
                      width={items.imgCuisine[0].width}
                      height={items.imgCuisine[0].height}
                      loading="lazy"
                      className="flex flex-shrink-0 w-[50%] h-full Cuisine-profile-nomal-detail-image-detail"
                    />
                  </div>
                </div>
              ) : (
                <div className=" flex justify-between Cuisine-profile-normal-detail-content w-[80%]">
                  <div className="leading-[1.5] w-[50%] mt-[10px] Cuisine-profile-normal-detail-content-container">
                    <div>{items.contentCuisine.content1}</div>

                    <div className="mt-[10px]">
                      {items.contentCuisine.content2}
                    </div>
                  </div>
                  <div className="Cuisine-profile-normal-detail-image w-[50%] justify-evenly flex mt-[10px]">
                    <Image
                      src={items.imgCuisine[0].src}
                      alt={items.imgCuisine[0].alt}
                      width={items.imgCuisine[0].width}
                      height={items.imgCuisine[0].height}
                      loading="lazy"
                      className="flex flex-shrink-0 w-[60%] h-full Cuisine-profile-nomal-detail-image-detail"
                    />
                  </div>
                </div>
              )}
            </div>
            {items.tittleCuisine2 != "" ? (
              <div className="w-full flex justify-evenly">
                <div className="mt-[40px] w-[80%] Cuisine-profile-normal-tittle">
                  <p className="text-[28px] w-full font-[550] Cuisine-profile-normal-tittle">
                    {items.tittleCuisine2}
                  </p>
                  <p className="text-[16px] mt-[10px] Cuisine-profile-normal-types">
                    {items.typeCuisine}
                  </p>
                </div>
              </div>
            ) : null}
            <div className="w-full flex justify-evenly mt-[20px] text-[20px] cuisine-profile-normal-container">
              <div className="Cuisine-profile-normal-detail-content w-[80%] justify-between ">
                <div className="leading-[1.5] mt-[10px]">
                  <div className="font-bold">
                    {items.contentCuisine.tittle1}
                  </div>
                  <div className="mt-[10px]">
                    {items.contentCuisine.contentTittle1}
                  </div>
                  <div className="mt-[10px]">
                    {items.contentCuisine.contentTittle2}
                  </div>
                  <div className="mt-[10px]">
                    {items.contentCuisine.contentTittle3}
                  </div>
                  <div className="mt-[10px]">
                    {items.contentCuisine.contentTittle4}
                  </div>
                  <div className="mt-[10px]">
                    {items.contentCuisine.contentTittle5}
                  </div>
                  <div className="mt-[10px]">
                    {items.contentCuisine.contentTittle6}
                  </div>
                </div>
                {items.imgCuisine[1].src != "" &&
                items.imgCuisine[1].width === 200 ? (
                  <div className="flex justify-between w-full Cuisine-profile-normal-profile2-flex">
                    <div className="mt-[10px] w-[50%] leading-[1.5] text-justify Cuisine-profile-normal-profile2-flex-content">
                      <div className="mb-[10px] font-bold">
                        {items.contentCuisine.tittle2}
                      </div>
                      <div className="mb-[10px]">
                        {items.contentCuisine.step1}
                      </div>
                      <div className="mb-[10px]">
                        {items.contentCuisine.contentStep1p1}
                      </div>
                      <div className="mb-[10px]">
                        {items.contentCuisine.contentStep1p2}
                      </div>
                      <div className="mb-[10px]">
                        {items.contentCuisine.contentStep1p3}
                      </div>
                      <div className="mb-[10px]">
                        {items.contentCuisine.contentStep1p4}
                      </div>
                      <div className="mb-[10px]">
                        {items.contentCuisine.step2}
                      </div>
                      <div className="mb-[10px]">
                        {items.contentCuisine.contentStep2p1}
                      </div>
                      <div className="mb-[10px]">
                        {items.contentCuisine.step3}
                      </div>
                      <div className="mb-[10px]">
                        {items.contentCuisine.step4}
                      </div>
                      <div className="mb-[10px]">
                        {items.contentCuisine.step5}
                      </div>
                      <div className="mb-[10px]">
                        {items.contentCuisine.step6}
                      </div>
                      <div>{items.contentCuisine.step7}</div>
                    </div>
                    <div className="Cuisine-profile-normal-detail-image flex justify-evenly w-[45%]">
                      <Image
                        src={items.imgCuisine[1].src}
                        alt={items.imgCuisine[1].alt}
                        width={items.imgCuisine[1].width}
                        height={items.imgCuisine[1].height}
                        loading="lazy"
                        className="flex flex-shrink-0 w-[80%] Cuisine-profile-nomal-detail-image-detail"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-full">
                    <div className="mt-[10px] w-full leading-[1.5] text-justify">
                      <div className="mb-[10px] font-bold">
                        {items.contentCuisine.tittle2}
                      </div>
                      <div className="mb-[10px]">
                        {items.contentCuisine.step1}
                      </div>
                      <div className="mb-[10px]">
                        {items.contentCuisine.contentStep1p1}
                      </div>
                      <div className="mb-[10px]">
                        {items.contentCuisine.contentStep1p2}
                      </div>
                      <div className="mb-[10px]">
                        {items.contentCuisine.contentStep1p3}
                      </div>
                      <div className="mb-[10px]">
                        {items.contentCuisine.contentStep1p4}
                      </div>
                      <div className="mb-[10px]">
                        {items.contentCuisine.step2}
                      </div>
                      <div className="mb-[10px]">
                        {items.contentCuisine.contentStep2p1}
                      </div>
                      <div className="mb-[10px]">
                        {items.contentCuisine.step3}
                      </div>
                      <div className="mb-[10px]">
                        {items.contentCuisine.step4}
                      </div>
                      <div className="mb-[10px]">
                        {items.contentCuisine.step5}
                      </div>
                      <div className="mb-[10px]">
                        {items.contentCuisine.step6}
                      </div>
                      <div>{items.contentCuisine.step7}</div>
                    </div>
                    {items.imgCuisine[1].src != "" ? (
                      <div className="Cuisine-profile-normal-detail-image mt-[10px] flex justify-evenly w-full">
                        <Image
                          src={items.imgCuisine[1].src}
                          alt={items.imgCuisine[1].alt}
                          width={items.imgCuisine[1].width}
                          height={items.imgCuisine[1].height}
                          loading="lazy"
                          className="flex flex-shrink-0 w-[50%] Cuisine-profile-nomal-detail-image-detail"
                        />
                      </div>
                    ) : null}
                  </div>
                )}
              </div>
            </div>
            <div className="w-full flex justify-evenly mt-[20px] text-[20px] cuisine-profile-normal-container">
              <div className="w-[80%]  Cuisine-profile-nomal-detail-content">
                <div className="w-full">{items.contentCuisine.content3}</div>
                <div className="w-full mt-[10px]">
                  {items.contentCuisine.content4}
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
