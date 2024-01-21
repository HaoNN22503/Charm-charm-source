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
              <div className="mt-[40px] w-[80%] beauty-profile-nomal-tittle">
                <p className="text-[28px] w-full font-[550] beauty-profile-nomal-tittle-detail">
                  {items.tittleBeauty}
                </p>
                <p className="text-[16px] mt-[10px] beauty-profile-nomal-types">
                  {items.typeBeauty}
                </p>
              </div>
            </div>
            <div className="w-full flex justify-evenly mt-[20px] text-[20px] text-justify">
              <div className="flex flex-col beauty-profile-nomal-detail w-[80%]">
                <div>{items.contentBeauty.content1}</div>
                <div className="mt-[10px]">{items.contentBeauty.content2}</div>
                <div className="mt-[10px]">{items.contentBeauty.content3}</div>
                <div className="mt-[10px]">{items.contentBeauty.content4}</div>
                <div className="beauty-profile-image w-[full] mt-[10px]">
                  <Image
                    src={items.imgBeauty.imgBeauty1.src}
                    alt={items.imgBeauty.imgBeauty1.alt}
                    width={items.imgBeauty.imgBeauty1.width}
                    height={items.imgBeauty.imgBeauty1.height}
                    loading="lazy"
                    className="flex flex-shrink-0 h-[450px] object-contain w-full beauty-profile-image-detail"
                  />
                </div>

                {items.imgBeauty.imgBeauty2.width === 200 ? (
                  <div className="flex justify-between text-[20px] beauty-profile-nomal-detail-profile-p2-flex">
                    <div className="w-[50%] mt-[10px] beauty-profile-nomal-detail-profile-p2-flex-content">
                      <div className="mt-[10px]">
                        {items.contentBeauty.content5}
                      </div>
                      <div className="mt-[10px]">
                        {items.contentBeauty.content6}
                      </div>
                      <div className="mt-[10px]">
                        {items.contentBeauty.content7}
                      </div>
                      <div className="beauty-profile-nomal-detail-profile text-justify">
                        <p className="font-bold">
                          {items.contentBeauty.tittle1}
                        </p>
                        <p className="mt-[20px]">
                          {items.contentBeauty.contentTittle1}
                        </p>
                      </div>
                      <div className=" beauty-profile-nomal-detail-profile text-justify">
                        <p className="mt-[20px] font-bold">
                          {items.contentBeauty.tittle2}
                        </p>
                        <p className="mt-[20px]">
                          {items.contentBeauty.contentTittle2}
                        </p>
                      </div>
                      <div className=" beauty-profile-nomal-detail-profile text-justify">
                        <p className="font-bold mt-[10px]">
                          {items.contentBeauty.tittle3}
                        </p>
                        <p className="mt-[20px]">{items.contentBeauty.step1}</p>
                        <p className="mt-[20px]">{items.contentBeauty.step2}</p>
                        <p className="mt-[20px]">{items.contentBeauty.step3}</p>
                        <p className="mt-[20px]">{items.contentBeauty.step4}</p>
                        <p className="mt-[20px]">{items.contentBeauty.step5}</p>
                        <p className="mt-[20px]">{items.contentBeauty.step6}</p>
                      </div>
                    </div>
                    <div className="beauty-profile-nomal-detail-image-p1-flex mt-[10px] w-[50%] flex justify-center items-center">
                      <Image
                        src={items.imgBeauty.imgBeauty2.src}
                        alt={items.imgBeauty.imgBeauty2.alt}
                        width={items.imgBeauty.imgBeauty2.width}
                        height={items.imgBeauty.imgBeauty2.height}
                        loading="lazy"
                        className="h-[590px] w-full beauty-profile-nomal-detail-image-detail-p1-flex"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="w-[full] mt-[10px] leading-[1.5]">
                      <div className="mt-[10px]">
                        {items.contentBeauty.content5}
                      </div>
                      <div className="mt-[10px]">
                        {items.contentBeauty.content6}
                      </div>
                      <div className="mt-[10px]">
                        {items.contentBeauty.content7}
                      </div>
                      <div className="text-[20px] beauty-profile-nomal-detail-profile  text-justify">
                        <p className="font-bold">
                          {items.contentBeauty.tittle1}
                        </p>
                        <p className="mt-[20px]">
                          {items.contentBeauty.contentTittle1}
                        </p>
                      </div>
                      <div className="text-[20px] beauty-profile-nomal-detail-profile text-justify">
                        <p className="mt-[20px] font-bold">
                          {items.contentBeauty.tittle2}
                        </p>
                        <p className="mt-[20px]">
                          {items.contentBeauty.contentTittle2}
                        </p>
                      </div>
                      <div className="text-[20px] beauty-profile-nomal-detail-profile text-justify">
                        <p className="font-bold mt-[10px]">
                          {items.contentBeauty.tittle3}
                        </p>
                        <p className="mt-[20px]">{items.contentBeauty.step1}</p>
                        <p className="mt-[20px]">{items.contentBeauty.step2}</p>
                        <p className="mt-[20px]">{items.contentBeauty.step3}</p>
                        <p className="mt-[20px]">{items.contentBeauty.step4}</p>
                        <p className="mt-[20px]">{items.contentBeauty.step5}</p>
                        <p className="mt-[20px]">{items.contentBeauty.step6}</p>
                      </div>
                    </div>
                    <div className="beauty-profile-nomal-detail-image mt-[10px] w-[full]">
                      <Image
                        src={items.imgBeauty.imgBeauty2.src}
                        alt={items.imgBeauty.imgBeauty2.alt}
                        width={items.imgBeauty.imgBeauty2.width}
                        height={items.imgBeauty.imgBeauty2.height}
                        loading="lazy"
                        className="flex flex-shrink-0 h-[450px] w-full beauty-profile-nomal-detail-image-detail"
                      />
                    </div>
                  </div>
                )}
                <div className="text-[20px] beauty-profile-nomal-detail-profile text-justify">
                  <p className="mt-[10px]">{items.contentBeauty.content8}</p>
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
