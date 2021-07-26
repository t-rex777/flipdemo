import React from "react";
import styles from "./sidebar.module.css";
const { filter, filter_header, filter__items } = styles;
function Sidebar() {
  return (
    <div className={filter}>
      <h3 className={filter_header}>Filters</h3>
      <div className={filter__items}>
        <h4>Size</h4>
        <span>
          <input type="checkbox" id="small" />
          <label htmlFor="small">Small</label>
        </span>
        <span>
          <input type="checkbox" id="medium" />
          <label htmlFor="medium">Medium</label>
        </span>
        <span>
          <input type="checkbox" id="large" />
          <label htmlFor="large">Large</label>
        </span>
      </div>
      <div className={filter__items}>
        <h4>Brand</h4>
        <span>
          <input type="checkbox" id="adidas" />
          <label htmlFor="adidas">Adidas</label>
        </span>
        <span>
          <input type="checkbox" id="reebok" />
          <label htmlFor="reebok">Reebok</label>
        </span>
        <span>
          <input type="checkbox" id="puma" />
          <label htmlFor="puma">Puma</label>
        </span>
        <span>
          <input type="checkbox" id="wrong" />
          <label htmlFor="wrong">Wrong</label>
        </span>
        <span>
          <input type="checkbox" id="levis" />
          <label htmlFor="levis">Levis</label>
        </span>
      </div>
      <div className={filter__items}>
        <h4>Ideal for</h4>
        <span>
          <input type="checkbox" id="men" />
          <label htmlFor="men">Men</label>
        </span>
        <span>
          <input type="checkbox" id="women" />
          <label htmlFor="women">Women</label>
        </span>
        <span>
          <input type="checkbox" id="kids" />
          <label htmlFor="kids">Kids</label>
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
