"use client";
import { ProductListTypes } from "@/types/Interface";
import React, { useContext, useState } from "react";
import { HiOutlineArrowUturnLeft } from "react-icons/hi2";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
import { CartContext } from "@/context/CartContext";
import Image from "next/image";
const ShoppingBag = ({
  hideShoppingCart,
}: {
  hideShoppingCart: () => void;
}) => {
  const [closeShoppingBag, setCloseShoppingBag] = useState(true);
  const [returnHomePage, setReturnHomePage] = useState(false);
  const { cart, setCart } = useContext(CartContext);
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
  const calculateTotal = () => {
    // Check if cart is defined before using reduce
    if (cart) {
      return cart.reduce(
        (total, item) => total + item.priceProduct * item.quantity,
        0
      );
    }

    // If cart is undefined, return 0 or handle it as needed
    return 0;
  };
  const removeFromCart = (productId: number) => {
    // Remove the item from the cart
    const updatedCart = cart.filter((item) => item.idProduct !== productId);
    setCart(updatedCart);
  };
  const toggleShoppingBag = () => {
    setCloseShoppingBag(!closeShoppingBag);
  };

  return (
    <div>
      {closeShoppingBag && (
        <div className=" option-cart__container ">
          <div className="option-cart overflow-auto">
            <div className="cursor-pointer option-cart-return-btn">
              <div
                onClick={() => {
                  toggleShoppingBag();
                  setReturnHomePage(true);
                }}
                className="mt-[50px] gap-[5px] flex items-center text-[14px]"
              >
                <p>
                  <HiOutlineArrowUturnLeft size={20} />
                </p>
                <p>Tiếp tục mua sắm</p>
              </div>
              {cart.length > 0 && (
                <div className="mt-[50px] flex items-center text-xl option-cart-number">
                  <p className="text-[#611a1a] font-[500]">Túi hàng của bạn</p>
                  <p className="ml-auto text-base mr-[10px]">
                    {cart.reduce((total, item) => total + item.quantity, 0)} món
                  </p>
                </div>
              )}
            </div>
            {cart &&
              cart.map((item) => (
                <div
                  key={item.idProduct}
                  className="mb-[40px] option-cart-product-buying"
                >
                  <div className="mt-[20px] flex items-start gap-[10px]">
                    <p className="w-[130px] h-[140px] bg-slate-300">
                      <Image
                        src={item.imgProfile.imgProfile1.src}
                        alt={item.imgProfile.imgProfile1.alt}
                        width={item.imgProfile.imgProfile1.width}
                        height={item.imgProfile.imgProfile1.height}
                        className="w-[130px] h-[140px] object-fill"
                      />
                    </p>
                    <div className="flex flex-col">
                      <p>{item.nameProduct}</p>
                      <div className="flex gap-[40px] mt-[95px]">
                        <div className="flex gap-[10px] items-center text-[14px]">
                          <p onClick={() => minNum(item)}>
                            <AiOutlineMinus />
                          </p>
                          <p>{item.quantity}</p>

                          <p></p>
                          <p onClick={() => plusNum(item)}>
                            <AiOutlinePlus />
                          </p>
                        </div>
                        <p
                          onClick={() => removeFromCart(item.idProduct)}
                          className="cursor-pointer hover:underline"
                        >
                          Remove
                        </p>
                        <div className="text-[14px]">
                          <p>{item.priceProduct.toLocaleString("vi-VN")}đ</p>

                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            <div className="flex font-[550] text-[18px] pl-[40px] pr-[40px] pt-[20px] pb-[40px] items-center option-cart-sum">
              <p>Tổng cộng</p>
              <p className="ml-auto ">
                {calculateTotal().toLocaleString("vi-VN")}đ
              </p>
            </div>
            <Link
              onClick={() => {
                hideShoppingCart(); // Hide the shopping cart when navigating to the order page
              }}
              href="/order"
              //   onClick={() => {
              //     setOrderShow(true);
              //     setHomepageShow(false);
              //     setIntroShow(false);
              //     setOptionProduct(false);
              //     setProductShow(false);
              //     setOptionShoppingBag(false);
              //     setOrderNoneShow(false);
              //     setBeautyShow(false);
              //     setContactShow(false);
              //     setCuisineShow(false);
              //   }}
              className=" h-[50px] w-[330px] ml-[45px] font-[550] text-white bg-[#611a1a] text-[18px] rounded-[5px] cursor-pointer flex items-center justify-center option-cart-buying-btn"
            >
              <p>Đặt đơn</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default ShoppingBag;
