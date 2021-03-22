import React from 'react'
import './style.css'
import LoginButton from '../Buttons/login'
import IframeResizer from 'iframe-resizer-react'


class NewLanding extends React.Component
{   
    myFunction = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
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

                <div class="container">

                    <div class="vertical-center">
                        <h1 className = "header">
                            OneClick. <br/>
                            <span className = "accent-head">to make your static site dynamic</span> 
                        </h1>

                        <h2 className   = "subtext">
                            The fastest and simplest way to add dynamic data to any website. Super Clean UI, No Complexities, No Nothing
                        </h2>

                        <LoginButton/>
                    </div>
                </div>

                <div className = "why">
                    <h1 className = "why-head">
                        Why OneClick DB?
                    </h1>

                    <div class="why-container">
                        <div className = "reason">
                             <box-icon className = "box-icon" name='heart' type='solid' ></box-icon> 
                             <br></br>
                             <h1>Easy To Use</h1>
                        </div>
                        <div className = "reason"> 
                            <box-icon className = "box-icon" type='solid' name='zap'></box-icon>
                            <br></br>
                            <h1>Lightning Fast</h1>
                        </div>
                        <div className = "reason">  
                            <box-icon className = "box-icon" name='code-alt'></box-icon>
                            <h1>Simple API</h1>
                        </div>

                        <div className = "reason">  
                            <box-icon className = "box-icon" type='solid' name='share-alt'></box-icon>
                            <h1>Sharable</h1>
                        </div>
                    </div>
                </div>
<div class = "testimonial">
    <h1 className = "pricing-head">
                        Wall Of Love
                    </h1>
                    <IframeResizer
                    src="https://embed.testimonial.to/w/one-click-db2?theme=dark&card=base"
                    style={{ width: "1px", minWidth: "100%", border:'none' }}
                    />
                    
                </div>
                <div className = "pricing">
                    <h1 style = {{color : "transparent"}}>djkjds</h1>
                    <h1 className = "pricing-head">
                       <span style = {{color : "#000"}}> Pricing</span>
                    </h1>
                    <h1 style = {{color : "transparent"}}>djkjds</h1>
                    <h2 style = {{color : "#222",textAlign : 'center'}}>(Currently Its Free For All!)</h2>

                    <div className = "pricing-container">
                        <div className = "pricing-box">
                           <h1>$5/month</h1>

                           <h2>
                               Unlimited Projects<br></br>Unlimited Records<br></br>
                               One To One Support From The Team<br></br>
                               Free Onboarding<br></br>Supreme Customisability
                                <br/><br/><br/>
                                <a class="gumroad-button" href="https://gum.co/RTbFP?wanted=true" target="_blank" rel="noreferrer">Signup</a>
                           </h2>
                        </div>

                        <h1 style = {{color : "transparent"}}>djkjds</h1>
                        
                    </div>
                </div>
                    
            <div className="foot">
                    <p> Made with ❤️ by <a href="https://twitter.com/intent/follow?screen_name=nerkar_krish" target="_blank" rel="noreferrer">Krish</a></p>
                </div>
            </div>
        )
    }
}

export default NewLanding