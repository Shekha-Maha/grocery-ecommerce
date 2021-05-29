
import React from 'react'
import {Redirect, Route, Switch } from 'react-router-dom';
import TopNavWithSearch from './Components/Navbar/TopNavWithSearch/TopNavWithSearch';

import OrderHistoryPage from './Pages/OrderHistory/OrderHistory_page';
import ProductAll from "./Pages/ProductAll/productAll";
import ProductView from "./Pages/ProductView/productView";

function App() {
  return (
    <div>
      <Switch >        
        <Route exact path='/'><TopNavWithSearch /> </Route>
        <Route path='/allproduct'><ProductAll/></Route>  
        <Route path='/productview'><ProductView /> </Route>
        <Route path='/orderhistory'><OrderHistoryPage /> </Route>
        <Route path='/'> </Route>
        <Redirect to="/"/>
      </Switch>
    </div>
  );
}

export default App;
