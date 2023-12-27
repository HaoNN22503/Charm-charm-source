"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import imgHomeProduct3 from "../assets/image/HomePageSlider1 (1).svg";
import imgHomeProduct4 from "../assets/image/HomePageSlider2 (2).svg";
import imgHomeProduct2 from "../assets/image/HomePageSlider3 (3).svg";
import imgHomeProduct1 from "../assets/image/HomePageSlider4 (4).svg";
import imgHomeProduct5 from "../assets/image/HomePageSlider5 (5).svg";
import imgHomeBottomLogo from "../assets/image/ImageHomepageBottomLogo.png";
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
    <div className="py-[70px] bg-[#a72020] homepage-H-B__container h-[auto]">
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
      <div className=" mt-[70px] flex items-center justify-center relative homepage-HAB-intro">
        <div className="flex leading-[1.8] items-start justify-center homepage-H-B-header">
          <div className="w-[600px] mr-[100px] homepage-H-B-header-content">
            <p className="text-[#f4aa2a] text-[40px]">VỀ SẢN PHẨM</p>
            <p className="mt-[10px] text-xl text-white homepage-HAB-intro-content">
              Saffron được ví như “Viên kim cương quý nhất của chiếc nhẫn” (The
              diamond on a ring) - Món quà “vàng đỏ” quý giá của thiên nhiên ban
              tặng. Nhuỵ hoa nghệ tây là sự lựa chọn hàng đầu cho sức khỏe và
              sắc đẹp mỗi người.
            </p>
          </div>
          <Image
            src="https://res.cloudinary.com/dkfg3xljc/image/upload/v1703306910/BeautyProject/Thi%E1%BA%BFt-k%E1%BA%BF-ch%C6%B0a-c%C3%B3-t%C3%AAn-_2__pwfyvf.gif"
            alt=""
            width={500}
            height={300}
            className="homepage-HAB-intro-video"
          />
        </div>
      </div>
      <div className="mt-[70px] flex items-center justify-center relative homepage-HAB-intro">
        <div className="flex leading-[1.8] items-center justify-center homepage-H-B-header">
          <div className="w-[600px] mr-[100px] homepage-H-B-header-content">
            <p className="text-[#f4aa2a] text-[40px] ">Saffron</p>
            <p className="text-[#f4aa2a] text-[40px]">
              The Gold Of Middle East
            </p>
            <p className="mt-[10px] text-xl text-white homepage-HAB-intro-content">
              NHÀ NHẬP KHẨU VÀ PHÂN KHỐI ĐỘC QUYỀN DÒNG CAO CẤP SAFFRON EXTRA
              SUPER NEGIN IRAN
            </p>
          </div>
          <div className="homepage-HAB-intro-video">
            <video
              controls
              width={500}
              height={400}
              src="https://res.cloudinary.com/dkfg3xljc/video/upload/v1698317144/BeautyProject/6699873123557280070_gaj8kv.mp4"
            ></video>
          </div>
        </div>
      </div>

      <div className="mt-[70px] flex homepage-HAB-QC w-[100%]">
        <div className="bg-white p-[70px] flex flex-col items-center justify-center h-[600px] w-[60%] homepage-HAB-QC-left">
          <p className="text-[#611a1a] font-[550] text-[35px] homepage-HAB-QC-left-name">
            Charm Charm Saffron
          </p>
          <p className="font-[500] text-[25px] text-[#a72020] flex homepage-HAB-QC-left-tittle">
            Đã được
            <Link
              href="https://suckhoedoisong.vn/bao-ve-suc-khoe-bang-cac-san-pham-co-chat-chong-oxy-hoa-manh-me-169188383.htm"
              className="text-[#a72020] font-[650] ml-[3px] mr-[3px] cursor-pointer"
            >
              báo Sức Khỏe & Đời Sống
            </Link>
            nhắc đến
          </p>
          <p className="w-[600px] mt-[50px] text-center italic text-[24px] homepage-HAB-QC-left-content">
            {`"`}Charm Charm Saffron là nhà nhập khẩu nhụy hoa nghệ tây loại
            Extra Super Negin cao cấp, có đầy đủ giấy tờ chứng minh nguồn gốc,
            chất lượng và đây là địa chỉ tín cậy để khách hàng tim mua.
            {`"`}
          </p>
          <p>
            <Image src={imgHomeBottomLogo} alt="" />
          </p>
        </div>
        <div className="w-[40%] h-[600px] object-fill homepage-HAB-QC-right">
          <Image
            src="https://res.cloudinary.com/dkfg3xljc/image/upload/v1697618377/BeautyProject/2_dyaogx.jpg"
            alt=" "
            width={600}
            height={600}
            className="homepage-HAB-QC-right-image w-full h-[600px] object-fill"
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
          className="flex justify-center pt-[80px] slide-container"
        >
          {CommentUsers.slice(startIndex, endIndex).map(
            (commentUser: CommentCardTypes, index) => {
              return (
                <div
                  key={index}
                  className="h-[400px] w-[350px] mr-[70px] slide-container-comment"
                >
                  <div className="bg-white flex flex-col mt-[20px] relative rounded-[10px] p-[20px] h-[100%] slide-container-comment-show">
                    <div className="bg-black w-[100px] h-[100px] absolute z-[100] mt-[-70px] ml-[100px] border-2 border-solid rounded-[50%] slide-container-comment-img"></div>
                    <div className="mt-[50px] flex items-start text-start justify-start slide-container-comment-content">
                      {commentUser.comment.slice(0, 300) + " xem thêm..."}
                    </div>
                    <div className="mt-auto flex items-start slide-container-comment-tittle">
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
