import React, { Component } from 'react';
import './App.css';
import Landing from './Landing';
import CitiesBrowsing from './CitiesBrowsing';
import LogIn from './LogIn';
import SignUp from './SignUp';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';

export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route path ='/' exact render={
          () => {
            return(<Landing />);
          }
        }/>
        
        <Route path ='/CitiesBrowsing' render={
          () => {
            return(<CitiesBrowsing />);
          }
        } />

        <Route path ='/LogIn' render={
          () => {
            return(<LogIn />);
          }
        } />
        
        <Route path ='/SignUp' render={
          () => {
            return(<SignUp />);
          }
        } />
      </div>
      </Router>
    )
  }
}



