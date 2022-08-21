import React from 'react'
import SideNavbar from "../components/SideNavbar";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import NavBar2 from "../components/NavBar2";
import logo from "../images/nvpbois.png";
import sky2 from "../images/sky2.jpg";
import { useAuth0 } from "@auth0/auth0-react";

const Communities = () => {
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
          <Button
            className="mx-3 my-3"
            color="red"
            onClick={() => logout()}
          >
            Log Out
          </Button>
        </div>
      </div>
      <div>
        <SideNavbar />
      </div>
    </div>
  )
}

export default Communities;