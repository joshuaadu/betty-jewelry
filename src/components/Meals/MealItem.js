import { useEffect, useState } from "react";
import Button from "../UI/Button";
import inputClasses from "../UI/input.module.css";
import classes from "./MealItem.module.css";
const MealItem = (props) => {
  const [amount, setAmount] = useState(1);
  const addToCartButtonHandler = () => {};
  const amountOnChange = (event) => {
    setAmount(event.target.value);
  };
  useEffect(() => {
    console.log("useEffect amount:", amount);
  }, [amount]);
  return (
    <li className={classes["meal-item"]}>
      <div className={classes.left}>
        <span>{props.name}</span>
        <span>{props.ingredient}</span>
        <span>${props.price}</span>
      </div>
      <div className={classes.right}>
        <div className={inputClasses.input}>
          <label>Amount</label>
          <input onChange={amountOnChange} defaultValue={amount} />
        </div>
        <Button>+ Add</Button>
      </div>
    </li>
  );
};
export default MealItem;
