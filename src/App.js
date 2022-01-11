import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <MealsSummary></MealsSummary>
      </main>
    </div>
  );
}
