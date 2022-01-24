import { useContext, useEffect, useState } from "react";
import CartContext from "../store/cart-context";
import Button from "../UI/Button";
import inputClasses from "../UI/input.module.css";
import classes from "./MealItem.module.css";
const MealItem = (props) => {
  const [amount, setAmount] = useState(1);
  const { addItem } = useContext(CartContext);
  const itemSummary = {
    name: props.name,
    amount,
    price: props.price
  };
  const addToCartFormHandler = (event) => {
    event.preventDefault();
    console.log("add item");
    addItem(itemSummary);
  };
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
        <span>{props.description}</span>
        <span className={classes.price}>${props.price}</span>
      </div>
      <form className={classes.right} onSubmit={addToCartFormHandler}>
        <div className={inputClasses.input}>
          <label>Amount</label>
          <input
            type="number"
            onChange={amountOnChange}
            defaultValue={1}
            min={1}
          />
        </div>
        <Button type="submit">+ Add</Button>
      </form>
    </li>
  );
};
export default MealItem;
