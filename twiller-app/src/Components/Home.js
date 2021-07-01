import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import React from "react";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <br></br>
        <img src={"/twiller.png"} className="App-logo" alt="logo" />
        <p>TWILLER IS #1 APP!</p>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
        <br></br>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=aBmeD8KU0hI"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Michael Corrieri and Brian Nester <br></br>
          Project lead by Michael Nester
        </a>
      </header>
    </div>
  );
}

export default Home;
