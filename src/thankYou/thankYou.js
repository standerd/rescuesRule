import React from "react";
import "./thankYou.css";

const thankYou = props => {
  return (
    <div className="thanks">
      <h1>Thanks For Your Contribution</h1>
      <img src={require("../images/thanks.jpg")} alt="thanks" />
      <h3>
        Pssst - Just because I was Adopted Does Not Mean I could not learn some
        tricks
      </h3>
      <p>If you are also riding the 947 Ride Joburg or Coming To Watch Us</p>
      <p>Be on the Lookout for us, We are wearing special Shirts.</p>
    </div>
  );
};

export default thankYou;
