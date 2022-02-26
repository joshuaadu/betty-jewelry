import useInput from "../hooks/use-input";
import useSendRequest from "../hooks/use-sendRequest";
import Button from "../UI/Button";
import classes from "./checkoutForm.module.css";

const textIsValid = (text) => {
  return text.trim() !== "";
};

const numISValid = (num) => {
  return num > 0;
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
  } = useInput(numISValid);
  const {
    value: cityValue,
    isValid: cityIsValid,
    error: cityError,
    blurhandler: cityBlurHandler,
    changeHandler: cityChangeHandler
  } = useInput(textIsValid);

  const { submitOrder } = useSendRequest();

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
    submitOrder(orderData);
    props.onClose();
    console.log(orderData);
  };

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
          <p className={classes["error-text"]}>Please enter your name!</p>
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
          <p className={classes["error-text"]}>Please enter your street!</p>
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
            Please enter your Postal address!
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
          <p className={classes["error-text"]}>Please enter your city!</p>
        )}
      </div>
      <div className={classes.controls}>
        <Button altBtn={true} onClick={props.onClose}>
          Close
        </Button>
        <Button type="submit">Confirm</Button>
      </div>
    </form>
  );
};

export default CheckoutForm;
