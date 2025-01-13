import "./App.css";
import "./index.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <p>
            This project was coded by{" "}
            <a href="https://www.linkedin.com/in/angelika-dar/" target="_blank">
              Angelika Dar
            </a>{" "}
            and it is{" "}
            <a
              href="https://github.com/angelika-dar/react-weather-app"
              target="_blank"
            >
              open-source on GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
