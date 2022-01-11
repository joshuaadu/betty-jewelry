import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import MealsSummary from "./components/Meals/MealsSummary";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <MealsSummary></MealsSummary>
        <AvailableMeals />
      </main>
    </div>
  );
}
