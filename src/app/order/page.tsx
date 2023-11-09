"use client"; // Error components must be Client Components
import { CartContext } from "@/context/CartContext";
import { AdditionalItemTypes, ProductListTypes } from "@/types/Interface";
import React, { useContext } from "react";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Image from "next/image";
import { BiErrorCircle } from "react-icons/bi";
import { AdditionalItemsList } from "@/data/data";
const OrderPage = () => {
  const { cart, setCart } = useContext(CartContext);
  const [popUpDelete, setPopUpDelete] = useState(false);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState(false);
  const [recommendation, setRecommendation] = useState<boolean | null>(null);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [selectedAdditionalItems, setSelectedAdditionalItems] = useState<
    AdditionalItemTypes[]
  >([]);
  const handleRecommendationChange = (value: boolean) => {
    setRecommendation(value);
  };
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
  const plusNumAddMore = (item: AdditionalItemTypes) => {
    item.quantity += 1;
    // Update the cart state using the setCart function passed as a prop
    setCart([...cart]);
  };
  const minNumAddMore = (item: AdditionalItemTypes) => {
    if (item.quantity > 1) {
      // Decrease the quantity by 1
      item.quantity -= 1;
      // Update the cart state
      setCart([...cart]);
    } else {
      setPopUpDelete(true);
    }
  };
  const removeProduct = (productId: string) => {
    const updatedCart = cart.filter((item) => item.idProduct !== productId);
    setCart(updatedCart);
    setPopUpDelete(false);
  };
  const handleCheckboxChange = (itemId: number) => {
    const selectedItem = AdditionalItemsList.find((item) => item.id === itemId);

    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
      setSelectedAdditionalItems(
        selectedAdditionalItems.filter((item) => item.id !== itemId)
      );
    } else {
      setSelectedItems([...selectedItems, itemId]);
      setSelectedAdditionalItems([...selectedAdditionalItems, selectedItem!]);
    }
  };
  const transport = 30000;
  const calculateTotalPrice = (): number => {
    const selectedItemsTotal = selectedAdditionalItems.reduce(
      (total, selectedItem) => {
        return total + selectedItem.price * selectedItem.quantity;
      },
      0
    );

    const cartTotal = cart.reduce((total, cartItem) => {
      return total + cartItem.priceProduct * cartItem.quantity;
    }, 0);

    return selectedItemsTotal + cartTotal + transport;
  };

  return (
    <div className="bg-[#a72020] px-[200px] py-[50px] order__container">
      <div className="flex items-center justify-center w-[100%] pb-[20px] order-tittle">
        <p className="font-[550] text-white text-[25px]">Đơn của bạn</p>
      </div>
      <div className="flex gap-[200px] py-[50px]  border-none rounded-[5px] placeholder:text-[#a72020] focus:outline-none-bag order-background">
        <div>
          <div className="pt-[50px] order-background-info-user">
            <div className="order-product-buying-left">
              <p className="text-[18px] font-[500] text-white order-background-info-user-name">
                Thông tin giao hàng
              </p>
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    if (e.target.value !== "") {
                      setNameError(false);
                    }
                    setName(e.target.value);
                  }}
                  onBlur={() => {
                    if (name === "") {
                      setNameError(true);
                    }
                  }}
                  className="pl-[10px] p-[10px] text-[14px] mt-[25px] w-[300px] bg-white border-none rounded-[5px] placeholder:text-[#a72020] focus:outline-none order-background-info-user-input"
                  id=""
                  placeholder="Tên của bạn *"
                />
              </div>
              {nameError && (
                <div className="bg-[#fff9e7] p-[7px] mt-[7px] text-[14px] text-[#a72020] flex items-center w-[75%] order-background-info-user-input">
                  <BiErrorCircle size={20} className=" mr-[5]" /> Anh Chị chưa
                  nhập tên.
                </div>
              )}
              <div>
                <input
                  type="number"
                  value={phone}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    setPhone(inputValue.replace(/[^0-9]/g, ""));
                    if (e.target.value != "") {
                      return setPhoneError(false);
                    }
                    setPhone(e.target.value);
                  }}
                  onBlur={() => {
                    if (phone === "") {
                      setPhoneError(true);
                    }
                  }}
                  className="order-background-info-user-input pl-[10px] p-[10px] text-[14px] mt-[25px] w-[300px] bg-white  border-none rounded-[5px] placeholder:text-[#a72020] focus:outline-none"
                  placeholder="Số điện thoại *"
                />
              </div>
              {phoneError && (
                <div className="bg-[#fff9e7] p-[7px] mt-[7px] text-[14px] text-[#a72020] flex items-center w-[75%] order-background-info-user-input">
                  <BiErrorCircle size={20} className=" mr-[5]" /> Anh Chị chưa
                  nhập số điện thoại.
                </div>
              )}
              <div>
                <input
                  type="text"
                  className="order-background-info-user-input pl-[10px] p-[13px] text-[14px] mt-[25px] w-[400px]  bg-white border-none rounded-[5px] placeholder:text-[#a72020] focus:outline-none"
                  id=""
                  value={address}
                  onChange={(e) => {
                    if (e.target.value != "") {
                      setAddressError(false);
                    }
                    setAddress(e.target.value);
                  }}
                  onBlur={() => {
                    if (address === "") {
                      setAddressError(true);
                    }
                  }}
                  placeholder="Địa chỉ nhận hàng *"
                />
              </div>
              {addressError && (
                <div className="bg-[#fff9e7] p-[7px] mt-[7px] w-[100%] text-[14px] text-[#a72020] flex items-center order-background-info-user-input">
                  <BiErrorCircle size={20} className=" mr-[5]" /> Anh Chị chưa
                  nhập địa chỉ.
                </div>
              )}
            </div>
            <div className="order-option-buying-right">
              <p className="order-background-info-user-name text-[18px] font-[500] text-white mt-[40px]">
                Phương thức thanh toán{" "}
              </p>
              <div className="mt-[20px] product-detail-HAB-comment-share">
                <label className="flex items-center " htmlFor="like">
                  <input
                    type="radio"
                    id="like"
                    value="like"
                    className="detail-product-comment-table-option-radio mr-[5px]"
                    name="inputRadio"
                    checked={recommendation === true}
                    onChange={() => handleRecommendationChange(true)}
                    required
                  />
                  <p className="text-[white] font-[550]">Chuyển khoản</p>
                </label>
                <label
                  htmlFor="dislike"
                  className="flex items-center mt-[20px]"
                >
                  <input
                    type="radio"
                    className="text-[#a72020] detail-product-comment-table-option-radio mr-[5px]"
                    id="dislike"
                    value="dislike"
                    name="inputRadio"
                    checked={recommendation === false}
                    onChange={() => handleRecommendationChange(false)}
                    required
                  />
                  <p className=" text-[white] font-[550] ">COD</p>
                </label>
              </div>
            </div>
          </div>
          <div className="mt-[40px] h-[50px] w-[400px]  font-[550] text-[#a72020] bg-white text-[18px] rounded-[7px] cursor-pointer flex items-center justify-center order-background-accept-buying">
            <p>Xác nhận</p>
          </div>
          <p className="text-white  text-[12px] mt-[10px] order-product-cart-note">
            * SAU KHI CLICK XÁC NHẬN THÌ TRONG ZALO / TIN NHẮN ĐT SẼ CÓ TIN NHẮN
            ĐẶT HÀNG
          </p>
        </div>
        <div className="bg-white w-[650px] p-[30px] rounded-[7px] order-option-cart__container">
          <div className="order-option-cart">
            <div className="cursor-pointer order-option-cart-return-btn">
              <div className="mt-[10px]  text-xl pb-[10px] order-option-cart-number">
                <p className="text-[#611a1a] font-[500] order-option-cart-number">
                  Thông tin đơn hàng
                </p>
              </div>
            </div>
            <div className="order-option-cart-product-buying w-[100%]">
              {cart &&
                cart.map((items) => {
                  return (
                    <div
                      key={items.idProduct}
                      className="mt-[40px] w-[100%] flex items-start gap-[10px] order-option-cart-product-buying-option-all"
                    >
                      <p className="w-[130px] h-[140px] bg-slate-300 order-option-cart-product-buying-image">
                        <Image
                          src={items.imgProfile.imgProfile1.src}
                          alt={items.imgProfile.imgProfile1.alt}
                          width={items.imgProfile.imgProfile1.width}
                          height={items.imgProfile.imgProfile1.height}
                          loading="lazy"
                          className="w-[130px] h-[140px] object-fill order-option-cart-product-buying-image"
                        />
                      </p>
                      <div className="flex flex-col order-option-cart-product-buying-option w-full">
                        <p className="order-option-cart-product-buying-option-name">
                          {items.nameProduct}
                        </p>
                        <div className="flex mt-[95px] w-[100%] order-option-cart-product-buying-option-price-quantity">
                          <div className="flex gap-[10px] items-center text-[14px] order-option-cart-product-buying-option-quantity">
                            <p onClick={() => minNum(items)}>
                              <AiOutlineMinus />
                            </p>
                            <p>{items.quantity}</p>
                            <p onClick={() => plusNum(items)}>
                              <AiOutlinePlus />
                            </p>
                          </div>
                          <p className="text-[14px] order-option-cart-product-buying-option-price ml-[auto]">
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
            <div className="order-option-add-more-container py-[20px]">
              <div className="order-option-add-more-tittle text-[18px] text-[#611a1a] font-[550]">
                Chọn thêm
              </div>
              <div className="order-option-add-more-content mt-[10px]">
                <div className="order-option-add-more-content mt-[10px]">
                  {AdditionalItemsList.map((item) => (
                    <div
                      key={item.id}
                      className="order-option-add-more-content-detail flex items-start"
                    >
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(item.id)}
                        onChange={() => handleCheckboxChange(item.id)}
                        className="order-option-add-more-content-detail-checkbox mr-[10px] w-[20px] h-[20px] accent-[#a72020]"
                      />
                      <div className="order-option-add-more-content-detail-items w-[100%] mr-[10px]">
                        {item.name}
                      </div>
                      <div className="order-option-add-more-content-detail-items-quantity w-[fit] ml-[10px] justify-start items-center mr-[10px] flex">
                        <p
                          onClick={() => minNumAddMore(item)}
                          className="mr-[3px] "
                        >
                          <AiOutlineMinus />
                        </p>
                        <p className="mr-[3px] text-[14px]">{item.quantity}</p>
                        <p onClick={() => plusNumAddMore(item)}>
                          <AiOutlinePlus />
                        </p>
                      </div>
                      <div className="order-option-add-more-content-detail-price ml-auto text-[14px] flex items-center justify-end w-[30%]">
                        {item.price.toLocaleString("vi-VN")}đ
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-[20px] py-[10px] text-[14px] text-[#611a1a] font-[500] order-sum-product">
              <div className="flex items-center">
                <p>Tổng tiền hàng cộng</p>
                <p className="ml-auto ">
                  {calculateTotalPrice().toLocaleString("vi-VN")}đ
                </p>
              </div>
              <div className="flex items-center mt-[15px]">
                <p>Phí vận chuyển</p>
                <p className="ml-auto">{transport.toLocaleString("vi-VN")}đ</p>
              </div>
            </div>

            <div className="flex font-[550] text-[18px] text-[#611a1a] pt-[20px] pb-[20px] items-center order-option-cart-sum">
              <p>Tổng cộng</p>

              <p className="ml-auto ">
                {calculateTotalPrice().toLocaleString("vi-VN")}đ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
