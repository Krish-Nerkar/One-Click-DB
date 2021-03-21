import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    console.log("loading");
  }

  function print(user){
    console.log(user)
    
    let userid = user["sub"]
    userid = userid.split('|')
    userid = userid[1]
    localStorage.setItem('userid', userid);
  }

  return (
    isAuthenticated && (
      <div>
        {print(user)}
      </div>
    )
  );
};

export default Profile;