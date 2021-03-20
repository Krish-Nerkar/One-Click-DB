import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../Base/style.css'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className = "button" onClick={() => loginWithRedirect()}>Create Your One Click DB </button>;
};

export default LoginButton;