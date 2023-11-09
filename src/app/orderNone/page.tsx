import React from "react";
import Link from "next/link";

const OrderNonePage = () => {
  return (
    <div>
      <div className="bg-[#a72020] px-[200px] py-[50px] order-none__container">
        <div className="flex items-center justify-center w-[100%] pb-[20px] order-none-tittle">
          <p className="font-[550] text-white text-[25px]">Đơn của bạn</p>
        </div>
        <div className="flex gap-[200px] py-[50px] order-none-infor-bag">
          <div>
            <div className="pt-[50px] order-none-background-info-user">
              <div className="order-none-product-buying-left">
                <p className="text-[18px] font-[500] text-white order-none-background-info-user-name">
                  Thông tin giao hàng
                </p>
                <p>
                  <input
                    type="text"
                    className=" order-none-background-info-user-input pl-[10px] p-[7px] text-[14px] mt-[25px] w-[300px] border-none rounded-[5px] bg-white  placeholder:text-[#a72020] focus:outline-none"
                    id=""
                    placeholder="Tên của bạn *"
                  />
                </p>
                <p>
                  <input
                    type="number"
                    className="order-none-background-info-user-input pl-[10px] p-[7px] text-[14px] mt-[25px] w-[300px] bg-white rounded-[5px] placeholder:text-[#a72020] focus:outline-none "
                    placeholder="Số điện thoại *"
                  />
                </p>
                <p>
                  <input
                    type="text"
                    className="order-none-background-info-user-input pl-[10px] p-[9px] text-[14px] mt-[25px] w-[400px]  bg-white rounded-[5px] placeholder:text-[#a72020] focus:outline-none"
                    id=""
                    placeholder="Địa chỉ nhận hàng *"
                  />
                </p>
              </div>
              <div className="order-none-option-buying-right">
                <p className="order-none-background-info-user-name text-[18px] font-[500] text-white  mt-[40px]">
                  Phương thức thanh toán{" "}
                </p>
                <div className="ml-[5px]">
                  <div className="flex items-end gap-[10px] text-white mt-[30px] text-[14px]">
                    <input
                      type="checkbox"
                      className="h-[20px] w-[20px] "
                      id=""
                    />
                    <p>Chuyển khoản</p>
                  </div>
                  <div className="flex items-center gap-[10px] text-white text-[14px] mt-[15px]">
                    <input
                      type="checkbox"
                      className="h-[20px] w-[20px]"
                      id=""
                    />
                    <p>COD</p>
                  </div>
                </div>{" "}
              </div>
            </div>{" "}
            <div className="mt-[40px] h-[50px] w-[400px]  font-[550] text-[#a72020] bg-white text-[18px] rounded-[7px] cursor-pointer flex items-center justify-center order-none-background-accept-buying">
              <p>Xác nhận</p>
            </div>
            <p className="text-white text-[12px] mt-[10px] order-none-product-cart-note">
              * SAU KHI CLICK XÁC NHẬN THÌ TRONG ZALO / TIN NHẮN ĐT SẼ CÓ TIN
              NHẮN ĐẶT HÀNG
            </p>
          </div>
          <div className="bg-white w-[450px] p-[30px] rounded-[7px] order-none-option-cart__container">
            <div className="order-none-option-cart">
              <div className="cursor-pointer order-none-option-cart-return-btn">
                <div className="mt-[10px]  text-xl pb-[10px] order-none-option-cart-number">
                  <p className="text-[#611a1a] font-[500] order-none-option-cart-number">
                    Thông tin đơn hàng
                  </p>
                </div>
              </div>
              <div className="w-[100%] justify-center items-center flex flex-col">
                <p className="flex text-[#611a1a] items-center justify-center mt-[40px]">
                  Bạn chưa chọn sản phẩm để mua hàng
                </p>
                <Link
                  href="/product"
                  className="p-[10px] mt-[20px] font-[550] rounded-[5px] w-fit  cursor-pointer text-[#611a1a] flex items-center justify-center border border-[#611a1a] order-none-continue-buying"
                >
                  Tiếp tục mua sắm
                </Link>
              </div>

              <div className="mt-[20px] py-[10px] text-[14px] text-[#611a1a] font-[500] order-none-sum-product">
                <div className="flex items-center">
                  <p>Tổng tiền hàng cộng</p>
                  <p className="ml-auto">0đ</p>
                </div>
                <div className="flex items-center">
                  <p>Phí vận chuyển</p>
                  <p className="ml-auto">0đ</p>
                </div>
              </div>
              <div className="flex font-[550] text-[18px] text-[#611a1a] pt-[20px] pb-[20px] items-center order-none-option-cart-sum">
                <p>Tổng cộng</p>
                <p className="ml-auto">0đ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderNonePage;
