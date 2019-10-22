import React, { Component } from "react";
import ThankYou from "../thankYou/thankYou";
import "./landing.css";

class Landing extends Component {
  state = {
    name: "",
    surname: "",
    email: "",
    telNo: "",
    donation: "",
    committed: false
  };

  onChangeHandler = name => e => {
    this.setState({ [name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const templateId = "template_050fCUxk";

    this.sendFeedback(templateId, {
      from_name: this.state.name + " - " + this.state.surname,
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email,
      telNo: this.state.telNo,
      donation: this.state.donation
    });
  };

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("gmail", templateId, variables)
      .then(res => {
        console.log("Email successfully sent!");
        this.setState({ committed: true });
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }

  render() {
    let info;

    !this.state.committed
      ? (info = (
          <div className="content">
            <h1 style={{ textAlign: "center" }}>
              Please Help Us Make A Difference
            </h1>
            <div className="landingImages">
              <div className="fromThis">
                <h3 style={{ textAlign: "center" }}>From This</h3>
                <img src={require("../images/winston1.jpg")} alt="dog1" />
                <br></br>
                <img src={require("../images/winston2.jpg")} alt="dog2" />
              </div>
              <div className="toThis">
                <h3 style={{ textAlign: "center" }}>To This</h3>
                <img src={require("../images/winston2.jpg")} alt="dog3" />
                <img src={require("../images/hiccup1.jpg")} alt="dog3" />
                <br></br>
                <img src={require("../images/tog1.jpg")} alt="dog4" />
                <img src={require("../images/tog2.jpg")} alt="dog3" />
              </div>
            </div>
            <p>
              In order to support the pooches in need at DogTown we have decided
              to pack our racing shoes away for this year's 947 Ride Joburg and
              rather raise some money to help the wonderfull people of dogtown.
            </p>
            <h3>How to Help</h3>
            <p>
              If you would like to make a contribution to our cause, There are a
              couple of options.
            </p>
            <p>
              Please click on The Dogtown SA Link{" "}
              <a href="https://barkingmad.co.za/">DogTown SA</a>. You will be
              redirected to their site, where you can make a donation online.
            </p>
            <p>
              Alternatly you can do an eft directly into their bank account.
              Details in the info section.
            </p>
            <p>
              For both options of donation we please ask that you complete the
              donate form. This is not compulsory, we do however want to keep
              track of the donations and be able to report back to you on our
              success.
            </p>
          </div>
        ))
      : (info = <ThankYou />);

    return (
      <div className="mainLanding">
        <div className="formElement">
          <div>
            <h1>Our Charity</h1>
            <img src={require("../images/DogTown.png")} alt="dogtown" />
            <p></p>
            <p>Tel Number: 076 044 1979</p>
            <p>Alt Number: 073 092 7800</p>
            <p>E-Mail: info@dogtownsa.org</p>
            <p>
              Website: <a href="https://barkingmad.co.za/">DogTown SA</a>
            </p>
          </div>
          <h1>Donate</h1>
          <form>
            <input
              type="text"
              placeholder="Your Name"
              value={this.state.name}
              onChange={this.onChangeHandler("name")}
            ></input>
            <input
              type="text"
              placeholder="Surname"
              value={this.state.surname}
              onChange={this.onChangeHandler("surname")}
            ></input>
            <input
              type="text"
              placeholder="Contact Number"
              value={this.state.telNo}
              onChange={this.onChangeHandler("telNo")}
            ></input>
            <input
              type="text"
              placeholder="E-Mail"
              value={this.state.email}
              onChange={this.onChangeHandler("email")}
            ></input>
            <input
              type="text"
              placeholder="Donation"
              value={this.state.donation}
              onChange={this.onChangeHandler("donation")}
            ></input>
            <button type="submit" onClick={this.onSubmitHandler}>
              Submit
            </button>
          </form>
          <h3>Banking Details:</h3>
          <p>Dogtown SA</p>
          <p>Absa Bank</p>
          <p>Cheque Account</p>
          <p>Account: 905 385 4128</p>
        </div>
        {info}
      </div>
    );
  }
}

export default Landing;
