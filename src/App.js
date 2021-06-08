import './App.css';
import React,{useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './comp/Header.js'

import Home from './comp/Home.js'
import Checkout from './comp/Checkout.js'
import Login from './comp/Login.js'
import {useStateValue} from "./comp/StateProvider.js"
import {auth} from "./comp/firebase.js"

function App() {

  const [{user}, dispatch] = useStateValue();
  
  // piece of code which runs on condition

  useEffect(()=>{
   const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        // the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })

    return () =>{
      // any cleanup operations go in here
      unsubscribe();
    };

  }, [])


  console.log("User here", user)

  return (
    <Router>
       <div className="App">
    <Switch>
      <Route path="/checkout">
      <Header />
        <Checkout />
      </Route>

      <Route path="/login">
      
      
        <Login /> 


      </Route>

    {/* this is default route */}

    <Route path="/">
    <Header />
       <Home />

    </Route>

    </Switch>
    </div>
    </Router>
   
  );
}

export default App;
