import { useState } from "react";
import Header from "../Header";
import CarouselMobileProduct from "../Mobile/CarouselProduct";
import ProductDescription from "../ProductDescription";
import MobileMenu from "../Mobile/Menu";

export default function App() {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  return (
    <>
      <Header setMobileMenu={setMobileMenu} />
      {mobileMenu && <MobileMenu setMobileMenu={setMobileMenu} />}
      <CarouselMobileProduct />
      <ProductDescription />
    </>
  );
}
