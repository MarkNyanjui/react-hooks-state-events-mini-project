import React, { useState} from "react";

function NewTaskForm({categories}) {
  
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)

  }
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text"  value={details} onChange={handleDetails}/>
      </label>
      <label>
        Category
        <select value={selectedCategory} onChange={handleCategoryChange}>
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>{category}</option>

          ))}  
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;