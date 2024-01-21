"use client";
import React, { useState, useContext, useEffect } from "react";
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

const DetailProduct = (
  { params }: { params: { url: string } },
  profileItems: {
    imgProfileThumbNails: { src: any }[];
    capacities: { size: any; price: number }[];
  }
) => {
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);
  const [commentShow, setCommentShow] = useState(false);
  const [rating, setRating] = useState<number | null>(null);
  const [name, setName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [reviews, setReviews] = useState<ReviewTypes[]>([]);
  const [mainSwiper, setMainSwiper] = useState<any>(null);
  const [defaultSize, setDefaultSize] = useState<string>("");
  const [defaultPrice, setDefaultPrice] = useState<number>();
  const [selectedSize, setSelectedSize] = useState<string>(
    profileItems.capacities && profileItems.capacities.length > 0
      ? profileItems.capacities[0].size
      : profileItems.capacities
  );

  const [selectedThumbnail, setSelectedThumbnail] = useState<number | null>(
    null
  );
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
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const newReview: ReviewTypes = {
      id: reviews.length + 1,
      name,
      rating: rating as number,
      title,
      comment,
      recommendation: recommendation as boolean,
      date: formattedDate,
    };
    setReviews([...reviews, newReview]);
    setRating(null);
    setName("");
    setTitle("");
    setComment("");
    setRecommendation(null);
    setCommentShow(false);
  };
  const minNum = (item: ProductListTypes) => {
    const selectedCapacity = item.capacities.find(
      (cap) => cap.size === selectedSize
    );
    if (selectedCapacity && selectedCapacity.quantity > 1) {
      selectedCapacity.quantity -= 1;
      setCart([...cart]);
    }
  };

  const plusNum = (item: ProductListTypes) => {
    const selectedCapacity = item.capacities.find(
      (cap) => cap.size === selectedSize
    );
    if (selectedCapacity) {
      selectedCapacity.quantity += 1;
      setCart([...cart]);
    }
  };

  const handleThumbClick = (index: number) => {
    if (mainSwiper !== null) {
      mainSwiper.slideTo(index);
    }
    setSelectedThumbnail(index);
  };
  const getRelatedProducts = (currentProductId: any) => {
    return ProductList.filter(
      (product) => product.idProduct !== currentProductId
    );
  };
  const currentProductId = params.url;
  const relatedProducts = getRelatedProducts(currentProductId);
  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };
  useEffect(() => {
    if (
      profileItems &&
      profileItems.capacities &&
      profileItems.capacities.length > 0
    ) {
      const firstSize = profileItems.capacities[0].size;
      const firstPrice = profileItems.capacities[0].price;
      setDefaultSize(firstSize);
      setDefaultPrice(firstPrice);

      // Check if selectedSize is already set, if not, set it to the first size
      setSelectedSize((prevSelectedSize) => prevSelectedSize || firstSize);
    }
  }, [profileItems?.capacities, profileItems]);
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
        const selectedCapacity = profileItems.capacities.find(
          (cap) => cap.size === selectedSize
        );
        const totalPrice = selectedCapacity
          ? selectedCapacity.price * quantity
          : 0;

        return (
          <div
            key={profileItems.idProduct}
            className="bg-white flex items-start justify-center mt-[20px] px-[100px] py-[40px] text-[#a72020] product-detail-HAB-content__container"
          >
            <div className="product-detail-HAB-image flex items-start justify-start w-[50%]">
              <div className="product-detail-HAB-image-small w-[70%]">
                <Swiper
                  pagination={{
                    type: "fraction",
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  onSwiper={(swiper) => {
                    setMainSwiper(swiper);
                    setSelectedThumbnail(swiper.activeIndex);
                  }}
                  onSlideChange={(swiper) =>
                    setSelectedThumbnail(swiper.activeIndex)
                  }
                  className="mySwiper"
                >
                  {profileItems.imgProfileThumbNails.map((thumb, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        src={thumb.src}
                        alt={thumb.alt}
                        width={thumb.width}
                        height={thumb.height}
                        onClick={() => handleThumbClick(index)}
                        className="flex justify-center items-center"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="product-thumbnail-container justify-center flex mt-4">
                  {profileItems.imgProfileThumbNails.map((thumbnail, index) => (
                    <div
                      key={index}
                      className={`product-thumbnail mr-[20px] ${
                        selectedThumbnail === index
                          ? "selected-thumbnail rounded-[10px] border-4 border-solid border-[#a72020]"
                          : ""
                      }`}
                    >
                      <Image
                        src={thumbnail.src}
                        alt={`Thumbnail ${index}`}
                        width={thumbnail.width}
                        height={thumbnail.height}
                        onClick={() => handleThumbClick(index)}
                        className="rounded-[5px] flex justify-center items-center"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="product-detail-HAB-content w-[50%]">
              <p className="font-[550] text-[30px] w-[100%] product-detail-HAB-name">
                {profileItems.nameProduct}
              </p>
              <div className="product-detail-HAB-content-provide">
                <div className="mt-[50px] text-[15.5px] text-black w-[100%] pb-[50px] product-detail-HAB-content-descreption">
                  <div className="font-[550] text-[17px] ">
                    {profileItems.profileProduct.topicProfile}
                  </div>
                  <p className="mt-[10px] text-justify product-detail-HAB-profile ">
                    {profileItems.profileProduct.productProfile}
                  </p>{" "}
                  <p className="mt-[10px] text-justify product-detail-HAB-profile ">
                    {profileItems.profileProduct.contentProductProfile1}
                  </p>{" "}
                  <p className="mt-[10px] text-justify product-detail-HAB-profile ">
                    {profileItems.profileProduct.contentProductProfile2}
                  </p>{" "}
                  <p className="mt-[10px] text-justify product-detail-HAB-profile ">
                    {profileItems.profileProduct.contentProductProfile3}
                  </p>{" "}
                  <p className="mt-[10px] text-justify font-bold product-detail-HAB-profile ">
                    {profileItems.profileProduct.tittleProfile1}
                  </p>{" "}
                  <p className="mt-[10px] text-justify product-detail-HAB-profile ">
                    {profileItems.profileProduct.contentTittle1p1}
                  </p>{" "}
                  <p className="mt-[10px] text-justify product-detail-HAB-profile ">
                    {profileItems.profileProduct.contentTittle1p2}
                  </p>{" "}
                  <p className="mt-[10px] text-justify product-detail-HAB-profile ">
                    {profileItems.profileProduct.contentTittle1p3}
                  </p>{" "}
                  <p className="mt-[10px] text-justify product-detail-HAB-profile ">
                    {profileItems.profileProduct.contentTittle1p4}
                  </p>{" "}
                  <p className="mt-[10px] text-justify product-detail-HAB-profile ">
                    {profileItems.profileProduct.contentTittle1p5}
                  </p>{" "}
                  <p className="mt-[10px] text-justify product-detail-HAB-profile ">
                    {profileItems.profileProduct.contentTittle1p6}
                  </p>{" "}
                  <p className="mt-[10px] text-justify product-detail-HAB-profile ">
                    {profileItems.profileProduct.contentTittle1p7}
                  </p>{" "}
                  <p className="mt-[10px] text-justify font-bold product-detail-HAB-profile ">
                    {profileItems.profileProduct.tittleProfile2}
                  </p>{" "}
                  <p className="mt-[10px] text-justify product-detail-HAB-profile ">
                    {profileItems.profileProduct.contentTittle2p1}
                  </p>{" "}
                  <p className="mt-[10px] text-justify product-detail-HAB-profile ">
                    {profileItems.profileProduct.contentTittle2p2}
                  </p>{" "}
                  <p className="mt-[10px] text-justify product-detail-HAB-profile ">
                    {profileItems.profileProduct.contentTittle2p3}
                  </p>{" "}
                  <p className="mt-[10px] text-justify product-detail-HAB-profile ">
                    {profileItems.profileProduct.contentTittle2p4}
                  </p>{" "}
                  <p className="mt-[10px] text-justify product-detail-HAB-profile ">
                    {profileItems.profileProduct.contentTittle2p5}
                  </p>{" "}
                  <p className="mt-[10px] text-justify product-detail-HAB-profile ">
                    {profileItems.profileProduct.contentTittle2p6}
                  </p>{" "}
                  <p className="mt-[10px] text-justify product-detail-HAB-profile ">
                    {profileItems.profileProduct.contentTittle2p7}
                  </p>{" "}
                  <p className="mt-[10px] text-justify font-bold product-detail-HAB-profile ">
                    {profileItems.profileProduct.tittleProfile3}
                  </p>
                  <p className="mt-[10px] text-justify product-detail-HAB-profile ">
                    {profileItems.profileProduct.contentTittle3p1}
                  </p>{" "}
                  <p className="mt-[10px] text-justify product-detail-HAB-profile ">
                    {profileItems.profileProduct.contentTittle3p2}
                  </p>{" "}
                  <p className="mt-[10px] text-justify product-detail-HAB-profile ">
                    {profileItems.profileProduct.contentTittle3p3}
                  </p>{" "}
                </div>
                <div className="product-detail-HAB-price-quanlity">
                  <div style={{ display: "flex" }}>
                    {profileItems.capacities.map((cap) => (
                      <div
                        key={cap.size}
                        onClick={() => {
                          const firstSize = profileItems.capacities[0].size;
                          const firstPrice = profileItems.capacities[0].price;
                          setDefaultSize(firstSize);
                          setDefaultPrice(firstPrice);
                          handleSizeClick(cap.size);
                        }}
                        style={{
                          padding: "10px",
                          margin: "5px",
                          border:
                            selectedSize === cap.size
                              ? "2px solid red"
                              : "2px solid #ccc",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                      >
                        {cap.size}
                      </div>
                    ))}
                  </div>

                  {/* Hiển thị giá và dung lượng của dung lượng đã chọn */}
                  {selectedSize && (
                    <p className="font-[550] mt-[10px] text-[25px] text-black product-detail-HAB-price">
                      {profileItems.capacities
                        .find((cap) => cap.size === selectedSize)
                        ?.price.toLocaleString("vi-VN")}
                      VND/ lọ
                    </p>
                  )}
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
                          {/* Thay thế profileItems.quantity bằng selectedCapacity.quantity */}
                          {selectedCapacity?.quantity || 0}
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
                        const selectedCapacity = profileItems.capacities.find(
                          (cap) => cap.size === selectedSize
                        );

                        if (selectedCapacity) {
                          handleAddToCart(
                            cart,
                            setCart,
                            profileItems.idProduct,
                            selectedCapacity.quantity, // Sử dụng selectedCapacity.quantity thay vì profileItems.quantity
                            [selectedCapacity],
                            selectedSize
                          );
                        }
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
      <div className="order-product-container bg-white h-[400px]  w-[100%] py-[40px] px-[100px]">
        <div className="order-product-tittle text-[20px] font-[700]">
          Sản phẩm tương tự
        </div>
        <div className="flex mt-[20px] order-product-all-container z">
          {relatedProducts.map((items) => (
            <div
              key={items.idProduct}
              className="w-[200px] flex flex-col justify-center items-center leading-[2] mr-[20px] order-product-all-container-show"
            >
              <div
                onClick={() => {
                  router.push(`/product/${items.idProduct}`);
                }}
                className="w-[150px] cursor-pointer order-product-all-container-items"
              >
                <Image
                  src={items.imgProfileThumbNails[0].src}
                  alt={items.imgProfileThumbNails[0].alt}
                  width={items.imgProfileThumbNails[0].width}
                  height={items.imgProfileThumbNails[0].height}
                  loading="lazy"
                  className="w-[150px] object-fill flex justify-center items-center order-product-all-container-items-image rounded-[10px]"
                />
              </div>
              {items.nameProduct.length > 15 ? (
                <div className="text-center flex items-center justify-center font-[550] mt-3 order-product-all-container-items-name">
                  {items.nameProduct.slice(0, 15) + "..."}
                </div>
              ) : (
                <div className="text-center flex items-center justify-center font-[550] mt-3 order-product-all-container-items-name">
                  {items.nameProduct}
                </div>
              )}
              <div className="flex justify-between px-[10px] w-[100%] text-sm mt-3 order-product-all-container-items-btn">
                <p
                  onClick={() => {
                    // Set to defaultSize if not explicitly set
                    handleAddToCart(
                      cart,
                      setCart,
                      items.idProduct,
                      items.quantity,
                      items.capacities,
                      selectedSize || defaultSize // Use selectedSize if set, otherwise use defaultSize
                    );
                    const firstSize = items.capacities[0].size;
                    const firstPrice = items.capacities[0].price;
                    setDefaultSize(firstSize);
                    setDefaultPrice(firstPrice);
                  }}
                  className="cursor-pointer hover:underline order-product-all-container-add"
                >
                  Thêm vào túi
                </p>

                <p className="ml-auto order-product-all-container-items-price font-[600]">
                  {items.capacities[0].price.toLocaleString("vi-VN")}đ
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
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
          <div className="bg-white rounded-[10px] w-full mt-[20px] py-[80px] px-[200px] detail-product-comment-table__container">
            <div className="flex flex-col w-full">
              <div className="flex items-center product-detail-HAB-comment-rating w-full justify-between">
                <p className="underline w-[50%] text-[18px] font-[500] product-detail-HAB-comment-rating-tittle">
                  Đánh giá cảm nhận
                </p>
                <p className="flex w-[50%] text-[#a72020] product-detail-HAB-comment-rating">
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
                <div className="flex text-[18px] mt[30px] w-full justify-between items-center font-[500] product-detail-HAB-comment-name">
                  <p className="underline w-[50%]  product-detail-HAB-comment-name-tittle">
                    Tên của bạn
                  </p>
                  <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    className="border-2 border-solid w-[50%] px-[5px] h-[40px] border-[#a72020] text-[15px] rounded-[5px] focus:outline-1 outline-[#a72020] product-detail-HAB-comment-name"
                  />
                </div>
                <div className="flex justify-between w-full items-center text-[18px] font-[500] mt-[30px] product-detail-HAB-comment-topic">
                  <p className="underline w-[50%]  product-detail-HAB-comment-topic-tittle">
                    Tiêu đề
                  </p>
                  <input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    className="border-2 border-solid px-[5px] w-[50%] h-[40px] border-[#a72020] text-[15px] rounded-[5px] focus:outline-1 outline-[#a72020] product-detail-HAB-comment-topic"
                  />
                </div>
                <div className="flex mt-[30px] w-full justify-between items-start text-[18px] font-[500]  product-detail-HAB-comment-decreption">
                  <p className="underline w-[50%]  product-detail-HAB-comment-decreption-tittle">
                    Cảm nhận
                  </p>
                  <textarea
                    value={comment}
                    onChange={handleCommentChange}
                    className="h-[120px] p-[5px]  border-2 border-solid w-[50%] border-[#a72020] resize-none  text-[15px]  rounded-[5px] focus:outline-1 outline-[#a72020] product-detail-HAB-comment-decreption"
                    id=""
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-between w-full items-start mt-[30px] text-[18px] font-[500]  product-detail-HAB-comment-share">
                <p className="underline w-[50%] product-detail-HAB-comment-share-tittle ">
                  Lời giới thiệu
                </p>
                <div className="w-[50%] product-detail-HAB-comment-share">
                  <label
                    className="flex items-center w-[100%] h-[25px] justify-between"
                    htmlFor="like"
                  >
                    <input
                      type="radio"
                      id="like"
                      value="like"
                      className="detail-product-comment-table-option-radio w-[14%]"
                      name="inputRadio"
                      checked={recommendation === true}
                      onChange={() => handleRecommendationChange(true)}
                      required
                    />
                    <p className="bg-black text-white detail-product-comment-table-option-like rounded-[50%] flex justify-center items-center h-full w-[6%]">
                      <AiFillLike size={20} />
                    </p>
                    <p className="w-[80%]">Tôi sẽ giới thiệu cho bạn bè</p>
                  </label>
                  <label
                    htmlFor="dislike"
                    className="flex items-center mt-[20px] w-[100%] h-[25px] justify-between "
                  >
                    <input
                      type="radio"
                      className="text-[#a72020] detail-product-comment-table-option-radio w-[16%]"
                      id="dislike"
                      value="dislike"
                      name="inputRadio"
                      checked={recommendation === false}
                      onChange={() => handleRecommendationChange(false)}
                      required
                    />
                    <p className="bg-black w-[6%] detail-product-comment-table-option-like h-full flex justify-center items-center text-white rounded-[50%]">
                      <AiFillDislike size={20} />
                    </p>
                    <p className="w-[80%] product-detail-HAB-comment-share-option">
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
