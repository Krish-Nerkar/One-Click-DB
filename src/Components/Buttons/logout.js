import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <span className = "r">
    <button className = "logout-button  vertical-center" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
    {/* <div class="container">
  <div class="vertical-center">
    <p>I am vertically centered.</p>
  </div>
</div> */}
    </span>
  );
};

export default LogoutButton;