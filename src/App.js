
import React from 'react'
import {Redirect, Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer/footer';
import MobileNav from './Components/Navbar/MobileNav/MobileNav';
import TopNavWithoutSearch from './Components/Navbar/TopNavWithoutSearch/TopNavWithoutSearch';
import TopNavWithSearch from './Components/Navbar/TopNavWithSearch/TopNavWithSearch';
import SideNav from './Components/SideNav/SideNav';
import CheckOut from './Pages/Checkout/CheckOut';
import OrderHistory from './Pages/OrderHistory/OrderHistory';
import ProductAll from "./Pages/ProductAll/productAll";
import ProductView from "./Pages/ProductView/productView";

function App() {
  return (
    <div>
      <CheckOut />
      {/* <TopNavWithoutSearch /> 
        <Switch >  
          <Route exact path='/'><OrderHistoryPage /> </Route>
          <Route path='/without'><TopNavWithoutSearch /> </Route>  
          <Route path='/topnav'><TopNavWithSearch /> </Route>
          <Route path='/allproduct'><ProductAll/></Route>  
          <Route path='/productview'><ProductView /> </Route>
          <Route path='/orderhistory'><OrderHistory /> </Route>
          <Route path='/'> </Route>
          <Redirect to="/"/>
        </Switch>
      <Footer /> */}
    </div>
  );
}

export default App;
