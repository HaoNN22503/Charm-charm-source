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
    <div className=" text-white bg-[#a72020] beauty-profile__container max-w-[2000px]">
      <div
        onClick={() => {
          router.back();
        }}
        className="pt-[50px] pl-[140px] cursor-pointer flex items-center beauty-profile-return hover:underline"
      >
        <p>
          <BsArrowLeft />
        </p>
        <p className="ml-[5px]">Quay lại</p>
      </div>
      {BeautyList.filter((items: BeautyListTypes) => {
        return items.idBeauty === params.urlbeautyNormal;
      }).map((items: BeautyListTypes) => {
        return (
          <div key={items.idBeauty}>
            <div className="mt-[40px] beauty-profile-tittle">
              <p className="pr-[50px] pl-[190px] text-[28px] font-[550] beauty-profile-tittle">
                {items.tittleBeauty}
              </p>
              <p className=" pl-[190px] text-[16px] mt-[10px] beauty-profile-types">
                {items.typeBeauty}
              </p>
            </div>
            <div className=" h-[500px] screen mt-[20px] max-w-[2000px] beauty-profile-image">
              <Image
                src={items.imgBeauty.imgBeauty1.src}
                alt={items.imgBeauty.imgBeauty1.alt}
                width={items.imgBeauty.imgBeauty1.width}
                height={items.imgBeauty.imgBeauty1.height}
                loading="lazy"
                className="w-[100%] h-[500px] object-contain beauty-profile-image"
              />
            </div>
            <div className="mt-[20px] text-[20px] flex flex-col items-center justify-center text-center beauty-profile-detail-content-header ">
              <div className="w-[830px] flex items-center justify-center beauty-profile-detail-content-header">
                {items.contentBeauty.contentHead1}
              </div>
              <div className="w-[830px] mt-[10px] text-center flex items-center justify-center beauty-profile-detail-content-header">
                {items.contentBeauty.contentHead2}
              </div>
            </div>
            <div className="px-[100px] pb-[50px] mt-[70px] flex items-center flex-col beauty-profile-detail">
              <div className="flex beauty-profile-detail-content-container">
                <div className="w-[600px] text-[23px] mr-[160px] beauty-profile-detail-content">
                  <p className="font-[550] text-[25px] w-[500px] beauty-profile-detail-content">
                    {items.contentBeauty.contentTittle3}
                  </p>
                  <p className="mt-[30px] w-[600px] beauty-profile-detail-content ">
                    {items.contentBeauty.content4}
                  </p>
                  <p className="mt-[30px] w-[600px] beauty-profile-detail-content">
                    {items.contentBeauty.content5}
                  </p>
                  <p className="mt-[30px] w-[600px] beauty-profile-detail-content">
                    {items.contentBeauty.content6}
                  </p>
                </div>
                <div className="beauty-profile-image">
                  {" "}
                  <Image
                    src={items.imgBeauty.imgBeauty2.src}
                    alt={items.imgBeauty.imgBeauty2.alt}
                    width={items.imgBeauty.imgBeauty2.width}
                    height={items.imgBeauty.imgBeauty2.height}
                    loading="lazy"
                    className="flex w-[400px] h-[500px] beauty-profile-image"
                  />
                </div>
              </div>
              <div className="flex mt-[40px] beauty-profile-detail-content-container">
                <div className="beauty-profile-image">
                  <Image
                    src={items.imgBeauty.imgBeauty3.src}
                    alt={items.imgBeauty.imgBeauty3.alt}
                    width={items.imgBeauty.imgBeauty3.width}
                    height={items.imgBeauty.imgBeauty3.height}
                    loading="lazy"
                    className="w-[400px] h-[500px] mr-[160px] beauty-profile-image"
                  />
                </div>

                <div className="w-[600px] text-[23px] beauty-profile-detail-content ">
                  <p className="font-[550] text-[25px] w-[600px] beauty-profile-detail-content">
                    {items.contentBeauty.contentTittle7}
                  </p>
                  <p className="mt-[30px] w-[600px] beauty-profile-detail-content">
                    {items.contentBeauty.content9}
                  </p>
                  <p className="mt-[30px] w-[600px] beauty-profile-detail-content">
                    {items.contentBeauty.content10}
                  </p>
                  <p className="mt-[30px] w-[600px] beauty-profile-detail-content">
                    {items.contentBeauty.content11}
                  </p>
                  <p className="mt-[30px] w-[600px] beauty-profile-detail-content">
                    {items.contentBeauty.content12}
                  </p>
                </div>
              </div>
              <div className="flex mt-[40px] beauty-profile-detail-content-container">
                <div className="w-[600px] text-[23px] mr-[160px] beauty-profile-detail-content">
                  {" "}
                  <p className="font-[550] text-[25px] w-[500px] beauty-profile-detail-content">
                    {items.contentBeauty.contentTittle13}
                  </p>
                  <p className="mt-[30px] w-[600px] beauty-profile-detail-content">
                    {items.contentBeauty.content14}
                  </p>
                  <p className="mt-[30px] w-[600px] beauty-profile-detail-content">
                    {items.contentBeauty.content15}
                  </p>
                  <p className="mt-[30px] w-[600px] beauty-profile-detail-content">
                    {items.contentBeauty.content16}
                  </p>
                  <p className="mt-[30px] w-[600px] beauty-profile-detail-content">
                    {items.contentBeauty.content17}
                  </p>
                </div>
                {items.imgBeauty.imgBeauty4.src === "" ? null : (
                  <div className="beauty-profile-image">
                    <Image
                      src={items.imgBeauty.imgBeauty4.src}
                      alt={items.imgBeauty.imgBeauty4.alt}
                      width={items.imgBeauty.imgBeauty4.width}
                      height={items.imgBeauty.imgBeauty4.height}
                      loading="lazy"
                      className="w-[400px] h-[500px] beauty-profile-image"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BeautyProfile;
