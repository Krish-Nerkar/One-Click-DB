import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../Home/style.css'

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <span className = "r">
    <button className = "logout" onClick={() => logout({ returnTo: window.location.origin })}>
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