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
    <div className=" text-white py-[40px] w-full bg-[#a72020] beauty-profile-main__container">
      <div className="w-full flex justify-evenly">
        <div
          onClick={() => {
            router.back();
          }}
          className="cursor-pointer flex items-center beauty-profile-main-return hover:underline w-[90%]"
        >
          <p>
            <BsArrowLeft />
          </p>
          <p className="ml-[5px]">Quay lại</p>
        </div>
      </div>
      {BeautyListMain.filter((items: BeautyListMainTypes) => {
        return items.idBeauty === params.urlbeautyMain;
      }).map((items: BeautyListMainTypes) => {
        return (
          <div key={items.idBeauty}>
            <div className="w-full flex justify-evenly">
              <div className="mt-[40px] w-[80%] beauty-profile-main-tittle">
                <p className="text-[28px] w-full font-[550] beauty-profile-main-tittle-detail">
                  {items.tittleBeauty}
                </p>
                <p className="text-[16px] mt-[10px] beauty-profile-main-types">
                  {items.typeBeauty}
                </p>
              </div>
            </div>
            <div className="w-full flex justify-evenly mt-[20px]">
              <div className="flex items-center flex-col beauty-profile-main-detail w-[80%]">
                <div className="beauty-profile-main-detail-image w-[full]">
                  <Image
                    src={items.imgBeauty.imgBeauty1.src}
                    alt={items.imgBeauty.imgBeauty1.alt}
                    width={items.imgBeauty.imgBeauty1.width}
                    height={items.imgBeauty.imgBeauty1.height}
                    loading="lazy"
                    className="flex flex-shrink-0 h-[450px] w-full beauty-profile-main-detail-image"
                  />
                </div>
                <div className="w-[full] mt-[10px]">
                  {" "}
                  <div className="text-[20px] beauty-profile-main-detail-profile  text-justify">
                    <p className="">{items.contentBeauty.content1}</p>
                    <p className="mt-[20px]">{items.contentBeauty.content2}</p>
                  </div>
                  <div className="text-[20px] beauty-profile-main-detail-profile text-justify">
                    <p className="mt-[20px]">{items.contentBeauty.step1}</p>
                    <p className="mt-[20px]">{items.contentBeauty.content3}</p>
                  </div>
                  <div className="text-[20px] beauty-profile-main-detail-profile text-justify">
                    <p className="">{items.contentBeauty.step2}</p>
                    <p className="mt-[20px]">{items.contentBeauty.step3}</p>
                    <p className="mt-[20px]">{items.contentBeauty.step4}</p>
                    <p className="mt-[20px]">{items.contentBeauty.step5}</p>
                  </div>
                  <div className="text-[20px] beauty-profile-main-detail-profile text-justify">
                    <p className="">{items.contentBeauty.content4}</p>
                    <p className="mt-[20px]">{items.contentBeauty.content5}</p>
                  </div>
                </div>
                <div className="beauty-profile-main-detail-image mt-[10px] w-[full]">
                  <Image
                    src={items.imgBeauty.imgBeauty2.src}
                    alt={items.imgBeauty.imgBeauty2.alt}
                    width={items.imgBeauty.imgBeauty2.width}
                    height={items.imgBeauty.imgBeauty2.height}
                    loading="lazy"
                    className="flex flex-shrink-0 h-[450px] w-full beauty-profile-main-detail-image"
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
