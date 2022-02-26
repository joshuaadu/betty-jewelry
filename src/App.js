import { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
import CartProvider from "./components/store/CartProvider";
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
    <CartProvider>
      <Header showCart={showCartHandler} />
      <main className="main">
        <Meals />
      </main>
      {showCart &&
        ReactDOM.createPortal(
          <Cart closeCart={closeCartHandler} />,
          document.getElementById("modal")
        )}
    </CartProvider>
  );
}
