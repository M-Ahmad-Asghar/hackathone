import {React, useState, useEffect} from 'react'
import { Route, Redirect } from "react-router-dom";
import { authStateChk } from '../store/actions/AuthAction';
import { useSelector, useDispatch } from 'react-redux'

export default function PublicRoute({children, auth, ...rest }) {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
     useEffect(() => {
        dispatch(authStateChk(setLoading))
     }, [])

    return (
        <Route {...rest} render={()=>loading?<div>loading...</div> : auth? <Redirect to={"/home"} />  : children} />
    )
}