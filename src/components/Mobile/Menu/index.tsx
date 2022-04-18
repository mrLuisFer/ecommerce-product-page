import closeIcon from "@/images/icons/icon-close.svg";
import { Dispatch, SetStateAction } from "react";
import styles from "./menu.module.css";

interface MenuProps {
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenu({ setMobileMenu }: MenuProps) {
  return (
    <section className={styles.mobileMenuContainer}>
      <div onClick={() => setMobileMenu(false)}>
        <img src={closeIcon} alt="close" />
      </div>
      <ul>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </section>
  );
}
