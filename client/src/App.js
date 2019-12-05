import React from "react";
import MainContent from "./components/mainContent";
import NavBar from "./components/NavBar";
import FrontPage from "./components/frontPage";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        {/* <Route exact path="/" component={FrontPage} /> */}
        <Route exact path="/" component={MainContent} />
      </Switch>
    </div>
  );
}

export default App;
