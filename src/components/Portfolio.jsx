import React from 'react';
import abtImg from '../assets/img/project1.PNG';
import abtImg2 from '../assets/img/movieHunter.PNG';
import abtImg3 from '../assets/img/project2.PNG';
const Fade = require("react-reveal/Fade")

function Portfolio() {
  return (
    <div className='mt-4 mb-28 md:mx-20' id="projects">
      <Fade top cascade>
        <h1 className='text-center my-28 text-[#2A3B47] text-[3rem] test-700 font-montserrat font-bold uppercase'>Portfolio</h1>
      </Fade>

      <div className='grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 px-20 text-[#697477] gap-10 items-center my-20'>

        <Fade left>
          <div class="md:float-left text-[20px] mx-auto">
              <h2 className="text-[2rem] font-semibold text-[#5361FF] mb-4 font-montserrat uppercase">Project 1</h2>
              <h3 className="mb-4 font-montserrat font-semibold text-[#2A3B47] text-2xl"> Custom Dried Flower Bouquets</h3>
              <p className="mb-4 font-montserrat">With a clean and modern design, it offers a seamless transition between various screen sizes,
              ensuring that customers can easily browse and shop for custom dried flower bouquets from anywhere.
              </p>
              <div className='text-[#5361FF] font-montserrat cursor-pointer font-semibold flex my-4'>
               <span className='transform w-[100px] transition duration-500 hover:scale-110'><a href="https://github.com/engrcoderose/flowerShop"  target='_blank' > Github ↗ </a></span> 
                <span className='transform w-[100px] transition duration-500 hover:scale-110'><a href="https://engrcoderose.github.io/flowerShop/" target='_blank' >Live ↗ </a></span>
              </div>
          </div>
        </Fade>

        <Fade right>
          <div className="md:float-left mx-auto ">
              <img src={abtImg} alt='About-me'
              className='hover:-translate-x-4 hover:-translate-y-4 transition-all 
              cursor-pointer relative z-10 w-full md:w-[450px] h-[300px] rounded-[15px] '/>
              <div className='w-full h-full border-4 border-[#5361FF] md:h-[300px] rounded-[15px] absolute top-[20px] left-[20px]'></div>
          </div>
        </Fade>
      </div>

      {/* Project 2 */}
      <div className='grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 px-20 text-[#697477] gap-10 items-center my-16'>

      <Fade left>
        <div className="order-2 md:order-none md:float-left mx-auto">
            <img src={abtImg2} alt='img'
            className='hover:-translate-x-4 hover:-translate-y-4 transition-all cursor-pointer
            relative z-10 w-full md:w-[450px] h-[300px] rounded-[15px]'/>
            <div className='w-full h-full border-4 border-[#5361FF] md:h-[300px] rounded-[15px] absolute top-[20px] left-[20px]'></div>
        </div>
      </Fade>

      <Fade right>
        <div class="md:float-left text-[20px]">
            <h2 className="text-[2rem] font-semibold text-[#5361FF] mb-4 font-montserrat uppercase">Project 2</h2>
            <h3 className="mb-4 font-montserrat font-semibold text-[#2A3B47] text-2xl"> Movie Hunter</h3>
            <p className="mb-4 font-montserrat"> Movie-land is api based website that is used to search for movies, and display the results.</p>
            <div className='text-[#5361FF] font-montserrat cursor-pointer font-semibold flex my-4'>
              <span className='transform w-[100px] transition duration-500 hover:scale-110'><a href="https://github.com/engrcoderose/movieHunter" target='_blank'> Github ↗ </a></span> 
              <span className='transform w-[100px] transition duration-500 hover:scale-110'><a href="https://movie-hunter-iota.vercel.app/" target='_blank'>Live ↗ </a></span>
            </div>
        </div>
      </Fade>

      </div>

      {/* Project 3 */}
      <div className='grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 px-20 text-[#697477] gap-10 items-center my-16'>
      <Fade left>
        <div class="md:float-left text-[20px]">
            <h2 className="text-[2rem] font-semibold text-[#5361FF] mb-4 font-montserrat uppercase">Project 3</h2>
            <h3 className="mb-4 font-montserrat font-semibold text-[#2A3B47] text-2xl"> Make It Sound </h3>
            <p className="mb-4 font-montserrat"> A web-based application that allows users to trigger animal sounds by clicking on corresponding buttons. The project aims to provide an interactive 
            and fun experience for users, particularly children, by associating each button with the sound of a specific animal. </p>
            <div className='text-[#5361FF] font-montserrat cursor-pointer font-semibold flex my-4'>
              <span className='transform w-[100px] transition duration-500 hover:scale-110'><a href="https://github.com/engrcoderose/animalSounds" target='_blank'> Github ↗ </a></span> 
              <span className='transform w-[100px] transition duration-500 hover:scale-110'><a href="https://engrcoderose.github.io/animalSounds/" target='_blank'>Live ↗ </a></span>
            </div>
        </div>
      </Fade>

      <Fade right>
        <div className="md:float-left mx-auto">
            <img src={abtImg3} alt='img'
            className='hover:-translate-x-4 hover:-translate-y-4 transition-all cursor-pointer
            relative z-10 w-full md:w-[450px] h-[300px] rounded-[15px]'/>
            <div className='w-full h-full border-4 border-[#5361FF] md:h-[300px] rounded-[15px] absolute top-[20px] left-[20px]'></div>
        </div>
      </Fade>

      </div>
    </div>
  )
}

export default Portfolio