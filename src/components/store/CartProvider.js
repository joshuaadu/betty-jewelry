import useCart from "../hooks/useCart";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const cartContext = useCart();
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
