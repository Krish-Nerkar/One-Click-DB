import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    console.log("loading");
  }

  function print(user){
    console.log(user)
    localStorage.setItem('userid', user["sub"]);
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