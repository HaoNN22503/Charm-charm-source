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
  const [optionSecret, setOptionSecret] = useState(false);
  const [optionSecretMobile, setOptionSecretMobile] = useState(false);
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
    setOptionProduct(false);
    setOptionSecret(false);
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
              setOptionSecret(false);
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
                  <div className="dropdown-container absolute w-full p-[5px] z-[9] flex flex-col ">
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
              <p className="absolute flex items-center justify-center p-[5px] text-[14px] mt-[-35px] ml-[13px] rounded-full bg-amber-200 header-show-total">
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
            className="mt-[20px] flex justify-center items-center text-[#611a1a] text-[17px] font-[550] header-mobile-option"
          >
            <Link href="/" className="option-intro mr-[70px]">
              Trang chủ
            </Link>
            <Link href="/intro" className="option-intro mr-[70px]">
              Giới thiệu
            </Link>
            <Link href="/product" className="option-intro mr-[70px]">
              Sản phẩm
            </Link>
            <div
              onClick={() => {
                setOptionSecretMobile(true);
              }}
              className="option-intro mr-[70px]"
            >
              Bí quyết
            </div>
            {optionSecretMobile && (
              <div className="w-[100%] bg-[white] flex-col flex mr-[70px]">
                <Link
                  href="/beauty"
                  className="option-intro text-[#611a1a] text-[15px] font-[550] mr-[70px]"
                >
                  Làm đẹp
                </Link>
                <Link
                  href="/cuisine"
                  className="option-intro text-[#611a1a] text-[15px] font-[550] mr-[70px]"
                >
                  Ẩm thực
                </Link>
              </div>
            )}
            {/* <Link href="/orderNone" className="option-intro-buying">
              Đặt mua
            </Link> */}
            <Link href="/promotion" className="option-intro mr-[70px]">
              Khuyến mãi
            </Link>

            <Link href="/contact" className="option-intro mr-[70px]">
              Liên hệ
            </Link>
            <Link href="/feedback" className="option-intro mr-[70px]">
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
        <div className="mt-[20px] flex justify-center items-center text-[#611a1a] text-[17px] font-[550] header-option">
          <Link
            href="/"
            onClick={() => {
              setIntroShow(false);
              setHomepageShow(true);
              setOptionProduct(false);
              setOptionSecret(false);
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
              homepageShow
                ? "text-[#f4aa2a] italic font-[550] option-intro-active mr-[70px]"
                : "option-intro mr-[70px]"
            }
          >
            Trang chủ
          </Link>
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
              setOptionSecret(false);
              setPromotionShow(false);
            }}
            className={
              introShow
                ? "text-[#f4aa2a] italic font-[550] option-intro-active mr-[70px]"
                : "option-intro mr-[70px]"
            }
          >
            Giới thiệu
          </Link>
          <p
            onClick={() => {
              setOptionProduct(!optionProduct);
              setOptionSecret(false);
            }}
            className={
              optionProduct
                ? "text-[#f4aa2a] italic font-[550] option-intro-active cursor-pointer mr-[70px]"
                : "option-intro cursor-pointer mr-[70px]" && productShow
                ? "text-[#f4aa2a] italic font-[550] option-intro-active cursor-pointer mr-[70px]"
                : "option-intro cursor-pointer mr-[70px]"
            }
          >
            Sản phẩm
          </p>
          <p
            onClick={() => {
              setOptionSecret(!optionSecret);
              setOptionProduct(false);
            }}
            className={
              optionSecret
                ? "text-[#f4aa2a] italic font-[550] option-intro-active mr-[70px]"
                : "option-intro mr-[70px]"
            }
          >
            Bí quyết
          </p>
          {orderShow && (
            <div
              className={
                orderShow
                  ? "text-[#f4aa2a] italic font-[550] option-intro-active mr-[70px]"
                  : "option-intro-buying mr-[70px]"
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
              setOptionSecret(false);
              setFeedbackShow(false);
            }}
            className={
              promotionShow
                ? "text-[#f4aa2a] italic font-[550] option-intro-active mr-[70px]"
                : "option-intro mr-[70px]"
            }
          >
            Khuyến mãi
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
              setFeedbackShow(false);
              setOptionSecret(false);
              setPromotionShow(false);
            }}
            className={
              contactShow
                ? "text-[#f4aa2a] italic font-[550] option-intro-active mr-[70px]"
                : "option-intro mr-[70px]"
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
              setOptionSecret(false);
              setCuisineShow(false);
            }}
            className={
              feedbackShow
                ? "text-[#f4aa2a] italic font-[550] option-intro-active mr-[70px]"
                : "option-intro mr-[70px]"
            }
          >
            Feedback
          </Link>
        </div>
      </div>
      {optionProduct && (
        <div className=" health-and-beauty-homepage-option-product__container absolute w-[100%] bg-white z-[9999]">
          <div className="p-[20px] flex items-center justify-center leading-[2.2] heading-option-product">
            <div className="text-[#611a1a] flex flex-col  text-[19px] font-[400] mr-[350px]">
              {ProductList.map((items: ProductListTypes) => (
                <Link
                  href={`/product/${items.idProduct}`}
                  key={items.idProduct}
                  className="cursor-pointer hover:underline"
                  onClick={() => {
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
      {optionSecret && (
        <div className=" health-and-beauty-homepage-option-product__container absolute w-[100%] bg-white z-[9999] border-solid border border-t-[#e8e6e6] border-x-0 border-b-0 ">
          <div className="justify-evenly items-center flex">
            <div className="flex w-[100%] justify-evenly items-center px-[200px]">
              <div className="w-fit">
                <div className="w-[100%] flex flex-col items-center justify-center leading-[1.8] p-[10px] ">
                  <div className="flex w-[100%] items-center">
                    <Image
                      src="https://res.cloudinary.com/dkfg3xljc/image/upload/v1702918236/BeautyProject/2_nksjpk.svg"
                      alt=""
                      width={50}
                      height={50}
                      className="mr-[5px] w-[45px] h-[45px] font-[550]"
                    />
                    <p className="font-[550] text-[25px] text-[#611a1a]">
                      Làm đẹp
                    </p>
                  </div>
                  <div className="w-[100%] flex flex-col text-[16px] leading-[1.5] pl-[5px] mt-[5px]">
                    <div className="cursor-pointer hover:underline">
                      Câu chuyện lịch sử
                    </div>
                    <div className="cursor-pointer hover:underline">
                      {" "}
                      9 công dụng sức khỏe
                    </div>
                    <div className="cursor-pointer hover:underline">
                      Thông tin tổng hợp
                    </div>
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
                        setOptionSecret(false);
                      }}
                      className="cursor-pointer hover:underline"
                    >
                      Xem thêm
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-fit">
                <div className="w-[100%] flex flex-col items-center justify-center p-[10px] ">
                  <div className="flex w-[100%] items-center">
                    <Image
                      src="https://res.cloudinary.com/dkfg3xljc/image/upload/v1702918236/BeautyProject/1_aqwncd.svg"
                      alt=""
                      width={50}
                      height={50}
                      className="mr-[5px] w-[45px] h-[45px] font-[550]"
                    />
                    <p className="font-[550] text-[25px] text-[#611a1a]">
                      Món ngon
                    </p>
                  </div>
                  <div className="w-[100%]  flex flex-col text-[16px] leading-[1.5] pl-[5px] mt-[5px]">
                    <div className="cursor-pointer hover:underline">
                      Câu chuyện lịch sử
                    </div>
                    <div className="cursor-pointer hover:underline">
                      9 công dụng sức khỏe
                    </div>
                    <div className="cursor-pointer hover:underline">
                      Thông tin tổng hợp
                    </div>
                    <Link
                      href="/cuisine"
                      onClick={() => {
                        setContactShow(false);
                        setOptionSecret(false);
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
                      className="cursor-pointer hover:underline"
                    >
                      Xem thêm
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-fit">
                <div className="w-[100%] flex flex-col items-center justify-center p-[10px] ">
                  <div className="flex w-[100%] items-center">
                    <Image
                      src="https://res.cloudinary.com/dkfg3xljc/image/upload/v1702918235/BeautyProject/3_blxuwo.svg"
                      alt=""
                      width={50}
                      height={50}
                      className="mr-[5px] w-[45px] h-[45px] font-[550]"
                    />
                    <p className="font-[550] text-[25px] text-[#611a1a]">
                      Tìm hiểu
                    </p>
                  </div>
                  <div className="w-[100%]  flex flex-col text-[16px] leading-[1.5] pl-[5px] mt-[5px]">
                    <div className="cursor-pointer hover:underline">
                      Câu chuyện lịch sử
                    </div>
                    <div className="cursor-pointer hover:underline">
                      {" "}
                      9 công dụng sức khỏe
                    </div>
                    <div className="cursor-pointer hover:underline">
                      Thông tin tổng hợp
                    </div>
                    <div className="cursor-pointer hover:underline">Video</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-[10px] bg-[#efece3] text-sm option-product"></div>
        </div>
      )}
    </div>
  );
};

export default HeaderHAB;
