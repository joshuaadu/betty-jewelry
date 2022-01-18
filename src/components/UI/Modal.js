import Card from "./Card";
import classes from "./Modal.module.css";
const Modal = (props) => {
  return (
    <div className={`${classes.modal} ${props.className}`}>
      <div className={classes.backdrop} onClick={props.closeModal}></div>
      <Card className={classes.content}>{props.children}</Card>
    </div>
  );
};

export default Modal;
