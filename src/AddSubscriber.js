import React, { Component } from "react";
import Header from "./Header";
import "./App.css";
import "./AddSubscriber.css";
class AddSubscriber extends Component {
  render() {
    return (
      <div>
        <Header heading="Add Subscriber" />
        <div className="component-body-container">
          <button className="custom-btn">Back</button>
          <form className="subscriber-form">
            <label htmlFor="name" className="label-control">
              Name :
            </label>
            <br />
            <input type="text" className="input-control"></input>
            <br />
            <br />
            <label htmlFor="phone" className="label-control">
              Phone :
            </label>
            <br />
            <input type="text" className="input-control"></input>
            <br />
            <br />
            <div className="subscriber-info-container">
              <span className="subscriber-to-add-heading">
                Subscriber to be added :{" "}
              </span>
              <br />
              <span className="susbcriber-info">Name :</span>
              <br />
              <span className="susbcriber-info">Phone :</span>
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
