import React from "react";
import "./thankYou.css";

const thankYou = props => {
  return (
    <div className="thanks">
      <div className="inner">
        <h1>Thanks For Your Contribution</h1>
        <a href="https://www.givengain.com/cc/dewald--lourika-are-cycling-to-save-more-lives/">
          PLEASE CLICK HERE TO FINALISE PAYMENT
        </a>
        <br></br>
        <img src={require("../images/thanks.jpg")} alt="thanks" />
        <h3>
          Pssst - Just because I was adopted does not mean I could not learn
          some new tricks.
        </h3>
        <p>If you are riding or supporting the 947 RideJoburg </p>
        <p>be on the lookout for us, We are wearing special shirts.</p>
        <img
          className="shirts"
          src={require("../images/shirts.jpg")}
          alt="shirts"
        />
      </div>
    </div>
  );
};

export default thankYou;
