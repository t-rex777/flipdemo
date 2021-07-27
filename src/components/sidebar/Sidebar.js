import React from "react";
import styles from "./sidebar.module.css";
const { filter, filter_header, filter__items, filter__header__cancelbutton } =
  styles;

function Sidebar({ filters,addFilter, cancelAll }) {
  return (
    <div className={filter}>
      <h3 className={filter_header}>
        <p>Filters</p>
        <button
          className={filter__header__cancelbutton}
          onClick={() => {
            cancelAll();
          }}
        >
          Clear All
        </button>
      </h3>
      <div className={filter__items}>
        <h4>Size</h4>
        <span>
          <input
            type="checkbox" 
            checked={filters.size.includes("S")}
            id="S"
            onChange={(e) => addFilter("size", e.target.id)}
          />
          <label htmlFor="S">Small</label>
        </span>
        <span>
          <input
            type="checkbox" 
            checked={filters.size.includes("M")}
            id="M"
            onChange={(e) => addFilter("size", e.target.id)}
          />
          <label htmlFor="M">Medium</label>
        </span>
        <span>
          <input
            type="checkbox" 
            checked={filters.size.includes("L")}
            id="L"
            onChange={(e) => addFilter("size", e.target.id)}
          />
          <label htmlFor="L">Large</label>
        </span>
        <span>
          <input
            type="checkbox" 
            checked={filters.size.includes("XL")}
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
            checked={filters.brand.includes("adidas")}
            id="adidas"
            onChange={(e) => addFilter("brand", e.target.id)}
          />
          <label htmlFor="adidas">Adidas</label>
        </span>
        <span>
          <input
            type="checkbox" 
            checked={filters.brand.includes("reebok")}
            id="reebok"
            onChange={(e) => addFilter("brand", e.target.id)}
          />
          <label htmlFor="reebok">Reebok</label>
        </span>
        <span>
          <input
            type="checkbox" 
            checked={filters.brand.includes("puma")}
            id="puma"
            onChange={(e) => addFilter("brand", e.target.id)}
          />
          <label htmlFor="puma">Puma</label>
        </span>
        <span>
          <input
            type="checkbox" 
            checked={filters.brand.includes("wrong")}
            id="wrong"
            onChange={(e) => addFilter("brand", e.target.id)}
          />
          <label htmlFor="wrong">Wrong</label>
        </span>
        <span>
          <input
            type="checkbox" 
            checked={filters.brand.includes("levis")}
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
            checked={filters.idealFor.includes("men")}
            id="men"
            onChange={(e) => addFilter("idealFor", e.target.id)}
          />
          <label htmlFor="men">Men</label>
        </span>
        <span>
          <input
            type="checkbox" 
            checked={filters.idealFor.includes("women")}
            id="women"
            onChange={(e) => addFilter("idealFor", e.target.id)}
          />
          <label htmlFor="women">Women</label>
        </span>
        <span>
          <input
            type="checkbox" 
            checked={filters.idealFor.includes("kids")}
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
