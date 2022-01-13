import Modal from "../UI/Modal";
import Button from "../UI/Button";
import classes from "./Cart.module.css";

const Cart = (props) => {
  return (
    <Modal className={classes.cart}>
      <header className="controls">
        <h2>Cart Details</h2>
      </header>
      <main className={classes.content}>Sushi</main>
      <footer className={classes.controls}>
        <Button onClick={props.closeCart}>Close</Button>
      </footer>
    </Modal>
  );
};

export default Cart;
