import { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Layout/Header";
import Cart from "./components/Meals/Cart";
import Meals from "./components/Meals/Meals";
import "./styles.css";

export default function App() {
  const [showCart, setShowCart] = useState(false);

  const closeCartHandler = () => {
    setShowCart(false);
  };
  const showCartHandler = () => {
    setShowCart(true);
  };
  return (
    <div className="App">
      <Header showCart={showCartHandler} />
      <main className="main">
        <Meals />
      </main>
      {showCart &&
        ReactDOM.createPortal(
          <Cart closeCart={closeCartHandler} />,
          document.getElementById("modal")
        )}
    </div>
  );
}
