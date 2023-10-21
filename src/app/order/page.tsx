"use client"; // Error components must be Client Components
import { CartContext } from "@/context/CartContext";
import { ProductListTypes } from "@/types/Interface";
import React, { useContext } from "react";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Image from "next/image";
const OrderPage = () => {
  const [number, setNumber] = useState(1);
  const { cart, setCart } = useContext(CartContext);
  const [popUpDelete, setPopUpDelete] = useState(false);
  const minNum = (item: ProductListTypes) => {
    if (item.quantity > 1) {
      // Decrease the quantity by 1
      item.quantity -= 1;
      // Update the cart state
      setCart([...cart]);
    } else {
      setPopUpDelete(true);
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
  const transport = 30000;
  const calculateTotalAll = () => {
    // Check if cart is defined before using reduce
    if (cart) {
      const totalPrice = cart.reduce(
        (total, item) => total + item.priceProduct * item.quantity,
        0
      );
      return totalPrice + transport;
    }

    // If cart is undefined, return 0 or handle it as needed
    return 0;
  };

  const removeProduct = (productId: number) => {
    const updatedCart = cart.filter((item) => item.idProduct !== productId);
    setCart(updatedCart);
    setPopUpDelete(false);
  };

  return (
    <div>
      <div className="bg-[#611a1a] px-[200px] py-[50px]  order__container">
        <div className="flex items-center justify-center w-[100%] pb-[20px] order-tittle">
          <p className="font-[550] text-white text-[25px]">Đơn của bạn</p>
        </div>
        <div className="flex gap-[200px] py-[50px]  border-none rounded-[5px] placeholder:text-[#a72020] focus:outline-none-bag">
          <div className="pt-[50px]">
            <p className="text-[18px] font-[500] text-white ">
              Thông tin giao hàng
            </p>
            <div>
              <input
                type="text"
                className="pl-[10px] p-[10px] text-[14px] mt-[25px] w-[300px] bg-white border-none rounded-[5px] placeholder:text-[#a72020] focus:outline-none"
                id=""
                placeholder="Tên của bạn *"
              />
            </div>
            <div>
              <input
                type="number"
                className="pl-[10px] p-[10px] text-[14px] mt-[25px] w-[300px] bg-white  border-none rounded-[5px] placeholder:text-[#a72020] focus:outline-none"
                placeholder="Số điện thoại *"
              />
            </div>
            <div>
              <input
                type="text"
                className="pl-[10px] p-[13px] text-[14px] mt-[25px] w-[400px]  bg-white border-none rounded-[5px] placeholder:text-[#a72020] focus:outline-none"
                id=""
                placeholder="Địa chỉ nhận hàng *"
              />
            </div>
            <p className="text-[18px] font-[500] text-white  mt-[40px]">
              Phương thức thanh toán{" "}
            </p>
            <div className="ml-[5px]">
              <div className="flex items-end gap-[10px] text-white mt-[30px] text-[14px]">
                <input type="checkbox" className="h-[20px] w-[20px] " id="" />
                <p>Chuyển khoản</p>
              </div>
              <div className="flex items-center gap-[10px] text-white text-[14px] mt-[15px]">
                <input type="checkbox" className="h-[20px] w-[20px]" id="" />
                <p>COD</p>
              </div>
            </div>
            <div className="mt-[40px] h-[50px] w-[400px]  font-[550] text-[#a72020] bg-white text-[18px] rounded-[7px] cursor-pointer flex items-center justify-center">
              <p>Xác nhận</p>
            </div>
            <p className="text-white  text-[12px] mt-[10px]">
              * SAU KHI CLICK XÁC NHẬN THÌ TRONG ZALO/TIN NHẮN ĐT SẼ CÓ
              <br /> TIN NHẮN ĐẶT HÀNG
            </p>
          </div>
          <div className="bg-white w-[450px] p-[30px] rounded-[7px] order-option-cart__container">
            <div className="order-option-cart">
              <div className="cursor-pointer order-option-cart-return-btn">
                <div className="mt-[10px]  text-xl pb-[10px] order-option-cart-number">
                  <p className="text-[#611a1a] font-[500]">
                    Thông tin đơn hàng
                  </p>
                </div>
              </div>
              <div className="order-option-cart-product-buying">
                {cart &&
                  cart.map((items) => {
                    return (
                      <div
                        key={items.idProduct}
                        className="mt-[40px] flex items-start gap-[10px]"
                      >
                        <p className="w-[130px] h-[140px] bg-slate-300">
                          <Image
                            src={items.imgProfile.imgProfile1.src}
                            alt={items.imgProfile.imgProfile1.alt}
                            width={items.imgProfile.imgProfile1.width}
                            height={items.imgProfile.imgProfile1.height}
                            className="w-[130px] h-[140px] object-fill"
                          />
                        </p>
                        <div className="flex flex-col">
                          <p>{items.nameProduct}</p>
                          <div className="flex gap-[40px] mt-[95px]">
                            <div className="flex gap-[10px] items-center text-[14px]">
                              <p onClick={() => minNum(items)}>
                                <AiOutlineMinus />
                              </p>
                              <p>{items.quantity}</p>
                              <p onClick={() => plusNum(items)}>
                                <AiOutlinePlus />
                              </p>
                            </div>
                            <p className="text-[14px]">
                              {items.priceProduct.toLocaleString("vi-VN")}đ
                            </p>
                          </div>
                        </div>
                        {popUpDelete && (
                          <div className="z-[9999] fixed flex justify-center items-center right-0 bottom-0 top-0 left-0 bg-[rgb(0,0,0,0.3)]">
                            <div className="bg-white w-[350px] h-[130px] rounded-[10px] p-[20px] popUp-delete-form">
                              <p>
                                Bạn có chắc chắn muốn xóa xản phẩm này không ?
                              </p>
                              <div className="flex mt-[20px]">
                                <p
                                  onClick={() => {
                                    if (items.idProduct) {
                                      removeProduct(items.idProduct);
                                    }
                                  }}
                                  className="ml-auto h-[30px] w-[80px] text-white font-[550] text-[16px] bg-[#611a1a]  flex items-center justify-center mr-[10px] cursor-pointer rounded-[7px]"
                                >
                                  Đồng ý
                                </p>
                                <p
                                  onClick={() => {
                                    setPopUpDelete(false);
                                  }}
                                  className="h-[30px] w-[70px] font-[550] text-[16px] text-black bg-[#d5d5d5] border border-solid flex items-center justify-center border-[#d5d5d5] mr-[10px] cursor-pointer rounded-[7px]"
                                >
                                  Không
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
              <div className="mt-[20px] p-[10px] text-[14px] text-[#611a1a] font-[500] order-sum-product">
                <div className="flex items-center">
                  <p>Tổng tiền hàng cộng</p>
                  <p className="ml-auto ">
                    {calculateTotal().toLocaleString("vi-VN")}đ
                  </p>
                </div>
                <div className="flex items-center mt-[15px]">
                  <p>Phí vận chuyển</p>
                  <p className="ml-auto">
                    {transport.toLocaleString("vi-VN")}đ
                  </p>
                </div>
              </div>

              <div className="flex font-[550] text-[18px] text-[#611a1a] pt-[20px] pb-[20px] items-center order-option-cart-sum">
                <p>Tổng cộng</p>
                <p className="ml-auto">
                  {calculateTotalAll().toLocaleString("vi-VN")}đ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
