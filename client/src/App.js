import React from "react";
// import NavBar from "./components/NavBar";
// import { useAuth0 } from "./react-auth0-spa";
// import Profile from "./components/Profile";
import history from "./utils/history";
import { Router, Route, Switch } from "react-router-dom";
// import PrivateRoute from "./components/PrivateRoute";
// import FrontPageImg from "./assets/unsplashRoad.jpg";
import MainContent from "./components/mainContent";
function App() {
  // const { loading } = useAuth0();

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div className="App">
      <Router history={history}>
        <div>{/* <NavBar /> */}</div>
        <Switch>
          <Route path="/" component={MainContent} />
          {/* <Route path="/profile" component={Profile} /> */}
          {/* <PrivateRoute path="/profile" component={Profile} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
