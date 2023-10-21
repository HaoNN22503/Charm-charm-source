"use client";
import React, { useRef, useState } from "react";
import "swiper/css";
import Image from "next/image";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { BeautyList, BeautyListMain } from "@/data/data";
import { BeautyListMainTypes, BeautyListTypes } from "@/types/Interface";
import { useRouter } from "next/navigation";

const BeautyHABPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState<
    "slide-out" | "slide-in"
  >("slide-in");
  const router = useRouter();
  const commentsPerPage = 8;
  const startIndex = (currentPage - 1) * commentsPerPage;
  const endIndex = startIndex + commentsPerPage;
  const handlePrevClick = () => {
    setTransitionDirection("slide-out");
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const handleNextClick = () => {
    setTransitionDirection("slide-in");
    const totalPages = Math.ceil(BeautyList.length / commentsPerPage);
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  const totalPages = Math.ceil(BeautyList.length / commentsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  const handleMouseDown = (event: React.MouseEvent) => {
    setDragging(true);
    setDragStartX(event.clientX);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      handleDragEnd();
    }
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (isDragging) {
      const distance = event.clientX - dragStartX;
      setDragDistance(distance);
    }
  };

  const handleDragEnd = () => {
    setDragging(false);
    if (Math.abs(dragDistance) > 50) {
      if (dragDistance > 0) {
        handlePrevClick();
      } else {
        handleNextClick();
      }
    }
    setDragDistance(0);
  };
  return (
    <div className="bg-[#611a1a] beauty-container ">
      <div className="flex items-center justify-center font-[400] text-[35px] pt-[40px] pb-[20px] text-white beauty-tittle">
        <p>Làm đẹp</p>
      </div>
      <div className="flex items-center justify-center p-[5px] text-white text-[16px] gap-[100px] beauty-option-tittle">
        <p className="cursor-pointer">Xem tất cả</p>
        <p className="cursor-pointer">Xu hướng</p>
        <p className="cursor-pointer">Sức khỏe</p>
        <p className="cursor-pointer">Làn da</p>
      </div>
      {BeautyListMain.map((items: BeautyListMainTypes) => {
        return (
          <div key={items.idBeauty} className="flex pt-[40px]">
            <div className="w-[913px] h-[513px] object-fill">
              {" "}
              <Image
                src={items.imgBeauty.imgBeauty1.src}
                alt={items.imgBeauty.imgBeauty1.alt}
                width={items.imgBeauty.imgBeauty1.width}
                height={items.imgBeauty.imgBeauty1.height}
                className="w-[913px] h-[513px] bg-blue-100 object-fill"
              />
            </div>
            <div className="w-[40%] bg-white p-[20px] ml-auto text-[#a72020] px-[60px] py-[80px] beauty-info">
              <p className="text-[30px] font-[550] ">{items.tittleBeauty}</p>
              <p className="pt-[50px] text-[17px] text-[#611a1a]">
                {items.contentBeauty.content1.slice(0, 183) + " ..."}
              </p>
              <div
                onClick={() => {
                  router.push(`/beauty/beautyMain/${items.urlBeautyMain}`);
                }}
                className="mt-[50px] pt-[7px] pr-[15px] pb-[7px] pl-[15px] cursor-pointer bg-transparent border-solid border-2 border-[#a72020] h-fit w-fit rounded-[7px]"
              >
                <p>Tiếp tục đọc</p>
              </div>
            </div>
          </div>
        );
      })}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="p-[50px] flex flex-wrap "
      >
        {BeautyList.slice(startIndex, endIndex).map(
          (items: BeautyListTypes) => {
            return (
              <div
                key={items.idBeauty}
                className="bg-white w-[300px] h-[450px] mt-[40px] p-[15px] rounded-[7px] flex flex-col mr-[25px] ml-[25px]"
              >
                <div className="w-[270px] h-[250px] mb-[10px] flex justify-center items-center">
                  <Image
                    src={items.imgBeauty.imgBeauty1.src}
                    alt={items.imgBeauty.imgBeauty1.alt}
                    width={270}
                    height={250}
                    className="h-[250px] w-[270px] object-fill"
                  />
                </div>
                <div>
                  <p className="font-[550] text-[16px] text-[#a72020] mt-[10px] mb-[10px]">
                    {items.tittleBeauty}
                  </p>

                  {items.contentBeauty.contentHead1.length > 125 ? (
                    <p className="text-[13px]">
                      {items.contentBeauty.contentHead1.slice(0, 125) + " ..."}
                    </p>
                  ) : (
                    <p className="text-[13px]">
                      {items.contentBeauty.contentHead1}
                    </p>
                  )}
                </div>
                <div
                  onClick={() => {
                    router.push(`/beauty/beautyNomal/${items.urlBeauty}`);
                  }}
                  className="mt-[auto] text-[14px] pt-[5px] pr-[10px] pb-[5px] pl-[10px] cursor-pointer bg-transparent border-solid border-2 border-[#a72020] h-fit w-fit text-[#a72020] rounded-[7px]"
                >
                  <p>Tiếp tục đọc</p>
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className="flex justify-center mt-4  ">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            className={` ml-[6px] h-[15px] w-[15px] rounded-full transition duration-300 ${
              currentPage === pageNumber ? "bg-white" : "bg-[#af9d9d]"
            }`}
          ></button>
        ))}
      </div>
      <div className="flex justify-center mt-5 pb-[50px]">
        <button
          onClick={handlePrevClick}
          disabled={currentPage === 1}
          className={`bg-white p-[10px] mr-[15px] rounded-full ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "opacity-100"
          }`}
        >
          <GrLinkPrevious size={20} />
        </button>
        <button
          onClick={handleNextClick}
          disabled={
            currentPage === Math.ceil(BeautyList.length / commentsPerPage)
          }
          className={`bg-white p-[10px] rounded-full  ${
            currentPage === Math.ceil(BeautyList.length / commentsPerPage)
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100"
          }`}
        >
          <GrLinkNext size={20} />
        </button>
      </div>
    </div>
  );
};

export default BeautyHABPage;
