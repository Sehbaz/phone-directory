import Header from "./Header";
import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
function App() {
  let subscribers = [
    {
      id: 1,
      name: "Sehbaz Rafik",
      phone: "9999999999",
    },
    {
      id: 2,
      name: "Faiz Rafik",
      phone: "7777777777",
    },
  ];

  return (
    <div>
      <div className="component-body-container">
        <Header heading="Phone Directory" />
        <button className="custom-btn add-btn">Add</button>
        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>

          <span className="grid-item phone-heading">Phone</span>
        </div>
        {subscribers.map((subs) => {
          return (
            <div className="grid-container" key={subs.id}>
              <span className="grid-item">{subs.name}</span>
              <span className="grid-item">{subs.phone}</span>
              <button className="custom-btn delete-btn">Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
