import React from "react";

const CategoryFilter = ({onCategorySelected }) => {
  const handleCategorySelected = (e) => {
    console.log('selected',e.target.value);
    onCategorySelected(e.target.value);
  };
  return (
    <div>
    <label htmlFor="category"> Category</label>
    <select name="category" id="category" onChange={handleCategorySelected}>
    <option value="all">All</option>
    <option value="code">Code</option>
    <option value="groceries">Groceries</option>
    </select>
    </div>
  );
}

export default CategoryFilter;