"use client";
import React, { useState, useContext } from "react";
import Image from "next/image";
import { CartContext } from "@/context/CartContext";
import { ProductList } from "@/data/data";
import { ProductListTypes, ReviewTypes } from "@/types/Interface";
import { useRouter } from "next/navigation";
import Rating from "@mui/material/Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsArrowLeft, BsStarFill } from "react-icons/bs";
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
  const [rating, setRating] = useState<number | null>(null);
  const [name, setName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [reviews, setReviews] = useState<ReviewTypes[]>([]);
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

    const newReview: ReviewTypes = {
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
    setCommentShow(false);
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
    <div className="bg-[#a72020] py-[50px] product-detail-HAB__container">
      <div
        onClick={() => {
          router.back();
        }}
        className="flex items-center cursor-pointer text-white pl-[100px] hover:underline product-detail-return-btn"
      >
        <p>
          <BsArrowLeft size={20} />
        </p>
        <p className="ml-[5px]">Quay lại</p>
      </div>
      {ProductList.filter((profileItems: ProductListTypes) => {
        return profileItems.idProduct === params.url;
      }).map((profileItems: ProductListTypes) => {
        const totalPrice = profileItems.priceProduct * profileItems.quantity;
        return (
          <div
            key={profileItems.idProduct}
            className="bg-white  flex items-start justify-center mt-[20px] px-[100px] py-[40px] text-[#a72020] product-detail-HAB-content__container"
          >
            <div className="product-detail-HAB-image flex items-start justify-start w-[50%]">
              <div className="product-detail-HAB-image-small w-[70%]">
                <Swiper
                  pagination={{
                    type: "fraction",
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide className="product-detail-HAB-image-main-detail object-fill w-[350px] h-[400px]">
                    <Image
                      src={profileItems.imgProfile.imgProfile1.src}
                      alt={profileItems.imgProfile.imgProfile1.alt}
                      height={400}
                      width={350}
                      loading="lazy"
                      className="product-detail-HAB-image-main-detail object-fill w-[350px] h-[400px]"
                    />{" "}
                  </SwiperSlide>
                  <SwiperSlide className="product-detail-HAB-image-main-detail object-fill w-[350px] h-[400px]">
                    <Image
                      src={profileItems.imgProfile.imgProfile4.src}
                      alt={profileItems.imgProfile.imgProfile4.alt}
                      height={400}
                      width={350}
                      loading="lazy"
                      className="product-detail-HAB-image-main-detail object-fill w-[350px] h-[400px]"
                    />{" "}
                  </SwiperSlide>
                  <SwiperSlide className="product-detail-HAB-image-main-detail object-fill w-[350px] h-[400px]">
                    <Image
                      src={profileItems.imgProfile.imgProfile2.src}
                      alt={profileItems.imgProfile.imgProfile2.alt}
                      height={400}
                      width={350}
                      loading="lazy"
                      className="product-detail-HAB-image-main-detail object-fill w-[350px] h-[400px]"
                    />{" "}
                  </SwiperSlide>
                  <SwiperSlide className="product-detail-HAB-image-main-detail object-fill w-[350px] h-[400px]">
                    <Image
                      src={profileItems.imgProfile.imgProfile3.src}
                      alt={profileItems.imgProfile.imgProfile3.alt}
                      height={400}
                      width={350}
                      loading="lazy"
                      className="product-detail-HAB-image-main-detail object-fill w-[350px] h-[400px]"
                    />{" "}
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="product-detail-HAB-content w-[50%]">
              <p className="font-[550] text-[30px] w-[100%] product-detail-HAB-name">
                {profileItems.nameProduct}
              </p>
              <div className="product-detail-HAB-content-provide">
                <div className="mt-[50px] text-[15.5px] text-black w-[100%] pb-[50px] product-detail-HAB-content-descreption">
                  <div className="font-[550] text-[17px] ">Mô tả sản phẩm</div>
                  <p className="mt-[10px] text-justify product-detail-HAB-profile ">
                    {profileItems.profileProduct}
                  </p>
                </div>
                <div className="product-detail-HAB-price-quanlity">
                  <p className="mt-[20px] font-[550] text-[25px] text-black product-detail-HAB-price">
                    {totalPrice.toLocaleString("vi-VN")}đ
                  </p>
                  <div className="flex items-center mt-[20px] product-detail-HAB-addtoCart">
                    <div className="text-[25px] product-detail-HAB-btn-number">
                      <div className="flex items-center">
                        <p
                          onClick={() => minNum(profileItems)}
                          className="cursor-pointer detail-product-minNum mr-[20px]"
                        >
                          <AiOutlineMinus />
                        </p>
                        <p className="detail-product-number mr-[20px]">
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
            </div>
          </div>
        );
      })}

      <div className="mt-[50px] detail-product-comment__container p-[100px]">
        <div className="text-white flex items-center pb-[10px] detail-product-comment-tittle">
          <p className="font-[550] text-[20px] detail-product-HAB-comment-tittle">
            Cảm nhận về sản phẩm
          </p>
          <div
            onClick={() => {
              setCommentShow(!commentShow);
            }}
            className="cursor-pointer flex items-center ml-auto bg-white text-[#a72020] p-[5px] rounded-[5px] text-[18px] font-[500]"
          >
            <p>
              <BiMessageAltEdit size={25} />
            </p>
            <p className="ml-[5px]">Đánh giá</p>
          </div>
        </div>
        {commentShow && (
          <div className="bg-white rounded-[10px] mt-[20px] pl-[200px] pr-[200px] pt-[80px] pb-[80px] detail-product-comment-table__container">
            <div className="flex flex-col">
              <div className="flex items-center product-detail-HAB-comment-rating">
                <p className="underline text-[18px] font-[500] w-[30%] product-detail-HAB-comment-rating-tittle">
                  Đánh giá cảm nhận
                </p>
                <p className="flex ml-[140px] text-[#a72020] product-detail-HAB-comment-rating">
                  <Rating
                    name="simple-controlled mr-[5px]"
                    value={rating}
                    onChange={(event, newValue) => {
                      handleRatingChange(newValue);
                    }}
                  />
                </p>
              </div>
              <div className="">
                {" "}
                <div className="flex text-[18px] font-[500] h-[40px] mt-[30px] product-detail-HAB-comment-name">
                  <p className="underline w-[30%] product-detail-HAB-comment-name-tittle">
                    Tên của bạn
                  </p>
                  <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    className="border-2 border-solid border-[#a72020] w-[500px] p-[5px] pl-[5px] text-[15px] rounded-[5px] ml-[auto] focus:outline-1 outline-[#a72020] product-detail-HAB-comment-name"
                  />
                </div>
                <div className="flex text-[18px] font-[500] h-[40px] mt-[30px] product-detail-HAB-comment-topic">
                  <p className="underline w-[30%] product-detail-HAB-comment-topic-tittle">
                    Tiêu đề{" "}
                  </p>
                  <input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    className="border-2 border-solid border-[#a72020] w-[500px] p-[5px] pl-[5px] text-[15px] rounded-[5px] ml-[auto] focus:outline-1 outline-[#a72020] product-detail-HAB-comment-topic"
                  />
                </div>
                <div className="flex text-[18px] font-[500] mt-[20px] product-detail-HAB-comment-decreption">
                  <p className="underline w-[30%] product-detail-HAB-comment-decreption-tittle">
                    Cảm nhận
                  </p>
                  <textarea
                    value={comment}
                    onChange={handleCommentChange}
                    className="h-[120px] border-2 border-solid border-[#a72020] resize-none w-[500px] p-[5px] pl-[5px] text-[15px] ml-[auto] rounded-[5px] focus:outline-1 outline-[#a72020] product-detail-HAB-comment-decreption"
                    id=""
                  ></textarea>
                </div>
              </div>
              <div className="flex text-[18px] font-[500] h-[40px] mt-[30px] product-detail-HAB-comment-share">
                <p className="underline w-[30%] product-detail-HAB-comment-share-tittle ">
                  Lời giới thiệu
                </p>
                <div className="ml-[140px] mb-[40px] product-detail-HAB-comment-share">
                  <label className="flex items-center" htmlFor="like">
                    <input
                      type="radio"
                      id="like"
                      value="like"
                      className="detail-product-comment-table-option-radio mr-[7px]"
                      name="inputRadio"
                      checked={recommendation === true}
                      onChange={() => handleRecommendationChange(true)}
                      required
                    />
                    <p className="bg-black text-white p-[7] rounded-[50%] ml-[10px] mr-[7px]">
                      <AiFillLike size={20} />
                    </p>
                    <p>Tôi sẽ giới thiệu cho bạn bè</p>
                  </label>
                  <label
                    htmlFor="dislike"
                    className="flex items-center mt-[20px] "
                  >
                    <input
                      type="radio"
                      className="text-[#a72020] detail-product-comment-table-option-radio mr-[7px]"
                      id="dislike"
                      value="dislike"
                      name="inputRadio"
                      checked={recommendation === false}
                      onChange={() => handleRecommendationChange(false)}
                      required
                    />
                    <p className="bg-black text-white p-[7] rounded-[50%] ml-[10px] mr-[7px]">
                      <AiFillDislike size={20} />
                    </p>
                    <p className="w-[235px] product-detail-HAB-comment-share-option">
                      Tôi sẽ không giới thiệu cho bạn bè
                    </p>
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
            <div className="w-[320px] pr-[15px] flex flex-col items-center justify-center detail-product-comment-left">
              <div className="flex items-center detail-product-comment-left-profile">
                <div className="w-[100px] h-[100px] border-2 border-black border-solid rounded-[50%] bg-white detail-product-comment-left-image mr-[15px]"></div>
                <div className="text-[20px] font-[500] w-[130px] detail-product-comment-left-name">
                  {review.name}
                </div>
              </div>
              <div className="flex items-start mt-[20px] detail-product-comment-left-share">
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
                <p className="text-[15px] ml-[7px] detail-product-comment-left-share">
                  {review.recommendation
                    ? "Tôi sẽ giới thiệu cho bạn bè"
                    : "Tôi sẽ không giới thiệu cho bạn bè"}
                </p>
              </div>
            </div>
            <div className="w-[960px] pl-[20px] detail-product-comment-right">
              <div className="detail-product-comment-right-date text-[16px] italic text-[#611a1a] font-[550] mb-[10px]">
                {review.date}
              </div>
              <div className="flex text-yellow-600">
                {[...Array(review.rating)].map((_, index) => (
                  <BsStarFill key={index} className="mr-[5px]" />
                ))}
              </div>
              <div className="font-[550] text-[20px] mt-[20px] detail-product-comment-right-tittle">
                {review.title}
              </div>
              <div className="mt-[20px] detail-product-comment-right-content">
                {review.comment}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailProduct;
