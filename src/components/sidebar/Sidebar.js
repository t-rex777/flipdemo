import React from "react";
import styles from "./sidebar.module.css";
const { filter, filter_header, filter__items, filter__header__cancelbutton } =
  styles;

function Sidebar({ addFilter, cancelAll }) {
  return (
    <div className={filter}>
      <h3 className={filter_header}>
        <p>Filters</p>
        <button
          className={filter__header__cancelbutton}
          onClick={() => cancelAll()}
        >
          Clear All
        </button>
      </h3>
      <div className={filter__items}>
        <h4>Size</h4>
        <span>
          <input
            type="checkbox"
            id="S"
            onChange={(e) => addFilter("size", e.target.id)}
          />
          <label htmlFor="S">Small</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="M"
            onChange={(e) => addFilter("size", e.target.id)}
          />
          <label htmlFor="M">Medium</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="L"
            onChange={(e) => addFilter("size", e.target.id)}
          />
          <label htmlFor="L">Large</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="XL"
            onChange={(e) => addFilter("size", e.target.id)}
          />
          <label htmlFor="XL">Extra Large</label>
        </span>
      </div>
      <div className={filter__items}>
        <h4>Brand</h4>
        <span>
          <input
            type="checkbox"
            id="adidas"
            onChange={(e) => addFilter("brand", e.target.id)}
          />
          <label htmlFor="adidas">Adidas</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="reebok"
            onChange={(e) => addFilter("brand", e.target.id)}
          />
          <label htmlFor="reebok">Reebok</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="puma"
            onChange={(e) => addFilter("brand", e.target.id)}
          />
          <label htmlFor="puma">Puma</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="wrong"
            onChange={(e) => addFilter("brand", e.target.id)}
          />
          <label htmlFor="wrong">Wrong</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="levis"
            onChange={(e) => addFilter("brand", e.target.id)}
          />
          <label htmlFor="levis">Levis</label>
        </span>
      </div>
      <div className={filter__items}>
        <h4>Ideal for</h4>
        <span>
          <input
            type="checkbox"
            id="men"
            onChange={(e) => addFilter("idealFor", e.target.id)}
          />
          <label htmlFor="men">Men</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="women"
            onChange={(e) => addFilter("idealFor", e.target.id)}
          />
          <label htmlFor="women">Women</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="kids"
            onChange={(e) => addFilter("idealFor", e.target.id)}
          />
          <label htmlFor="kids">Kids</label>
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
