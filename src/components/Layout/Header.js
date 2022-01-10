import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import Logo from "../UI/Logo";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <Fragment>
      <header className={`${classes.header} ${props.className}`}>
        <Logo></Logo>
        <HeaderCartButton total={0}></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://source.unsplash.com/N1D6PRck1bI"
          alt="A table full of delicious food!"
        />
      </div>
    </Fragment>
  );
};

export default Header;
