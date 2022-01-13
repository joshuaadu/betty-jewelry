import { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Layout/Header";
import Cart from "./components/Meals/Cart";
import Meals from "./components/Meals/Meals";
import "./styles.css";

export default function App() {
  const [showCart, setShowCart] = useState(false);

  const closeCartHandler = (props) => {
    setShowCart(false);
  };
  return (
    <div className="App">
      <Header showCart={setShowCart} />
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
