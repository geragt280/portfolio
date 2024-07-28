import React, { useEffect, createContext } from "react";
import "./component/css/App.css";
// import Script from './component/customHooks/Script';
import $ from "jquery";
import InformationContainer from "./component/InformationContainer";
import NavContent from "./component/NavContent";
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
      <div className="mainBody">
        <div className="container_middle">
          <div className="information_container">
            <InformationContainer />
          </div>
          <div className="nav_bar_container" onClick={() => collapseFunction()}>
            <NavContent />
          </div> 
        </div>
        <BackgroundParticles />
      </div>
    </MyContext.Provider>
  );
}

export {MyContext};
