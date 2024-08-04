import React, {useState} from "react";


const CategoryFilter = ({ categories, onCategorySelected }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelected = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onCategorySelected(category);
  };
  return (
    <div>
    <label htmlFor="category">Category</label>
    <select 
     name="category"
    id="category"
     value={selectedCategory} 
     onChange={handleCategorySelected}>
{categories.map ((category) => (
  <option key={category} value={category}>
    {category}
  </option>
))}
     </select>
        </div>
  )
}

export default CategoryFilter;