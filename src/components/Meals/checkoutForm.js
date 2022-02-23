import { useRef } from "react";
import useSendRequest from "../hooks/use-sendRequest";
import Button from "../UI/Button";
import classes from "./checkoutForm.module.css";
const CheckoutForm = (props) => {
  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();
  const { submitOrder } = useSendRequest();

  const confirmHandler = () => {
    const orderData = {
      name: nameRef.current.value,
      street: streetRef.current.value,
      code: postalRef.current.value,
      city: cityRef.current.value
    };
    submitOrder(orderData);
    props.onClose();
    console.log(orderData);
  };

  return (
    <form className={classes["checkout-form"]}>
      <div className={classes["form-control"]}>
        <label htmlFor="name">Your name</label>
        <input ref={nameRef} type="text" id="name" />
      </div>
      <div className={classes["form-control"]}>
        <label htmlFor="street">Street</label>
        <input ref={streetRef} type="text" id="street" />
      </div>
      <div className={classes["form-control"]}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalRef} type="number" id="postal" />
      </div>
      <div className={classes["form-control"]}>
        <label htmlFor="city">City</label>
        <input ref={cityRef} type="text" id="city" />
      </div>
      <div className={classes.controls}>
        <Button altBtn={true} onClick={props.onClose}>
          Close
        </Button>
        <Button onClick={confirmHandler}>Confirm</Button>
      </div>
    </form>
  );
};

export default CheckoutForm;
