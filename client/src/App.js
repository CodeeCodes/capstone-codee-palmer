import React from "react";
import MainContent from "./components/mainContent";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import FitMap from "./components/fitMap";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContent />
      {/* <Switch> */}
        {/* <Route exact path="/mapPage" component={FitMap} /> */}
        {/* <Route exact path="/homePage" component={MainContent} /> */}
      {/* </Switch> */}
    </div>
  );
}

export default App;
