import React from 'react'
import { Button } from "@material-tailwind/react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

const BlogCard = (props) => {
  return (
    <div>
        <Card className="w-52">
      <CardHeader color="blue" className="relative h-56">
        <img
          src={props.img}
          alt="img-blur-shadow"
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h6" className="mb-2">
          {props.content}
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small" className="mx-8">
        <a href={props.blogUrl} target="_blank" rel="noreferrer">
        <Button color="red">Read content</Button>
        </a>
          
        </Typography>
      </CardFooter>
    </Card>
    </div>
  )
}

export default BlogCard;