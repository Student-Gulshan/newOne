import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
function Navbar() {
  const [menu, setmenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed bg-slate-200 top-0 left-0 right-0  z-50'>
      <div className='flex justify-between items-center h-16'>
        <div className='flex space-x-2' >
          <img src="/myphoto.jpg" className='h-12 w-12 rounded-full' alt="" />
          <h1 className='font-semibold text-xl cursor-pointer'>Gulshan
            <p className='text-sm'>Web Developer</p>
          </h1>
        </div>
        <div>
          <ul className='hidden md:flex space-x-8'>
            {navItems.map(({ id, text }) => (
              <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
               <Link to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active">
                {text}
              </Link>
              </li>
            ))}
          </ul>
          <div onClick={() => setmenu(!menu)} className='md:hidden'>
            {menu ?  <IoCloseSharp size={24} /> : <GiHamburgerMenu size={24}  />}
          </div>
        </div>
      </div>

      {/* for mobile */}
      {menu && <div className='bg-white'>
        <ul className='md:hidden flex flex-col items-center  justify-start h-screen space-y-3  text-xl'>
          {navItems.map(({ id, text }) => (
            <li key={id}>
              <Link to={text}
                onClick={() => setmenu(!menu)}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active">
                {text}
              </Link>

            </li>

          ))}
        </ul>
      </div>}
    </div>
  )
}

export default Navbar