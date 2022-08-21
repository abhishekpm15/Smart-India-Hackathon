import React from 'react'
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    let navigate = useNavigate(); 

  return (
    <div className='mx-1 my-1'>
        <div className='py-1'>
            <Button onClick={()=>{navigate("/DashBoard")}} className='px-5 mx-5' color='blue' size='sm'>Dash Board</Button>
        </div>
    </div>
  )
}

export default Navbar