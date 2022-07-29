import closeIcon from "@/images/icons/icon-close.svg";
import { Dispatch, SetStateAction } from "react";
import styles from "./menu.module.css";

interface MenuProps {
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenu({ setMobileMenu }: MenuProps) {
  const body = document.body;
  body.style.overflowY = "hidden";

  const handleCloseMenu = () => {
    setMobileMenu(false);
    body.style.overflowY = "auto";
  };

  return (
    <div className={styles.menuLayout}>
      <section className={styles.mobileMenuContainer}>
        <div onClick={handleCloseMenu} className={styles.closeIcon}>
          <img src={closeIcon} alt="close" />
        </div>
        <ul className={styles.menuList}>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </section>
      <div className={styles.menuShadow} onClick={handleCloseMenu}></div>
    </div>
  );
}
