import { useReducer } from "react";
const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
};
const useCart = () => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  function addItemToCartHandler(item) {
    dispatchCartAction({ type: "ADD", item: item });
  }
  function removeItemFromCartHandler(id) {
    dispatchCartAction({ type: "REMOVE", id: id });
  }
  const cartObject = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler
  };

  return cartObject;
};

export default useCart;
