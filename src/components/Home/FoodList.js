import React, { Component } from "react";
import FoodItem from "./FoodItem";

class FoodList extends Component {
  constructor(props) {
    super(props);

    this.state = { foodList: props.foodlist };
  }

  componentDidMount() {
    let retrievedFoodData = [];

    fetch(
      "https://mealsmagic-770632842.development.catalystserverless.com/server/meals_magic_function/foodlist",
      {
        method: "GET",
      }
    )
      .then((response) => {
        console.log("Fetched Response");
        return response.json();
      })
      .then((data) => {
        data.foodData.map((mappedData) => {
          retrievedFoodData.push({
            id: mappedData.ROWID,
            title: mappedData.title,
            description: mappedData.description,
            amount: mappedData.amount,
          });
        });
      })
      .then(() => {
        this.setState({ foodList: retrievedFoodData });
      })
      .catch(() => null);
  }

  render() {
    return (
      <div>
        {this.state.foodList.map((food) => {
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
    );
  }
}

export default FoodList;
