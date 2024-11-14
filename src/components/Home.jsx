import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

 import { ReactTyped } from "react-typed";

function Home() {
  return (
  <>
  <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
   <div className='flex flex-col md:flex-row'>
    {/* left */}
   <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
     <span className='text-xl'>Welcome In My Feed</span>
    <div className='flex space-x-1 text-2xl  md:text-4xl'>
    <h1>Hello,I'm a</h1>
    {/* <span className='text-red-700 font-bold'>Developer</span> */}
    <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
    </div>
    <br />
     <p className='text-sm md:text-md text-justify'>I am a dedicated web developer with a strong foundation in web development and programming. I enjoy solving complex problems and continuously improving my coding skills. My goal is to leverage my knowledge in HTML, CSS, JavaScript, and ReactJS to contribute to innovative projects and grow as a developer.
              </p>  
              <br />
              {/* social media icons */}
             <div className='flex flex-col items-center md:flex-row md:justify-between space-y-6 md:space-y-0'>
             <div className='space-y-2'>
                <h1 className='font-bold'>Available on</h1>
                <ul className='flex space-x-5'>
                <li><a href="https://www.linkedin.com/in/gulshan-k-47b7312a1/" target='_blank'><FaLinkedin className='text-2xl cursor-pointer'/></a></li>
                <li><a href="https://www.facebook.com/gulsham.vetma" target='_blank'><FaSquareFacebook className='text-2xl cursor-pointer'/></a></li>
                <li><a href="https://github.com/Student-Gulshan" target='_blank'><SiGithub className='text-2xl cursor-pointer'/></a></li>
                {/* <li> <a href="https://x.com/Abhishe3954"><BsTwitterX className='text-2xl cursor-pointer'/></a></li> */}
                </ul>
              </div>
              {/* working on */}
              <div className='space-y-2'>
                <h1 className='font-bold'>Currently working on</h1>
                <div className='flex space-x-5'>
                <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  {/*   <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" /> */}
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
  
             </div>
   </div>
   {/* right */}
   <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
   <img src="mypic.jpg" className='rounded-full  md:w-[450px] md:h-[450px] shadow-lg ' alt="myphoto" />
   </div>
   </div>
  </div>
  <hr />
  </>
  )
}

export default Home