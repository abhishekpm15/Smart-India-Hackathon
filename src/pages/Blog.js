import React from "react";
import SideNavbar from "../components/SideNavbar";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import NavBar2 from "../components/NavBar2";
import logo from "../images/nvpbois.png";
import sky2 from "../images/sky2.png";
import { useAuth0 } from "@auth0/auth0-react";
import BlogCard from "../components/BlogCard";
import Patent from '../images/patent.jpg'
import Tradesecret from '../images/tradesecret.png'
import Trademark from '../images/trademark.jpg'
import Copyright from '../images/copyright.jpg';
const Blog = () => {
  const { logout } = useAuth0();
    const PatentUrl = 'https://nvpboisatsih.blogspot.com/2022/08/patent.html'
    const CopyrightUrl = 'https://nvpboisatsih.blogspot.com/2022/08/copy-right.html'
    const TrademarkUrl = 'https://nvpboisatsih.blogspot.com/2022/08/trade-mark.html'
    const TradesecretUrl = 'https://nvpboisatsih.blogspot.com/2022/08/trade-secret.html'
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
          <div className="flex mx-5 my-16">
            <div className="mx-3">
              <BlogCard content="Learn more about Patent" img={Patent} blogUrl={PatentUrl}/>
            </div>
            <div className="mx-3">
              <BlogCard content="Learn more about Coprights" img={Copyright} blogUrl={CopyrightUrl}/>
            </div>
            <div className="mx-3">
              <BlogCard content="Learn more about Trademarks" img={Trademark} blogUrl={TrademarkUrl}/>
            </div>
            <div className="mx-3">
              <BlogCard content="Learn more Trade Secret" img={Tradesecret} blogUrl={TradesecretUrl}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
