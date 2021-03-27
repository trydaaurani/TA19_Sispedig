import React, { useState, useEffect } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Link } from 'react-router-dom';

function Cards() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className='cards'>
      <div className='cards__container2'>
        <div className='cards_table'>
          {/* <div className='cards_navbar'>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='cards_nav-item'>
                  <Link to='/home' className='nav-links' onClick={closeMobileMenu}> BUKU </Link>
                </li>

                <li className='cards_nav-item'>
                  <Link to='/bahanpustakabaru' className='nav-links' onClick={closeMobileMenu}> TA/KP</Link>
                </li>

                <li className='cards_nav-item'>
                  <Link to='/data' className='nav-links' onClick={closeMobileMenu}> CD/DVD </Link>
                </li>

                <li className='cards_nav-item'>
                  <Link to='/perpus' className='nav-links' onClick={closeMobileMenu}> BAHAN PUSTAKA BARU </Link>
                </li>
              </ul>
          </div> */}
          <div className='cards_search'>
            <form>
              <input class="cards_search_search" type="search" placeholder="Judul, Pengarang, ID, Penerbit" />        
              <input class="cards_search_button" type="submit" value="Cari"/>
            </form>
          </div>
        </div>
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
                src='images/beranda-1.JPG'
                text='Bahan Pustaka Baru'
                path='/bahanpustakabaru'
            />
            <CardItem
                  src='images/beranda-2.JPG'
                  text='Data Pengguna'
                  path='/data'
            />
            <CardItem
                src='images/beranda-3.JPG'
                text='Laporan'
                path='/laporan'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;