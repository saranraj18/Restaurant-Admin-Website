import React, { Component } from "react";
import OrdersCard from "./OrdersCard";

class OrdersList extends Component {
  constructor(props) {
    super(props);

    this.state = { ordersList: [], res: "" };
  }

  componentDidMount() {
    let retrievedOrdersData = [];

    fetch(
      "https://mealsmagic-770632842.development.catalystserverless.com/server/meals_magic_function/orders",
      {
        method: "GET",
      }
    )
      .then((response) => {
        console.log("Fetched Response");
        return response.json();
      })
      .then((data) => {
        data.orders.map((mappedData) => {
          var foodList = [];

          //   console.log(eval(mappedData.orderList));

          var test = mappedData.orderList
            .substring(1, mappedData.orderList.length - 1)
            .split("}");

          for (let i = 0; i < test.length - 1; i++) {
            // console.log(test[i]);
          }

          return retrievedOrdersData.push({
            id: mappedData.ROWID,
            name: mappedData.name,
            total: mappedData.totalAmount,
            status: mappedData.status,
            time: mappedData.CREATEDTIME,
            foodDetails: mappedData.orderList,
          });
        });
      })
      .then(() => {
        // var array = "[2017,7,18,9,0]"
        //   .split(/\,|\[|\]/)
        //   .shift()
        //   .pop();
        // console.log(array);
        // var res = retrievedOrdersData[0].foodDetails;
        // console.log(res.match(/\d+/g).map(Array));
        this.setState({
          ordersList: retrievedOrdersData,
          //   res: res.match(/\d+/g).map(Array),
        });
      })
      .catch(() => null);
  }

  render() {
    return (
      <div>
        <div>{this.state.res}</div>
        {this.state.ordersList.map((order) => {
          return (
            <OrdersCard
              key={order.id}
              name={order.name}
              foodDetails={order.foodDetails}
              status={order.status}
              time={order.time}
              total={order.total}
            />
          );
        })}
      </div>
    );
  }
}

export default OrdersList;
