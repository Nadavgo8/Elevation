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
    shouldDiscount: true,
    currentPage: "Landing",
  });
  const changeToHomePage = () => {
    setUserInfo((s) => ({ ...s, currentPage: "Home" }));
  };
  const changeToLandingPage = () => {
    setUserInfo((s) => ({ ...s, currentPage: "Landing" }));
  };
  return (
    <>
      {userInfo.currentPage === "Landing" ? (
        <>
          <Landing user={userInfo.user} store={userInfo.store} />
          <button onClick={changeToHomePage}>Move to home</button>
        </>
      ) : (
        <>
          <Home
            store={userInfo.store}
            shouldDiscount={userInfo.shouldDiscount}
          />
          <button onClick={changeToLandingPage}>Move to Landing</button>
        </>
      )}

      {/*  */}
    </>
  );
}

export default App;
