import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  return (
    <button
      className={`${classes["header-cart-btn"]} ${props.className}`}
      onClick={props.onClick}
    >
      <span>
        <i className="fas fa-shopping-cart"></i>
      </span>
      Your Cart <span className={classes.total}>{props.total}</span>
    </button>
  );
};

export default HeaderCartButton;
