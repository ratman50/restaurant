import React from 'react';
import {GitHamburgerMenu} from 'react-icons/gi';
import { MdOutLineRestaurantMenu} from 'react-icons/md';
import './Navbar.css';
import images from '../../constants/images';





const Navbar = () => (
  <nav className='app__navbar'> 
    <div className='appp_navbar-logo'>
      <img src={images.gericht} alt='app log'/>
    </div> 
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href='#home'>Home</a></li> 
      <li className='p__opensans'><a href='#about'>About</a></li> 
      <li className='p__opensans'><a href='#menu'>Menu</a></li> 
      <li className='p__opensans'><a href='#awards'>Awards</a></li> 
      <li className='p__opensans'><a href='#contact'>Contacts</a></li> 

    </ul>

  </nav>
);

export default Navbar;
