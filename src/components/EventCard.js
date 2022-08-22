import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

function EventCard(props) {
  return (
    <Card className="w-48">
      <CardHeader floated={false} className="h-12">
        {props.host}
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h6" color="blue-gray" className="mb-2">
          {props.date}
        </Typography>
        <Typography color="blue" className="font-medium" textGradient>
          {props.time} / {props.noon}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
          
        </Tooltip>
      </CardFooter>
      <Button color="blue">Join</Button>
    </Card>
  );
}

export default EventCard;