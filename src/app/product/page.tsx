"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { ProductList } from "@/data/data";
import { ProductListTypes } from "@/types/Interface";
import ShoppingBag from "../header/component/ShoppingBag"; // Import the ShoppingBag component
import { CartContext } from "@/context/CartContext";
import { handleAddToCart } from "@/utils/function";
import { useRouter } from "next/navigation";

const ProductHAB = () => {
  const { cart, setCart } = useContext(CartContext);
  const router = useRouter();
  const [cartVisible, setCartVisible] = useState(false);

  const hideShoppingCart = () => {
    setCartVisible(false);
  };
  useEffect(() => {
    localStorage.setItem("shoppingBag", JSON.stringify(cart));
  }, [cart]);
  return (
    <div>
      <div className="bg-[#a72020] product-HAB__container">
        <div>
          <div className=" pt-[30px] flex items-center justify-center font-[400] text-[25px] text-white">
            Tất cả sản phẩm
          </div>
          <div className="text-white p-[50px] flex-wrap flex product-HAB-items-container w-[100%] justify-center ">
            {ProductList.map((items: ProductListTypes) => {
              return (
                <div
                  key={items.idProduct}
                  className="w-[200px] leading-[2] product-HAB-items-container-show mr-[100px]"
                >
                  <div
                    onClick={() => {
                      router.push(`/product/${items.idProduct}`);
                    }}
                    className="w-[200px] h-[210px] bg-slate-500 cursor-pointer product-HAB-items"
                  >
                    <Image
                      src={items.imgProfile.imgProfile1.src}
                      alt={items.imgProfile.imgProfile1.alt}
                      width={items.imgProfile.imgProfile1.width}
                      height={items.imgProfile.imgProfile1.height}
                      loading="lazy"
                      className="h-[210px] w-[200px] object-fill product-HAB-items-image"
                    />
                  </div>
                  <p className="text-center flex items-center justify-center font-[550] mt-3 product-HAB-items-name">
                    {items.nameProduct}
                  </p>
                  <div className="flex text-sm mt-3 product-HAB-items-btn">
                    <p
                      onClick={() => {
                        handleAddToCart(
                          cart,
                          setCart,
                          items.idProduct,
                          items.quantity
                        );
                      }}
                      className="cursor-pointer hover:underline product-HAB-add"
                    >
                      Thêm vào túi
                    </p>

                    <p className="ml-auto product-HAB-items-price">
                      {items.priceProduct.toLocaleString("vi-VN")}đ
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {cartVisible && (
        <ShoppingBag
          hideShoppingCart={hideShoppingCart}
          orderShow={hideShoppingCart}
        />
      )}
    </div>
  );
};

export default ProductHAB;
