import Modal from "../UI/Modal";
import Button from "../UI/Button";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItems = () => {
    return (
      <ul>
        {cartCtx.items.map((item) => {
          return <li>{item.name}</li>;
        })}
      </ul>
    );
  };
  return (
    <Modal className={classes.cart} closeModal={props.closeCart}>
      <header className="controls">
        <h2>Cart Details</h2>
      </header>
      <main className={classes.content}>Sushi</main>
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
