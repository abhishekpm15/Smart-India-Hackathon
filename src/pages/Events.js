import React from "react";
import SideNavbar from "../components/SideNavbar";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import NavBar2 from "../components/NavBar2";
import logo from "../images/nvpbois.png";
import sky2 from "../images/sky2.png";
import { useAuth0 } from "@auth0/auth0-react";
import EventCard from "../components/EventCard";

const Events = () => {
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
      <div>
        <div className="flex">
          <SideNavbar />
          <div>
            <div className="mx-[50px]">
            <EventCard host="Host: Abhishek" date="25-08-22" time="9:30" noon="FN"/>
            </div>
            <div className="mx-[50px] my-4">
            <EventCard host="Host: Mithun" date="26-08-22" time="10:00" noon="FN"/>
            </div>
          </div>
          <div>
            <div className="mx-[50px]">
            <EventCard host="Host: Logesh" date="27-08-22" time="10:30" noon="AN"/>
            </div>
            <div className="mx-[50px] my-4">
            <EventCard host="Host: Girish" date="28-08-22" time="11:00" noon="FN"/>
            </div>
          </div>
          <div>
            <div className="mx-[50px]">
            <EventCard host="Host: Rahul" date="29-08-22" time="11:30" noon="FN"/>
            </div>
            <div className="mx-[50px] my-4">
            <EventCard host="Host: Rishvant" date="30-08-22" time="12:00" noon="FN"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
