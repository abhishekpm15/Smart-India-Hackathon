import React from "react";
import { motion } from "framer-motion";
import sky2 from "../images/sky2.jpg";
import NavBar2 from "../components/NavBar2";
import logo from "../images/nvpbois.png";
import SideNavbar from "../components/SideNavbar";
import { Button } from "@material-tailwind/react";
import Cards from "../components/Cards";
import image1 from '../images/mentormale.png';
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
          <Button
            className="mx-3 my-3"
            color="red"
            onClick={() => logout()}
          >
            Log Out
          </Button>
        </div>
      </div>
      <div className="flex">
        <SideNavbar />

        <div className="flex mx-10 my-10">
          <div className="mx-10">
            <Cards
              name="Abhishek"
              image={image1}
              about="He is a good boy"
              rating="⭐⭐⭐⭐⭐⭐"
            />
          </div>
          <div className="mx-10">
            <Cards
              name="Mithun"
              image={image1}
              about="He is a good boy"
              rating="⭐⭐⭐⭐"
            />
          </div>
          <div className="mx-10">
            <Cards
              name="Logesh"
              image={image1}
              about="He is a good boy"
              rating="⭐⭐⭐⭐"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
