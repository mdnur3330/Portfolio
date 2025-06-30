import React from 'react';
import { NavLink } from 'react-router';

const Nav = () => {
  return (
      <header className="flex w-10/12 mx-auto  font-medium text-white justify-between items-center py-4 ">
        <h1 className="text-2xl font-bold text-white">Nur Alom<span className="text-white"></span></h1>
        <nav className="space-x-6 text-sm font-medium hidden md:block">
          <NavLink to='/' className='hover:bg-green-400 btn rounded-md'>Home</NavLink>
          <NavLink to='/about' className='hover:bg-green-400 btn rounded-md'>About</NavLink>
          <NavLink to='/skill' className='hover:bg-green-400 btn rounded-md'>Skill</NavLink>
          <NavLink to='/education' className='hover:bg-green-400 btn rounded-md'>Education</NavLink>
          <NavLink to='/project' className='hover:bg-green-400 btn rounded-md'>Project</NavLink>
          {/* <NavLink to='/experience' className='hover:bg-green-400 btn rounded-md'>Experience</NavLink> */}
          <NavLink to='/contact' className='hover:bg-green-400 btn rounded-md'>Contact</NavLink>


          {/* <a href="#home" className="text-green-400">Home</a>
          <a href="#about" className="hover:text-green-400">About</a>
          <a href="#skills" className="hover:text-green-400">Skill</a>
          <a href="#education" className="hover:text-green-400">Education</a>
          <a href="#experience" className="hover:text-green-400">Experience</a>
          <a href="#projects" className="hover:text-green-400">Project</a>
          <a href="#contact" className="hover:text-green-400">Contact</a> */}
        </nav>
      </header>
  );
};

export default Nav;