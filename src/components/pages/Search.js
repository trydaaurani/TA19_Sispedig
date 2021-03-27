import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Search() {
    const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
    return (
        <div className='container'>
            <nav className='navbar-3'>
            <div className='navbar-container-3'>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                <Link to='/home' className='nav-links' onClick={closeMobileMenu}> BUKU </Link>
                </li>

                <li className='nav-item'>
                <Link to='/bahanpustakabaru' className='nav-links' onClick={closeMobileMenu}> TA/KP </Link>
                {dropdown && <Dropdown />}

                </li>

                <li className='nav-item'>
                <Link to='/data' className='nav-links' onClick={closeMobileMenu}> CD/DVD </Link>

                </li>

                <li className='nav-item'>
                <Link to='/perpus' className='nav-links' onClick={closeMobileMenu}> BAHAN PUSTAKA BARU </Link>
                </li>

                <li className='nav-item'>
                <Link to='/pemberitahuan' className='nav-links' onClick={closeMobileMenu}> PEMBERITAHUAN </Link>
                </li>

            </ul>
            </div>
        </nav>
      </div>
    );
}