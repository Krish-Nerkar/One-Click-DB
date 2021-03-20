import React from 'react'
import '../Base/style.css'
import LoginButton from '../Buttons/login';



class Signup extends React.Component
{

    render = () =>
    {

        return(
            <div className = "body">
                <LoginButton/>
                {/* <LogoutButton/> */}
                {/* <Profile/> */}
{}

            </div>
        )
    }
}

export default Signup;