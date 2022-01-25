import { useContext, useEffect, useState } from "react";
import CartContext from "../store/cart-context";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  const { items } = useContext(CartContext);
  const [btnHighlighted, setBtnHighLighted] = useState(false);
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighLighted(true);
    const timer = setInterval(() => {
      setBtnHighLighted(false);
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, [items]);
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const btnClass = `${classes["header-cart-btn"]} ${
    btnHighlighted ? classes.bump : ""
  }`;
  return (
    <button
      className={`${btnClass} ${props.className}`}
      onClick={props.onClick}
    >
      <span>
        <i className="fas fa-shopping-cart"></i>
      </span>
      Your Cart <span className={classes.total}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
