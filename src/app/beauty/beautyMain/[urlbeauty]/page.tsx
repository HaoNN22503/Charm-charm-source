"use client";
import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BeautyListMain } from "@/data/data";
import { BeautyListMainTypes } from "@/types/Interface";

const BeautyProfile = ({ params }: { params: { urlbeauty: string } }) => {
  const router = useRouter();

  return (
    <div className=" text-white bg-[#611a1a] beauty-profile__container max-w-[2000px] ">
      <div
        onClick={() => {
          router.back();
        }}
        className="pt-[50px] pl-[140px] cursor-pointer flex items-center gap-[5px]  beauty-profile-return hover:underline"
      >
        <p>
          <BsArrowLeft />
        </p>
        <p>Quay lại</p>
      </div>
      {BeautyListMain.filter((items: BeautyListMainTypes) => {
        return items.urlBeautyMain === params.urlbeauty;
      }).map((items: BeautyListMainTypes) => {
        return (
          <div key={items.idBeauty}>
            <div className="mt-[40px] beauty-profile-tittle">
              <p className="pr-[50px] pl-[190px] text-[28px] font-[550]">
                {items.tittleBeauty}
              </p>
              <p className=" pl-[190px] text-[16px] mt-[10px]">
                {items.typeBeauty}
              </p>
            </div>

            <div className="pl-[120px] pr-[50px] pb-[50px] mt-[70px] flex items-center flex-col beauty-profile-detail">
              <div className="flex gap-[80px]">
                <div className="w-[700px] text-[23px]">
                  <p className="mt-[30px]">{items.contentBeauty.content1}</p>
                  <p className="mt-[30px]">{items.contentBeauty.content2}</p>
                  <p className="mt-[30px]">{items.contentBeauty.content3}</p>
                </div>
                <Image
                  src={items.imgBeauty.imgBeauty2.src}
                  alt={items.imgBeauty.imgBeauty2.alt}
                  width={items.imgBeauty.imgBeauty2.width}
                  height={items.imgBeauty.imgBeauty2.height}
                  className="flex flex-shrink-0 w-[400px] h-[500px]"
                />
              </div>
              <div className="flex gap-[80px] mt-[40px]">
                <Image
                  src={items.imgBeauty.imgBeauty3.src}
                  alt={items.imgBeauty.imgBeauty3.alt}
                  width={items.imgBeauty.imgBeauty3.width}
                  height={items.imgBeauty.imgBeauty3.height}
                  className="w-[400px] h-[500px]"
                />
                <div className="w-[700px] text-[23px]">
                  {" "}
                  <p className="mt-[30px]">{items.contentBeauty.content4}</p>
                  <p className="mt-[30px]">{items.contentBeauty.content5}</p>
                  <p className="mt-[30px]">{items.contentBeauty.content6}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BeautyProfile;
