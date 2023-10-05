import React, {useState} from 'react'
import {Link} from 'react-scroll'
import {AiOutlineBars,AiOutlineClose} from 'react-icons/ai'

function Navbar() {
    let Links = [
        {name:"Home", link:"home"},
        {name:"About", link:"about"},
        {name:"Projects", link:"projects"},
        {name:"Skills", link:"skills"},
        {name:"Contact", link:"contact"}
    ]
    let [open, setOpen] = useState(false);

  return (
    <div className='w-full bg-[#5361FF]'>
        <div className='md:flex items-center justify-between py-4 md:px-24 px-7'>
            {/* Logo Section  */}
            <div className='font-bold px-10 md:text-3xl cursor-pointer flex items-center gap-1 md:px-20'>
                <span className='text-white font-montserrat'>Rosas.</span>
            </div>

           {/* Mobile menu Icons */}
           <div 
           onClick={() => setOpen(!open)}
           className='w-10 h-10 right-8 top-5 pr-5 cursor-pointer md:hidden text-white absolute'
           >
            {
                open ? <AiOutlineClose/> : <AiOutlineBars/>
            }
           </div>
           {/* Nav Link items */}
            <ul className={`md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-50 left-0 
            w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-6 md:bg-[#5361FF] md:bg-opacity-100 bg-opacity-30 bg-gray-300 cursor-pointer
            ${
             open ? "top-12" : "top-[-490px]"
             }`}>
            {
             Links.map(link => <li key={link.name} className='md:ml-8 md:my-0 my-7 font-semibold cursor-pointer z-50'>
              <Link
              to={link.link}
              activeClass='active'
              smooth={true}
              spy={true}
              className='relative md:text-xl w-fit block after:block after:content-[""] after:absolute after:h-[3px] after:bg-white
              after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-montserrat 
              uppercase text-md text-white z-50'
              > {link.name} </Link>
            </li>)
          }
        </ul>
           

        </div>
    </div>
  )
}

export default Navbar