import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hudini from "./components/Hudini";
import Landing from "./components/Landing";
import Home from "./components/Home";
function App() {
  // //ex1
  //   return (
  //     <>
  //     <Hudini></Hudini>
  //     </>
  //   );
  //ex2
  const [userInfo, setUserInfo] = useState({
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      {
        item: "Surround Sound Pelican",
        price: 3099,
        discount: 0.05,
        hottest: true,
      },
    ],
    shouldDiscount: false,
    currentPage: "Landing",
  });

  return (
    <>
      <Landing user={userInfo.user} store={userInfo.store} />
      <Home store={userInfo.store} />
    </>
  );
}

export default App;
