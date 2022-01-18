import Modal from "../UI/Modal";
import Button from "../UI/Button";
import classes from "./Cart.module.css";

const Cart = (props) => {
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
        <Button>Order</Button>
      </footer>
    </Modal>
  );
};

export default Cart;
