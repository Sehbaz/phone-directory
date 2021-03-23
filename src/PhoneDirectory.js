import React, { Component } from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscriber from "./ShowSubscriber";
import { BrowserRouter as Router, Route } from "react-router-dom";

class PhoneDirectory extends Component {
  constructor() {
    super();

    this.state = {
      subscriberList: [
        {
          id: 1,
          name: "sehbaz",
          phone: "333333",
        },
        {
          id: 2,
          name: "faiz",
          phone: "99999",
        },
      ],
    };
  }
  addSubscriberHandler = (newSubscriber) => {
    let subscriberList = this.state.subscriberList;
    if (subscriberList.length > 0) {
      newSubscriber.id = subscriberList[subscriberList.length - 1].id + 1;
    } else {
      newSubscriber.id = 1;
    }
    subscriberList.push(newSubscriber);
    //old subscriber list is being replaced with the new subscriber list
    this.setState({ subscriberList: subscriberList });
  };
  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          render={(props) => (
            <ShowSubscriber
              {...props}
              subscriberList={this.state.subscriberList}
            />
          )}
        />
        <Route
          exact
          path="/add"
          render={({ history }, props) => (
            <AddSubscriber
              history={history}
              {...props}
              addSubscriberHandler={this.addSubscriberHandler}
            />
          )}
        />
      </Router>

      //<AddSubscriber addSubscriberHandler={this.addSubscriberHandler} />;
      //<ShowSubscriber subscriberList={this.state.subscriberList} />
    );
  }
}
export default PhoneDirectory;
