import React from 'react'

function Contact() {
  return (
    <div className='mb-28'>
      <h1 className='text-center text-[#2A3B47] text-[3rem] test-700 font-montserrat font-bold my-28 uppercase'>Contact Me</h1>
      <div className='grid grid-cols-2 grid-rows-1 gap-5 mx-auto'>

        <div className='float-left items-center mx-auto'>
          <h1 className='text-[#5361FF] my-4 uppercase font-bold font-montserrat text-xl'>Email</h1>
          <p className='text-[#2A3B47] font-semibold font-montserrat'>liwanagroseann.8.3@gmail.com</p>
          <h1 className='text-[#5361FF] my-4 uppercase font-bold font-montserrat text-xl'>Phone</h1>
          <p className='text-[#2A3B47] font-semibold font-montserrat'>+63 906-123-8790</p>
          <h1 className='text-[#5361FF] my-4 uppercase font-bold font-montserrat text-xl'>Address</h1>
          <p className='text-[#2A3B47] font-semibold font-montserrat'>Pampanga, Philippines</p>
        </div>
        
        <div className='float-left mx-auto'>
          <div className='bg-[#5361ff] p-4 w-[300px] rounded-xl'>
            <div className='my-4'>
              <input type='text' id='name' name='name' placeholder='Name' required
              className='bg-[#D9D9D9] py-2 px-4 rounded-md w-[270px] mx-auto font-montserrat font-semibold text-md'/>
            </div>
            <div className='my-4'>
              <input type='text' id='name' name='name' placeholder='Email' required
              className='bg-[#D9D9D9] py-2 px-4 rounded-md w-[270px] mx-auto font-montserrat font-semibold text-md'/>
            </div>
            <div className='my-4'>
              <textarea name='message' rows={5} placeholder='Message me.'
              className='bg-[#D9D9D9] py-2 px-4 rounded-md w-[270px] mx-auto font-montserrat font-semibold text-md'> </textarea>
            </div>
            <div>
              <button type='button' 
              className='uppercas font-montserrat font-bold bg-[#D9D9D9] text-[#5361ff] w-[150px] rounded-md py-2'> SEND </button>
            </div>
           
          </div>

        </div>
      </div>

    </div>
  )
}

export default Contact