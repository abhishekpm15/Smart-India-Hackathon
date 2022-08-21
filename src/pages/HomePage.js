import React from "react";
import Heading from "../components/Heading";
import { Button } from "@material-tailwind/react";
import logo from "../images/nvpbois.png";
import sky2 from "../images/sky2.jpg";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const HomePage = () => {
  let navigate = useNavigate();
  const people = [{ name: "English" }, { name: "Hindi" }, { name: "Tamil" }];
  const [selected, setSelected] = useState(people[0]);
  return (
    <div
      style={{ backgroundImage: `url(${sky2})` }}
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

      <div>
        <Heading />
      </div>

      <br></br>

      <div className="mx-72">
        <Card>
          <CardBody className="text-center">
            <Typography variant="h5" className="mb-2">
              What is our Aim ?
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Typography>
          </CardBody>
        </Card>
      </div>
      <br></br>

      <div className="mx-[40%] my-5 w-72">
        <div className="text-blue-gray-600 text-xs">Choose your Language</div>

        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                      }`
                    }
                    value={person}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
      <Button
        color="blue"
        className="inline-block mt-11 mb-11"
        onClick={() => {
          navigate("/LoginPage");
        }}
      >
        Get Started
      </Button>
    </div>
  );
};

export default HomePage;
