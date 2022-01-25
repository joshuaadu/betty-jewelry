import Modal from "../UI/Modal";
import Button from "../UI/Button";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal className={classes.cart} closeModal={props.closeCart}>
      <main className={classes.content}>{cartItems}</main>
      <footer className={classes.controls}>
        <Button altBtn={true} onClick={props.closeCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && <Button>Order</Button>}
      </footer>
    </Modal>
  );
};

export default Cart;
