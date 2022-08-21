// import React, { useEffect, useState } from "react";
// import { Button, Input, Checkbox, Alert } from "@material-tailwind/react";
// import sky2 from "../images/sky2.jpg";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import DashBoard from "./DashBoard";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";

// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
// } from "@material-tailwind/react";

// const SignupPage = () => {

//    useEffect(()=>{
//     // window.location.reload(false);
//    },[])
//   let navigate = useNavigate();




//   if(user){
//     return(
//     navigate("/DashBoard"))
//     // return (
//     // <div>
//     //   {/* <DashBoard /> */}
//     //   {/* {navigate("/DashBoard")} */}
//     //   <Router>
//     //     <Routes>
//     //     <Route path="/DashBoard" element={<DashBoard />} />
//     //     </Routes>
//     //   </Router>
//     //   </div>
//     // )
//   }
  
//   // const [show, setShow] = useState(true);
//   // const [email, setEmail] = useState(null);
//   // const [password, setPassword] = useState(null);
//   // const [confirmPass, setConfirmPass] = useState(null);
//   // const [error, setError] = useState(null);
// /*
//   const register = (e) => {
//     e.preventDefault();
//     // // setError("");
//     if (validatePassword()) {
//       createUserWithEmailAndPassword(auth, email, password).then(() => {
//         setError(false)
//       }).catch(setError(true))
//   }
//   if(error === true){
//     <Alert
//         show={show}
//         dismissible={{
//           onClose: () => setShow(false),
//         }}
//       >
//         {error.toString()}
//       </Alert>
//   }
//   else{
//     navigate("/DashBoard");
//   }
        
//     //     .catch((err) => setError(err.message));
//          console.log(email,password,confirmPass);
//     //   }
    
//   };

//   const validatePassword = () => {
//     let isValid = true;
//     if (password !== '' && confirmPass !== '') {
//       if (password !== confirmPass) {
//         isValid = false;
//         setError("Passwords does not match");
//       }
//     }
//     return isValid;
//   };
// */
  
//   return (
//     <motion.div
//       style={{ backgroundImage: `url(${sky2})` }}
//       className="bg-cover overflow-auto object-cover"
//     >
//       <div className="float-right mx-3 my-3">
//         <Button
//           color="red"
//           onClick={() => {
//             navigate("/Home");
//           }}
//         >
//           Go back
//         </Button>
//       </div>
//       <div
//         className="mx-[35%] my-[5%]"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//       >
//         <Card className="w-96">
//           <CardHeader
//             variant="gradient"
//             color="blue"
//             className="mb-4 grid h-28 place-items-center"
//           >
//             <Typography variant="h3" color="white">
//               Sign In
//             </Typography>
//           </CardHeader>
//           <CardBody className="flex flex-col gap-4">
//             <Input
//               label="Email"
//               size="lg"
//               // onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <Input
//               label="Password"
//               size="lg"
//               // onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <Input
//               label="Confirm Password"
//               size="lg"
//               // onChange={(e) => setConfirmPass(e.target.value)}
//               required
//             />

//             <div className="-ml-2.5">
//               <Checkbox label="Remember Me" />
//             </div>
//           </CardBody>
//           <CardFooter className="pt-0">
//             <Button
//               type="submit"
//               variant="gradient"
//               fullWidth
//             >
//               Sign In
//             </Button>
//             <Typography variant="small" className="mt-6 flex justify-center">
//               Already have an account ?
//               <Link to="/LoginPage">
//                 <Typography
//                   variant="small"
//                   color="blue"
//                   className="ml-1 font-bold"
//                 >
//                   Log In
//                 </Typography>
//               </Link>
//             </Typography>
//           </CardFooter>
//         </Card>
//       </div>
//       <div className="h-20"></div>
//     </motion.div>
//   );
// };

// export default SignupPage;
