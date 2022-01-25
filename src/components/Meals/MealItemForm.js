import { forwardRef, useRef } from "react";
import Button from "../UI/Button";
import inputClasses from "../UI/input.module.css";

const MealItemForm = forwardRef((props, ref) => {
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const amountValue = +amountInputRef.current.value;
    props.addToCart(amountValue);
  };
  return (
    <form className={props.className} onSubmit={submitHandler}>
      <div className={inputClasses.input}>
        <label>Amount</label>
        <input type="number" ref={amountInputRef} defaultValue={1} min={1} />
      </div>
      <Button type="submit">+ Add</Button>
    </form>
  );
});

export default MealItemForm;
