import nextArrowIcon from "@/images/icons/icon-next.svg";
import prevArrowIcon from "@/images/icons/icon-previous.svg";

export default function MobileProduct() {
  return (
    <section>
      <button>
        <img src={nextArrowIcon} alt="next" />
      </button>
      <button>
        <img src={prevArrowIcon} alt="previous" />
      </button>
    </section>
  );
}
