import {React, useState, useEffect} from 'react'
import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { authStateChk } from '../store/actions/AuthAction';

export default function PrivateRoute({children, auth, ...rest }) {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
     useEffect(() => {
        dispatch(authStateChk(setLoading))
     }, [])


    // console.log('acb', loading);

    return (
        <Route {...rest} render={()=>loading?<div>loading...</div>:auth?children : <Redirect to={"/login"} /> } />
   
        )
}