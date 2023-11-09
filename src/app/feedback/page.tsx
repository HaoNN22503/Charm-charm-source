"use client";
import React, { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { BiFilter } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiArrowUpTray } from "react-icons/hi2";
import { CommentUsers, commentsData } from "@/data/data";
import { CommentFeedbackTypes } from "@/types/Interface";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
const FeedbackPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterStar, setFilterStar] = useState<number | null>(null);
  const [selectedStar, setSelectedStar] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
    const totalPages = Math.ceil(commentsData.length / commentsPerPage);
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  const totalPages = Math.ceil(commentsData.length / commentsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handlePromoteToCover = (commentId: string) => {
    // Thực hiện logic đưa phản hồi lên trang bìa ở đây
    console.log(`Đưa phản hồi có ID ${commentId} lên trang bìa`);
  };
  const handleFilterChange = (
    newFilter: string,
    value: string | number | null
  ) => {
    setIsDropdownOpen(false);
    setCurrentPage(1);
    if (newFilter === "star") {
      setFilterStar(value as number | null);
      setSelectedStar(value as number | null);
    }
  };
  const handleSortChange = (newSortBy: "newest" | "oldest" | null) => {
    setSortBy(newSortBy);
  };
  return (
    <div className="bg-[#a72020] p-[100px] feedback-page__container">
      <div className="feedback-page-head">
        <div className="text-[white] font-[550] text-[25px]">
          Feedback từ khách hàng
        </div>
        <div className="flex mt-[40px] items-center ">
          <div
            onClick={() => {
              setIsDropdownOpen(!isDropdownOpen);
            }}
            className="rounded-[10px] bg-white flex items-center mr-[15px] p-[10px] text-[#a72020] text-[16px] cursor-pointer font-[550] relative feedback-page-filter"
          >
            <p className="mr-[5px] text-yellow-600 ">
              <BsStarFill />
            </p>
            <p className="mr-[5px]">
              {selectedStar !== null ? `${selectedStar} sao` : "Sao"}
            </p>
            <p>
              <IoMdArrowDropdown size={18} />
            </p>
          </div>
          {isDropdownOpen && (
            <div className="absolute bg-[white] cursor-pointer p-[10px] text-[#a72020] mt-[150px] text-[14px] w-[6%] rounded-[10px] boder-[#a72020] border border-solid leading-[1.3] feedback-dropdown-star">
              {[1, 2, 3, 4, 5].map((star) => (
                <div
                  key={star}
                  onClick={() => handleFilterChange("star", star)}
                  className="cursor-pointer flex justify-center"
                >
                  {star}{" "}
                  <p className="ml-[10px] flex items-start">
                    {" "}
                    <BsStarFill />
                  </p>
                </div>
              ))}
            </div>
          )}
          <div
            onClick={() => handleSortChange("newest")}
            className="rounded-[10px] bg-white flex items-center cursor-pointer mr-[15px] p-[10px] text-[#a72020] text-[16px] font-[550] feedback-page-filter"
          >
            <p className="mr-[5px] text-yellow-600 ">
              <BiFilter size={18} />
            </p>
            <p>Mới nhất</p>
          </div>
          <div
            onClick={() => handleSortChange("oldest")}
            className="rounded-[10px] bg-white flex cursor-pointer items-center mr-[15px] p-[10px] text-[#a72020] text-[16px] font-[550] feedback-page-filter"
          >
            <p className="mr-[5px] text-yellow-600 ">
              <BiFilter size={18} />
            </p>
            <p>Cũ nhất</p>
          </div>
        </div>
      </div>
      <div className="feedback-user-data">
        {commentsData
          .sort((a, b) => {
            if (sortBy === "newest") {
              return (
                new Date(b.timeComment).getTime() -
                new Date(a.timeComment).getTime()
              );
            } else if (sortBy === "oldest") {
              return (
                new Date(a.timeComment).getTime() -
                new Date(b.timeComment).getTime()
              );
            } else {
              return 0;
            }
          })
          .filter((comment) =>
            filterStar !== null ? comment.starComment === filterStar : true
          )
          .slice(startIndex, endIndex)
          .map((commentUser: CommentFeedbackTypes, index) => {
            return (
              <div
                key={index}
                className="mt-[50px] flex w-[100%] feedback-fomat-container"
              >
                <div className="bg-white rounded-[10px] p-[20px] w-[85%] mr-[5px] feddback-fomat-content-container">
                  <div className="feedback-fomat-name-img flex items-start w-[100%]">
                    <p className="h-[80px] w-[80px] mr-[20px] rounded-full border-solid border border-black feedback-fomat-img"></p>
                    <div className="feedback-fomat-info-user flex w-[90%]">
                      <div className="feedback-fomat-name font-[550] text-[20px] mt-[5px]">
                        <p>{commentUser.nameComment}</p>
                        <div className="flex items-center mt-[3px]">
                          {Array.from({ length: commentUser.starComment }).map(
                            (_, i) => (
                              <BsStarFill key={i} className="text-yellow-600" />
                            )
                          )}
                        </div>
                      </div>
                      <p className="ml-[auto] font-[550] text-gray-500 italic mr-[10px] mt-[5px] feedback-fomat-time">
                        {commentUser.timeComment}
                      </p>
                    </div>
                  </div>
                  <div className="feedback-fomat-content mt-[10px] text-justify">
                    {commentUser.contentComment}
                  </div>
                </div>
                <div
                  className="feedback-HAB-bottom-btn flex justify-center items-center text-white ml-[auto] cursor-pointer"
                  onClick={() => handlePromoteToCover(commentUser.idComment)}
                >
                  <p className="mr-[5px] ">
                    <HiArrowUpTray size={25} />
                  </p>
                  <p className="underline font-[550] text-[16px] ">
                    Đưa lên trang bìa
                  </p>
                </div>
              </div>
            );
          })}
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

export default FeedbackPage;
