import Modal from "../UI/Modal";
import Button from "../UI/Button";
import classes from "./Cart.module.css";
import { useContext, useState } from "react";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";
import CheckoutForm from "./checkoutForm";

const Cart = (props) => {
  const [showCheckout, setShowCheckout] = useState(false);

  const cartCtx = useContext(CartContext);
  const cartItemAddHandler = (item) => {
    console.log(item);
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
          onAdd={cartItemAddHandler.bind(null, { ...item, amount: 1 })}
        />
      ))}
    </ul>
  );

  const orderHandler = () => {
    setShowCheckout(true);
  };

  return (
    <Modal className={classes.cart} closeModal={props.closeCart}>
      <main className={classes.content}>
        {cartItems}
        {showCheckout && <CheckoutForm onClose={props.closeCart} />}
      </main>
      <footer className={classes.controls}>
        {!showCheckout && (
          <Button altBtn={true} onClick={props.closeCart}>
            Close
          </Button>
        )}
        {cartCtx.items.length > 0 && !showCheckout && (
          <Button onClick={orderHandler}>Order</Button>
        )}
      </footer>
    </Modal>
  );
};

export default Cart;
