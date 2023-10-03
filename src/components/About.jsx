import React from 'react'
import abtImg from '../assets/img/fil.jpg'


function About() {
  return (
    <div className='mt-4 mb-28' id="about">
      <h1 className='text-center text-[#2A3B47] text-[3rem] test-700 font-montserrat font-bold my-28 uppercase'>About me</h1>
      <div className='grid grid-cols-2 grid-rows-1 px-20 text-[#697477] gap-5'>


        <div className="md:float-left relative mx-auto h-[200px] sm:h-[270px] md:h-[400px]">
          <img src={abtImg} alt='About-me'
          className='relative z-10 w-full md:w-[350px] h-auto md:h-[400px] rounded-[15px] overflow-clip'/>
          <div className='w-full h-full border-4 border-[#5361FF] md:w-[350px] md:h-[400px] rounded-[15px] absolute top-[20px] left-[20px]'></div>
        </div>


        <div class="md:float-left text-[20px]">
          <h2 className="text-[2rem] font-bold text-[#5361FF] mb-4 font-montserrat">I am Rose Ann Liwanag.</h2>
          <p className="mb-4 font-montserrat">You can call me <span className="text-[#5361FF] font-semibold font-montserrat"> ROSAS.</span></p>
          <p className="mb-4 font-montserrat">A Computer Engineering, seeking an entry-level position that will allow me to strengthen and
            update my
            knowledgeand skills
            in my field within a professional and corporate environment. I have a keen ability to quickly grasp new
            concepts and
            I am always enthusiastic about learning and undergoing training to enhance my performance and growth in the
            workplace.
          </p>
        </div>

      </div>
    </div>
  )
}

export default About