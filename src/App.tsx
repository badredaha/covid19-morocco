import React, { Component, useState, useEffect } from 'react';

import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Home from './components/home/home';
import FirebaseWorker from './workers/firebaseworker';

import * as firebase from 'firebase'


const AuthRouter = (props) => {

  const [islogged, setIsLoogged] = useState(false);
  const [isLoaded,setIsLoaded] = useState(false);

  useEffect(() => {

    const loaded = firebase.auth().onAuthStateChanged( (user) =>  {
      setIsLoogged(user != null);
      setIsLoaded(true);
    });

    
  });

  return (
    !isLoaded ? null : (islogged ? <Home/> : <Signin history={props.history}/>)
  );
}

const Links = (props) => {

  const [islogged, setIsLoogged] = useState(false);
  const [isLoaded,setIsLoaded] = useState(false);
  
  useEffect(() => {

    firebase.auth().onAuthStateChanged(function (user) {
      setIsLoogged(user != null);
      setIsLoaded(true);
    });

    
  });

  return (
    !isLoaded ? null : (islogged ? <li className="nav-item">
    <Link className="nav-link" to={"/home"}>Home</Link>
  </li> :
      <div className="container">
        <li className="nav-item">
          <Link className="nav-link" to={"/signin"}>Sign in</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/signup"}>Sign up</Link>
        </li>
      </div>)

  );
}

class App extends Component {

  constructor(props) {
    super(props);
    FirebaseWorker.InitAppFirebasex();
  }


  handleRouter = () => {

    return Signin;
  }
  
  render() {

    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <Links />
              
            </ul>
          </div>
        </nav>
        <h1 />
        <div className="App" style={{ width: '100%', height: '100%' }}>
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path='/' component={AuthRouter} />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
                <Route path="/home" component={Home} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>

    )
  };
}

export default App;
