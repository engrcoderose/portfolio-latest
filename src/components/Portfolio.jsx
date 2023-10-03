import React from 'react';
import abtImg from '../assets/img/project1.PNG';
import abtImg2 from '../assets/img/movieHunter.PNG';
import abtImg3 from '../assets/img/project2.PNG';

function Portfolio() {
  return (
    <div className='mt-4 mb-28' id="project">
      <h1 className='text-center my-28 text-[#2A3B47] text-[3rem] test-700 font-montserrat font-bold uppercase'>Portfolio</h1>
      <div className='grid grid-cols-2 grid-rows-1 px-20 text-[#697477] gap-5 my-16'>

        <div class="md:float-left text-[20px]">
          <h2 className="text-[2rem] font-semibold text-[#5361FF] mb-4 font-montserrat uppercase">Project 1</h2>
          <h3 className="mb-4 font-montserrat font-semibold text-[#2A3B47] text-2xl"> Custom Dried Flower Bouquets</h3>
          <p className="mb-4 font-montserrat">With a clean and modern design, it offers a seamless transition between various screen sizes,
          ensuring that customers can easily browse and shop for custom dried flower bouquets from anywhere.
          </p>
        </div>

        <div className="md:float-left relative mx-auto">
          <img src={abtImg} alt='About-me'
          className='relative z-10 w-full md:w-[450px] h-[300px] rounded-[15px]'/>
          <div className='w-full h-full border-4 border-[#5361FF] md:w-[450px] md:h-[300px] rounded-[15px] absolute top-[20px] left-[20px]'></div>
        </div>

      </div>

      {/* Project 2 */}
      <div className='grid grid-cols-2 grid-rows-1 px-20 text-[#697477] gap-5 my-16'>


        <div className="md:float-left relative mx-auto">
          <img src={abtImg2} alt='img'
          className='relative z-10 w-full md:w-[450px] h-[300px] rounded-[15px]'/>
          <div className='w-full h-full border-4 border-[#5361FF] md:w-[450px] md:h-[300px] rounded-[15px] absolute top-[20px] left-[20px]'></div>
        </div>

        <div class="md:float-left text-[20px]">
          <h2 className="text-[2rem] font-semibold text-[#5361FF] mb-4 font-montserrat uppercase">Project 2</h2>
          <h3 className="mb-4 font-montserrat font-semibold text-[#2A3B47] text-2xl"> Movie Hunter</h3>
          <p className="mb-4 font-montserrat"> Movie-land is api based website that is used to search for movies, and display the results.</p>
        </div>

      </div>

      {/* Project 3 */}
      <div className='grid grid-cols-2 grid-rows-1 px-20 text-[#697477] gap-5 my-16'>

        <div class="md:float-left text-[20px]">
          <h2 className="text-[2rem] font-semibold text-[#5361FF] mb-4 font-montserrat uppercase">Project 3</h2>
          <h3 className="mb-4 font-montserrat font-semibold text-[#2A3B47] text-2xl"> Make It Sound </h3>
          <p className="mb-4 font-montserrat"> A web-based application that allows users to trigger animal sounds by clicking on corresponding buttons. The project aims to provide an interactive 
          and fun experience for users, particularly children, by associating each button with the sound of a specific animal. </p>
        </div>

        <div className="md:float-left relative mx-auto">
          <img src={abtImg3} alt='img'
          className='relative z-10 w-full md:w-[450px] h-[300px] rounded-[15px]'/>
          <div className='w-full h-full border-4 border-[#5361FF] md:w-[450px] md:h-[300px] rounded-[15px] absolute top-[20px] left-[20px]'></div>
        </div>

      </div>
    </div>
  )
}

export default Portfolio