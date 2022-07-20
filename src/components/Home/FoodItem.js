import "./FoodItem.css";

function FoodItem(props) {
  return (
    <div className="food_item">
      <div className="food_details">
        <div className="food_title">{props.title}</div>
        <div className="food_description">{props.description}</div>
      </div>

      <div className="food_price">₹{props.amount}</div>
    </div>
  );
}

export default FoodItem;
