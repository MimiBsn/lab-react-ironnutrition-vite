import AddFoodForm from "./AddFoodForm";
import FoodBox from "./FoodBox";

export default function FoodList({ foods, setFoods, handleSubmit }) {
  return (
    <>
      <div className="form">
        <AddFoodForm handleNewfood={handleSubmit} />
      </div>

      <h2>Food List</h2>
      <div className="foodList">
        {foods &&
          foods.map((food) => {
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
      </div>
    </>
  );
}
