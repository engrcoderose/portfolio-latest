import React from 'react';
import heroImg from '../assets/img/rose.png';
import Fade from 'react-reveal/Fade';

function Hero() {
    // const url = "facebook.com";

  return (
    <div className='pt-14 px-7 md:px-20 md:h-screen bg-[#5361FF] w-full' id="home">
        <div>
            <div className='w-full flex flex-col md:flex-row item-center justify-between'>
                {/* texts */}
                <Fade left>
                    <div className='text-white mx-auto text-center md:text-start'>
                        <h6 className='text-3xl mt-12 ml-1 font-montserrat font-semibold'>Hello, I'm</h6>
                        <h1 className='font-semibold text-7xl md:text-8xl my-4 font-montserrat uppercase'>Rose Ann <br/>Liwanag.</h1>
                        <p className='md:w-100 my-4 font-montserrat ml-1'> Aspiring Software Developer | Computer Engineer Graduate 2023 </p>

                        {/* buttons */}
                        <div className='mt-5 ml-1'>
                            <button id='resumeButton' className='group relative h-12 w-48 overflow-hidden outline-white px-6 py-2 rounded-lg border-2 text-white my-4 uppercase shadow'
                            >
                                <div className='absolute inset-0 w-3 bg-white transition-all duration-[500ms] ease-out group-hover:w-full'></div>
                                <span className='relative text-white font-bold font-montserrat group-hover:text-[#5361FF]'>Resume</span>
                            </button>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className='order-first md:order-last relative mx-auto'>
                        <img src={heroImg} alt="img-hero"/>
                    </div>
                </Fade>

                
            </div>

            {/* divider */}
            {/* <div className="w-full h-24 bg-[#5361FF] mx-auto absolute left-0 hidden md:block"></div> */}
                
        </div>
    </div>
  )
}

export default Hero