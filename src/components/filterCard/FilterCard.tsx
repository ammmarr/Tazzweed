import Hamburger from "hamburger-react";
import { useState } from "react";
import getUniqueValuesForKey from "../../utils/getUniqueValuesForKey";
import style from "./index.module.scss";
import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";
import productsData from "../../assets/peoductsMockData";
interface FilterCardProps {
  products: any;
  onFilterChange: Function;
  gridView: any;
  setGridView: Function;
}
function FilterCard({
  products,
  onFilterChange,
  gridView,
  setGridView,
}: FilterCardProps) {
  // Use state to track the selected filters
  const brands = getUniqueValuesForKey(products, "brand");
  const itemGroups = getUniqueValuesForKey(products, "item_group");
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <div className={style.fullFilterContainer}>
      <div className={`${style.filterToggleContainer}`}>
        <h3>Filters</h3>
        <div className={style.iconContainer}>
          <Hamburger size={16} toggled={filterOpen} toggle={setFilterOpen} />
        </div>
        <div className={style.checkboxesContainer}>
          {brands && (
            <div
              className={style.checkboxCollection}
              style={filterOpen ? { display: "block" } : { display: "none" }}
            >
              <h4>Brand</h4>
              <form onChange={(e) => onFilterChange(e)}>
                {brands.map((item: any, i) => (
                  <label key={i}>
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
                  <label key={i}>
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
      </div>
      <div className={style.viewContainer}>
        <div
          className={style.iconBg}
          style={
            gridView
              ? { backgroundColor: "transparent", color: "var(--dark)" }
              : { backgroundColor: "var(--dark)" }
          }
          onClick={() => setGridView(false)}
        >
          <GridViewIcon />
        </div>
        <div
          className={style.iconBg}
          style={
            !gridView
              ? { backgroundColor: "transparent", color: "var(--dark)" }
              : { backgroundColor: "var(--dark)" }
          }
          onClick={() => setGridView(true)}
        >
          <ListIcon />
        </div>
      </div>
    </div>
  );
}

export default FilterCard;
