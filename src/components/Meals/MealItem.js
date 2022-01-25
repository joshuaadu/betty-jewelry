import { useContext } from "react";
import CartContext from "../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemDetails from "./MealItemDetails";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const { addItem } = useContext(CartContext);
  const addToCartHandler = (amount) => {
    console.log("add item");
    addItem({
      id: props.id,
      name: props.name,
      amount,
      price: props.price
    });
  };
  return (
    <li className={classes["meal-item"]}>
      <MealItemDetails
        className={classes.left}
        name={props.name}
        description={props.description}
        price={props.price}
      />
      <MealItemForm className={classes.right} addToCart={addToCartHandler} />
    </li>
  );
};
export default MealItem;
