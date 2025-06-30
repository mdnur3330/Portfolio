import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router';
import icon from '../../public/nur.png'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // Click outside to close
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Skill", to: "/skill" },
    { name: "Education", to: "/education" },
    { name: "Project", to: "/project" },
    { name: "Contact", to: "/contact" }
  ];

  return (
    <header className="bg-transparent text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        <div className='flex gap-2 items-center'>
          <img className='w-7' src={icon} alt="" />
          <h1 className="text-2xl font-bold">Nur Alom</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4 text-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-md px-4 py-2 transition ${
                  isActive ? "text-green-300" : "text-white"
                } hover:bg-green-400`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-black text-white px-4 py-4 space-y-4 relative"
        >
          {/* Only one white cross button */}
          <button
            className="absolute top-3 right-4 text-white text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>

          <ul className="flex flex-col space-y-3 mt-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-md transition ${
                      isActive ? "text-green-300" : "text-white"
                    } hover:bg-green-400`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
