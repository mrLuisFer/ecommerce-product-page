import { useState } from "react";
import Header from "../Header";
import CarouselMobileProduct from "../Mobile/CarouselProduct";
import ProductDescription from "../ProductDescription";
import MobileMenu from "../Mobile/Menu";
import CartContextProvider from "../context/CartItemsCtx";

export default function App() {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  return (
    <CartContextProvider>
      <Header setMobileMenu={setMobileMenu} />
      {mobileMenu && <MobileMenu setMobileMenu={setMobileMenu} />}
      <CarouselMobileProduct />
      <ProductDescription />
    </CartContextProvider>
  );
}
