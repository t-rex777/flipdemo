import React from "react";
import Sort from "../sort/Sort";
import styles from "./main.module.css";
const { main } = styles;
function Main() {
  return (
    <div className={main}>
      <Sort />
    </div>
  );
}

export default Main;
