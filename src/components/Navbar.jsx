import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import {styles} from '../styles'
import { navLink } from '../constants'
import { logo,menu,close } from '../assets'
const Navbar = () => {
  const [active, setActive] = useState('');

  // Function to handle link clicks
  const handleLinkClick = () => {
    setActive(" ");
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className={`flex items-center gap-2 ${active === ' ' ? 'active' : ''}`} onClick={handleLinkClick}>
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>Lokesh<span>|Anime lover</span></p>
        </Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
