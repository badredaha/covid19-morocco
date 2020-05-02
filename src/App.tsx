import React, {Component} from 'react';

import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Home from './components/home/home';

import * as firebase from 'firebase';

class App extends Component {

componentDidMount(){
  const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
  const FIREBASE_DATABASE_URL = process.env.REACT_APP_FIREBASE_API_KEY;
  const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID;
  const config = {
      apiKey: FIREBASE_API_KEY,
      authDomain: 'covid19-morroco',
      databaseURL: FIREBASE_DATABASE_URL,
      projectId: FIREBASE_PROJECT_ID,
      storageBucket: '',
    };

    firebase.initializeApp(config);
}

  render() {
      return (
       
          
      <Router>

<nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/signin"}>Sign in</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/signup"}>Sign up</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/home"}>Home</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <h1/>

        <div className="App" style={{width:'100%',height:'100%'}}>
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path='/' component={Signin} />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
                <Route path="/home"   component={Home} />
              </Switch>
            </div>
          </div>
        </div>
        </Router>
        
  )};
}

export default App;
