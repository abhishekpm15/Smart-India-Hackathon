import React, { useState } from "react";
import { Button, Input, Checkbox } from "@material-tailwind/react";
import sky2 from "../images/sky2.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const LoginPage = () => {
  let navigate = useNavigate();

  const [logged, setLogged] = useState(false);

  const {
    loginWithPopup,
    isLoading,
    user,
    isAuthenticated,
  } = useAuth0();

  const handleLogin = () => {
    loginWithPopup();
  };
  if (isAuthenticated) {
    setLogged(true);
  }

  if (logged) {
    navigate("/DashBoard");
  }


  return (
    <div
      style={{ backgroundImage: `url(${sky2})` }}
      className="bg-cover overflow-auto object-cover"
    >
      <div className="float-right mx-3 my-3">
        <Button
          color="red"
          onClick={() => {
            navigate("/Home");
          }}
        >
          Go back
        </Button>
      </div>

      <div
        className="mx-[35%] my-[5%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Log In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Email" size="lg" />
            <Input label="Password" size="lg" />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth onClick={handleLogin}>
              Log In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Link to="/SignupPage">
                <Typography
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign In
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>

      <div className="h-20"></div>
    </div>
  );
};

export default LoginPage;
