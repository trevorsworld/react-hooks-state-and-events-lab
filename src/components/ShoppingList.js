import React from "react";
import Item from "./Item";
import {useState} from "react";

function ShoppingList({ items }) {
  const[selectedCategory,setSelectedCategory]=useState("All")

  function change(e){
   setSelectedCategory(e.target.value)
  }
  
  const filteredItems = items.filter((item) => {
      if(selectedCategory=="All"){
        return true;
      }else{
         return item.category === selectedCategory
      }
   
  });
  
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={change}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
       {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
       ))}
      </ul>
    </div>
  );
}

export default ShoppingList;