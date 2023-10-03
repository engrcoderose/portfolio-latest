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
    <div className='w-full bg-[#5361FF] sticky'>
        <div className='md:flex items-center justify-between py-4 md:px-24 px-7'>
            {/* Logo Section  */}
            <div className='font-bold text-3xl cursor-pointer flex items-center gap-1 md:px-20'>
                <span className='text-white font-montserrat'>Rosas.</span>
            </div>

           {/* Mobile menu Icons */}
           <div 
           onClick={() => setOpen(!open)}
           className='w-7 h-7 right-8 top-6 cursor-pointer md:hidden text-white absolute'
           >
            {
                open ? <AiOutlineClose/> : <AiOutlineBars/>
            }
           </div>
           {/* Nav Link items */}
            <ul className={`md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-20 left-0 
            w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-6 bg-[#5361FF] transition-all duration-500 ease-in cursor-pointer
            ${
             open ? "top-12" : "top-[-490px]"
             }`}>
            {
             Links.map(link => <li key={link.name} className='md:ml-8 md:my-0 my-7 font-semibold'>
              <Link
              to={link.link}
              activeClass='active'
              smooth={true}
              spy={true}
              className='text-white transition-all duration-500 ease-in hover:text-primary border-b-2 p-2 hover:bg-slate-400 uppercase font-semibold font-montserrat'
              > {link.name} </Link>
            </li>)
          }
        </ul>
           

        </div>
    </div>
  )
}

export default Navbar