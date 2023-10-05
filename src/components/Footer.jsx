import React from 'react'
import { BsGithub,BsLinkedin,BsFillFileCodeFill } from "react-icons/bs";
import {motion} from 'framer-motion';

const variants ={
  initial:{
    opacity:0,
    y:-10
  },
  entry:{
    opacity:1,
    y:0,
    transition:{
      duration:0.2,
      delay:0.2
    }
  }
  
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div
      className='bg-[#5361FF]'>
      
      <motion.div
        variants={variants}
        initial='initial'
        whileInView='entry'
        className='flex flex-col md:flex-row justify-between items-center p-5'>
        <div className='font-bold text-3xl cursor-pointer flex items-center gap-1 md:px-20'>
          <span className='text-white font-montserrat'>Rosas.</span>
        </div>
        <div className='my-4'> <p className='text-white font-montserrat text-center'> {year} - Rose Ann Liwanag. All rights reserved. </p> </div>
        <div className='flex justify-between items-center mx-10 text-white'> 
          <span className='mx-2 hover:scale-125 transition-all'><a href='https://portfolio-latest-5rwt4xz8j-roses-projects-7b2361e8.vercel.app/' target='_blank'><BsFillFileCodeFill size={30}/></a></span>
          <span className='mx-2 hover:scale-125 transition-all'><a href='https://www.linkedin.com/in/roseannliwanag/' target='_blank'><BsLinkedin size={30}/></a></span>
          <span className='mx-2 hover:scale-125 transition-all'><a href='https://github.com/engrcoderose' target='_blank'><BsGithub size={30}/></a></span>
        </div>
      </motion.div>
      
      
    </div>
  )
}

export default Footer