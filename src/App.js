import React, { Component } from "react";
import JokeList from "./JokeList";
import HJokeList from "./with-hooks/HJokeList";

/** App component. Renders list of jokes. */

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <JokeList /> */}
        <HJokeList />
      </div>
    );
  }
}

export default App;
