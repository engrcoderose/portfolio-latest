import React from 'react';
import abtImg from '../assets/img/fil.jpg';
import { BsGithub,BsLinkedin,BsFillFileCodeFill } from "react-icons/bs";
import {motion} from 'framer-motion';

// animation effect
const variants = {
  // start
  intialText:{
      opacity: 0,
      x:-50
  },
  // End
  Text: {
      opacity:1,
      x:-10,
      transition: {
        duration: 0.5,
        delay: 0.5
      }
  },
  //start
  initialImg:{
      opacity: 0,
      x:-50
  },
  //end
  Img:{
      opacity:1,
      x:0,
      transition: {
          duration: 0.5,
          delay: 0.5
      }
  },
  headerInitial:{
    opacity:0,
    y:-20
  },
  header:{
    opacity:1,
    y:0,
    transition:{
      duration:0.5,
      delay:0.5
    }
  }
}


function About() {
  return (
    <div className='mt-4 md:mb-28' id="about">
      
      <motion.h1
        variants={variants}
        initial='headerInitial'
        whileInView='header'
        className='text-center text-[#2A3B47] text-4xl md:text-[3rem] font-montserrat font-bold my-10 md:my-28 uppercase'>About me</motion.h1>
      
      <div className='grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 px-10 md:px-20 text-[#697477] gap-10 items-center'>

        
        <motion.div
            variants={variants}
            initial='initialImg'
            whileInView='Img'
            className="md:float-left mx-auto relative">
          <img src={abtImg} alt='About-me'
          className='relative z-10 w-full md:w-[350px] h-[300px] md:h-[400px] rounded-[15px] overflow-clip'/>
          <div className='w-full h-full border-4 border-[#5361FF] rounded-[15px] absolute top-[20px] left-[20px]'></div>
        </motion.div>
          

          
        <motion.div
          variants={variants}
          initial='initialText'
          whileInView='Text'
          className="md:float-left text-[20px]">
          <h2 className="text-[2rem] font-bold text-[#5361FF] mb-4 font-montserrat">I am Rose Ann Liwanag.</h2>
          <p className="mb-4 font-montserrat">You can call me <span className="text-[#5361FF] font-semibold font-montserrat"> ROSE / ROSAS.</span></p>
          <p className="mb-4 font-montserrat">A Computer Engineer, seeking an entry-level position that will allow me to strengthen and
            update my knowledge and skills
            in my field within a professional and corporate environment. I have a keen ability to quickly grasp new
            concepts and I am always enthusiastic about learning and undergoing training to enhance my performance and growth in the
            workplace.
          </p>
          <div className='flex items-center my-5 text-[#697477] cursor-pointer'> 
            <span className='mx-2 hover:scale-125 transition-all'><a href='https://portfolio-latest-5rwt4xz8j-roses-projects-7b2361e8.vercel.app/' target='_blank'><BsFillFileCodeFill size={30}/></a></span>
            <span className='mx-2 hover:scale-125 transition-all'><a href='https://www.linkedin.com/in/roseannliwanag/' target='_blank'><BsLinkedin size={30}/></a></span>
            <span className='mx-2 hover:scale-125 transition-all'><a href='https://github.com/engrcoderose' target='_blank'><BsGithub size={30}/></a></span>
          </div>
        </motion.div>
        
        

      </div>
    </div>
  )
}

export default About