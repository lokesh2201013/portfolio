import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLink } from '../constants';
import { logo, menu, close } from '../assets';

// Import necessary modules and styles

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleLinkClick = (linkId) => {
    setActive(linkId);
    window.scrollTo(0, 0);
    setToggle(false); // Close the mobile menu after clicking a link
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className={`flex items-center gap-2 ${active === '' ? 'active' : ''}`}>
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>Lokesh<span className='sm:block hidden'>|Anime lover</span></p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLink.map(({ id, title }) => (
            <li key={id} className={`${active === id ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}>
              <Link to={`#${id}`} onClick={() => handleLinkClick(id)}>{title}</Link>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center relative'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

<div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-5 my-3 min-w-[150px] z-10 rounded`}>
  <ul className="list-none flex justify-end items-start flex-col gap-5">
    {navLink.map(({ id, title }) => (
      <li key={id} className={`${active === id ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}>
        <Link to={`#${id}`} onClick={() => handleLinkClick(id)}>{title}</Link>
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
