import React from 'react'
import { Link, Router } from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
            <ul >
            <Link to="/home">Home</Link> 
            <br />
            <br />
            
            <Link to='/signup'>Sign up</Link> 
            <br />
            <br />

            <Link to='/login'>Login</Link> 
            <br />
            <br />

            <Link to='/'>Public</Link> 
            </ul>
        </div>
    )
}
