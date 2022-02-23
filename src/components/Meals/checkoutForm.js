import classes from "./checkoutForm.module.css";
const CheckoutForm = (props) => {
  return (
    <div className={classes["checkout-form"]}>
      <div className={classes["form-control"]}>
        <label for="name">Your name</label>
        <input type="text" id="name" />
      </div>
      <div className={classes["form-control"]}>
        <label for="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className={classes["form-control"]}>
        <label for="code">Postal Code</label>
        <input type="number" id="code" />
      </div>
      <div className={classes["form-control"]}>
        <label for="city">City</label>
        <input type="text" id="city" />
      </div>
    </div>
  );
};

export default CheckoutForm;
