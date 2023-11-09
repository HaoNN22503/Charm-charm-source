"use client"; // Error components must be Client Components
import React, { useContext } from "react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/image/LogoH&B.png";
import { HiMagnifyingGlass, HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import ShoppingBag from "./component/ShoppingBag";
import { ProductListTypes } from "@/types/Interface";
import { CartContext } from "@/context/CartContext";
import { ProductList } from "@/data/data";
import { useRouter } from "next/navigation";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
const HeaderHAB = () => {
  const router = useRouter();
  const [homepageShow, setHomepageShow] = useState(false);
  const [aboutUsShow, setAboutUsShow] = useState(true);
  const [introShow, setIntroShow] = useState(false);
  const [productShow, setProductShow] = useState(false);
  const [optionProduct, setOptionProduct] = useState(false);
  const [optionShoppingBag, setOptionShoppingBag] = useState(false);
  const [orderNoneShow, setOrderNoneShow] = useState(false);
  const [orderShow, setOrderShow] = useState(false);
  const [beautyShow, setBeautyShow] = useState(false);
  const [contactShow, setContactShow] = useState(false);
  const [cuisineShow, setCuisineShow] = useState(false);
  const [feedbackShow, setFeedbackShow] = useState(false);
  const [promotionShow, setPromotionShow] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  const [isSearch, setSearch] = useState(true);
  const { cart, setCart } = useContext(CartContext);
  const [showShoppingBag, setShowShoppingBag] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const searchContainerRef = useRef<HTMLDivElement | null>(null);

  const toggleShoppingBag = () => {
    setShowShoppingBag(!showShoppingBag);
  };
  const toggleBuying = () => {
    setAboutUsShow(false);
    setHomepageShow(false);
    setIntroShow(false);
    setOptionProduct(false);
    setProductShow(false);
    setOrderShow(true);
    setBeautyShow(false);
    setContactShow(false);
    setCuisineShow(false);
    setFeedbackShow(false);
    setPromotionShow(false);
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

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
  };

  // Hàm xử lý khi người dùng nhấn Enter
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (
        selectedItemIndex !== null &&
        filterResults().length > selectedItemIndex
      ) {
        const selectedItem = filterResults()[selectedItemIndex];
        router.push(`/product/${selectedItem.idProduct}`);
      }

      setDropdownOpen(false);
    }
  };
  const filterResults = () => {
    return ProductList.filter((result) =>
      result.nameProduct.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === "ArrowUp" &&
      selectedItemIndex !== null &&
      selectedItemIndex > 0
    ) {
      setSelectedItemIndex(selectedItemIndex - 1);
    } else if (
      e.key === "ArrowDown" &&
      selectedItemIndex !== null &&
      selectedItemIndex < filterResults().length - 1
    ) {
      setSelectedItemIndex(selectedItemIndex + 1);
    }
  };
  const handleItemClick = (item: ProductListTypes, index: number) => {
    setDropdownOpen(false);
    setSelectedItemIndex(index);
    // router.push(`/product/${item.urlProduct}`);
  };

  return (
    <div>
      <div className="p-[20px] max-w-[2000px]  header__container">
        <div className=" flex px-[230px] items-center header-option-bar">
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
              setFeedbackShow(false);
              setPromotionShow(false);
            }}
            className="w-[200px] h-[100px] cursor-pointer header-option-bar-logo"
          >
            <Image
              src={logo}
              alt="picture"
              width={200}
              height={120}
              loading="lazy"
              className="w-[200px] h-[100px] object-fill"
            />
          </Link>
          <div className="header-option-bar-container w-[100%] flex items-center ml-auto">
            {isSearch && (
              <div
                onClick={() => {
                  setExpanded(true);
                  setSearch(false);
                }}
                className="ml-auto bg-[#611a1a] p-[10px] rounded-full text-white cursor-pointer  header-option-bar-search"
              >
                <HiMagnifyingGlass size={20} />
              </div>
            )}
            {isExpanded && (
              <div
                ref={searchContainerRef}
                className={`rounded-[12px] w-[950%] header-search-bar__container relative text-white bg-[#611a1a] ${
                  isExpanded ? "opened" : ""
                }`}
              >
                <div className="flex jutify-center items-center header-search-bar">
                  <input
                    type="text"
                    placeholder="Tìm sản phẩm..."
                    onChange={handleSearch}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setDropdownOpen(true)}
                    onKeyPress={handleKeyPress}
                    className="w-[95%] pl-2.5 pr-2.5 h-[40px] rounded-[12px] text-sm text-[white] bg-[#611a1a] ml-[5px] header-search-bar-input focus:outline-none placeholder:text-[white]"
                  />
                  <p className="cursor-pointer pr-[10px] header-search-bar-icon">
                    <HiMagnifyingGlass size={20} />
                  </p>
                </div>
                {isDropdownOpen && searchTerm !== "" && (
                  <div className="dropdown-container absolute w-full p-[5px] z-[9] ">
                    {filterResults().map((result, index) => (
                      <Link
                        href={`/product/${result.idProduct}`}
                        key={result.idProduct}
                        className={`dropdown-item bg-[white] cursor-pointer text-[#a72020] p-[10px] ${
                          selectedItemIndex === index ? "selected" : ""
                        }`}
                        onMouseEnter={() => setSelectedItemIndex(index)}
                        onClick={() => handleItemClick(result, index)}
                      >
                        {result.nameProduct}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
            <div
              onClick={toggleShoppingBag}
              className="cursor-pointer ml-[30px] pr-[50px] text-[#611a1a] header-cart"
            >
              <p>
                {" "}
                <HiOutlineShoppingBag size={25} />
              </p>
              <p className="absolute h-[auto] w-[auto] p-[5px] text-[10px] mt-[-35px] ml-[13px] rounded-full bg-amber-200 header-show-total">
                {cart.length > 0 && (
                  <p>
                    {cart.reduce((total, item) => total + item.quantity, 0)}{" "}
                  </p>
                )}
              </p>
            </div>{" "}
            <label
              htmlFor="nav-mobile-input"
              className="nav-bar-icon text-[#611a1a] cursor-pointer hidden"
            >
              <FaBars size={20} />
            </label>
          </div>
        </div>
        <input
          type="checkbox"
          className="header-input-check w-[30px] h-[30px]"
          id="nav-mobile-input"
        />
        <label htmlFor="nav-mobile-input" className="header-overlay"></label>
        <div className="header-mobile">
          <label htmlFor="nav-mobile-input" className="header-mobile-btn-close">
            <AiOutlineClose size={20} />
          </label>
          <label
            htmlFor="nav-mobile-input"
            className="mt-[20px] flex justify-center items-center gap-[70px] text-[#611a1a] text-[17px] font-[550] header-mobile-option"
          >
            <Link href="/intro" className="option-intro">
              Giới thiệu
            </Link>
            <Link href="/product" className="option-intro">
              Sản phẩm
            </Link>
            <Link href="/beauty" className="option-intro">
              Làm đẹp
            </Link>
            {/* <Link href="/orderNone" className="option-intro-buying">
              Đặt mua
            </Link> */}
            <Link href="/promotion" className="option-intro">
              Khuyến mãi
            </Link>
            {/* <Link href="/cuisine" className="option-intro">
              Ẩm thực
            </Link> */}
            <Link href="/contact" className="option-intro">
              Liên hệ
            </Link>
            <Link href="/feedback" className="option-intro">
              Feedback
            </Link>
          </label>
        </div>
        {showShoppingBag && (
          <ShoppingBag
            hideShoppingCart={toggleShoppingBag}
            orderShow={toggleBuying}
          />
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
              setFeedbackShow(false);
              setPromotionShow(false);
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
              console.log(optionProduct);
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
              setFeedbackShow(false);
              setPromotionShow(false);
            }}
            className={
              beautyShow
                ? "text-[#f4aa2a] italic font-[550] option-intro-active"
                : "option-intro"
            }
          >
            Làm đẹp
          </Link>
          {orderShow && (
            <div
              // onClick={() => {
              //   setOrderNoneShow(true);
              //   setOrderShow(false);
              //   setHomepageShow(false);
              //   setIntroShow(false);
              //   setOptionProduct(false);
              //   setProductShow(false);
              //   setOptionShoppingBag(false);
              //   setBeautyShow(false);
              //   setContactShow(false);
              //   setCuisineShow(false);
              //   setFeedbackShow(false);
              //   setPromotionShow(false);
              // }}
              className={
                orderShow
                  ? "text-[#f4aa2a] italic font-[550] option-intro-active"
                  : "option-intro-buying"
              }
            >
              Đặt mua
            </div>
          )}
          <Link
            href="/promotion"
            onClick={() => {
              setOrderNoneShow(false);
              setPromotionShow(true);
              setOrderShow(false);
              setHomepageShow(false);
              setIntroShow(false);
              setOptionProduct(false);
              setProductShow(false);
              setOptionShoppingBag(false);
              setBeautyShow(false);
              setContactShow(false);
              setCuisineShow(false);
              setFeedbackShow(false);
            }}
            className={
              promotionShow
                ? "text-[#f4aa2a] italic font-[550] option-intro-active"
                : "option-intro"
            }
          >
            Khuyến mãi
          </Link>
          {/* <Link
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
              setFeedbackShow(false);
              setPromotionShow(false);
            }}
            className={
              cuisineShow
                ? "text-[#f4aa2a] italic font-[550] option-intro-active"
                : "option-intro"
            }
          >
            Ẩm thực
          </Link> */}
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
              setFeedbackShow(false);
              setPromotionShow(false);
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
              setFeedbackShow(true);
              setContactShow(false);
              setIntroShow(false);
              setHomepageShow(false);
              setOptionProduct(false);
              setProductShow(false);
              setOrderShow(false);
              setOrderNoneShow(false);
              setBeautyShow(false);
              setPromotionShow(false);
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
        <div className=" health-and-beauty-homepage-option-product__container absolute w-[100%] bg-white z-[9999]">
          <div className="p-[20px] flex items-center justify-center gap-[350px] leading-[2.2] heading-option-product">
            <div className="text-[#611a1a] flex flex-col  text-[19px] font-[400]">
              {ProductList.map((items: ProductListTypes) => (
                <Link
                  href={`/product/${items.idProduct}`}
                  key={items.idProduct}
                  className="cursor-pointer hover:underline"
                  onClick={() => {
                    // router.push(`/product/${items.urlProduct}`);
                    setOptionProduct(false);
                  }}
                >
                  {items.nameProduct}
                </Link>
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
                setPromotionShow(false);
                setFeedbackShow(false);
                setContactShow(false);
                setCuisineShow(false);
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
