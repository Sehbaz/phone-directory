import Header from "./Header";
import React, { Component } from "react";
import "./ShowSubscriber.css";
import { Link } from "react-router-dom";

class ShowSubscriber extends Component {
  render() {
    function onDeletedClick(subscriberId) {
      this.props.deleteSubscriberHandler(subscriberId);
    }
    return (
      <div>
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <Link to="/add">
            <button className="custom-btn add-btn">Add</button>
          </Link>
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
                  onClick={onDeletedClick.bind(this, subs.id)}
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

export default ShowSubscriber;
