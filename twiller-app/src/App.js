import "./App.css";
import Login from "./Components/Login";
import VertSidebar from "./Components/VertSidebar";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";

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
        <Route path="*">
          <h1>404 BABY</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
