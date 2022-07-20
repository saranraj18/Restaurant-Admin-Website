import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateMenu from "./components/CreateMenu/CreateMenu";

import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import FoodProvider from "./Context/FoodProvider";

function App() {
  return (
    <FoodProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/create" element={<CreateMenu />} />
        </Routes>
      </Router>
    </FoodProvider>
  );
}

export default App;
