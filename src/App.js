import React, { createContext, useEffect } from "react";
import "./component/css/App.css";
import { Outlet } from "react-router-dom";
import NavContent from "./component/NavContent";
import $ from "jquery";
import BackgroundParticles from "./component/BackgroundParticles";

const MyContext = createContext();

export default function App() {
  const [showItem, setShowItem] = React.useState("Personal");

  const showingItem = { showItem, setShowItem };
  useEffect(() => {
    $("#navigator").slideToggle(); // it closes my navigation tabs in start
  }, []);

  const collapseFunction = (x) => {
    // window.alert("Hello.")
    $("#defaultMenuStyle").toggleClass("changeMenuStyle");
    $("#navigator").slideToggle();
  };

  return (
    <MyContext.Provider value={showingItem}>
      <>
        <div className="nav_bar_container" onClick={() => collapseFunction()}>
          <NavContent />
        </div>
        <div id="detail" className="mainBody">
          <BackgroundParticles />
          <Outlet />
        </div>
      </>
    </MyContext.Provider>
  );
}

export { MyContext };
