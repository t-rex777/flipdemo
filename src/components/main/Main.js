import React, { useMemo, useState } from "react";
import Card from "../card/Card";
import Sort from "../sort/Sort";
import styles from "./main.module.css";
import { productData } from "./../../data";
import { sortByHighToLow, sortByLowToHigh } from "./../../helper";
const { main, main__products } = styles;
function Main({ filters, isCancelled }) {
  const [sortBy, setSortBy] = useState("");

  const sortedProducts = useMemo(() => {
    function sortData() {
      if (sortBy === "hightolow") {
        return sortByHighToLow(productData);
      } else if (sortBy === "lowtohigh") {
        return sortByLowToHigh(productData);
      } else {
        return productData;
      }
    }

    return sortData().filter((product) => {
      return Object.entries(filters).every(([filterKey, filterVal]) => {
        if (!filters[filterKey].length) return product;

        if (Array.isArray(product[filterKey])) {
          return product[filterKey].some((productValue) => {
            return filterVal.includes(productValue);
          });
        } else {
          return filterVal.includes(product[filterKey]);
        }
      });
    });
  }, [filters, sortBy]);

  return (
    <div className={main}>
      <Sort sortBy={sortBy} sorting={(e) => setSortBy(e)} />
      <div className={main__products}>
        {sortedProducts.map((product, i) => (
          <Card
            key={i}
            thumbnail={product.thumbnail}
            brand={product.brand}
            name={product.name}
            price={product.price}
            size={product.size}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
