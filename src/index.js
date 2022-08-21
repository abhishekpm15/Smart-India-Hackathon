import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider domain="dev-6r1fgt0p.us.auth0.com" clientId="5WVtjOZQ6x3pyBrElBhneyK6iVSupYbt" redirectUri={window.location.origin}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Auth0Provider>
  </React.StrictMode>
);
