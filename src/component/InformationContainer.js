import React, { useContext, useEffect } from "react";
import PersonalDetails from "./PersonalDetails";
import { MyContext } from "../App";

export default function InformationContainer() {
  const { showItem, setShowItem } = useContext(MyContext);
  const [isAnimating, setIsAnimating] = React.useState(false);

  useEffect(() => {
    console.log("I got changed");
    setIsAnimating(true);
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 0);
    return () => clearTimeout(timeout);
  }, [showItem]);

  const toggleAnimation = (compName) => {
    setTimeout(() => {
      setShowItem(compName);
    }, 500);
    setIsAnimating(!isAnimating);
  };

  return (
    <div>
      <div className={`fade-animation-fadeIn`}>
        <PersonalDetails changeAnimation={toggleAnimation} />
      </div>
    </div>
  );
}
