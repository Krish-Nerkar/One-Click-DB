import React from 'react'
import './style.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from '../Signup/signup.js'
import Landing from '../Landing/landing.js';
import Home from '../Home/home.js'


class Base extends React.Component
{
    render = () =>
    {
        return(
            <Router>
                    <Route path = "/signup"><SignUp/></Route>
                    <Route path = "/home"><Home/></Route>
                    <Route exact path = "/"><Landing/></Route>
            </Router>
        )
    }
    
}

export default Base;