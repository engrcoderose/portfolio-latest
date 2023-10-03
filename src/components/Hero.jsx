import React from 'react';
import heroImg from '../assets/img/rose.png'

function Hero() {
  return (
    <div className='pt-14 px-7 md:px-20 md:h-screen bg-[#5361FF]' id="home">
        <div>
            <div className='w-full flex flex-col md:flex-row item-center justify-between'>
                {/* texts */}
                <div className='text-[#ffffff] mx-auto'>
                    <h6 className='text-3xl mt-12 ml-1 font-montserrat font-semibold'>Hello, I'm</h6>
                    <h1 className='font-semibold text-7xl md:text-8xl my-4 font-montserrat uppercase'>Rose Ann <br/>Liwanag.</h1>
                    <p className='md:w-100 my-4 font-montserrat ml-1'> Aspiring Software Developer | Computer Engineer Graduate 2023 </p>

                    {/* buttons */}
                    <div className='mt-5 ml-1'>
                        <button className='btn outline px-6 py-2 rounded border-none text-[#ffffff] my-4 uppercase'>Resume </button>
                    </div>
                </div>

                <div className='order-first md:order-last relative mx-auto'>
                    <img src={heroImg} alt="img-hero"/>
                </div>
            </div>

            {/* divider */}
            {/* <div className="w-full h-24 bg-[#5361FF] mx-auto absolute left-0 hidden md:block"></div> */}
                
        </div>
    </div>
  )
}

export default Hero