import React from "react";
import Navbar from "../components/Navbar";
import logo from "../images/nvpbois.png";
import sky2 from "../images/sky2.jpg";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
const Contact = () => {
  return (
    <div style={{ backgroundImage: `url(${sky2})` }} className="bg-cover overflow-auto object-cover">
      <div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-screen bg-cover"
      >
        <div className="flex justify-between">
          <div>
            <img src={logo} alt="logo" className="w-10 my-1 mx-1" />
          </div>
          <div>
            <Navbar />
          </div>
          <div></div>
        </div>
        <br></br>
        <div className="mx-72">
          <Card className="">
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                Contact Us
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Rutrum tellus pellentesque eu tincidunt tortor aliquam. Purus
                semper eget duis at tellus at. In fermentum posuere urna nec
                tincidunt praesent semper feugiat. Sed velit dignissim sodales
                ut eu sem integer vitae. Id venenatis a condimentum vitae sapien
                pellentesque habitant. At in tellus integer feugiat scelerisque
                varius morbi. Magna ac placerat vestibulum lectus mauris
                ultrices eros. Magna fringilla urna porttitor rhoncus dolor
                purus non enim. Penatibus et magnis dis parturient montes
                nascetur ridiculus mus mauris. Amet mattis vulputate enim nulla
                aliquet. Pharetra vel turpis nunc eget lorem dolor sed. Massa id
                neque aliquam vestibulum morbi blandit cursus risus at. Ac ut
                consequat semper viverra nam libero justo. Et magnis dis
                parturient montes nascetur ridiculus mus mauris vitae. Sed
                elementum tempus egestas sed sed risus. Ac felis donec et odio
                pellentesque diam. Quis ipsum suspendisse ultrices gravida
                dictum fusce ut placerat orci. Varius vel pharetra vel turpis
                nunc eget. Adipiscing at in tellus integer feugiat scelerisque.
                Tellus orci ac auctor augue. Sagittis aliquam malesuada bibendum
                arcu vitae.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="h-24"></div>
    </div>
  );
};

export default Contact;
