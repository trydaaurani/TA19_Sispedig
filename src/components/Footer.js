import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>JAM BUKA</h2>
              <p>Senin-Jumat</p>
              <p>07.00-21.30</p>
              <p>Sabtu :</p>
              <p>08.00-18.00</p>
              <p>Minggu :</p>
              <p>13.00-18.00</p>
              <p>Hari Libur :</p>
              <p>Dikonfirmasi</p>
          </div>
          <div class='footer-link-items'>
            <h2>WEB LINKS</h2>
            <div className='web'><a href='https://www.del.ac.id/'>del.ac.id</a></div>
            <div className='web'><a href='http://akademik.del.ac.id/'>akademik.del.ac.id</a></div>
            <div className='web'><a href='https://mail.del.ac.id/login.php'>mail.del.ac.id</a></div>
            <div className='web'><a href='https://students.del.ac.id/'>students.del.ac.id</a></div>
            
          </div>
          <div class='footer-link-items'>
            <h2>HUBUNGI KAMI</h2>
              <h4>Panggilan telepon</h4>
              <p>+62 632 331234 </p>
              <h4>Email</h4>
              <p>info@del.ac.id</p>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
            <img src="/images/logo-del.jpeg" width="50" height="50"/>
            <img src="/images/yayasan_del_logo.png" width="50" height="50"/>
            <img src="/images/sud_logo.jpg" width="50" height="50"/>
          </div>
        </div>
      </section>
      
    </div>
    <div className='container2'>
      <section class='footer'>
        <div class='social-media-wrap'>
          <small class='website-rights'>Copyright SDI-IT Del © 2020 Institut Teknologi Del. All Rights Reserved</small>
        </div>
      </section>
    </div>
  </div>
  );
}

export default Footer;