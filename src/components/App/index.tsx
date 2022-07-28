import { useState } from "react";
import Header from "../Header";
import CarouselMobileProduct from "../Mobile/CarouselProduct";
import ProductDescription from "../ProductDescription";
import MobileMenu from "../Mobile/Menu";
import CartContextProvider from "../context/CartItemsCtx";
import styles from "./app.module.css";

export default function App() {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  return (
    <CartContextProvider>
      <div className={styles.container}>
        <Header setMobileMenu={setMobileMenu} />
        {mobileMenu && <MobileMenu setMobileMenu={setMobileMenu} />}
        <div className={styles.flex}>
          <CarouselMobileProduct />
          <ProductDescription />
        </div>
      </div>
    </CartContextProvider>
  );
}
