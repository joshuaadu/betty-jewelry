import { useRef } from "react";
import Button from "../UI/Button";
import inputClasses from "../UI/input.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  return (
    <form className={props.className} onSubmit={props.onSubmit}>
      <div className={inputClasses.input}>
        <label>Amount</label>
        <input
          type="number"
          onChange={(e) => {
            props.addAmount(e.target.value);
          }}
          defaultValue={1}
          min={1}
        />
      </div>
      <Button type="submit">+ Add</Button>
    </form>
  );
};

export default MealItemForm;
