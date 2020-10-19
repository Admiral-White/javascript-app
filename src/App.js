import React from 'react';
import logo from './logo.svg';
import Services from './components/Services'
import Register from './components/Register'
import Home from './components/Home' // always reference all the import made.
import {Switch, Route, BrowserRouter } from 'react-router-dom'
import './App.css';

function App() {
  // const student = {
  //   name: "Inyang",
  //   age: "59",
  //   gender: "can't say",
  //   status: "confused"
  // }
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path ='/' exact component={Home} />
          <Route path ='/services' exact component={Services} />
          <Route path ='/join' component={Register}/>
          
          <Services />
          <Register />
        </Switch>
      
      </BrowserRouter>
      
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
