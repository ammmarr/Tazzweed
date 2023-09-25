import style from "./index.module.scss";
import React, { useState, useEffect, FC } from "react";

interface FilterCardProps {
  products: any;
  onFilterChange: Function;
}
function FilterCard({ products, onFilterChange }: FilterCardProps) {
  // Use state to track the selected filters

  return (
    <div className={style.container}>
      <h3>Filters</h3>
      <div className={style.checkboxCollection}>
        <h4>Brand</h4>
        <form onChange={(e) => onFilterChange(e)}>
          <label>
            Adidas
            <input
              type="checkbox"
              value="Adidas"
              name="Adidas"
              data-inputCategory="brand"
            />
          </label>
          <label>
            Nike
            <input
              type="checkbox"
              value="Nike"
              name="Nike"
              data-inputCategory="brand"
            />
          </label>{" "}
          <label>
            Puma
            <input
              type="checkbox"
              value="Puma"
              name="Puma"
              data-inputCategory="brand"
            />
          </label>
        </form>
        <h4>Item Group</h4>
        <form onChange={(e) => onFilterChange(e)}>
          <label>
            Adidas
            <input
              type="checkbox"
              value="Adidas"
              name="Adidas"
              data-inputCategory="itemGroup"
            />
          </label>
          <label>
            Nike
            <input
              type="checkbox"
              value="Nike"
              name="Nike"
              data-inputCategory="itemGroup"
            />
          </label>{" "}
          <label>
            Puma
            <input
              type="checkbox"
              value="Puma"
              name="Puma"
              data-inputCategory="itemGroup"
            />
          </label>
        </form>
      </div>
    </div>
  );
}

export default FilterCard;
