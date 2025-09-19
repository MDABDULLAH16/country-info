import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

const fetchCountry = fetch("https://openapi.programming-hero.com/api/all").then(
  (res) => res.json()
);
function App() {
  return (
    <>
      <h1>Welcome to the world tour</h1>
      <Suspense fallback={<h1>Country is Loading...</h1>}>
        <Countries fetchCountry={fetchCountry}></Countries>
      </Suspense>
    </>
  );
}

export default App;
