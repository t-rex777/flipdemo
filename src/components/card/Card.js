import React from "react";
import styles from "./card.module.css";
const {
  card,
  card_header,
  card__header__image,
  card__body,
  card__footer,
  card__body__brand,
  card__body__name,
  card__body__price,
  card__footer__price
} = styles;
function Card({ thumbnail, name, brand, price, size }) {
  return (
    <div className={card}>
      <div className={card_header}>
        <img className={card__header__image} src={thumbnail} alt="product" />
      </div>
      <div className={card__body}>
        <p className={card__body__brand}>{brand}</p>
        <p className={card__body__name}>{name}</p>
        <p className={card__body__price}>₹ {price}</p>
      </div>
      <div className={card__footer}>
        Size {size.map((data) => (
          <p className={card__footer__price}>{data}</p>
        ))}
      </div>
    </div>
  );
}

export default Card;
