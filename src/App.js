import React from "react";
import {Helmet} from "react-helmet"
import Landing from "../src/landingPage/landing";

function App() {
  return (
    <div className="App">
      <Helmet>
    <title>Rescues Rule</title>
    <meta name="RescuesRule" content="Help Support the Rescues" />
  </Helmet>
      <Landing />
    </div>
  );
}

export default App;
