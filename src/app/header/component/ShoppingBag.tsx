"use client";
import { ProductListTypes } from "@/types/Interface";
import React, { useContext, useState } from "react";
import { HiOutlineArrowUturnLeft, HiTrash } from "react-icons/hi2";
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
                className="mt-[50px] flex items-center text-[14px]"
              >
                <p>
                  <HiOutlineArrowUturnLeft size={20} />
                </p>
                <p className="ml-[5px]">Tiếp tục mua sắm</p>
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
                  <div className="mt-[20px] h-[150px] flex items-start w-[100%] shopping-bag-option-product">
                    <div className="w-[40%] h-[100%] option-cart-profile mr-[10px]">
                      <Image
                        src={item.imgProfileThumbNails[0].src}
                        alt={item.imgProfileThumbNails[0].alt}
                        width={item.imgProfileThumbNails[0].width}
                        height={item.imgProfileThumbNails[0].height}
                        loading="lazy"
                        className="w-[100%] h-[100%] option-cart-profile-image"
                      />
                    </div>
                    <div className="flex h-[100%] w-[60%] flex-col option-cart-profile-product">
                      <p className="font-[600]">{item.nameProduct}</p>
                      <div className="flex mt-auto items-end justify-between shoping-bag-option-price-number">
                        <div className="flex items-center text-[14px] ">
                          <p className="mr-[10px]" onClick={() => minNum(item)}>
                            <AiOutlineMinus />
                          </p>
                          <p className="mr-[10px]">{item.quantity}</p>
                          <p onClick={() => plusNum(item)}>
                            <AiOutlinePlus />
                          </p>
                        </div>
                        <p
                          onClick={() => removeFromCart(item.idProduct)}
                          className="cursor-pointer hover:underline "
                        >
                          <HiTrash size={20} className="text-[red]" />
                        </p>
                        <div className="text-[14px] font-[600]">
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
