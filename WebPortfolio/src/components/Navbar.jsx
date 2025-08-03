import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

import {ToggleButton} from "./ui/ToggleButton.jsx";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const [state] = useTheme();//use this (global storage: it tracks if the button is being toggled or not)
  
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    //TO MAKE THE HEADER STICKY
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 
        ${scrolled ? (state.theme === 'light' ? 'bg-white' : 'bg-primary') : 'bg-transparent'}
        ${scrolled ? (state.theme === 'light' ? 'text-black' : 'text-white') : (state.theme === 'light' ? 'text-white' : 'text-black')}
        `}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className={` ${state.theme === 'light'? 'text-black' : 'text-white'} text-[18px] font-bold cursor-pointer flex `}>
            Emman &nbsp;
            <span className='md:block hidden'> | JavaScript Mastery</span>
          </p>
        </Link>
          
        {/*DESKTOP NAVIGATION*/}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? state.theme === `light` ? `text-black` : `text-white`  : "text-secondary"
              } hover:${state.theme === `light` ? `text-black` : `text-white`} text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        
       {/* Desktop Toggle Button */}
        <div className="hidden sm:block">
          <ToggleButton />
        </div>

        {/* Mobile Navigation */}
        <div className='sm:hidden flex items-center gap-4'>
          {/* Mobile Toggle Button - positioned before hamburger menu */}
          <div className="flex items-center">
            <ToggleButton />
          </div>
          
          {/* Hamburger Menu Button */}
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile Menu Dropdown */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;