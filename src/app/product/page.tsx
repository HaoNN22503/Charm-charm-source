"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import DetailProduct from "./[url]/page";
import { ProductList } from "@/data/data";
import { ProductListTypes } from "@/types/Interface";
import ShoppingBag from "../header/component/ShoppingBag"; // Import the ShoppingBag component
import HeaderHAB from "../header/page";
import { CartContext } from "@/context/CartContext";
import { handleAddToCart } from "@/utils/function";
import { useRouter } from "next/navigation";
import { it } from "node:test";

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
      <div className="bg-[#611a1a] product-HAB__container">
        <div>
          <div className=" pt-[30px] flex items-center justify-center font-[400] text-[25px] text-white">
            Tất cả sản phẩm
          </div>
          <div className="text-white p-[50px] flex-wrap gap-[100px] flex">
            {ProductList.map((items: ProductListTypes) => {
              return (
                <div key={items.idProduct} className="w-[200px] leading-[2] ">
                  <p
                    onClick={() => {
                      router.push(`/product/${items.urlProduct}`);
                    }}
                    className="w-[200px] h-[210px] bg-slate-500 cursor-pointer"
                  >
                    <Image
                      src={items.imgProfile.imgProfile1.src}
                      alt={items.imgProfile.imgProfile1.alt}
                      width={items.imgProfile.imgProfile1.width}
                      height={items.imgProfile.imgProfile1.height}
                      className="h-[210px] w-[200px] object-fill"
                    />
                  </p>
                  <p className="text-center flex items-center justify-center font-[550] mt-3">
                    {items.nameProduct}
                  </p>
                  <div className="flex text-sm mt-3">
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

                    <p className="ml-auto">
                      {items.priceProduct.toLocaleString("vi-VN")}đ
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {cartVisible && <ShoppingBag hideShoppingCart={hideShoppingCart} />}
    </div>
  );
};

export default ProductHAB;
