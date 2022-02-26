import { useEffect } from "react";
import useInput from "../hooks/use-input";
import useSendRequest from "../hooks/use-sendRequest";
import Button from "../UI/Button";
import classes from "./checkoutForm.module.css";

const textIsValid = (text) => {
  return text.trim() !== "";
};

const codeIsValid = (num) => {
  return num.length > 3 && num > 0;
};

const CheckoutForm = (props) => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    error: nameError,
    blurhandler: nameBlurHandler,
    changeHandler: nameChangeHandler
  } = useInput(textIsValid);
  const {
    value: streetValue,
    isValid: streetIsValid,
    error: streetError,
    blurhandler: streetBlurHandler,
    changeHandler: streetChangeHandler
  } = useInput(textIsValid);
  const {
    value: postalValue,
    isValid: postalIsValid,
    error: postalError,
    blurhandler: postalBlurHandler,
    changeHandler: postalChangeHandler
  } = useInput(codeIsValid);
  const {
    value: cityValue,
    isValid: cityIsValid,
    error: cityError,
    blurhandler: cityBlurHandler,
    changeHandler: cityChangeHandler
  } = useInput(textIsValid);

  const { submitOrder, isSubmitting, hasSubmitted } = useSendRequest();
  const { onClose, onSubmit, order } = props;
  const checkoutIsValid =
    nameIsValid && streetIsValid && cityIsValid && postalIsValid;

  const confirmHandler = (event) => {
    event.preventDefault();
    if (!checkoutIsValid) {
      console.log("checkout", checkoutIsValid);
      return;
    }

    const orderData = {
      name: nameValue,
      street: streetValue,
      postal: postalValue,
      city: postalValue
    };

    submitOrder({
      user: orderData,
      orderedItems: order
    });
  };

  useEffect(() => {
    onSubmit(hasSubmitted);
  }, [onSubmit, hasSubmitted]);

  return (
    <form className={classes["checkout-form"]} onSubmit={confirmHandler}>
      <div
        className={`${classes["form-control"]} ${
          nameError ? classes["invalid"] : ""
        }`}
      >
        <label htmlFor="name">Your name</label>
        <input
          value={nameValue}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          type="text"
          id="name"
        />
        {nameError && (
          <p className={classes["error-text"]}>Please enter a valid name!</p>
        )}
      </div>
      <div
        className={`${classes["form-control"]} ${
          streetError ? classes["invalid"] : ""
        }`}
      >
        <label htmlFor="street">Street</label>
        <input
          value={streetValue}
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
          type="text"
          id="street"
        />
        {streetError && (
          <p className={classes["error-text"]}>Please enter a valid street!</p>
        )}
      </div>
      <div
        className={`${classes["form-control"]} ${
          postalError ? classes["invalid"] : ""
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input
          value={postalValue}
          onChange={postalChangeHandler}
          onBlur={postalBlurHandler}
          type="number"
          id="postal"
        />
        {postalError && (
          <p className={classes["error-text"]}>
            Please enter a valid Postal address!
          </p>
        )}
      </div>
      <div
        className={`${classes["form-control"]} ${
          cityError ? classes["invalid"] : ""
        }`}
      >
        <label htmlFor="city">City</label>
        <input
          value={cityValue}
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
          ype="text"
          id="city"
        />
        {cityError && (
          <p className={classes["error-text"]}>Please enter a valid city!</p>
        )}
      </div>
      {isSubmitting && <div>Submitting Order...</div>}
      <div className={classes.controls}>
        <Button altBtn={true} onClick={onClose}>
          Close
        </Button>
        <Button type="submit">Confirm</Button>
      </div>
    </form>
  );
};

export default CheckoutForm;
