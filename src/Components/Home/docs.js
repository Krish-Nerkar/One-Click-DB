import React from 'react'
import './style.css'

class Docs extends React.Component
{
    url = () =>{
         const userid = localStorage.getItem('userid')
        let url = "https://oneclick-db.herokuapp.com/user/"+userid
        return url
    }

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
                    GET <br>
                    </br>
                    <a target="_blank" rel="noreferrer" href = {this.url()}>{this.url()}</a><br/><br/>  
                </h2>
                <h2 className = "special">AND THATS IT!</h2>
            </div>
        )
    }
}

export default Docs