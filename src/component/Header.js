import React from 'react';
import logo from '../assets/logo.jpeg';
import '../component/style.css';
const Header = () => {
  return (
    <div className='header'>
        <div className='left-header'>
            <div className='logo'>
               <img src={logo} alt='logo'/>

            </div>
            <div className='header-text'>
                <p>STORIES</p>
            </div>
        </div>
      
      <div className='right-header'>
      <button >
            Courses
        </button>
      </div>
    </div>
  );
};

export default Header;
