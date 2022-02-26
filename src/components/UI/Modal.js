import { Fragment } from "react";
import Card from "./Card";
import classes from "./Modal.module.css";
const Modal = (props) => {
  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.closeModal}></div>
      <Card className={classes.modal}>{props.children}</Card>
    </Fragment>
  );
};

export default Modal;
