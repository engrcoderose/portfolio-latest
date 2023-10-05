import React from 'react';
import{motion} from 'framer-motion';

const variants = {
  // start
  intialRight:{
      opacity: 0,
      x:20
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


function Contact() {
  return (
    <div className='mb-28' id='contact'>
      
        <motion.h1 
          variants={variants}
          initial='headerInitial'
          whileInView='header'
          className='text-center text-[#2A3B47] text-4xl md:text-[3rem] font-montserrat font-bold my-28 uppercase'>Contact Me</motion.h1>
      
      
      <div className='grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 px-10 md:px-20 text-[#697477] gap-10 items-center'>
      
        <motion.div
          variants={variants}
          initial='initialRight'
          whileInView='Right'
          className='float-left items-center mx-auto'>
          <h1 className='text-[#5361FF] my-4 uppercase font-bold font-montserrat text-xl'>Email</h1>
          <p className='text-[#2A3B47] font-semibold font-montserrat'>liwanagroseann.8.3@gmail.com</p>
          <h1 className='text-[#5361FF] my-4 uppercase font-bold font-montserrat text-xl'>Linkedin</h1>
          <p className='text-[#2A3B47] font-semibold font-montserrat'>in/roseannliwanag/</p>
          <h1 className='text-[#5361FF] my-4 uppercase font-bold font-montserrat text-xl'>Address</h1>
          <p className='text-[#2A3B47] font-semibold font-montserrat'>Pampanga, Philippines</p>
        </motion.div>
      
    
        <motion.div
          variants={variants}
          initial='initialRight'
          whileInView='Right'
          className='float-left mx-auto'>

        
          <div className='bg-[#5361ff] p-4 w-[300px] rounded-xl'>
            <form method='GET' action='mailto:liwanagroseann.8.3@gmail.com'>
              <div className='my-4'>
                <input type='text' id='name' name='name' placeholder='Name' required
                className='bg-[#D9D9D9] py-2 px-4 rounded-md w-[270px] mx-auto font-montserrat font-semibold text-md hover:bg-white'/>
              </div>
              <div className='my-4'>
                <input type='text' id='name' name='name' placeholder='Email' required
                className='bg-[#D9D9D9] py-2 px-4 rounded-md w-[270px] mx-auto font-montserrat font-semibold text-md hover:bg-white'/>
              </div>
              <div className='my-4'>
                <textarea name='message' rows={5} placeholder='Message me.'
                className='bg-[#D9D9D9] py-2 px-4 rounded-md w-[270px] mx-auto font-montserrat font-semibold text-md hover:bg-white'> </textarea>
              </div>
              <div>
                <button type='submit' 
                className='uppercas font-montserrat font-bold bg-[#D9D9D9] text-[#5361ff] w-[150px] rounded-md py-2 hover:bg-white'> SEND </button>
              </div>
            </form>
           
          </div>
        
        </motion.div>
      </div>

    </div>
  )
}

export default Contact