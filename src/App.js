import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from "./components/home";
import CopyToClipboard from "./components/copyToClipboard";
import SelfieView from "./components/selfieView";

import "./styles.scss";

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="header">
          <div className="">
            ZOLVE
            </div>
          <div className="navbar">
            <a href="/">Page1</a>
            <a href="/page2?q=page2">Page2</a>
            <a href="/page3">Page3</a>
          </div>
        </div>
        <div className="">
          <Route exact path="/" component={Home} />
          <Route exact path="/page2" component={CopyToClipboard} />
          <Route exact path="/page3" component={SelfieView} />
        </div>
      </div>
    </Router>
  );
}

export default App;
