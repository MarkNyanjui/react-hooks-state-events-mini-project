import React, { useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [details, setDetails] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0] || "");




  const handleDetailsChange = (e) => {
    setDetails(e.target.value)

  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (details && selectedCategory) {
    const newTask = {
      text: details,
      category: selectedCategory,
    }
    onTaskFormSubmit(newTask);
    setDetails("");
    setSelectedCategory(categories[1] || "");
  };


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text"  value={details} onChange={handleDetailsChange}/>
      </label>
      <label>
        Category
        <select value={selectedCategory} onChange={handleCategoryChange}>
          {categories.filter((category) => category !== "All")
          .map((category) => (
             <option key={category} value={category}>{category}</option>
           ))} 
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}}

export default NewTaskForm;
