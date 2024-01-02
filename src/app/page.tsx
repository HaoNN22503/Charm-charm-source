"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import imgHomeBottomLogo from "../assets/image/logo.svg";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { CommentUsers } from "@/data/data";
import { CommentCardTypes } from "@/types/Interface";
const HomePageHAB = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState<
    "slide-out" | "slide-in"
  >("slide-in");
  const commentsPerPage = 3;
  const startIndex = (currentPage - 1) * commentsPerPage;
  const endIndex = startIndex + commentsPerPage;
  const handlePrevClick = () => {
    setTransitionDirection("slide-out");
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const handleNextClick = () => {
    setTransitionDirection("slide-in");
    const totalPages = Math.ceil(CommentUsers.length / commentsPerPage);
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  const totalPages = Math.ceil(CommentUsers.length / commentsPerPage);
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
    <div className="py-[70px] bg-[#a72020] homepage-H-B__container">
      <div className="h-[500px] relative flex items-center justify-center homepage-HAB-swiper">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/dkfg3xljc/image/upload/v1702971690/BeautyProject/20_tvus7z.svg"
              alt=""
              width={500}
              height={500}
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/dkfg3xljc/image/upload/v1702971679/BeautyProject/19_opam5s.svg"
              alt=""
              width={500}
              height={500}
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/dkfg3xljc/image/upload/v1703305520/BeautyProject/homepage_sileder_5_l1dm0f.svg"
              alt=""
              width={500}
              height={500}
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/dkfg3xljc/image/upload/v1703305523/BeautyProject/homepage_sileder_2_ubjfba.svg"
              alt=""
              width={500}
              height={500}
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/dkfg3xljc/image/upload/v1703305530/BeautyProject/homepage_sileder_4_ygtjav.svg"
              alt=""
              width={500}
              height={500}
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/dkfg3xljc/image/upload/v1703305533/BeautyProject/homepage_sileder_3_rwhdcj.svg"
              alt=""
              width={500}
              height={500}
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/dkfg3xljc/image/upload/v1703305539/BeautyProject/homepage_sileder_1_hcab10.svg"
              alt=""
              width={500}
              height={500}
              loading="lazy"
            />
          </SwiperSlide>
        </Swiper>
        <div className="absolute mt-[300px] z-[10] flex flex-col items-center justify-center homepage-HAB-swiper-action">
          <Link
            href="/product"
            className="bg-white text-[#a72020] w-fit pt-[15px] pr-[25px] pl-[25px] cursor-pointer pb-[15px] homepage-HAB-swiper-buying "
          >
            <p className="font-[550] text-[18px]">Mua hàng ngay</p>
          </Link>
          <div className="flex text-[16px] justify-center items-center mt-[30px] font-[550] text-white homepage-HAB-swiper-review">
            Charm Charm Saffron 100% hàng chính hãng
          </div>
        </div>
      </div>

      <div className="w-full mt-[50px] px-[50px] homepage-H-B-header-profile-charmcharm">
        <div className="flex w-full text-justify items-start justify-between homepage-H-B-header">
          <div className="w-[50%] homepage-H-B-header-content">
            <p className="text-[#f4aa2a] text-[40px]">VỀ SẢN PHẨM</p>
            <p className="mt-[20px] text-xl text-white homepage-HAB-intro-content">
              Saffron được ví như “Viên kim cương quý nhất của chiếc nhẫn” (The
              diamond on a ring) - Món quà “vàng đỏ” quý giá của thiên nhiên ban
              tặng. Nhuỵ hoa nghệ tây là sự lựa chọn hàng đầu cho sức khỏe và
              sắc đẹp mỗi người.
            </p>
          </div>
          <div className="w-[50%] homepage-HAB-intro-image-container justify-center flex items-center">
            <Image
              src="https://res.cloudinary.com/dkfg3xljc/image/upload/v1703306910/BeautyProject/Thi%E1%BA%BFt-k%E1%BA%BF-ch%C6%B0a-c%C3%B3-t%C3%AAn-_2__pwfyvf.gif"
              alt=""
              width={500}
              height={300}
              className="homepage-HAB-intro-image"
            />
          </div>
        </div>

        <div className="flex w-full mt-[50px] items-start justify-between homepage-H-B-header">
          <div className="homepage-H-B-header-content w-[50%]">
            <p className="text-[#f4aa2a] text-[40px] ">Saffron</p>
            <p className="text-[#f4aa2a] text-[40px] mt-[10px]">
              The Gold Of Middle East
            </p>
            <p className="text-xl text-white homepage-HAB-intro-content mt-[10px]">
              NHÀ NHẬP KHẨU VÀ PHÂN KHỐI ĐỘC QUYỀN DÒNG CAO CẤP SAFFRON EXTRA
              SUPER NEGIN IRAN
            </p>
          </div>
          <div className="homepage-HAB-intro-video w-[50%] flex justify-center items-center">
            <video
              controls
              autoPlay
              width={500}
              height={400}
              src="https://res.cloudinary.com/dkfg3xljc/video/upload/v1698317144/BeautyProject/6699873123557280070_gaj8kv.mp4"
              className="homepage-HAB-intro-video-detail"
            ></video>
          </div>
        </div>
      </div>

      <div className="mt-[50px] h-[500px] flex homepage-HAB-QC w-[100%]">
        <div className="bg-white p-[70px] flex flex-col items-center justify-center h-[full] w-[50%] homepage-HAB-QC-left">
          <p className="text-[#611a1a] font-[550] text-[30px] homepage-HAB-QC-left-name">
            Charm Charm Saffron
          </p>
          <p className="font-[500] text-[20px] mt-[10px] text-[#a72020] flex homepage-HAB-QC-left-tittle">
            Đã được
            <Link
              href="https://suckhoedoisong.vn/bao-ve-suc-khoe-bang-cac-san-pham-co-chat-chong-oxy-hoa-manh-me-169188383.htm"
              className="text-[#a72020] font-[650] mx-[3px] cursor-pointer"
            >
              báo Sức Khỏe & Đời Sống
            </Link>
            nhắc đến
          </p>
          <p className="mt-[30px] text-center italic text-[20px] homepage-HAB-QC-left-content">
            {`"`}Charm Charm Saffron là nhà nhập khẩu nhụy hoa nghệ tây loại
            Extra Super Negin cao cấp, có đầy đủ giấy tờ chứng minh nguồn gốc,
            chất lượng và đây là địa chỉ tín cậy để khách hàng tim mua.
            {`"`}
          </p>
          <p className="mt-[10px] w-full flex justify-center items-center homepage-HAB-QC-left-image">
            <Image
              src={imgHomeBottomLogo}
              alt=""
              className="homepage-HAB-QC-left-image-detail"
            />
          </p>
        </div>
        <div className="w-[50%] h-full object-fill homepage-HAB-QC-right">
          <Image
            src="https://res.cloudinary.com/dkfg3xljc/image/upload/v1697618377/BeautyProject/2_dyaogx.jpg"
            alt=" "
            width={500}
            height={500}
            className="homepage-HAB-QC-right-image w-full h-full object-fill"
          />
        </div>
      </div>
      <div className="header-comment__container ">
        <div className="text-[28px] text-white flex items-center justify-center pt-[70px] header-comment--tittle">
          <p>Khách hàng nói gì về chúng tôi</p>
        </div>
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex justify-center pt-[50px] slide-container w-full"
        >
          {CommentUsers.slice(startIndex, endIndex).map(
            (commentUser: CommentCardTypes, index) => {
              return (
                <div
                  key={index}
                  className="h-[400px] w-[33%] slide-container-comment  flex justify-center items-center"
                >
                  <div className="bg-white flex flex-col mt-[20px] relative rounded-[10px] w-[80%] h-[100%] slide-container-comment-show">
                    <div className="h-[100px] absolute z-[100] mt-[-55px]  flex justify-center items-center w-full slide-container-comment-img">
                      <Image
                        src={imgHomeBottomLogo}
                        alt=""
                        className="rounded-full slide-container-comment-img-detail border-solid border h-full w-[25%] bg-red-50 shadow-[rgba(0,0,0,0.24)_0px_3px_8px]"
                      />
                    </div>
                    {commentUser.comment.length > 300 ? (
                      <div className="mt-[50px] flex items-start text-justify  justify-start slide-container-comment-content p-[20px]">
                        {commentUser.comment.slice(0, 300) + "... xem thêm"}
                      </div>
                    ) : (
                      <div className="mt-[50px] flex items-start text-justify  justify-start slide-container-comment-content p-[20px]">
                        {commentUser.comment}
                      </div>
                    )}

                    <div className="mt-auto flex items-start slide-container-comment-tittle p-[20px]">
                      {commentUser.name}
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
        <div className="flex justify-center mt-[40px] ">
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              className={` ml-[6px] h-[15px] w-[15px] rounded-full transition duration-300 ${
                currentPage === pageNumber
                  ? "bg-white slider-container-comment-circle"
                  : "bg-[#ab9e9e] slider-container-comment-circle"
              }`}
            ></button>
          ))}
        </div>
        <div className="flex justify-center mt-[20px]">
          <button
            onClick={handlePrevClick}
            disabled={currentPage === 1}
            className={`bg-white p-[10px] mr-[15px] rounded-full  ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed slider-container-comment-btn"
                : "opacity-100 slider-container-comment-btn"
            }`}
          >
            <GrLinkPrevious size={20} />
          </button>
          <button
            onClick={handleNextClick}
            disabled={
              currentPage === Math.ceil(CommentUsers.length / commentsPerPage)
            }
            className={`bg-white p-[10px]  rounded-full  ${
              currentPage === Math.ceil(CommentUsers.length / commentsPerPage)
                ? "opacity-50 cursor-not-allowed slider-container-comment-btn"
                : "opacity-100 slider-container-comment-btn"
            }`}
          >
            <GrLinkNext size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default HomePageHAB;
