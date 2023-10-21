"use client"; // Error components must be Client Components
import React, { useContext } from "react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/image/LogoH&B.png";
import imageOptionProduct from "@/assets/image/ImageHomeoageOPtion.png";
import { HiMagnifyingGlass, HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import ShoppingBag from "./component/ShoppingBag";
import { ProductListTypes } from "@/types/Interface";
import { CartContext } from "@/context/CartContext";
import { ProductList } from "@/data/data";
import DetailProduct from "../product/[url]/page";
import { useRouter } from "next/navigation";
const HeaderHAB = () => {
  const router = useRouter();
  const [homepageShow, setHomepageShow] = useState(false);
  const [aboutUsShow, setAboutUsShow] = useState(true);
  const [introShow, setIntroShow] = useState(false);
  const [productShow, setProductShow] = useState(false);
  const [optionProduct, setOptionProduct] = useState(false);
  const [optionShoppingBag, setOptionShoppingBag] = useState(false);
  const [number, setNumber] = useState(1);
  const [orderNoneShow, setOrderNoneShow] = useState(false);
  const [orderShow, setOrderShow] = useState(false);
  const [beautyShow, setBeautyShow] = useState(false);
  const [contactShow, setContactShow] = useState(false);
  const [cuisineShow, setCuisineShow] = useState(false);
  const [feedbackShow, setFeedbackShow] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  const [isSearch, setSearch] = useState(true);
  const { cart, setCart } = useContext(CartContext);
  const [showShoppingBag, setShowShoppingBag] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement | null>(null);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const toggleShoppingBag = () => {
    setShowShoppingBag(!showShoppingBag);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setSearch(true);
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <div className="p-[20px] max-w-[2000px] header__container">
        <div className=" flex px-[230px] items-center ">
          <Link
            href="/"
            onClick={() => {
              setAboutUsShow(false);
              setHomepageShow(true);
              setIntroShow(false);
              setOptionProduct(false);
              setProductShow(false);
              setOrderShow(false);
              setOrderNoneShow(false);
              setBeautyShow(false);
              setContactShow(false);
              setCuisineShow(false);
            }}
            className="cursor-pointer pr-[30px]"
          >
            <Image src={logo} alt="picture" width={150} height={120} />
          </Link>
          {isSearch && (
            <div
              onClick={() => {
                setExpanded(true);
                setSearch(false);
              }}
              className="ml-auto bg-[#611a1a]  p-[10px] rounded-full text-white cursor-pointer "
            >
              <HiMagnifyingGlass size={20} />
            </div>
          )}
          {isExpanded && (
            <div
              ref={searchContainerRef}
              className={`rounded-[12px] w-[70%] header-search-bar__container relative text-white bg-[#611a1a] ${
                isExpanded ? "opened" : ""
              }`}
            >
              <div className="flex jutify-center items-center header-search-bar">
                <input
                  type="text"
                  placeholder="Tìm sản phẩm..."
                  className="w-[95%] pl-2.5 pr-2.5 h-[40px] rounded-[12px] text-sm text-[white] bg-[#611a1a] ml-[5px] header-search-bar-input focus:outline-none placeholder:text-[white]"
                />
                <p className="cursor-pointer pr-[10px] header-search-bar-icon">
                  <HiMagnifyingGlass size={20} />
                </p>
              </div>
            </div>
          )}
          <div
            onClick={toggleShoppingBag}
            className="cursor-pointer ml-[50px] pr-[50px] text-[#611a1a] header-cart"
          >
            <p>
              {" "}
              <HiOutlineShoppingBag size={25} />
            </p>
            <p className="absolute h-[auto] w-[auto] p-[5px] text-[10px] mt-[-35px] ml-[13px] rounded-full bg-amber-200 ">
              {cart.length > 0 && (
                <p>{cart.reduce((total, item) => total + item.quantity, 0)} </p>
              )}
            </p>
          </div>
        </div>
        {showShoppingBag && (
          <ShoppingBag hideShoppingCart={toggleShoppingBag} />
        )}
        <div className="mt-[20px] flex justify-center items-center gap-[70px] text-[#611a1a] text-[17px] font-[550] header-option">
          <Link
            href="/intro"
            onClick={() => {
              setIntroShow(true);
              setHomepageShow(false);
              setOptionProduct(false);
              setProductShow(false);
              setOrderShow(false);
              setOrderNoneShow(false);
              setBeautyShow(false);
              setContactShow(false);
              setCuisineShow(false);
            }}
            className={
              introShow
                ? "text-[#f4aa2a] italic font-[550] option-intro-active"
                : "option-intro"
            }
          >
            Giới thiệu
          </Link>
          <p
            onClick={() => {
              setOptionProduct(!optionProduct);
            }}
            className={
              optionProduct
                ? "text-[#f4aa2a] italic font-[550] option-intro-active"
                : "option-intro" && productShow
                ? "text-[#f4aa2a] italic font-[550] option-intro-active"
                : "option-intro"
            }
          >
            Sản phẩm
          </p>
          <Link
            href="/beauty"
            onClick={() => {
              setIntroShow(false);
              setHomepageShow(false);
              setOptionProduct(false);
              setProductShow(false);
              setOrderShow(false);
              setOrderNoneShow(false);
              setBeautyShow(true);
              setContactShow(false);
              setCuisineShow(false);
            }}
            className={
              beautyShow
                ? "text-[#f4aa2a] italic font-[550] option-intro-active"
                : "option-intro"
            }
          >
            Làm đẹp
          </Link>
          <Link
            href="/orderNone"
            onClick={() => {
              setOrderNoneShow(true);
              setOrderShow(false);
              setHomepageShow(false);
              setIntroShow(false);
              setOptionProduct(false);
              setProductShow(false);
              setOptionShoppingBag(false);
              setBeautyShow(false);
              setContactShow(false);
              setCuisineShow(false);
            }}
            className={
              orderShow
                ? "text-[#f4aa2a] italic font-[550] option-intro-active"
                : "option-intro" && orderNoneShow
                ? "text-[#f4aa2a] italic font-[550] option-intro-active"
                : "option-intro"
            }
          >
            Đặt mua
          </Link>
          <p className="option-intro">Khuyến mãi</p>

          <Link
            href="/cuisine"
            onClick={() => {
              setContactShow(false);
              setIntroShow(false);
              setHomepageShow(false);
              setOptionProduct(false);
              setProductShow(false);
              setOrderShow(false);
              setOrderNoneShow(false);
              setBeautyShow(false);
              setCuisineShow(true);
            }}
            className={
              cuisineShow
                ? "text-[#f4aa2a] italic font-[550] option-intro-active"
                : "option-intro"
            }
          >
            Ẩm thực
          </Link>
          <Link
            href="/contact"
            onClick={() => {
              setContactShow(true);
              setIntroShow(false);
              setHomepageShow(false);
              setOptionProduct(false);
              setProductShow(false);
              setOrderShow(false);
              setOrderNoneShow(false);
              setBeautyShow(false);
              setCuisineShow(false);
            }}
            className={
              contactShow
                ? "text-[#f4aa2a] italic font-[550] option-intro-active"
                : "option-intro"
            }
          >
            Liên hệ
          </Link>
          <Link
            href="/feedback"
            onClick={() => {
              setContactShow(false);
              setIntroShow(false);
              setHomepageShow(false);
              setOptionProduct(false);
              setProductShow(false);
              setOrderShow(false);
              setOrderNoneShow(false);
              setBeautyShow(false);
              setCuisineShow(false);
            }}
            className={
              feedbackShow
                ? "text-[#f4aa2a] italic font-[550] option-intro-active"
                : "option-intro"
            }
          >
            Feedback
          </Link>
        </div>
      </div>
      {optionProduct && (
        <div className="max-w-[2000px] mx-auto health-and-beauty-homepage-option-product__container">
          <div className="p-[20px] flex items-center justify-center gap-[350px] leading-[2.2] heading-option-product">
            <div className="text-[#611a1a]  text-[19px] font-[400]">
              {ProductList.map((items: ProductListTypes) => (
                <p
                  key={items.idProduct}
                  className="cursor-pointer hover:underline"
                  onClick={() => {
                    router.push(`/product/${items.urlProduct}`);
                    setOptionProduct(false);
                  }}
                >
                  {items.nameProduct}
                </p>
              ))}
            </div>

            <div className="h-[100%] w-1500px]">
              <Image
                src="https://res.cloudinary.com/dkfg3xljc/image/upload/v1697618387/BeautyProject/SFT-15_udgshd.jpg"
                alt=""
                width={150}
                height={150}
                className="h-[100%] w-[150px] object-fill"
              />
            </div>
          </div>
          <div className="p-[10px] bg-[#efece3] text-sm option-product">
            <Link
              href="/product"
              onClick={() => {
                setProductShow(true);
                setHomepageShow(false);
                setIntroShow(false);
                setOptionProduct(false);
                setOrderShow(false);
                setOrderNoneShow(false);
                setBeautyShow(false);
              }}
              className="flex items-center font-[550] text-[17px] w-fit cursor-pointer ml-[40px] text-[#611a1a]  hover:underline"
            >
              Trang chủ sản phẩm <IoIosArrowForward />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderHAB;
