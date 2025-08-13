import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Exercise1 from "./components/Input/Exercise1";

function AppInput() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Exercise1></Exercise1>
    </>

  );
}

export default AppInput;
