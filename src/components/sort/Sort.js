import React from "react";
import styles from "./sort.module.css";
const { sort, sort__btn, sort__btn__active } = styles;
function Sort({ sortBy, sorting }) {
  const sortProducts = (e) => {
    sorting(e.target.name);
  };
  return (
    <div className={sort}>
      <h3>Sort By</h3>
      <button
        className={`${sort__btn} ${sortBy === "popularity" && sort__btn__active}`}
        name="popularity"
        onClick={sortProducts}
      >
        Popularity
      </button>

      <button
        className={`${sort__btn} ${
          sortBy === "lowtohigh" && sort__btn__active
        }`}
        name="lowtohigh"
        onClick={sortProducts}
      >
        Price- Low to High
      </button>
      <button
        className={`${sort__btn} ${
          sortBy === "hightolow" && sort__btn__active
        }`}
        name="hightolow"
        onClick={sortProducts}
      >
        Price- High to Low
      </button>
    </div>
  );
}

export default Sort;
