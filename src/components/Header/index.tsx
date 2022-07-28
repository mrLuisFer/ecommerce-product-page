import { useState } from "react";
import menuIcon from "@/images/icons/icon-menu.svg";
import logoIcon from "@/images/icons/logo.svg";
import cartIcon from "@/images/icons/icon-cart.svg";
import avatarImg from "@/images/image-avatar.png";
import classes from "./header.module.css";
import { Dispatch, SetStateAction } from "react";
import CartModal from "./CartModal";
import DesktopNav from "./DesktopNav";

interface HeaderProps {
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ setMobileMenu }: HeaderProps) {
  const [showCartModal, setShowCartModal] = useState(false);

  return (
    <header className={classes.header}>
      <section className={classes.alignCenter}>
        <div
          className={`${classes.cursorPointer} ${classes.menuIcon} `}
          onClick={() => setMobileMenu(true)}
        >
          <img src={menuIcon} alt="Menu Icon" draggable="false" />
        </div>
        <div className={classes.cursorPointer}>
          <img src={logoIcon} alt="Sneakers Logo" />
        </div>
        <DesktopNav />
      </section>
      <section className={classes.alignCenter}>
        <button
          className={`${classes.btn} ${classes.cursorPointer}`}
          onClick={() => setShowCartModal((prevState) => !prevState)}
        >
          <img src={cartIcon} alt="Add to Cart" className={classes.cartIcon} />
        </button>
        <div className={classes.cursorPointer}>
          <img src={avatarImg} alt="Avatar" className={classes.avatar} />
        </div>
      </section>
      {showCartModal && <CartModal />}
    </header>
  );
}
