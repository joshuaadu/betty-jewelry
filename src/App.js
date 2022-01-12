import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Meals />
      </main>
    </div>
  );
}
