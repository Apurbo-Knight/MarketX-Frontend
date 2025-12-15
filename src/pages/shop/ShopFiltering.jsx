import React from "react";

const ShopFiltering = ({
  filters,
  setFilterState,
  filterState,
  clearFilter,
}) => {
  return (
    <div className="space-y-5 flex flex-col shrink-0">
      <h3>Filter</h3>
      {/* category filter */}
      <div className="flex flex-col space-y-2">
        <h4 className="font-medium text-lg">Category</h4>
        <hr />
        {filters.categories.map((category, index) => (
          <label key={index} className="flex align-center gap-2 capitalize cursor-pointer">
            <input
              type="radio"
              name="category"
              value={category}
              checked={filterState.category === category}
              onChange={(e) =>
                setFilterState({ ...filterState, category: e.target.value })
              }
            />
            <span>{category}</span>
          </label>
        ))}
      </div>
      {/* color filter */}
      <div className="flex flex-col space-y-2">
        <h4 className="font-medium text-lg">Color</h4>
        <hr />
        {filters.colors.map((color, index) => (
          <label key={index} className="flex align-center gap-2 capitalize cursor-pointer">
            <input
              type="radio"
              name="color"
              value={color}
              checked={filterState.color === color}
              onChange={(e) =>
                setFilterState({ ...filterState, color: e.target.value })
              }
            />
            <span>{color}</span>
          </label>
        ))}
      </div>
      {/* price filter */}
      <div className="flex flex-col space-y-2">
        <h4 className="font-medium text-lg">Price Range</h4>
        <hr />
        {filters.priceRanges.map((range, index) => (
          <label key={index} className="flex align-center gap-2 capitalize cursor-pointer">
            <input
              type="radio"
              name="priceRange"
              value={`${range.min}-${range.max}`}
              checked={filterState.priceRange === `${range.min}-${range.max}`}
              onChange={(e) =>
                setFilterState({ ...filterState, priceRange: e.target.value })
              }
            />
            <span>{range.label}</span>
          </label>
        ))}
      </div>

      {/* Clear all filter */}
      <button onClick={clearFilter} className="bg-primary py-1 px-4 text-white rounded hover:bg-primary-dark">Cleal All Filter</button>
    </div>
  );
};

export default ShopFiltering;
