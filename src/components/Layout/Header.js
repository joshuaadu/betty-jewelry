import { Fragment, useContext } from "react";
import HeaderCartButton from "./HeaderCartButton";
import Logo from "../UI/Logo";
import classes from "./Header.module.css";
import CartContext from "../store/cart-context";
const Header = (props) => {
  const context = useContext(CartContext);
  return (
    <Fragment>
      <header className={`${classes.header} ${props.className}`}>
        <Logo></Logo>
        <HeaderCartButton
          onClick={props.showCart}
          total={context.items.length}
        ></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://source.unsplash.com/5UeN8VrCxvs"
          alt="A table full of delicious food!"
        />
      </div>
    </Fragment>
  );
};

export default Header;
