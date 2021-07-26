import React from "react";
import styles from "./nav.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
const {
  nav,
  nav__logo,
  nav__logo__img,
  nav__item__login,
  nav__searchbar,
  nav__searchbar__input,
  nav__searchbar__icon,
  nav__items,
  nav__item,
} = styles;

function Nav() {
  return (
    <div className={nav}>
      <div className={nav__logo}>
        <img
          className={nav__logo__img}
          src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fk-plus_3b0baa.png"
          alt="flipkart"
        />
      </div>

      <div className={nav__searchbar}>
        <input
          className={nav__searchbar__input}
          type="text"
          name="search"
          placeholder="Search for products, brands and more"
        />
        <span className={nav__searchbar__icon}>
          <AiOutlineSearch size={24} color={"#2874f0"} />
        </span>
      </div>

      <div className={nav__items}>
        <span className={nav__item}>
          <button className={nav__item__login}>Login</button>
        </span>
        <span className={nav__item}>
          More <RiArrowDropDownLine size={21} />
        </span>
        <span className={nav__item}>
          <IoMdCart size={21} />
          Cart
        </span>
      </div>
    </div>
  );
}

export default Nav;
