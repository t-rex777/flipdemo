import React from "react";
import Card from "../card/Card";
import Sort from "../sort/Sort";
import styles from "./main.module.css";
import { productData } from "./../../data";
const { main, main__products } = styles;
function Main() {
  return (
    <div className={main}>
      <Sort />
      <div className={main__products}>
        {productData.map((product) => (
          <Card
            thumbnail={product.thumbnail}
            brand={product.brand}
            name={product.name}
            price={product.price}
            size={product.size}
            key={product.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
