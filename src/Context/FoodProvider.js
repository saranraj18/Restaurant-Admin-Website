import React, { useState } from "react";
import { DUMMY_FOOD_LIST } from "../Constants/Constant";
import FoodContext from "./food-context";

function FoodProvider(props) {
  const [foodListData, setFoodListData] = useState([]);

  const changeMenuHandler = (items) => {
    setFoodListData(items);
    console.log(items[0]);

    fetch(
      "https://mealsmagic-770632842.development.catalystserverless.com/server/meals_magic_function/post",
      // "http://localhost:3001/server/meals_magic_function/post",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ foodList: items[0] }),
      }
    )
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        if (data.message === "Success") {
          console.log("Success");
        } else {
          console.log("Failure");
        }
      });
  };

  const foodContext = {
    foodList: foodListData,
    changeMenu: changeMenuHandler,
  };

  return (
    <FoodContext.Provider value={foodContext}>
      {props.children}
    </FoodContext.Provider>
  );
}

export default FoodProvider;
