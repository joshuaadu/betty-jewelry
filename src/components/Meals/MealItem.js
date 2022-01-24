import { useContext, useEffect, useState } from "react";
import CartContext from "../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemDetails from "./MealItemDetails";
import MealItemForm from "./MealItemForm";
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

  useEffect(() => {
    console.log("useEffect amount:", amount);
  }, [amount]);
  return (
    <li className={classes["meal-item"]}>
      <MealItemDetails
        className={classes.left}
        name={props.name}
        description={props.description}
        price={props.price}
      />
      <MealItemForm
        className={classes.right}
        addAmount={setAmount}
        onSubmit={addToCartFormHandler}
      />
    </li>
  );
};
export default MealItem;
