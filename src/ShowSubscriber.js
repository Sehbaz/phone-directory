import Header from "./Header";
import React, { Component, useState } from "react";
import "./ShowSubscriber.css";

class App extends Component {
  render() {
    function deleteHandler(e) {
      alert("Hi i am delete button" + e);
    }

    return (
      <div>
        <div className="component-body-container">
          <Header heading="Phone Directory" />
          <button className="custom-btn add-btn">Add</button>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>

            <span className="grid-item phone-heading">Phone</span>
          </div>
          {this.props.subscriberList.map((subs) => {
            return (
              <div className="grid-container" key={subs.id}>
                <span className="grid-item">{subs.name}</span>
                <span className="grid-item">{subs.phone}</span>
                <button
                  className="custom-btn delete-btn"
                  onClick={deleteHandler.bind(this, subs.id)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
