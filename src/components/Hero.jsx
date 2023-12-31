import React from 'react';
import {motion} from 'framer-motion';
import heroImg from '../assets/img/rose.png'


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
        x:50
    },
    //end
    Img:{
        opacity:1,
        x:0,
        transition: {
            duration: 0.5,
            delay: 0.5
        }
    }
}


function Hero() {
    // const url = "facebook.com";

  return (
    <div className='pt-14 px-7 md:px-20 md:h-screen bg-[#5361FF] md:w-full' id="home">
        <div>
            <div className='w-full flex flex-col md:flex-row item-center justify-between'>
                

                {/* texts */}
                <motion.div
                    variants={variants}
                    initial='initialText'
                    whileInView='Text'
                    className='text-white mx-auto text-center md:text-start'>
                    <h6 className='text-md md:text-3xl mt-4 md:mt-12 md:ml-1 font-montserrat font-semibold'>Hello, I'm</h6>
                    <h1 className='font-semibold text-4xl md:text-8xl my-4 font-montserrat uppercase'>Rose Ann <br/>Liwanag.</h1>
                    <p className='w-100 md:w-100 my-4 font-montserrat text-sm md:ml-1'> Aspiring Software Engineer | Computer Engineer Graduate 2023 </p>

                    {/* buttons */}
                    <div className='mt-5 ml-1'>
                        <button id='resumeButton' className='group relative h-12 w-48 overflow-hidden outline-white px-6 py-2 rounded-lg border-2 text-white my-4 uppercase shadow'>
                            <div className='absolute inset-0 w-3 bg-white transition-all duration-[500ms] ease-out group-hover:w-full'></div>
                            <span className='relative text-white font-bold font-montserrat group-hover:text-[#5361FF]'> <a href='https://drive.google.com/file/d/1AfKJJWpEOlBTuX6hlsyjyJCmx0FeeCmA/view?usp=drive_link' target='_blank'>Resume</a></span>
                        </button>
                    </div>
                </motion.div>
        
                {/* Hero Image */}
                <motion.div
                    variants={variants}
                    initial='initialImg'
                    whileInView='Img'
                    className='order-first md:order-last relative mx-auto'>
                    <img src={heroImg} alt="img-hero" className='w-[75%] md:w-[100%] m-auto relative z-40'/>
                </motion.div>

            </div>

            {/* divider */}
            {/* <div className="w-full h-24 bg-[#5361FF] mx-auto absolute left-0 hidden md:block"></div> */}
                
        </div>
    </div>
  )
}

export default Hero