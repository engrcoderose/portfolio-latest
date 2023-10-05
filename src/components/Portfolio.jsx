import React from 'react';
import {motion} from 'framer-motion';
import projectImg from '../assets/img/project1.PNG';
import projectImg2 from '../assets/img/movieHunter.PNG';
import projectImg3 from '../assets/img/project2.PNG';

//animate
const variants = {
  // start
  intialRight:{
      opacity: 0,
      x:50
  },
  // End
  Right: {
      opacity:1,
      x:-10,
      transition: {
          duration: 0.5,
          delay: 0.5
      }
  },
  //start
  initialLeft:{
      opacity: 0,
      x:-20
  },
  //end
  Left:{
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

function Portfolio() {
  return (
    <div className='mt-4 md:mb-28 md:mx-20' id="projects">
      
      <motion.h1
        variants={variants}
        initial='headerInitial'
        whileInView='header'
        className='text-center my-28 text-[#2A3B47] md:text-[3rem] text-4xl font-montserrat font-bold uppercase'>Portfolio</motion.h1>
      
        {/* Project 1 */}
      <div className='grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 px-10 md:px-20 text-[#697477] gap-10 items-center my-20'>

        
        <motion.div
          variants={variants}
          initial='initialLeft'
          whileInView='Left'
          class="md:float-left text-[20px] mx-auto">
            <h2 className="text-[2rem] font-semibold text-[#5361FF] mb-4 font-montserrat uppercase">Project 1</h2>
            <h3 className="mb-4 font-montserrat font-semibold text-[#2A3B47] text-2xl"> Custom Dried Flower Bouquets</h3>
            <p className="mb-4 font-montserrat">With a clean and modern design, it offers a seamless transition between various screen sizes,
            ensuring that customers can easily browse and shop for custom dried flower bouquets from anywhere.
            </p>
            <div className='text-[#5361FF] font-montserrat cursor-pointer font-semibold flex my-4'>
             <span className='transform w-[100px] transition duration-500 hover:scale-110'><a href="https://github.com/engrcoderose/flowerShop"  target='_blank' > Github ↗ </a></span> 
              <span className='transform w-[100px] transition duration-500 hover:scale-110'><a href="https://engrcoderose.github.io/flowerShop/" target='_blank' >Live ↗ </a></span>
            </div>
        </motion.div>

        <motion.div
          variants={variants}
          initial='initialRight'
          whileInView='Right'
          className="md:float-left mx-auto relative">
          <img src={projectImg} alt='Img'
          className=' 
          cursor-pointer relative z-10 w-full md:w-[450px] h-[300px] rounded-[15px] '/>
          <div className='w-full h-full border-4 border-[#5361FF] md:h-[300px] rounded-[15px] absolute top-[20px] left-[20px]'></div>
        </motion.div>
        
      </div>

      {/* Project 2 */}
      <div className='grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 px-10 md:px-20 text-[#697477] gap-10 items-center my-16'>

      
        <motion.div
          variants={variants}
          initial='initialLeft'
          whileInView='Left' 
          className="order-2 md:order-none md:float-left mx-auto relative">
            <img src={projectImg2} alt='img'
            className=' cursor-pointer
            relative z-10 w-full md:w-[450px] h-[300px] rounded-[15px]'/>
            <div className='w-full h-full border-4 border-[#5361FF] md:h-[300px] rounded-[15px] absolute top-[20px] left-[20px]'></div>
        </motion.div>
      

      
        <motion.div
          variants={variants}
          initial='initialRight'
          whileInView='Right'
          class="md:float-left text-[20px] ">
            <h2 className="text-[2rem] font-semibold text-[#5361FF] mb-4 font-montserrat uppercase">Project 2</h2>
            <h3 className="mb-4 font-montserrat font-semibold text-[#2A3B47] text-2xl"> Movie Hunter</h3>
            <p className="mb-4 font-montserrat"> Movie-land is api based website that is used to search for movies, and display the results.</p>
            <div className='text-[#5361FF] font-montserrat cursor-pointer font-semibold flex my-4'>
              <span className='transform w-[100px] transition duration-500 hover:scale-110'><a href="https://github.com/engrcoderose/movieHunter" target='_blank'> Github ↗ </a></span> 
              <span className='transform w-[100px] transition duration-500 hover:scale-110'><a href="https://movie-hunter-iota.vercel.app/" target='_blank'>Live ↗ </a></span>
            </div>
        </motion.div>

      </div>

      {/* Project 3 */}
      <div className='grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 px-10 md:px-20 text-[#697477] gap-10 items-center my-16'>
      
        <motion.div
          variants={variants}
          initial='initialLeft'
          whileInView='Left'
          class="md:float-left text-[20px]">
            <h2 className="text-[2rem] font-semibold text-[#5361FF] mb-4 font-montserrat uppercase">Project 3</h2>
            <h3 className="mb-4 font-montserrat font-semibold text-[#2A3B47] text-2xl"> Make It Sound </h3>
            <p className="mb-4 font-montserrat"> A web-based application that allows users to trigger animal sounds by clicking on corresponding buttons. The project aims to provide an interactive 
            and fun experience for users, particularly children, by associating each button with the sound of a specific animal. </p>
            <div className='text-[#5361FF] font-montserrat cursor-pointer font-semibold flex my-4'>
              <span className='transform w-[100px] transition duration-500 hover:scale-110'><a href="https://github.com/engrcoderose/animalSounds" target='_blank'> Github ↗ </a></span> 
              <span className='transform w-[100px] transition duration-500 hover:scale-110'><a href="https://engrcoderose.github.io/animalSounds/" target='_blank'>Live ↗ </a></span>
            </div>
        </motion.div>
      

      
        <motion.div
          variants={variants}
          initial='initialRight'
          whileInView='Right'
          className="md:float-left mx-auto relative">
            <img src={projectImg3} alt='img'
            className=' cursor-pointer
            relative z-10 w-full md:w-[450px] h-[300px] rounded-[15px]'/>
            <div className='w-full h-full border-4 border-[#5361FF] md:h-[300px] rounded-[15px] absolute top-[20px] left-[20px]'></div>
        </motion.div>
      

      </div>
    </div>
  )
}

export default Portfolio