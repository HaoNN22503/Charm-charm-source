"use client";
import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BeautyList } from "@/data/data";
import { BeautyListTypes } from "@/types/Interface";

const BeautyProfile = ({ params }: { params: { urlbeautyNormal: string } }) => {
  const router = useRouter();
  return (
    <div className=" text-white py-[40px] bg-[#a72020] beauty-profile__container w-full">
      <div className="w-full  flex justify-evenly">
        <div
          onClick={() => {
            router.back();
          }}
          className="w-[90%] cursor-pointer flex items-center beauty-profile-return hover:underline"
        >
          <p>
            <BsArrowLeft />
          </p>
          <p className="ml-[5px]">Quay lại</p>
        </div>
      </div>

      {BeautyList.filter((items: BeautyListTypes) => {
        return items.idBeauty === params.urlbeautyNormal;
      }).map((items: BeautyListTypes) => {
        return (
          <div key={items.idBeauty}>
            <div className="w-full flex justify-evenly">
              <div className="mt-[40px] w-[80%] beauty-profile-tittle">
                <p className="w-full text-[28px] font-[550] beauty-profile-tittle-detail">
                  {items.tittleBeauty}
                </p>
                <p className=" text-[16px] mt-[10px] beauty-profile-types">
                  {items.typeBeauty}
                </p>
              </div>
            </div>
            <div className="h-[400px] w-full mt-[20px] beauty-profile-image">
              <Image
                src={items.imgBeauty.imgBeauty1.src}
                alt={items.imgBeauty.imgBeauty1.alt}
                width={items.imgBeauty.imgBeauty1.width}
                height={items.imgBeauty.imgBeauty1.height}
                loading="lazy"
                className="w-[100%] h-[400px] object-contain beauty-profile-image"
              />
            </div>
            <div className="mt-[20px] w-full text-[20px] flex flex-col items-center justify-evenly text-center beauty-profile-detail-content-header ">
              <div className="w-[70%] flex items-center justify-center beauty-profile-detail-content-header-detail">
                {items.contentBeauty.contentHead1}
              </div>
              <div className="w-[70%] mt-[10px] text-center flex items-center justify-center beauty-profile-detail-content-header-detail">
                {items.contentBeauty.contentHead2}
              </div>
            </div>
            <div className="w-full flex justify-evenly mt-[50px]">
              <div className="flex items-center flex-col beauty-profile-detail w-[80%]">
                <div className="flex beauty-profile-detail-content-container w-full justify-between">
                  <div className="text-[23px] w-[48%] beauty-profile-detail-content text-justify">
                    <p className="font-[550] text-[25px] beauty-profile-detail-content">
                      {items.contentBeauty.contentTittle3}
                    </p>
                    <p className="mt-[20px]  beauty-profile-detail-content ">
                      {items.contentBeauty.content4}
                    </p>
                    <p className="mt-[20px]  beauty-profile-detail-content">
                      {items.contentBeauty.content5}
                    </p>
                    <p className="mt-[20px]  beauty-profile-detail-content">
                      {items.contentBeauty.content6}
                    </p>
                  </div>
                  <div className="beauty-profile-image w-[48%] h-[450]">
                    {" "}
                    <Image
                      src={items.imgBeauty.imgBeauty2.src}
                      alt={items.imgBeauty.imgBeauty2.alt}
                      width={items.imgBeauty.imgBeauty2.width}
                      height={items.imgBeauty.imgBeauty2.height}
                      loading="lazy"
                      className="flex w-full h-full beauty-profile-image"
                    />
                  </div>
                </div>
                <div className="flex mt-[40px] beauty-profile-detail-content-container  w-full justify-between">
                  <div className="beauty-profile-image w-[48%] h-[450px]">
                    <Image
                      src={items.imgBeauty.imgBeauty3.src}
                      alt={items.imgBeauty.imgBeauty3.alt}
                      width={items.imgBeauty.imgBeauty3.width}
                      height={items.imgBeauty.imgBeauty3.height}
                      loading="lazy"
                      className="w-full h-full beauty-profile-image"
                    />
                  </div>

                  <div className="w-[48%] text-justify text-[23px] beauty-profile-detail-content ">
                    <p className="font-[550] text-[25px] beauty-profile-detail-content">
                      {items.contentBeauty.contentTittle7}
                    </p>
                    <p className="mt-[20px]  beauty-profile-detail-content">
                      {items.contentBeauty.content9}
                    </p>
                    <p className="mt-[20px]  beauty-profile-detail-content">
                      {items.contentBeauty.content10}
                    </p>
                    <p className="mt-[20px]  beauty-profile-detail-content">
                      {items.contentBeauty.content11}
                    </p>
                    <p className="mt-[20px]  beauty-profile-detail-content">
                      {items.contentBeauty.content12}
                    </p>
                  </div>
                </div>
                <div className="flex w-full justify-between mt-[40px] beauty-profile-detail-content-container">
                  <div className=" text-[23px] w-[48%] beauty-profile-detail-content text-justify">
                    {" "}
                    <p className="font-[550] text-[25px] beauty-profile-detail-content">
                      {items.contentBeauty.contentTittle13}
                    </p>
                    <p className="mt-[20px] beauty-profile-detail-content">
                      {items.contentBeauty.content14}
                    </p>
                    <p className="mt-[20px] beauty-profile-detail-content">
                      {items.contentBeauty.content15}
                    </p>
                    <p className="mt-[20px] beauty-profile-detail-content">
                      {items.contentBeauty.content16}
                    </p>
                    <p className="mt-[20px] beauty-profile-detail-content">
                      {items.contentBeauty.content17}
                    </p>
                  </div>
                  {items.imgBeauty.imgBeauty4.src === "" ? null : (
                    <div className="beauty-profile-image w-[48%] h-[450px]">
                      <Image
                        src={items.imgBeauty.imgBeauty4.src}
                        alt={items.imgBeauty.imgBeauty4.alt}
                        width={items.imgBeauty.imgBeauty4.width}
                        height={items.imgBeauty.imgBeauty4.height}
                        loading="lazy"
                        className="w-full h-full beauty-profile-image"
                      />
                    </div>
                  )}
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
