import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import Navbar from '../components/navbar/Navbar'
import Login from '../modules/auth/login/Login'
import Signup from '../modules/auth/signup/Signup'
import Home from '../modules/home/Home'
import { BrowserRouter as Router ,Switch, } from 'react-router-dom'
import PublicRouting from './PublicRouting'
import PrivateRouting from './PrivateRouting'
import HeaderShort from '../components/header/HeaderShort'
import Footer from '../components/footer/Footer'
import FeatureFoods from '../modules/featureFoods/FeatureFoods'
import FoodDetails from '../modules/foodDetails/FoodDetails'
import RegisterStore from '../modules/registerStore/RegisterStore'
import AddFood from '../modules/addFood/AddFood'
import Dashboard from '../modules/dashboard/Dashboard'
import { doSignup, authStateChk } from '../store/actions/AuthAction'
import { useState, useEffect } from "react";

export default function Navigation() {
    const authState = useSelector(state=> state.AuthReducer.isUserLoggedIn)
    
    return (
           <Router>
              <HeaderShort />
           
            <Switch>
            <PrivateRouting exact path="/dashboard" auth={authState} >
                    <Dashboard />
                </PrivateRouting>
                <PublicRouting exact path="/home" >
                    <Home />
                </PublicRouting>
                <PublicRouting exact path='/addfood'>
                    <AddFood />
                </PublicRouting>
                <PublicRouting exact path="/login" auth={authState}>
                    <Login />
                </PublicRouting>
                <PublicRouting exact path="/featurefood"  >
                    <FeatureFoods />
                </PublicRouting>
                <PublicRouting exact path="/signup"  auth={authState}>
                    <Signup />
                </PublicRouting>
                <PublicRouting exact path="/fooddetails"  >
                    <FoodDetails />
                </PublicRouting>
                <PublicRouting exact path="/registerstore"  auth={authState}     >
                    <RegisterStore />
                </PublicRouting>
                
               
             
            </Switch>
            <Footer />
           </Router>
    )
}
