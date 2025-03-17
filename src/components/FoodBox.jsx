export default function FoodBox({ food, handleDelete }) {
  return (
    <div className="foodCard">
      <h2>{food.name}</h2>
      <div className="foodDetails">
        <div className="foodPic">
          <img src={`${food.image}`} />
        </div>
        <div className="foodText">
          <p>Calories: {food.calories}</p>
          <p>Servings {food.servings}</p>

          <p>
            <b>Total Calories: {food.calories * food.servings} </b> kcal
          </p>

          <button onClick={() => handleDelete(food.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}
