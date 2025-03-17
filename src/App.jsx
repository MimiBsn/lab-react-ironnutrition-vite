import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodList from "./components/FoodList";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const handleSubmit = (newAddedFood) => {
    setFoods([newAddedFood, ...foods]);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <FoodList foods={foods} setFoods={setFoods} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
