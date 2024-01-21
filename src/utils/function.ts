import { ProductList } from "@/data/data";

export const handleAddToCart = (
  cart: any,
  setCart: any,
  productId: string,
  quantity: number,
  capacities: { size: string; price: number }[],
  selectedSize: string
) => {
  const selectedProduct = ProductList.find(
    (product) => product.idProduct === productId
  );

  if (selectedProduct) {
    const selectedCapacity = capacities.find(
      (cap) => cap.size === selectedSize
    );

    if (selectedCapacity) {
      const productNameWithSize = `${selectedProduct.nameProduct} - ${selectedCapacity.size}`;

      const existingItemIndex = cart.findIndex(
        (item: any) =>
          item.idProduct === productId &&
          item.capacities[0].size === selectedSize
      );

      if (existingItemIndex !== -1) {
        setCart((prevCart: any) =>
          prevCart.map((item: any, index: number) =>
            index === existingItemIndex
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        );
      } else {
        setCart((prevCart: any) => [
          ...prevCart,
          {
            ...selectedProduct,
            nameProduct: productNameWithSize,
            quantity: quantity,
            capacities: [selectedCapacity],
            totalPrice: selectedCapacity.price * quantity,
          },
        ]);
      }
    }
  }
};
