"use client";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BeautyListMain } from "@/data/data";
import { BeautyListMainTypes } from "@/types/Interface";

const BeautyProfile = ({ params }: { params: { urlbeautyMain: string } }) => {
  const router = useRouter();
  return (
    <div className=" text-white py-[40px] bg-[#a72020] beauty-profile-main__container max-w-[2000px] ">
      <div
        onClick={() => {
          router.back();
        }}
        className="pl-[140px] cursor-pointer flex items-center beauty-profile-main-return hover:underline"
      >
        <p>
          <BsArrowLeft />
        </p>
        <p className="ml-[5px]">Quay lại</p>
      </div>
      {BeautyListMain.filter((items: BeautyListMainTypes) => {
        return items.idBeauty === params.urlbeautyMain;
      }).map((items: BeautyListMainTypes) => {
        return (
          <div key={items.idBeauty}>
            <div className="mt-[40px] beauty-profile-main-tittle">
              <p className="pr-[50px] pl-[190px] text-[28px] font-[550] beauty-profile-main-tittle">
                {items.tittleBeauty}
              </p>
              <p className=" pl-[190px] text-[16px] mt-[10px] beauty-profile-main-types">
                {items.typeBeauty}
              </p>
            </div>

            <div className="pl-[120px] pr-[50px] pb-[50px] mt-[70px] flex items-center flex-col beauty-profile-main-detail">
              <div className="flex beauty-profile-main-detail-content">
                <div className="beauty-profile-main-detail-image mr-[80px]">
                  {" "}
                  <Image
                    src={items.imgBeauty.imgBeauty2.src}
                    alt={items.imgBeauty.imgBeauty2.alt}
                    width={items.imgBeauty.imgBeauty2.width}
                    height={items.imgBeauty.imgBeauty2.height}
                    loading="lazy"
                    className="flex flex-shrink-0 w-[400px] h-[500px] beauty-profile-main-detail-image"
                  />
                </div>
                <div className="w-[700px] text-[23px] beauty-profile-main-detail-profile">
                  <p className="mt-[30px]">{items.contentBeauty.content1}</p>
                  <p className="mt-[30px]">{items.contentBeauty.content2}</p>
                  <p className="mt-[30px]">{items.contentBeauty.content3}</p>
                </div>
              </div>
              <div className="flex mt-[40px] beauty-profile-main-detail-content-2">
                <div className="w-[700px] text-[23px] beauty-profile-main-detail-profile mr-[80px]">
                  {" "}
                  <p className="mt-[30px]">{items.contentBeauty.content4}</p>
                  <p className="mt-[30px]">{items.contentBeauty.content5}</p>
                  <p className="mt-[30px]">{items.contentBeauty.content6}</p>
                </div>
                <div className="beauty-profile-main-detail-image">
                  <Image
                    src={items.imgBeauty.imgBeauty3.src}
                    alt={items.imgBeauty.imgBeauty3.alt}
                    width={items.imgBeauty.imgBeauty3.width}
                    height={items.imgBeauty.imgBeauty3.height}
                    loading="lazy"
                    className="w-[400px] h-[500px] beauty-profile-main-detail-image"
                  />
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
