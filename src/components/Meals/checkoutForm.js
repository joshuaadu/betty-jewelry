import { forwardRef } from "react";
import classes from "./checkoutForm.module.css";
const CheckoutForm = forwardRef((props, ref) => {
  const { nameRef, streetRef, codeRef, cityRef } = ref.current;

  return (
    <div className={classes["checkout-form"]}>
      <div className={classes["form-control"]}>
        <label htmlFor="name">Your name</label>
        <input ref={nameRef} type="text" id="name" />
      </div>
      <div className={classes["form-control"]}>
        <label htmlFor="street">Street</label>
        <input ref={streetRef} type="text" id="street" />
      </div>
      <div className={classes["form-control"]}>
        <label htmlFor="code">Postal Code</label>
        <input ref={codeRef} type="number" id="code" />
      </div>
      <div className={classes["form-control"]}>
        <label htmlFor="city">City</label>
        <input ref={cityRef} type="text" id="city" />
      </div>
    </div>
  );
});

export default CheckoutForm;
