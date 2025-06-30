import React from "react";
import { NavLink, Outlet } from "react-router";


const GardeningCommunity = () => {
  return (
    <div className="min-h-screen bg-[#0e0f1a] text-white px-4 md:px-12 py-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-green-400 mb-2">
          My Projects
        </h2>
        <p className="text-sm md:text-base text-gray-400">
          Here are some of my featured projects with detailed case studies
        </p>
        <nav>
           <div className="flex justify-center gap-4 my-10">
       <NavLink to='/project' className={({isActive})=>`btn rounded-full bg-[#1f202a] text-gray-300 px-4 py-1 text-sm font-semibold transition duration-200 hover:bg-green-600 hover:text-white hover:scale-105 ${isActive ? "bg-green-600": ""}`}>Plant Care</NavLink>


       <NavLink to='historical-artifacts' className={({isActive})=>`btn rounded-full text-gray-300 text-sm font-semibold transition duration-200 hover:bg-green-600 hover:text-white hover:scale-105 ${isActive ? "bg-green-600": ""}`}>Plant Care</NavLink>


       {/* <NavLink to='historical-artifacts' className={({isActive})=>`btn rounded-full text-gray-300 text-sm font-semibold transition duration-200 hover:bg-green-600 hover:text-white hover:scale-105 ${isActive ? "bg-green-600": ""}`}>Plant Care</NavLink> */}

      </div>
        </nav>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default GardeningCommunity;
