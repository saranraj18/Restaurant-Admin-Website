import React, { Fragment } from "react";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import FoodListCard from "./FoodListCard";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  const orderClick = async () => {
    navigate("/orders");
  };

  // const orderClick = async () => {
  //   const response = await fetch(
  //     "https://mealsmagic-770632842.development.catalystserverless.com/server/meals_magic_function/post",
  //     {
  //       method: "POST",
  //       headers: new Headers({
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       }),
  //       body: JSON.stringify(),
  //     }
  //   );

  //   const resJson = await response.json();
  //   if (response.ok) {
  //     console.log(resJson.name);
  //   } else {
  //     console.log("again error");
  //   }
  // };
  // const orderClick = async () => {
  //   const response = await fetch("http://localhost:3002/post", {
  //     method: "POST",
  //     headers: new Headers({
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     }),
  //     cache: "no-cache",
  //     body: JSON.stringify({
  //       name: "ing...",
  //     }),
  //   });

  //   const resJson = await response.json();
  //   if (response.ok) {
  //     console.log(resJson.name);
  //   } else {
  //     console.log("again error");
  //   }
  // };

  return (
    <Fragment>
      <header className="App-Header">
        <h1>Restaurant Web Application</h1>
      </header>

      <div className="orders_btn" onClick={orderClick}>
        <NotificationsRoundedIcon />
        <div>Orders</div>
      </div>
      <FoodListCard />
    </Fragment>
  );
}

export default Home;
