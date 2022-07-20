import React, { useState } from "react";
import "./OrdersCard.css";
import Button from "../../Widgets/Button";
import Card from "../../Widgets/Card";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function OrdersCard(props) {
  const [isCardOpen, openCard] = useState(false);

  const cardHandler = () => {
    if (isCardOpen) {
      openCard(false);
    } else {
      openCard(true);
    }
  };

  const generateShortFoodDetails = () => {
    const foodDetails = props.foodDetails;
    console.log(JSON.parse(foodDetails));
    var detail = "";
    let i = 0;

    for (i; i < foodDetails.length; i++) {
      detail += `${foodDetails[i].Title} x ${foodDetails[i].Quantity}, `;
    }

    detail = detail.substring(0, detail.length - 2);

    return detail;
  };

  return (
    <Card className="orders_card">
      <div className="orders_card_username">{props.name}</div>

      {!isCardOpen && (
        <div className="orders_card_food">
          <div>{generateShortFoodDetails()}</div>
          <div className="orders_card_price">₹{props.total}</div>
        </div>
      )}

      {isCardOpen && (
        <div>
          {props.foodDetails.map((order) => {
            return (
              <div className="orders_card_food">
                <div>
                  {order.Title} x {order.Quantity}
                </div>
                <div>₹{order.Amount * order.Quantity}</div>
              </div>
            );
          })}

          <div className="orders_card_food total_amount">
            <div>Total Amount</div>
            <div>₹{props.total}</div>
          </div>
        </div>
      )}

      <div className="orders_card_status">
        {props.status === "Delivered" && (
          <CheckCircleIcon fontSize="small" color="success" />
        )}
        <div>
          {props.status} by {props.time}
        </div>
      </div>

      <div className="orders_card_button">
        {props.status !== "Delivered" && (
          <Button type="button" className="btn-orders_card">
            Deliver
          </Button>
        )}
        <Button type="button" className="btn-orders_card" onClick={cardHandler}>
          {isCardOpen === false ? "View Details" : "Show Less"}
        </Button>
      </div>
    </Card>
  );
}

export default OrdersCard;
