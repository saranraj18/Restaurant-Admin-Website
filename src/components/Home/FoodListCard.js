import "./FoodListCard.css";
import IconButton from "@mui/material/IconButton";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import FoodItem from "./FoodItem";
import Card from "../../Widgets/Card";
import Button from "../../Widgets/Button";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import FoodContext from "../../Context/food-context";
import FoodList from "./FoodList";

function FoodListCard() {
  const navigate = useNavigate();
  const foodCtx = useContext(FoodContext);

  const addMenuClickHandler = () => {
    navigate("/create");
  };

  const foodList = foodCtx.foodList;

  return (
    <Card className="foodList_Card">
      <div className="top_container">
        <div>Today's Menu</div>
        <IconButton>
          <EditOutlinedIcon />
        </IconButton>
      </div>

      <FoodList foodlist={foodList} />

      <center>
        <Button type="button" onClick={addMenuClickHandler}>
          Add Menu
        </Button>
      </center>
    </Card>
  );
}

export default FoodListCard;
