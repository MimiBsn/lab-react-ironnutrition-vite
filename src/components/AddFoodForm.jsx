import { Form } from "antd";
import { useState } from "react";

export default function AddFoodForm({ handleNewfood }) {
  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  };
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    calories: 0,
    servings: 0,
    id: generateId(),
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newFood = { ...formData };
    handleNewfood(newFood);
    setFormData({
      name: "",
      image: "",
      calories: 0,
      servings: 0,
      id: generateId(),
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Add food</h2>
      <div className="form">
        <label>
          Name:
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            name="name"
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            value={formData.image}
            onChange={handleChange}
            name="image"
          />
        </label>
        <label>
          Calories:
          <input
            type="number"
            value={formData.calories}
            onChange={handleChange}
            name="calories"
          />
        </label>
        <label>
          Servings:
          <input
            type="number"
            value={formData.servings}
            onChange={handleChange}
            name="servings"
          />
        </label>
        <button type="submit">Create</button>
      </div>
    </form>
  );
}
