import React from "react";
import { Button } from "@material-tailwind/react";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
  
const Cards = (props) => {
  return (
    <div>
      <Card className="w-56">
        <CardHeader color="blue" className="relative h-56">
          <img
            src={props.image}
            alt="img-blur-shadow"
            className="h-full w-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            {props.name}
          </Typography>
          <Typography>
            {props.about} 
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">{props.rating}</Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
          </Typography>
        </CardFooter>
        
      </Card>
      <div className="mt-3"><Button className="bg-black hover:bg-deep-purple-400 ">Click to view</Button></div>

    </div>
  );
};

export default Cards;
