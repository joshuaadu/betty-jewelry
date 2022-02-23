import Modal from "../UI/Modal";
import Button from "../UI/Button";
import classes from "./Cart.module.css";
import { useContext, useRef } from "react";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";
import CheckoutForm from "./checkoutForm";
import useSendRequest from "../hooks/use-sendRequest";

const Cart = (props) => {
  const nameRef = useRef();
  const streetRef = useRef();
  const codeRef = useRef();
  const cityRef = useRef();
  const refs = useRef({ nameRef, streetRef, codeRef, cityRef });
  const { submitOrder } = useSendRequest();
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
    const orderData = {
      name: nameRef.current.value,
      street: streetRef.current.value,
      code: codeRef.current.value,
      city: cityRef.current.value
    };
    submitOrder(orderData);
    // props.closeCart();
    console.log(orderData);
  };

  return (
    <Modal className={classes.cart} closeModal={props.closeCart}>
      <main className={classes.content}>
        {cartItems}
        {cartCtx.items.length > 0 && <CheckoutForm ref={refs} />}
      </main>
      <footer className={classes.controls}>
        <Button altBtn={true} onClick={props.closeCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={orderHandler}>Order</Button>
        )}
      </footer>
    </Modal>
  );
};

export default Cart;
