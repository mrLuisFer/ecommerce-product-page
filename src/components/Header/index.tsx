import menuIcon from "@/images/icons/icon-menu.svg";
import logoIcon from "@/images/icons/logo.svg";
import cartIcon from "@/images/icons/icon-cart.svg";
import avatarImg from "@/images/image-avatar.png";
import classes from "./header.module.css";
import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ setMobileMenu }: HeaderProps) {
  return (
    <header className={classes.header}>
      <section className={classes.alignCenter}>
        <div
          className={classes.cursorPointer}
          onClick={() => setMobileMenu(true)}
        >
          <img src={menuIcon} alt="Menu Icon" className={classes.menuIcon} />
        </div>
        <div className={classes.cursorPointer}>
          <img src={logoIcon} alt="Sneakers Logo" />
        </div>
      </section>
      <section className={classes.alignCenter}>
        <div className={classes.cursorPointer}>
          <img src={cartIcon} alt="Add to Cart" className={classes.cartIcon} />
        </div>
        <div className={classes.cursorPointer}>
          <img src={avatarImg} alt="Avatar" className={classes.avatar} />
        </div>
      </section>
    </header>
  );
}
