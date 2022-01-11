import MealItem from "./MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = (props) => {
  return (
    <section className={classes["available-meals__section"]}>
      <ul>
        <MealItem name="Sushi" ingredient="ingredient" price={3.53} />
        <MealItem name="Sushi" ingredient="ingredient" price={3.53} />
        <MealItem name="Sushi" ingredient="ingredient" price={3.53} />
      </ul>
    </section>
  );
};

export default AvailableMeals;
