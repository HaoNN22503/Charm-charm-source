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
  orderShow,
}: {
  hideShoppingCart: () => void;
  orderShow: () => void;
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
  const removeFromCart = (productId: string) => {
    // Remove the item from the cart
    const updatedCart = cart.filter((item) => item.idProduct !== productId);
    setCart(updatedCart);
  };
  const toggleShoppingBag = () => {
    setCloseShoppingBag(!closeShoppingBag);
  };

  const isCartEmpty = cart.length === 0;
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
            {cart.length > 0 ? (
              cart.map((item) => (
                <div
                  key={item.idProduct}
                  className="mb-[40px] option-cart-product-buying"
                >
                  <div className="mt-[20px] flex items-start gap-[10px]">
                    <div className="w-[130px] h-[140px] bg-slate-300 option-cart-profile">
                      <Image
                        src={item.imgProfile.imgProfile1.src}
                        alt={item.imgProfile.imgProfile1.alt}
                        width={item.imgProfile.imgProfile1.width}
                        height={item.imgProfile.imgProfile1.height}
                        loading="lazy"
                        className="w-[130px] h-[140px] object-fill option-cart-profile-image"
                      />
                    </div>
                    <div className="flex flex-col option-cart-profile-product">
                      <p>{item.nameProduct}</p>
                      <div className="flex gap-[40px] mt-[95px]">
                        <div className="flex gap-[10px] items-center text-[14px]">
                          <p onClick={() => minNum(item)}>
                            <AiOutlineMinus />
                          </p>
                          <p>{item.quantity}</p>
                          <p onClick={() => plusNum(item)}>
                            <AiOutlinePlus />
                          </p>
                        </div>
                        <p
                          onClick={() => removeFromCart(item.idProduct)}
                          className="cursor-pointer hover:underline"
                        >
                          Xóa
                        </p>
                        <div className="text-[14px]">
                          <p>{item.priceProduct.toLocaleString("vi-VN")}đ</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center mt-4">
                <p>Bạn chưa có sản phẩm nào trong giỏ hàng.</p>
                <div className="w-[100%] flex justify-center items-center">
                  <Link
                    onClick={() => {
                      setCloseShoppingBag(false);
                    }}
                    href="/product"
                    className=" p-[10px] mt-[20px] font-[550] rounded-[5px]  cursor-pointer text-[#611a1a] flex items-center justify-center border border-[#611a1a] "
                  >
                    Tiếp tục mua sắm
                  </Link>
                </div>
              </div>
            )}
            <div className="flex font-[550] text-[18px] pl-[40px] pr-[40px] pt-[20px] pb-[40px] items-center option-cart-sum">
              <p>Tổng cộng</p>
              <p className="ml-auto ">
                {calculateTotal().toLocaleString("vi-VN")}đ
              </p>
            </div>{" "}
            <div className="flex justify-center items-center flex-col">
              <Link
                onClick={() => {
                  hideShoppingCart();
                  orderShow(); // Hide the shopping cart when navigating to the order page
                }}
                href="/order"
                className={`option-cart-buying-btn h-[50px] w-[330px] ml-[45px] font-[550] text-white text-[18px] rounded-[5px] cursor-pointer flex items-center justify-center  ${
                  isCartEmpty
                    ? "bg-gray-400 pointer-events-none"
                    : "bg-[#611a1a]"
                }`}
              >
                <p>Đặt đơn</p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ShoppingBag;
