import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Exercise1 from "./components/Input/Exercise1";
import Exercise2 from "./components/Input/Exercise2";

function AppInput() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Exercise2></Exercise2>
    </>
  );
}

export default AppInput;
