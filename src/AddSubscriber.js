import React, { Component } from "react";
import Header from "./Header";
import "./AddSubscriber.css";
class AddSubscriber extends Component {
  render() {
    return (
      <div>
        <Header heading="Add Subscriber" />
        <div className="component-body-container">
          <button className="custom-btn">Back</button>
          <form className="susbscriber-form">
            <label htmlFor="name" className="label-control">
              Name :
            </label>
            <br />
            <input id="name" type="text" className="input-control"></input>
            <br />
            <br />
            <label htmlFor="phone" className="label-control">
              Phone :
            </label>
            <br />
            <input id="phone" type="text" className="input-control"></input>
            <br />
            <br />
            <div className="subscriber-info-container">
              <span className="susbscriber-to-add-heading">
                Subscriber to be added:{" "}
              </span>
              <br />
              <span className="subsdcriber-info">Name :</span>
              <br />
              <span className="subsdciber-info">Phone :</span>
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
