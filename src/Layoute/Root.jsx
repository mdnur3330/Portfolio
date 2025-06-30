import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../Component/Nav';

const Root = () => {
    return (
        <div>
          <nav className='border-b-5 border-green-400 rounded-b-5 rounded-2xl '>
                  <Nav></Nav>
                </nav>
            <main className="bg-[#0a0f1a]">
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Root;