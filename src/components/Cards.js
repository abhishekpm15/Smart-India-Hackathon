import React from "react";
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
      <Card className="w-52">
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
    </div>
  );
};

export default Cards;
