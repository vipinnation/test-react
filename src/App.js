import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginComponent from './Component/AuthComponent/LoginComponent';
import SignupComponent from './Component/AuthComponent/SignupComponent';
import ProfileComponent from './Component/ProfileComponent/ProfileComponent';
import CartComponent from './Component/PublicComponent/CartComponent';

import HomeComponent from "./Component/PublicComponent/HomeComponent";
import ProductComponent from './Component/PublicComponent/ProductComponent';
import UserAddress from './Component/ProfileComponent/UserAddress'
import AboutComponent from './Component/Utility/AboutComponent';
import Footer from "./Component/Utility/Footer";
import Navbar from "./Component/Utility/Navbar";
import OrderComponent from './Component/ProfileComponent/OrderComponent';
import AddAddress from './Component/ProfileComponent/AddAddress'
import AdminComponent from './Component/AdminComponent/AdminComponent';


function App() {
  return (
    <>
      <Navbar />

      <Switch>

        {/* Public Routes */}
        <Route exact path='/' component={HomeComponent} />
        <Route exact path="/product/:id" component={ProductComponent} />
        <Route exact path="/about" component={AboutComponent} />
        <Route exact path="/cart" component={CartComponent} />

        {/*Auth Routes */}
        <Route exact path="/signup" component={SignupComponent} />
        <Route exact path="/login" component={LoginComponent} />

        {/** Profile Routes */}
        <Route exact path='/profile' component={OrderComponent} />
        <Route exact path='/profile/manageaddress' component={UserAddress} />
        <Route exact path="/profile/user" component={ProfileComponent} />
        <Route exact path="/profile/add-address" component={AddAddress} />

        {/* Admin Routes */}
        <Route exact path="/admin" component={AdminComponent} />

      </Switch>

      <Footer />
    </>
  );
}

export default App;
