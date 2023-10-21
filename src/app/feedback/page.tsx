"use client";
import React from "react";
import { BsArrowLeft, BsStarFill, BsStar, BsFilter } from "react-icons/bs";
import { BiFilter } from "react-icons/bi";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiArrowUpTray } from "react-icons/hi2";
const FeedbackPage = () => {
  return (
    <div className="bg-[#611a1a] p-[100px] feedback-page__container">
      <div className="feedback-page-head">
        <div className="text-[white] font-[550] text-[25px]">
          Feedback từ khách hàng
        </div>
        <div className="flex mt-[40px] items-center">
          <div className="rounded-[10px] bg-white flex items-center mr-[15px] p-[10px] text-[#a72020] text-[16px] font-[550]">
            <p className="mr-[5px] text-yellow-600 ">
              <BsStarFill />
            </p>
            <p className="mr-[5px]">Sao</p>
            <p>
              <IoMdArrowDropdown size={18} />
            </p>
          </div>
          <div className="rounded-[10px] bg-white flex items-center mr-[15px] p-[10px] text-[#a72020] text-[16px] font-[550]">
            <p className="mr-[5px] text-yellow-600">
              <BiFilter size={18} />
            </p>
            <p>Mới nhất</p>
          </div>
          <div className="rounded-[10px] bg-white flex items-center mr-[15px] p-[10px] text-[#a72020] text-[16px] font-[550]">
            <p className="mr-[5px] text-yellow-600">
              <BiFilter size={18} />
            </p>
            <p>Cũ nhất</p>
          </div>
        </div>
      </div>
      <div className="feedback-page-bottom">
        <div className="flex items-center mt-[50px]">
          <div className="bg-white flex mr-[30px] rounded-[10px] p-[20px] feedback-bottom">
            <div className="w-[45%] flex flex-col items-center justify-center p-[25px] feedback-bottom-left">
              <div className="flex items-center gap-[15px]">
                <div className="w-[100px] h-[100px] border-2 border-black border-solid rounded-[50%] bg-white"></div>
                <div className="text-[20px] font-[500] w-[130px]">
                  Nguyen Nhat Hao
                </div>
              </div>
              <div className="flex items-center gap-[5px] mt-[20px]">
                <p className="bg-black text-white p-[7] rounded-[50%]">
                  <AiFillLike size={20} />
                </p>
                <p className="text-[15px]">Tôi sẽ giới thiệu cho bạn bè</p>
              </div>
            </div>
            <div className="p-[30px] w-[] feedback-bottom-right">
              <div>##/##/####</div>
              <div className="flex gap-[5px] text-yellow-600">
                <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />{" "}
                <BsStarFill />
              </div>
              <div className="font-[550] text-[20px] mt-[20px]">tittle</div>
              <div className="mt-[20px] w-[700px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                corporis laborum nesciunt praesentium vitae? Adipisci voluptatem
                illum nam. Laudantium quam minus aut, reprehenderit aliquam
                magnam perspiciatis vero ex saepe eum!
              </div>
            </div>
          </div>
          <div className="flex text-white cursor-pointer">
            <p className="mr-[5px] ">
              <HiArrowUpTray size={20} />
            </p>
            <p className="underline font-[550] text-[16px]">
              Đưa lên trang bìa
            </p>
          </div>
        </div>
        <div className="flex items-center mt-[50px]">
          <div className="bg-white flex mr-[30px] rounded-[10px] p-[20px] feedback-bottom">
            <div className="w-[45%] flex flex-col items-center justify-center p-[25px] feedback-bottom-left">
              <div className="flex items-center gap-[15px]">
                <div className="w-[100px] h-[100px] border-2 border-black border-solid rounded-[50%] bg-white"></div>
                <div className="text-[20px] font-[500] w-[130px]">
                  Nguyen Nhat Hao
                </div>
              </div>
              <div className="flex items-center gap-[5px] mt-[20px]">
                <p className="bg-black text-white p-[7] rounded-[50%]">
                  <AiFillLike size={20} />
                </p>
                <p className="text-[15px]">Tôi sẽ giới thiệu cho bạn bè</p>
              </div>
            </div>
            <div className="p-[30px] w-[] feedback-bottom-right">
              <div>##/##/####</div>
              <div className="flex gap-[5px] text-yellow-600">
                <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />{" "}
                <BsStarFill />
              </div>
              <div className="font-[550] text-[20px] mt-[20px]">tittle</div>
              <div className="mt-[20px] w-[700px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                corporis laborum nesciunt praesentium vitae? Adipisci voluptatem
                illum nam. Laudantium quam minus aut, reprehenderit aliquam
                magnam perspiciatis vero ex saepe eum!
              </div>
            </div>
          </div>
          <div className="flex text-white cursor-pointer">
            <p className="mr-[5px] ">
              <HiArrowUpTray size={20} />
            </p>
            <p className="underline font-[550] text-[16px]">
              Đưa lên trang bìa
            </p>
          </div>
        </div>
        <div className="flex items-center mt-[50px]">
          <div className="bg-white flex mr-[30px] rounded-[10px] p-[20px] feedback-bottom">
            <div className="w-[45%] flex flex-col items-center justify-center p-[25px] feedback-bottom-left">
              <div className="flex items-center gap-[15px]">
                <div className="w-[100px] h-[100px] border-2 border-black border-solid rounded-[50%] bg-white"></div>
                <div className="text-[20px] font-[500] w-[130px]">
                  Nguyen Nhat Hao
                </div>
              </div>
              <div className="flex items-center gap-[5px] mt-[20px]">
                <p className="bg-black text-white p-[7] rounded-[50%]">
                  <AiFillLike size={20} />
                </p>
                <p className="text-[15px]">Tôi sẽ giới thiệu cho bạn bè</p>
              </div>
            </div>
            <div className="p-[30px] w-[] feedback-bottom-right">
              <div>##/##/####</div>
              <div className="flex gap-[5px] text-yellow-600">
                <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />{" "}
                <BsStarFill />
              </div>
              <div className="font-[550] text-[20px] mt-[20px]">tittle</div>
              <div className="mt-[20px] w-[700px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                corporis laborum nesciunt praesentium vitae? Adipisci voluptatem
                illum nam. Laudantium quam minus aut, reprehenderit aliquam
                magnam perspiciatis vero ex saepe eum!
              </div>
            </div>
          </div>
          <div className="flex text-white cursor-pointer">
            <p className="mr-[5px] ">
              <HiArrowUpTray size={20} />
            </p>
            <p className="underline font-[550] text-[16px]">
              Đưa lên trang bìa
            </p>
          </div>
        </div>
        <div className="flex items-center mt-[50px]">
          <div className="bg-white flex mr-[30px] rounded-[10px] p-[20px] feedback-bottom">
            <div className="w-[45%] flex flex-col items-center justify-center p-[25px] feedback-bottom-left">
              <div className="flex items-center gap-[15px]">
                <div className="w-[100px] h-[100px] border-2 border-black border-solid rounded-[50%] bg-white"></div>
                <div className="text-[20px] font-[500] w-[130px]">
                  Nguyen Nhat Hao
                </div>
              </div>
              <div className="flex items-center gap-[5px] mt-[20px]">
                <p className="bg-black text-white p-[7] rounded-[50%]">
                  <AiFillLike size={20} />
                </p>
                <p className="text-[15px]">Tôi sẽ giới thiệu cho bạn bè</p>
              </div>
            </div>
            <div className="p-[30px] w-[] feedback-bottom-right">
              <div>##/##/####</div>
              <div className="flex gap-[5px] text-yellow-600">
                <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />{" "}
                <BsStarFill />
              </div>
              <div className="font-[550] text-[20px] mt-[20px]">tittle</div>
              <div className="mt-[20px] w-[700px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                corporis laborum nesciunt praesentium vitae? Adipisci voluptatem
                illum nam. Laudantium quam minus aut, reprehenderit aliquam
                magnam perspiciatis vero ex saepe eum!
              </div>
            </div>
          </div>
          <div className="flex text-white cursor-pointer">
            <p className="mr-[5px] ">
              <HiArrowUpTray size={20} />
            </p>
            <p className="underline font-[550] text-[16px]">
              Đưa lên trang bìa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
