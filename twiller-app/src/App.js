import "./App.css";
import VertSidebar from "./Components/VertSidebar";
import { Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import UserHome from "./Components/UserHome";

function App() {
  return (
    <div>
      <VertSidebar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/userhome">
          <UserHome />
        </Route>
        <Route path="*">
          <h1>404 BABY</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
