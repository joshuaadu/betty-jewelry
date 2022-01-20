import React from "react";

const initialValue = {
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
};

const CartContext = React.createContext(initialValue);

export default CartContext;
