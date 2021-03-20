import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="oneclickdb.us.auth0.com"
    clientId="a4VXpxTEwiHIgquMBG5bNd0X2tbg73Xc"
    redirectUri={"http://localhost:3000/home"}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);