import React from "react";

const FoodContext = React.createContext({
  foodList: [],
  changeMenu: (items) => {},
});

export default FoodContext;
