import MealItem from "./MealItem";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import useSendRequest from "../hooks/use-sendRequest";

const AvailableMeals = () => {
  const { data, isLoading, error } = useSendRequest();

  const mealsList = isLoading ? (
    <p>Loading meals info...</p>
  ) : error ? (
    <p>{error}</p>
  ) : (
    data.map((meal) => (
      <MealItem
        key={meal[0]}
        id={meal[0]}
        name={meal[1].name}
        description={meal[1].description}
        price={meal[1].price}
      />
    ))
  );

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
