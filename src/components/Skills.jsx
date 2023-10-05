import React from 'react';
// import Fade from 'react-reveal/Fade';
import javaScriptIcon from '../assets/icons/javascript-icon.png';
import pythonIcon from '../assets/icons/python-icon.png';
import mySqlIcon from '../assets/icons/mySQL-icon.png';
import phpIcon from '../assets/icons/php-icon.png'

import tailwindIcon from '../assets/icons/tailwind.png';
import bootstrapIcon from "../assets/icons/bootstrap-icon.png";
import reactIcon from '../assets/icons/react-icon.png'

import psIcon from '../assets/icons/aps-icon.png';
import ilIcon from '../assets/icons/ai-icon.png';
import figmaIcon from '../assets/icons/figma-icon.png'

import cnnIcon from '../assets/icons/cnn-icon.png';
import yoloIcon from '../assets/icons/yolo-icon.png';
import svmIcon from '../assets/icons/svm-icon.png';


function Skills() {
  return (
    <div className='mt-4 mb-28' id="skills">
      
        <h1 className='text-center text-[#2A3B47] text-[3rem] test-700 font-montserrat font-bold my-28 uppercase'>Technical Skills</h1>
      

      <div className='grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 px-20 text-[#697477] gap-10 items-center'>

        <div className='my-5  mx-auto'>
          
            <h1 className='text-[#5361FF] font-montserrat font-semibold text-2xl mb-4'>Programming Languages</h1>
          
          
          
            <div className='flex justify-between items-center w-[50px] h-[50px] my-4 '>
              <img className='mx-2' src={javaScriptIcon} alt='javasript-icon'/>
              <img className='mx-2' src= {pythonIcon} alt='icon'/>
              <img className='mx-2' src={mySqlIcon} alt='icon'/>
              <img className='mx-2' src={phpIcon} alt='icon'/>
            </div>
          
        </div>

        <div className='my-5 mx-auto '>
          
            <h1  className='text-[#5361FF] font-montserrat font-semibold text-2xl mb-4'>Libraries / Frameworks</h1>
          

          
            <div className='flex justify-between items-center w-[50px] h-[50px] my-4'>
              <img className='mx-2' src={tailwindIcon} alt='icon'/>
              <img className='mx-2' src={bootstrapIcon} alt='icon'/>
              <img className='mx-2' src={reactIcon} alt='icon'/>
              <img className='mx-2' src='' alt='icon'/>
            </div> 
          
        </div>

        <div className='my-5'>
          
            <h1  className='text-[#5361FF] font-montserrat font-semibold text-2xl mb-4 text-center '>Tools</h1>
          
          
            <div className='flex justify-between items-center w-[50px] h-[50px] my-4 ml-[23%] md:ml-[33%]'>
              <img className='mx-2' src={psIcon} alt='icon'/>
              <img className='mx-2' src={ilIcon} alt='icon'/>
              <img className='mx-2' src={figmaIcon} alt='icon'/>
              <img className='mx-2' src='' alt='icon'/>
            </div>
          
        </div>

        <div className='my-5 mx-auto '>
          
            <h1  className='text-[#5361FF] font-montserrat font-semibold text-2xl mb-4'>Machine Learning</h1>
          
          
            <div className='flex justify-between items-center my-4'>
              <div className=' w-[50px] h-[50px]'>
                <img className='mx-2' src={cnnIcon} alt='icon'/>
                <p className='text-center text-black font-montserrat my-2 font-semibold'>CNN</p>
              </div>
              <div className=' w-[50px] h-[50px]'>
                <img className='mx-2' src={yoloIcon} alt='icon'/>
                <p className='text-center text-black font-montserrat my-2 font-semibold'>YOLO</p>
              </div>
              <div className=' w-[50px] h-[50px]'>
                <img className='mx-2' src={svmIcon} alt='icon'/>
                <p className='text-center text-black font-montserrat my-2 font-semibold'>SVM</p>
              </div>
              
              
              
              {/* <img className='mx-2' src={} alt='icon'/> */}
            </div>
          
        </div>

      </div>
    </div>
  )
}

export default Skills