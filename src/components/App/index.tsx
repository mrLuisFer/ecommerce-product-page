import { useState } from "react";
import Header from "../Header";
import CarouselMobileProduct from "../CarouselProduct";
import ProductDescription from "../ProductDescription";
import MobileMenu from "../Menu";
import CartContextProvider from "../context/CartItemsCtx";
import styles from "./app.module.css";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function App() {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [parent] = useAutoAnimate<any>();

  return (
    <CartContextProvider>
      <div className={styles.container} ref={parent}>
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
