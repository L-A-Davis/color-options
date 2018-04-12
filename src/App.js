import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header>
          Color Options
        </header>
        <ul>
          <li>
           <Link to="/">Home</Link>
          </li>
          <li>
           <Link to="/Page1">Page 1</Link>
          </li>
          <li>
           <Link to="/Page2">Page 2</Link>
          </li>
          <li>
           <Link to="/Page3">Page 3</Link>
          </li>
        </ul>

        <hr />
        <Route exact path="/" component={Home} />
        <Route exact path="/Page1" component={Page1} />
        <Route exact path="/Page2" component={Page2} />
        <Route exact path="/Page3" component={Page3} />
      </div>
      </Router>
    );
  }
}

export default App;
