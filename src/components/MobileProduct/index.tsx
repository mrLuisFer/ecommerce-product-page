import {useState} from "react"
import nextArrowIcon from "@/images/icons/icon-next.svg";
import prevArrowIcon from "@/images/icons/icon-previous.svg";
import productImages from "./productImages"

export default function MobileProduct() {

  const [imgIndex, setImgIndex] = useState<number>(0)

  return (
    <section>
      <button>
        <img src={nextArrowIcon} alt="next" />
      </button>
      <img src={productImages[imgIndex]} alt="Product thumbnail" />
      <button>
        <img src={prevArrowIcon} alt="previous" />
      </button>
    </section>
  );
}
