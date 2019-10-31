import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./landing.css";

class Landing extends Component {
  state = {
    name: "",
    surname: "",
    email: "",
    telNo: "",
    donation: "",
    loading: false
  };

  onChangeHandler = name => e => {
    this.setState({ [name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.setState({ loading: true });
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
        this.setState({ laoding: false }, () => {
          this.props.history.push("/thanks");
        });
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
    let display;

    !this.state.loading
      ? (display = (
          <div className="content">
            <h1 style={{ textAlign: "center" }}>
              Please Help Us Make A Difference
            </h1>
            <div className="landingImages">
              <div className="fromThis">
                <h3 style={{ textAlign: "center" }}>BEFORE</h3>
                <img src={require("../images/winston1.jpg")} alt="dog1" />
                <br></br>
                <img src={require("../images/hiccup2.jpg")} alt="dog2" />
              </div>
              <div className="toThis">
                <h3 style={{ textAlign: "center" }}>AFTER</h3>
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
              rather raise some money to help the wonderful people of DogTown.
            </p>
            <h3>How to Help</h3>
            <p>
              If you would like to make a contribution to our cause, please fill
              out the form on the left, or on your phone the form at the top.
            </p>
            <p>
              This will redirect you to a different page that will contain a
              link where you can directly make a contribution to DogTown on
              their website.
            </p>
            <p>
              We will not share your details, but would appreciate it if you can complete the form so we can keep track of donations. However, if you wish to not submit your details please still click on the submit button leaving all the fields blank, and you
              will also be redirected to the donation link.
            </p>
            <p>
              We thank you for taking the time to 
              help us to help the POOCHES in need.
            </p>
          </div>
        ))
      : (display = (
          <div className="spinner">
            <h1>Loading Please Wait</h1>
            <div className="lds-circle">
              <div></div>
            </div>
          </div>
        ));

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
              placeholder="Donation Amount"
              value={this.state.donation}
              onChange={this.onChangeHandler("donation")}
            ></input>
            <button type="submit" onClick={this.onSubmitHandler}>
              Submit
            </button>
          </form>
          <p>OR</p>
          <a className="donate" href="https://www.givengain.com/cc/dewald--lourika-are-cycling-to-save-more-lives/">
          GO DIRECTLY TO DONATION
        </a>
        </div>
        {display}
      </div>
    );
  }
}

export default withRouter(Landing);
