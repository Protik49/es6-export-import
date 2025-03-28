import { Suspense } from "react";
import "./App.css";
import { add, multi as mult } from "./utils/math/math";
import Bottles from "./components/bottles/bottles";

function App() {
  const sum = add(2, Math.PI);
  const multiply = mult();

  const bottlePromise = fetch('./bottles.json').then(res=>res.json())

  // const bottles = [
  //   { id: 1, name: "Pink Adidas Bottle", price: 300, color: "green" },

  //   { id: 1, name: "Pink Adidas Bottle", price: 300, color: "green" },

  //   { id: 1, name: "Pink Adidas Bottle", price: 300, color: "green" },

  //   { id: 1, name: "Pink Adidas Bottle", price: 300, color: "green" }
  // ];

  return (
    <>
      <h2>Buy World's Best Water Bottle</h2>
      <Suspense fallback={<h2>Bottles are loading</h2>}>
        <Bottles bottlePromise={bottlePromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
