
import './App.css';
import React, {Component} from  'react';
import ClimbTracker from "./ClimbTracker.js"

export default class App extends Component {

  render() {
      return (
          <div className="basiclook">
              <ClimbTracker />
          </div>
      );
  }
}

