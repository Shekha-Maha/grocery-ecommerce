
import React from 'react'
import {Redirect, Route, Switch } from 'react-router-dom';
import ProductAll from "./Pages/ProductAll/productAll";
import ProductView from "./Pages/ProductView/productView";

function App() {
  return (
    <div className="App">
      <Switch>        
        <Route exact path='/'><ProductAll/></Route> 
        <Route path='/productview'><ProductView /> </Route>
        <Route path='/'> </Route>
        <Redirect to="/"/>
      </Switch>
    </div>
  );
}

export default App;
