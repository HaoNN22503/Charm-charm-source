"use client";
import React, { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { BiFilter } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";

import imgHomeBottomLogo from "../../assets/image/logo.svg";
import Image from "next/image";
import { Rating } from "@mui/material";
interface FeedbackData {
  name: string;
  rating: number;
  comment: string;
  time: string;
}
const FeedbackPage = () => {
  const [feedbackList, setFeedbackList] = useState<FeedbackData[]>([]);
  const [name, setName] = useState<string>("");
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState<string>("");
  const [selectedFilterStar, setSelectedFilterStar] = useState<number | null>(
    null
  );
  const [sortType, setSortType] = useState<"newest" | "oldest" | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleRatingChange = (value: number | null) => {
    setRating(value);
  };

  // Event handler for name input change
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  // Event handler for comment input change
  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleFeedbackSubmit = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();

    const newFeedback: FeedbackData = {
      name,
      rating: rating as number,
      comment,
      time: formattedDate,
    };

    setFeedbackList((prevFeedbackList) => [...prevFeedbackList, newFeedback]);

    setRating(null);
    setName("");
    setComment("");
    setSelectedFilterStar(null);
  };

  const filteredAndSortedFeedback = feedbackList
    .filter((feedback) => {
      if (selectedFilterStar) {
        return feedback.rating === selectedFilterStar;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortType === "newest") {
        return new Date(b.time).getTime() - new Date(a.time).getTime();
      } else if (sortType === "oldest") {
        return new Date(a.time).getTime() - new Date(b.time).getTime();
      }
      return 0;
    });
  return (
    <div className="w-full bg-[#a72020] flex flex-col py-[40px] justify-evenly items-center">
      <div className="w-[80%] feedback-page__container">
        <div className="feedback-page-form-table">
          <div className="bg-white rounded-[10px] w-full mt-[20px] py-[80px] px-[150px] detail-product-comment-table__container">
            <div className="flex flex-col w-full">
              <div className="flex items-center product-detail-HAB-comment-rating w-full justify-between">
                <p className="w-[40%] text-[20px] font-[500] product-detail-HAB-comment-rating-tittle">
                  Đánh giá cảm nhận
                </p>
                <p className="flex w-[60%] text-[#a72020] product-detail-HAB-comment-rating">
                  <Rating
                    name="simple-controlled mr-[5px]"
                    value={rating}
                    onChange={(event, newValue) => {
                      handleRatingChange(newValue);
                    }}
                  />
                </p>
              </div>
              <div className="w-full mt-[15px]">
                <div className="flex text-[20px] mt[30px] w-full justify-between items-center font-[500] product-detail-HAB-comment-name">
                  <p className="w-[40%] product-detail-HAB-comment-name-tittle">
                    Tên của bạn
                  </p>
                  <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    className="border-2 border-solid w-[60%] px-[5px] h-[40px] border-[#a72020] text-[15px] rounded-[5px] focus:outline-1 outline-[#a72020] product-detail-HAB-comment-name"
                  />
                </div>

                <div className="flex mt-[30px] w-full justify-between items-start text-[20px] font-[500]  product-detail-HAB-comment-decreption">
                  <p className="w-[40%]  product-detail-HAB-comment-decreption-tittle">
                    Cảm nhận
                  </p>
                  <textarea
                    value={comment}
                    onChange={handleCommentChange}
                    className="h-[150px] p-[5px]  border-2 border-solid w-[60%] border-[#a72020] resize-none  text-[15px]  rounded-[5px] focus:outline-1 outline-[#a72020] product-detail-HAB-comment-decreption"
                    id=""
                  ></textarea>
                </div>
              </div>

              <button
                onClick={handleFeedbackSubmit}
                className="bg-[#611a1a] text-white p-[10px] rounded-[5px] mt-[50px] ml-[auto] cursor-pointer"
              >
                Đăng đánh giá
              </button>
            </div>
          </div>
        </div>
        <div className="feedback-page-head w-full mt-[20px]">
          <div className="text-[white] font-[550] text-[25px]">
            Feedback từ khách hàng
          </div>
          <div className="flex mt-[40px] items-center justify-between w-[30%] feedback-HAB-option-filter">
            <div
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
              }}
              className="rounded-[10px] bg-white flex items-center p-[10px] text-[#a72020] text-[16px] cursor-pointer font-[550] relative feedback-page-filter"
            >
              <p className="mr-[5px] text-yellow-600 ">
                <BsStarFill />
              </p>
              <p className="mr-[5px]">
                {selectedFilterStar !== null
                  ? `${selectedFilterStar}`
                  : "Tất cả"}
              </p>
              <p>
                <IoMdArrowDropdown size={18} />
              </p>
            </div>
            {isDropdownOpen && (
              <div className="absolute bg-[white] cursor-pointer p-[10px] text-[#a72020] mt-[150px] text-[14px] w-[6%] rounded-[10px] boder-[#a72020] border border-solid leading-[1.3] feedback-dropdown-star">
                <div
                  onClick={() => {
                    setSelectedFilterStar(null);
                    setIsDropdownOpen(false);
                  }}
                  className="cursor-pointer flex justify-center"
                >
                  Tất cả
                </div>
                {[1, 2, 3, 4, 5].map((star) => (
                  <div
                    key={star}
                    onClick={() => {
                      setSelectedFilterStar(star);
                      setIsDropdownOpen(false);
                    }}
                    className="cursor-pointer flex justify-center"
                  >
                    {star}
                    <p className="ml-[10px] flex items-start">
                      {" "}
                      <BsStarFill />
                    </p>
                  </div>
                ))}
              </div>
            )}
            <div
              onClick={() => {
                setSortType("newest");
              }}
              className="rounded-[10px] bg-white flex items-center cursor-pointer p-[10px] text-[#a72020] text-[16px] font-[550] feedback-page-filter"
            >
              <p className="mr-[5px] text-yellow-600 ">
                <BiFilter size={18} />
              </p>
              <p>Mới nhất</p>
            </div>
            <div
              onClick={() => {
                setSortType("oldest");
              }}
              className="rounded-[10px] bg-white flex cursor-pointer items-center p-[10px] text-[#a72020] text-[16px] font-[550] feedback-page-filter"
            >
              <p className="mr-[5px] text-yellow-600 ">
                <BiFilter size={18} />
              </p>
              <p>Cũ nhất</p>
            </div>
          </div>
        </div>
        <div className="feedback-user-data w-full">
          {filteredAndSortedFeedback.map((feedback, index) => (
            <div key={index} className="feedback-user-data w-full">
              <div className="mt-[50px] flex w-[100%] feedback-fomat-container justify-between">
                <div className="bg-white rounded-[10px] p-[20px] w-[85%] feddback-fomat-content-container">
                  <div className="feedback-fomat-name-img flex items-start w-[100%] justify-between">
                    <p className=" w-[8%] h-[80px] feedback-fomat-img">
                      <Image
                        src={imgHomeBottomLogo}
                        alt=""
                        className=" feedback-fomat-img-detail rounded-full border-solid border border-slate-300 w-full h-full"
                      />
                    </p>
                    <div className="feedback-fomat-info-user flex w-[90%] justify-between">
                      <div className="feedback-fomat-name font-[550] text-[20px] mt-[5px]">
                        <p>{feedback.name}</p>
                        <div className="flex items-center mt-[3px]">
                          <div>
                            <Rating
                              name="read-only"
                              value={feedback.rating}
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                      <p className="ml-[auto] font-[550] text-gray-500 italic mr-[10px] mt-[5px] feedback-fomat-time">
                        {feedback.time}
                      </p>
                    </div>
                  </div>
                  <div className="feedback-fomat-content mt-[10px] text-justify w-full">
                    {feedback.comment}
                  </div>
                </div>
                <div className="feedback-btn-upload-hompage-container flex justify-between w-[14%] items-center text-[white]">
                  <div className="w-full flex justify-between items-end hover:underline hover:cursor-pointer">
                    <div className="w-[10%]">
                      <Image
                        src="https://res.cloudinary.com/dkfg3xljc/image/upload/v1704163110/BeautyProject/Thi%E1%BA%BFt_k%E1%BA%BF_ch%C6%B0a_c%C3%B3_t%C3%AAn_4_ocbh4v.svg"
                        alt=""
                        width={25}
                        height={25}
                        className="w-full"
                      />
                    </div>
                    <p className="w-[85%] text-[16px]">Đưa lên trang chủ</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
