import { DUMMY_ORDERS_LIST } from "../../Constants/Constant";
import "./Orders.css";
import OrdersCard from "./OrdersCard";
import OrdersList from "./OrdersList";

function Orders() {
  const orderList = DUMMY_ORDERS_LIST.map((order) => {
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
  });

  return (
    <div className="orders">
      <h2>Orders</h2>

      {/* {orderList} */}
      <OrdersList />
    </div>
  );
}

export default Orders;
