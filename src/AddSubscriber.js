import React, { Component } from "react";
import Header from "./Header";

import "./AddSubscriber.css";
import { Link } from "react-router-dom";
class AddSubscriber extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: "",
      phone: "",
    };
  }
  inputChangedHandler = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };
  onFormSubmitted = (e) => {
    // This willl not allow the page to refere on submit clicked as it is activated by default
    e.preventDefault();

    //PhoneDirectory.js is the smart component which executes the business logic
    this.props.addSubscriberHandler(this.state);

    this.setState({
      id: 0,
      name: "",
      phone: "",
    });
    this.props.history.push("/");
  };
  render() {
    //Capturing the onchage value to the variable
    const { name, phone } = this.state;
    return (
      <div>
        <Header heading="Add Subscriber" />
        <div className="component-body-container">
          <Link to="/">
            <button className="custom-btn">Back</button>
          </Link>
          <form
            className="subscriber-form"
            onSubmit={this.onFormSubmitted.bind(this)}
          >
            <label htmlFor="name" className="label-control">
              Name :
            </label>
            <br />
            <input
              id="name"
              name="name"
              type="text"
              className="input-control"
              onChange={this.inputChangedHandler}
            ></input>
            <br />
            <br />
            <label htmlFor="phone" className="label-control">
              Phone :
            </label>
            <br />
            <input
              name="phone"
              type="text"
              className="input-control"
              onChange={this.inputChangedHandler}
            ></input>
            <br />
            <br />
            <div className="subscriber-info-container">
              <span className="subscriber-to-add-heading">
                Subscriber to be added :{" "}
              </span>
              <br />
              <span className="susbcriber-info">Name : {name}</span>
              <br />
              <span className="susbcriber-info">Phone : {phone}</span>
            </div>

            <button type="submit" className="custom-btn add-btn">
              ADD
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default AddSubscriber;
