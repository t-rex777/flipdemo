import React from "react";
import styles from "./sort.module.css"
const {sort,sort__btn} = styles;
function Sort() {
  return (
    <div className={sort}>
      <h3>Sort By</h3>
      <button className={sort__btn}>Price- Low to High</button>
      <button className={sort__btn}>Price- High to Low</button>
    </div>
  );
}

export default Sort;
