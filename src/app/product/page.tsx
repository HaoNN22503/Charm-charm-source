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
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [defaultSize, setDefaultSize] = useState<string>("");
  const [defaultPrice, setDefaultPrice] = useState<number>();

  const hideShoppingCart = () => {
    setCartVisible(false);
  };
  useEffect(() => {
    localStorage.setItem("shoppingBag", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    console.log("Default Size:", defaultSize);
    console.log("Default Price:", defaultPrice);
  }, [defaultSize, defaultPrice]);
  useEffect(() => {
    console.log("Updated Cart:", cart);
  }, [cart]);

  return (
    <div>
      <div className="bg-[#a72020] product-HAB__container">
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
                    const firstSize = items.capacities[0].size;
                    const firstPrice = items.capacities[0].price;

                    setDefaultSize(firstSize);
                    setDefaultPrice(firstPrice);
                    router.push(`/product/${items.idProduct}`);
                  }}
                  className="w-[200px] h-[210px]  cursor-pointer product-HAB-items"
                >
                  <Image
                    src={items.imgProfileThumbNails[0].src}
                    alt={items.imgProfileThumbNails[0].alt}
                    width={items.imgProfileThumbNails[0].width}
                    height={items.imgProfileThumbNails[0].height}
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
                      // Set to defaultSize if not explicitly set
                      handleAddToCart(
                        cart,
                        setCart,
                        items.idProduct,
                        items.quantity,
                        items.capacities,
                        selectedSize || defaultSize // Use selectedSize if set, otherwise use defaultSize
                      );
                      const firstSize = items.capacities[0].size;
                      const firstPrice = items.capacities[0].price;
                      setDefaultSize(firstSize);
                      setDefaultPrice(firstPrice);
                    }}
                    className="cursor-pointer hover:underline product-HAB-add"
                  >
                    Thêm vào túi
                  </p>

                  <p className="ml-auto product-HAB-items-price">
                    {items.capacities[0].price.toLocaleString("vi-VN")}đ
                  </p>
                </div>
              </div>
            );
          })}
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
