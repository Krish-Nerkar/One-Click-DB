import React from 'react'
import './style.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewLanding from '../Landing/new-landing';
import NewHome from '../Home/new-home';


class Base extends React.Component
{
    render = () =>
    {
        return(
            <Router>
                    {/* <Route path = "/signup"><SignUp/></Route> */}
                    <Route path = "/home"><NewHome/></Route>
                    <Route exact path = "/"><NewLanding/></Route>
            </Router>
        )
    }
    
}

export default Base;