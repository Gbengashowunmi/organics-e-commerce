import React from "react";
import "./App.css";
import LandingPage from "./LandingPage";

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  // const toggleDarkMode = () => {
  //   console.log(darkMode);
  //   setDarkMode(!darkMode);
  // };
  return (
    <div className="App">
      {/* <div className="dark_mode" onClick={toggleDarkMode}>
        {darkMode && (
          <style>
            {`
            :root {
              --clr-secondary: #c2c4c5;
  --clr-grey: rgba(34, 33, 33, 0.178);
  --clr-grey-2:rgba(34, 33, 33, 0.178);
  --clr-primary-light: rgba(87, 83, 83, 0.178);
  --clr-white-2:rgb(15, 1, 19);
           `}
          </style>
        )}
        {/* {darkMode ? (
          <IoMoon className="react_icon" />
          ) : (
            <IoSunny className="react_icon" />
        )} */}
      {/* </div> */}
            <LandingPage/> 
    </div>
  );
}

export default App;
