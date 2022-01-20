import CartContext from "./cart-context";

const CartContextProvider = ({ children }) => {
  return <CartContext.Provider>{children}</CartContext.Provider>;
};
