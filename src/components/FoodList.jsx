import { useState } from "react";
import AddFoodForm from "./AddFoodForm";
import FoodBox from "./FoodBox";
import Search from "./Search";

export default function FoodList({ foods, setFoods, handleSubmit }) {
  const [searchInput, setSearchInput] = useState("");

  const displayedFoods =
    searchInput !== ""
      ? foods.filter((item) =>
          item.name.toLowerCase().includes(searchInput.toLowerCase())
        )
      : foods;
  return (
    <>
      <div className="form">
        <AddFoodForm handleNewfood={handleSubmit} />
      </div>

      <div className="searchList">
        <h2>Food List</h2>
        <Search
          foods={foods}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </div>
      {/* 
      <h2>Food List</h2> */}
      <div className="foodList">
        {displayedFoods &&
          displayedFoods.map((food) => {
            const handleDelete = (foodId) => {
              const copiedFoodArray = [...foods];
              if (foodId === food.id) {
                setFoods(copiedFoodArray.filter((e) => e.id !== foodId));
              }
            };
            return (
              <FoodBox food={food} handleDelete={handleDelete} key={food.id} />
            );
          })}
        {displayedFoods.length === 0 && (
          <h3>Oops, There's no more content to show !</h3>
        )}
      </div>
    </>
  );
}
