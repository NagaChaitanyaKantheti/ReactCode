import React, { Component } from 'react';
import './App.css';
import Demo from './Demo' ;

class App extends Component {
  render() {
    return (
      <div id="main">
        <div id="header">
          <h1>Fake Currency Detection</h1>
          <div id="menubar">
            <ul id="menu">
              <li class="selected"><a href="index.html">Home</a></li>
              <li><a href="examples.html" onClick={<Demo/>}>Examples</a></li>
              <li><a href="examples.html">Testing</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>
      </div>
    </div>
    );
  }
}
export default App;
