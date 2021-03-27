import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown/Dropdown';
import Dropdown2 from './Dropdown/Dropdown2';
import Dropdown3 from './Dropdown/Dropdown3';
import Dropdown4 from './Dropdown/Dropdown4';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  const onMouseEnter = () => {if (window.innerWidth < 960) {setDropdown(false);} else {setDropdown(true);}};
  const onMouseEnter2 = () => {if (window.innerWidth < 960) {setDropdown2(false);} else {setDropdown2(true);}};
  const onMouseEnter3 = () => {if (window.innerWidth < 960) {setDropdown3(false);} else {setDropdown3(true);}};
  const onMouseEnter4 = () => {if (window.innerWidth < 960) {setDropdown4(false);} else {setDropdown4(true);}};

  const onMouseLeave = () => {if (window.innerWidth < 960) {setDropdown(false);} else {setDropdown(false);}};
  const onMouseLeave2 = () => {if (window.innerWidth < 960) {setDropdown2(false);} else {setDropdown2(false);}};
  const onMouseLeave3 = () => {if (window.innerWidth < 960) {setDropdown3(false);} else {setDropdown3(false);}};
  const onMouseLeave4 = () => {if (window.innerWidth < 960) {setDropdown4(false);} else {setDropdown4(false);}};

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  
  return (
    <>

      <nav className='navbar'>
        <div className='navbar-container'>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                <img src="/images/logo.JPG" width="200" height="75" />
              </Link>
            </li>
            <li className='nav-item'>
              <div>ONLINE LIBRARY INFORMATION SYSTEM INSTITUT TEKNOLOGI DEL
                <img src="/images/logo-del.jpeg" width="50" height="50"/>
              </div>
            </li>
            <li className='nav-item'>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
            </li>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          </ul>
        </div>
      </nav>

      <nav className='navbar-2'>
        <div className='navbar-container-2'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}> BERANDA </Link>
            </li>

            <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <Link to='/bahanpustakabaru' className='nav-links' onClick={closeMobileMenu}> BAHAN PUSTAKA <i className='fas fa-caret-down'/> </Link>
              {dropdown && <Dropdown />}

            </li>

            <li className='nav-item'onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>
              <Link to='/data' className='nav-links' onClick={closeMobileMenu}> KELOLA DATA <i className='fas fa-caret-down' /></Link>
              {dropdown2 && <Dropdown2 />}
            </li>

            <li className='nav-item' onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave3}>
              <Link to='/perpus' className='nav-links' onClick={closeMobileMenu}> TENTANG PERPUS <i className='fas fa-caret-down' /></Link>
              {dropdown3 && <Dropdown3 />}
            </li>

            <li className='nav-item' onMouseEnter={onMouseEnter4} onMouseLeave={onMouseLeave4}>
              <Link to='/pemberitahuan' className='nav-links' onClick={closeMobileMenu}> PEMBERITAHUAN <i className='fas fa-caret-down' /></Link>
              {dropdown4 && <Dropdown4 />}
            </li>

          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;