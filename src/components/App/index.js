import React from "react";
import AddCounter from "../../containers/AddCounter";
import RemoveCounter from "../../containers/RemoveCounter";
import Counter from "../../containers/Counter";

const App = () => {
  return (
    <div className="container">
      <Counter />
      <br />
      <div className="columns">
        <div className="column is-11">
          <AddCounter />
          <RemoveCounter />
        </div>
      </div>
    </div>
  );
};

export default App;
