import CartContext from "./cart-context";
const cartContext = {
  items: [],
  totalAmount: 6,
  addItem: addItemToCartHandler,
  removeItem: removeItemFromCartHandler
};

function addItemToCartHandler(item) {
  console.log(item);
}
function removeItemFromCartHandler(id) {}

const CartProvider = (props) => {
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
