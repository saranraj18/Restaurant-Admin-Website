import React, { useContext, useState } from "react";
import "./CreateMenu.css";
import FoodItem from "../Home/FoodItem";
import Button from "../../Widgets/Button";
import MenuForm from "./MenuForm";
import { useNavigate } from "react-router-dom";
import FoodContext from "../../Context/food-context";

var foodList = [];

function CreateMenu() {
  const navigate = useNavigate();
  const foodCtx = useContext(FoodContext);

  const [isMenuFormOpen, setIsMenuFormOpen] = useState(false);
  const [foodListData, setFoodListData] = useState(foodList);

  const openFormHandler = () => {
    setIsMenuFormOpen(true);
  };

  const closeFormHandler = () => {
    setIsMenuFormOpen(false);
  };

  const cancelMenuHandler = () => {
    navigate("/");
  };

  const saveMenu = () => {
    console.log(foodList);
    foodCtx.changeMenu(foodList);
    foodList = [];
    navigate(-1);
  };

  const addFoodData = (enteredFoodData) => {
    const foodData = {
      ...enteredFoodData,
      id: Math.random().toString(),
    };

    setFoodListData((prevFoodData) => [...prevFoodData, foodData]);
    foodList.push(foodData);

    closeFormHandler();
  };

  return (
    <div className="create_menu">
      {isMenuFormOpen && (
        <MenuForm onComplete={addFoodData} onClose={closeFormHandler} />
      )}
      <div className="create_menu_header">
        <h2>Create Menu</h2>
        {foodList.length !== 0 && (
          <Button type="button" onClick={saveMenu}>
            Save
          </Button>
        )}
      </div>

      <div className="create_menu_body">
        <div className="create_menu_content">
          {foodListData.length !== 0 && (
            <div>
              {foodListData.map((food) => {
                return (
                  <FoodItem
                    key={food.id}
                    title={food.title}
                    description={food.description}
                    amount={food.amount}
                  />
                );
              })}
            </div>
          )}

          {foodListData.length === 0 && (
            <div className="create_menu_empty">
              Your food is empty. Click "Add Item" to add foods.
            </div>
          )}
        </div>

        <div className="create_menu_btns">
          <Button type="button" onClick={cancelMenuHandler}>
            Cancel
          </Button>
          <Button type="button" onClick={openFormHandler}>
            Add Item
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateMenu;
