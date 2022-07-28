import { useState } from "react";
import nextArrowIcon from "@/images/icons/icon-next.svg";
import prevArrowIcon from "@/images/icons/icon-previous.svg";
import productImages from "./productImages";
import styles from "./carousel.module.css";

export default function MobileProduct() {
  const [imgIndex, setImgIndex] = useState<number>(0);

  const handleIncrementIndex = () => {
    if (imgIndex < 3) {
      setImgIndex((prevImg) => prevImg + 1);
    } else setImgIndex(0);
  };

  const handleDecrementIndex = () => {
    if (imgIndex > 0) {
      setImgIndex((prevImg) => prevImg - 1);
    } else setImgIndex(3);
  };

  const handleImgPreviewClicked = (index: number) => {
    setImgIndex(index);
  };

  return (
    <div>
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
          draggable="false"
          alt="Product thumbnail"
        />
        <button
          className={`${styles.carouselBtn} ${styles.rightBtn}`}
          onClick={handleIncrementIndex}
        >
          <img src={nextArrowIcon} alt="next" />
        </button>
      </section>
      <section className={styles.imagesContainer}>
        {productImages.map((img, i) => (
          <img
            key={`img-${img}-${i}`}
            src={img}
            draggable="false"
            className={`${styles.imgPreview} ${
              i === imgIndex ? styles.active : ""
            }`}
            alt={`Image preview - No. ${i}`}
            onClick={() => handleImgPreviewClicked(i)}
          />
        ))}
      </section>
    </div>
  );
}
