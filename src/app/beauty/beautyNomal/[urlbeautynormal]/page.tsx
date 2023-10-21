"use client";
import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BeautyList, ProductList } from "@/data/data";
import { BeautyListTypes } from "@/types/Interface";

const BeautyProfile = ({ params }: { params: { urlbeautynormal: string } }) => {
  const router = useRouter();

  return (
    <div className=" text-white bg-[#611a1a] beauty-profile__container max-w-[2000px]">
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
      {BeautyList.filter((items: BeautyListTypes) => {
        return items.urlBeauty === params.urlbeautynormal;
      }).map((items: BeautyListTypes) => {
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
            <div className="bg-white h-[500px] screen mt-[20px] max-w-[2000px]">
              <Image
                src={items.imgBeauty.imgBeauty1.src}
                alt={items.imgBeauty.imgBeauty1.alt}
                width={items.imgBeauty.imgBeauty1.width}
                height={items.imgBeauty.imgBeauty1.height}
                className="w-[100%] h-[500px] object-contain"
              />
            </div>
            <div className="mt-[20px] text-[20px] flex flex-col items-center justify-center text-center">
              <div className="w-[830px] flex items-center justify-center">
                {items.contentBeauty.contentHead1}
              </div>
              <div className="w-[830px] mt-[10px] text-center flex items-center justify-center ">
                {items.contentBeauty.contentHead2}
              </div>
            </div>
            <div className="px-[100px] pb-[50px] mt-[70px] flex items-center flex-col beauty-profile-detail">
              <div className="flex ">
                <div className="w-[600px] text-[23px] mr-[160px]">
                  <p className="font-[550] text-[25px] w-[500px]">
                    {items.contentBeauty.contentTittle3}
                  </p>
                  <p className="mt-[30px] w-[600px]">
                    {items.contentBeauty.content4}
                  </p>
                  <p className="mt-[30px] w-[600px]">
                    {items.contentBeauty.content5}
                  </p>
                  <p className="mt-[30px] w-[600px]">
                    {items.contentBeauty.content6}
                  </p>
                </div>
                <Image
                  src={items.imgBeauty.imgBeauty2.src}
                  alt={items.imgBeauty.imgBeauty2.alt}
                  width={items.imgBeauty.imgBeauty2.width}
                  height={items.imgBeauty.imgBeauty2.height}
                  className="flex w-[400px] h-[500px]"
                />
              </div>
              <div className="flex mt-[40px] ">
                <Image
                  src={items.imgBeauty.imgBeauty3.src}
                  alt={items.imgBeauty.imgBeauty3.alt}
                  width={items.imgBeauty.imgBeauty3.width}
                  height={items.imgBeauty.imgBeauty3.height}
                  className="w-[400px] h-[500px] mr-[160px]"
                />
                <div className="w-[600px] text-[23px]">
                  {" "}
                  <p className="font-[550] text-[25px] w-[600px]">
                    {items.contentBeauty.contentTittle7}
                  </p>
                  <p className="mt-[30px] w-[600px]">
                    {items.contentBeauty.content9}
                  </p>
                  <p className="mt-[30px] w-[600px]">
                    {items.contentBeauty.content10}
                  </p>
                  <p className="mt-[30px] w-[600px]">
                    {items.contentBeauty.content11}
                  </p>
                  <p className="mt-[30px] w-[600px]">
                    {items.contentBeauty.content12}
                  </p>
                </div>
              </div>
              <div className="flex mt-[40px]">
                <div className="w-[600px] text-[23px] mr-[160px]">
                  {" "}
                  <p className="font-[550] text-[25px] w-[500px]">
                    {items.contentBeauty.contentTittle13}
                  </p>
                  <p className="mt-[30px] w-[600px]">
                    {items.contentBeauty.content14}
                  </p>
                  <p className="mt-[30px] w-[600px]">
                    {items.contentBeauty.content15}
                  </p>
                  <p className="mt-[30px] w-[600px]">
                    {items.contentBeauty.content16}
                  </p>
                  <p className="mt-[30px] w-[600px]">
                    {items.contentBeauty.content17}
                  </p>
                </div>
                {items.imgBeauty.imgBeauty4.src === "" ? null : (
                  <Image
                    src={items.imgBeauty.imgBeauty4.src}
                    alt={items.imgBeauty.imgBeauty4.alt}
                    width={items.imgBeauty.imgBeauty4.width}
                    height={items.imgBeauty.imgBeauty4.height}
                    className="w-[400px] h-[500px]"
                  />
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
