import React from "react";
import { motion } from "framer-motion";
import sky2 from "../images/sky2.png";
import NavBar2 from "../components/NavBar2";
import logo from "../images/nvpbois.png";
import SideNavbar from "../components/SideNavbar";
import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import SignupPage from "./SignupPage";
import { useAuth0 } from "@auth0/auth0-react";

const DashBoard = () => {
  const { logout } = useAuth0();

  return (
    <div
      style={{ backgroundImage: `url(${sky2})` }}
      className="bg-cover h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex justify-between">
        <div>
          <img src={logo} alt="logo" className="w-10 my-1 mx-1" />
        </div>
        <div>
          <NavBar2 />
        </div>
        <div>
          <Button className="mx-3 my-3" color="red" onClick={() => logout()}>
            Log Out
          </Button>
        </div>
      </div>
      <div className="flex">
        <SideNavbar />
        
        <div className="flex mx-10">
          <div className="mx-[40%] my-10">
          <div className="text-xl mb-4">Talk to our intelligent ChatBot</div>
            <iframe
              width="350"
              height="430"
              allow="microphone;"
              src="https://console.dialogflow.com/api-client/demo/embedded/e9a067f9-f17d-4200-a3f2-4cc7efb9c958"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
