import React from 'react'
import './style.css'
import LogoutButton from '../Buttons/logout';
import firestore from '../Base/firestore.js';
import Profile from '../Buttons/profile.js'


class Docs extends React.Component
{
    render = () =>
    {
        return(
            <div>
                <div class="topnav" id="myTopnav">
                    <a class="active" href = "/">
                       <span class = "black-logo">OneClick <span className = "grey-logo">Database</span> </span>
                    </a>
                    {/* <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a> */}
                    {/* <a href="javascript:void(0);" class="icon" onClick = {this.myFunction}>
                        <i class="fa fa-bars"></i>
                    </a> */}
                </div>

                <h1 className = "heading hh1">
                    Documentation
                </h1>

                <h2 className = "sub-doc">
                    GET<br/><br/> work in progress...
                </h2>
            </div>
        )
    }
}

export default Docs