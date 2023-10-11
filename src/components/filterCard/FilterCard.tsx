import Hamburger from "hamburger-react";
import { useState } from "react";
import getUniqueValuesForKey from "../../utils/getUniqueValuesForKey";
import style from "./index.module.scss";

interface FilterCardProps {
  products: any;
  onFilterChange: Function;
}
function FilterCard({ products, onFilterChange }: FilterCardProps) {
  // Use state to track the selected filters
  const brands = getUniqueValuesForKey(products, "brand");
  const itemGroups = getUniqueValuesForKey(products, "item_group");

  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <div
      className={`${style.container}
      ${filterOpen ? style.open : style.closed}`}
    >
      <div className={style.filterAndArrowContainer}>
        <h3
          style={
            filterOpen
              ? { fontSize: "1rem" }
              : { fontSize: "10px", fontWeight: "500" }
          }
        >
          Filters
        </h3>
        <div className={style.iconContainer}>
          <Hamburger size={16} toggled={filterOpen} toggle={setFilterOpen} />
        </div>
      </div>
      {brands && (
        <div
          className={style.checkboxCollection}
          style={filterOpen ? { maxHeight: "9999px" } : { maxHeight: "0px" }}
        >
          <h4>Brand</h4>
          <form onChange={(e) => onFilterChange(e)}>
            {brands.map((item: any, i) => (
              <label>
                {item}
                <input
                  type="checkbox"
                  value={item}
                  name={item}
                  data-inputCategory="brand"
                  key={i}
                />
              </label>
            ))}
          </form>
          <h4>Item Group</h4>
          <form onChange={(e) => onFilterChange(e)}>
            {itemGroups.map((item: any, i) => (
              <label>
                {item}
                <input
                  type="checkbox"
                  value={item}
                  name={item}
                  data-inputCategory="itemGroup"
                  key={i}
                />
              </label>
            ))}
          </form>
        </div>
      )}
    </div>
  );
}

export default FilterCard;
