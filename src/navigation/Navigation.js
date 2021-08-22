import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/navbar/Navbar'
import Login from '../modules/auth/login/Login'
import Signup from '../modules/auth/signup/Signup'
import Home from '../modules/home/Home'
import { BrowserRouter as Router ,Switch, Route, Redirect, useHistory,useLocation  } from 'react-router-dom'
import PublicRouting from './PublicRouting'
import PrivateRouting from './PrivateRouting'
import HeaderShort from '../components/header/HeaderShort'
import Footer from '../components/footer/Footer'
import FeatureFoods from '../modules/featureFoods/FeatureFoods'
import FoodDetails from '../modules/foodDetails/FoodDetails'
export default function Navigation() {
    // const authState = useSelector(state=> state.AuthReducer.isUserLoggedIn)
    return (
           <Router>
              <HeaderShort />
           
            <Switch>
                <PublicRouting exact path="/home" >
                    <Home />
                </PublicRouting>
                <PublicRouting exact path="/login" >
                    <Login />
                </PublicRouting>
                <PublicRouting exact path="/featurefood"  >
                    <FeatureFoods />
                </PublicRouting>
                <PublicRouting exact path="/signup"  >
                    <Signup />
                </PublicRouting>
                <PublicRouting exact path="/fooddetails"  >
                    <FoodDetails />
                </PublicRouting>
            </Switch>
            <Footer />
           </Router>
    )
}
