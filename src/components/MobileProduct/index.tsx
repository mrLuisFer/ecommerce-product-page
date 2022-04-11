import { useState } from "react";
import nextArrowIcon from "@/images/icons/icon-next.svg";
import prevArrowIcon from "@/images/icons/icon-previous.svg";
import productImages from "./productImages";
import styles from "./carousel.module.css";

export default function MobileProduct() {
  const [imgIndex, setImgIndex] = useState<number>(0);

  const handleIncrementIndex = () => {
    console.log(imgIndex);
    if (imgIndex < 3) {
      setImgIndex((prevImg) => prevImg + 1);
    } else setImgIndex(0);
  };

  const handleDecrementIndex = () => {
    if (imgIndex > 0) {
      setImgIndex((prevImg) => prevImg - 1);
    } else setImgIndex(3);
  };

  return (
    <section className={styles.mobileProduct}>
      <button
        className={`${styles.carouselBtn} ${styles.leftBtn}`}
        onClick={handleDecrementIndex}
      >
        <img src={prevArrowIcon} alt="previous" />
      </button>
      <img
        className={styles.productImg}
        src={productImages[imgIndex]}
        alt="Product thumbnail"
      />
      <button
        className={`${styles.carouselBtn} ${styles.rightBtn}`}
        onClick={handleIncrementIndex}
      >
        <img src={nextArrowIcon} alt="next" />
      </button>
    </section>
  );
}
