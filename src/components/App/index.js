import React from "react";
import AddCounter from "../../containers/AddCounter";
import Counter from "../../containers/Counter";

const App = () => {
  return (
    <div className="container">
      <Counter />
      <br />
      <div className="columns">
        <div className="column is-11">
          <AddCounter />
        </div>
      </div>
    </div>
  );
};

export default App;
