"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";

import { CartContext } from "@/context/CartContext";
import { ProductList } from "@/data/data";
import { CommentTypes, ProductListTypes, Review } from "@/types/Interface";
import { useRouter } from "next/navigation";
import Rating from "@mui/material/Rating";
import { BsArrowLeft, BsStarFill, BsStar } from "react-icons/bs";
import { BiMessageAltEdit } from "react-icons/bi";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";
import { handleAddToCart } from "@/utils/function";

const DetailProduct = ({ params }: { params: { url: string } }) => {
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);
  const [commentShow, setCommentShow] = useState(false);
  const [valueRating, setValueRating] = useState("");
  const [rating, setRating] = useState<number | null>(null);
  const [name, setName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [recommendation, setRecommendation] = useState<boolean | null>(null);

  const handleRatingChange = (value: number | null) => {
    setRating(value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleRecommendationChange = (value: boolean) => {
    setRecommendation(value);
  };
  const handleSubmit = () => {
    const currentDate = new Date(); // Get the current date and time
    const formattedDate = currentDate.toLocaleDateString(); // Format the date as a string

    const newReview: Review = {
      id: reviews.length + 1,
      name,
      rating: rating as number,
      title,
      comment,
      recommendation: recommendation as boolean,
      date: formattedDate,
    };

    // Update the state with the new review
    setReviews([...reviews, newReview]);
    // Validate the form data here

    // Send the data to your backend or handle as needed

    // Reset the form controls
    setRating(null);
    setName("");
    setTitle("");
    setComment("");
    setRecommendation(null);
  };
  const minNum = (item: ProductListTypes) => {
    if (item.quantity > 1) {
      // Decrease the quantity by 1
      item.quantity -= 1;
      // Update the cart state
      setCart([...cart]);
    }
  };
  const plusNum = (item: ProductListTypes) => {
    item.quantity += 1;
    // Update the cart state using the setCart function passed as a prop
    setCart([...cart]);
  };
  return (
    <div className="bg-[#611a1a] py-[50px] product-detail-HAB__container">
      <div
        onClick={() => {
          router.back();
        }}
        className="flex items-center gap-[3px] cursor-pointer text-white pl-[100px] hover:underline product-detail-return-btn"
      >
        <p>
          <BsArrowLeft size={20} />
        </p>
        <p>Quay lại</p>
      </div>
      {ProductList.filter((profileItems: ProductListTypes) => {
        return profileItems.urlProduct === params.url;
      }).map((profileItems: ProductListTypes) => {
        const totalPrice = profileItems.priceProduct * profileItems.quantity;
        return (
          <div
            key={profileItems.idProduct}
            className="bg-white gap-[120px] flex items-start justify-center mt-[20px] px-[100px] py-[40px] text-[#a72020] product-detail-HAB-content__container"
          >
            <div className="w-[80px] h-[80px]">
              <Image
                alt=""
                src={profileItems.imgProfile.imgProfile1.src}
                width={70}
                height={70}
                className="w-[70px] h-[70px] rounded-[50%] border-2 cursor-pointer"
              />

              <Image
                src={profileItems.imgProfile.imgProfile1.src}
                alt={profileItems.imgProfile.imgProfile1.alt}
                width={profileItems.imgProfile.imgProfile1.width}
                height={profileItems.imgProfile.imgProfile1.height}
                className="w-[70px] h-[70px] rounded-[50%] border-2 mt-[20px] cursor-pointer "
              />
              <Image
                src={profileItems.imgProfile.imgProfile2.src}
                alt={profileItems.imgProfile.imgProfile2.alt}
                width={profileItems.imgProfile.imgProfile2.width}
                height={profileItems.imgProfile.imgProfile2.height}
                className="w-[70px] h-[70px] rounded-[50%] border-2 mt-[20px] cursor-pointer "
              />
              <Image
                src={profileItems.imgProfile.imgProfile3.src}
                alt={profileItems.imgProfile.imgProfile3.alt}
                width={profileItems.imgProfile.imgProfile3.width}
                height={profileItems.imgProfile.imgProfile3.height}
                className="w-[70px] h-[70px] rounded-[50%] border-2 mt-[20px] cursor-pointer "
              />
            </div>
            {/* <div>
              <Image
                src={profileItems.imgProduct.src}
                alt={profileItems.imgProduct.alt}
                height={400}
                width={350}
              />
            </div> */}

            <div className="product-detail-HAB-content">
              <p className="font-[550] text-[30px] w-[400px]">
                {profileItems.nameProduct}
              </p>
              <p className="text-black mt-[50px] w-[400px] pb-[50px]  text-[15.5px]">
                {profileItems.profileProduct}
              </p>
              <p className="mt-[20px] font-[550] text-[25px] text-black">
                {totalPrice.toLocaleString("vi-VN")}đ
              </p>
              <div className="flex items-center mt-[20px]">
                <div className="text-[25px]">
                  <div className="flex items-center gap-[20px]">
                    <p
                      onClick={() => minNum(profileItems)}
                      className="cursor-pointer detail-product-minNum"
                    >
                      <AiOutlineMinus />
                    </p>
                    <p className="detail-product-number">
                      {profileItems.quantity}
                    </p>
                    <p
                      onClick={() => plusNum(profileItems)}
                      className="cursor-pointer detail-product-plusNum"
                    >
                      <AiOutlinePlus />
                    </p>
                  </div>
                </div>
                <div
                  onClick={() => {
                    handleAddToCart(
                      cart,
                      setCart,
                      profileItems.idProduct,
                      profileItems.quantity
                    );
                  }}
                  className="ml-auto pt-[10px] pr-[40px] pl-[40px] pb-[10px] bg-[#611a1a] rounded-[5px] text-white cursor-pointer detail-product-add"
                >
                  <p>Cho vào giỏ hàng</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="mt-[50px] detail-product-comment__container p-[100px]">
        <div className="text-white flex items-center pb-[10px] detail-product-comment-tittle">
          <p className="font-[550] text-[20px]">Cảm nhận về sản phẩm</p>
          <div
            onClick={() => {
              setCommentShow(true);
            }}
            className="cursor-pointer flex items-center gap-[5px] ml-auto bg-white text-[#a72020] p-[5px] rounded-[5px] text-[18px] font-[500]"
          >
            <p>
              <BiMessageAltEdit size={25} />
            </p>
            <p>Đánh giá</p>
          </div>
        </div>
        {commentShow && (
          <div className="bg-white rounded-[10px] mt-[20px] pl-[200px] pr-[200px] pt-[80px] pb-[80px] detail-product-comment-table__container">
            <div className="flex flex-col">
              <div className="flex items-center ">
                <p className="underline text-[18px] font-[500] w-[30%]">
                  Đánh giá cảm nhận
                </p>
                <p className="flex gap-[5px] ml-[140px] text-[#a72020] ">
                  <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                      handleRatingChange(newValue);
                    }}
                    // value={valueRating}
                    // onChange={(event, newValue) => {
                    //   setValueRating(newValue);
                    // }}
                  />
                </p>
              </div>
              <div className="flex text-[18px] font-[500] h-[40px] mt-[30px]">
                <p className="underline w-[30%] ">Tên của bạn</p>
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  className="border-2 border-solid border-[#a72020] w-[500px] p-[5px] pl-[5px] text-[15px] rounded-[5px] ml-[auto] focus:outline-1 outline-[#a72020]"
                />
              </div>
              <div className="flex text-[18px] font-[500] h-[40px] mt-[30px]">
                <p className="underline w-[30%]">Tiêu đề </p>
                <input
                  type="text"
                  value={title}
                  onChange={handleTitleChange}
                  className="border-2 border-solid border-[#a72020] w-[500px] p-[5px] pl-[5px] text-[15px] rounded-[5px] ml-[auto] focus:outline-1 outline-[#a72020]"
                />
              </div>
              <div className="flex text-[18px] font-[500] mt-[20px] ">
                <p className="underline w-[30%]">Cảm nhận</p>
                <textarea
                  value={comment}
                  onChange={handleCommentChange}
                  className="h-[120px] border-2 border-solid border-[#a72020] resize-none w-[500px] p-[5px] pl-[5px] text-[15px] ml-[auto] rounded-[5px] focus:outline-1 outline-[#a72020]"
                  id=""
                ></textarea>
              </div>
              <div className="flex text-[18px] font-[500] h-[40px] mt-[30px] ">
                <p className="underline w-[30%]">Lời giới thiệu</p>
                <div className="ml-[140px] mb-[40px]">
                  <label
                    className="flex items-center gap-[7px] "
                    htmlFor="like"
                  >
                    <input
                      type="radio"
                      id="like"
                      value="like"
                      className="detail-product-comment-table-option-radio"
                      name="inputRadio"
                      checked={recommendation === true}
                      onChange={() => handleRecommendationChange(true)}
                      required
                    />
                    <p className="bg-black text-white p-[7] rounded-[50%] ml-[10px]">
                      <AiFillLike size={20} />
                    </p>
                    <p>Tôi sẽ giới thiệu cho bạn bè</p>
                  </label>
                  <label
                    htmlFor="dislike"
                    className="flex items-center mt-[20px] gap-[7px] "
                  >
                    <input
                      type="radio"
                      className="text-[#a72020] detail-product-comment-table-option-radio"
                      id="dislike"
                      value="dislike"
                      name="inputRadio"
                      checked={recommendation === false}
                      onChange={() => handleRecommendationChange(false)}
                      required
                    />
                    <p className="bg-black text-white p-[7] rounded-[50%] ml-[10px]">
                      <AiFillDislike size={20} />
                    </p>
                    <p>Tôi sẽ không giới thiệu cho bạn bè</p>
                  </label>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="bg-[#611a1a] text-white p-[10px] rounded-[5px] mt-[50px] ml-[auto] cursor-pointer"
              >
                Đăng đánh giá
              </button>
            </div>
          </div>
        )}
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white flex mt-[50px] rounded-[10px] p-[20px] detail-product-comment"
          >
            <div className="w-[320px] flex flex-col items-center justify-center detail-product-comment-left">
              <div className="flex items-center gap-[15px]">
                <div className="w-[100px] h-[100px] border-2 border-black border-solid rounded-[50%] bg-white"></div>
                <div className="text-[20px] font-[500] w-[130px] ">
                  {review.name}
                </div>
              </div>
              <div className="flex items-center gap-[5px] mt-[20px]">
                <p
                  className={`bg-black text-white p-[7] rounded-[50%] ${
                    review.recommendation ? "like" : "dislike"
                  }`}
                >
                  {review.recommendation ? (
                    <AiFillLike size={20} />
                  ) : (
                    <AiFillDislike size={20} />
                  )}
                </p>
                <p className="text-[15px]">
                  {review.recommendation
                    ? "Tôi sẽ giới thiệu cho bạn bè"
                    : "Tôi sẽ không giới thiệu cho bạn bè"}
                </p>
              </div>
            </div>
            <div className="w-[960px] pl-[20px] detail-product-comment-right">
              <div>{review.date}</div>
              <div className="flex gap-[5px] text-yellow-600">
                {[...Array(review.rating)].map((_, index) => (
                  <BsStarFill key={index} />
                ))}
              </div>
              <div className="font-[550] text-[20px] mt-[20px]">
                {review.title}
              </div>
              <div className="mt-[20px]">{review.comment}</div>
            </div>
          </div>
        ))}
        <div className="bg-white flex mt-[50px] rounded-[10px] p-[20px] detail-product-comment">
          <div className="w-[45%] flex flex-col items-center justify-center detail-product-comment-left">
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
          <div className="detail-product-comment-right">
            <div>##/##/####</div>
            <div className="flex gap-[5px] text-yellow-600">
              <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />{" "}
              <BsStarFill />
            </div>
            <div className="font-[550] text-[20px] mt-[20px]">tittle</div>
            <div className="mt-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              corporis laborum nesciunt praesentium vitae? Adipisci voluptatem
              illum nam. Laudantium quam minus aut, reprehenderit aliquam magnam
              perspiciatis vero ex saepe eum!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
