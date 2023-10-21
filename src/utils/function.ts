import { ProductList } from "@/data/data";

export const handleAddToCart = (
  cart: any,
  setCart: any,
  productId: number,
  quantity: number
) => {
  const selectedProduct = ProductList.find(
    (product) => product.idProduct === productId
  );
  if (selectedProduct) {
    const existingItem = cart.find(
      (item: any) => item.idProduct === selectedProduct.idProduct
    );
    if (existingItem) {
      setCart((prevCart: any) =>
        prevCart.map((item: any) =>
          item.idProduct === selectedProduct.idProduct
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart((prevCart: any) => [
        ...prevCart,
        { ...selectedProduct, quantity: quantity },
      ]);
    }
  }
};
