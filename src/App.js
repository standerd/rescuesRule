import React from "react";
import { Helmet } from "react-helmet";
import Landing from "../src/landingPage/landing";
import ThankYou from "../src/thankYou/thankYou";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Rescues Rule</title>
        <meta name="RescuesRule" content="Help Support the Rescues" />
      </Helmet>
      <Route path="/" exact component={Landing} />
      <Route path="/thanks" component={ThankYou} />
    </div>
  );
}

export default App;
