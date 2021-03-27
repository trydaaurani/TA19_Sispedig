import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
      // <div id='art-main'>
      //   <div id='navbar'> <a href="#">Home</a> | <a href="#">Privacy Policy</a> | <a href="#">TOS</a> |  <a href="#">Contact us</a></div>
      //   <div id='art-header'>  
      //       <div class='header'>
      //           <ul>    
      //               <li class="titledesc">Cara Membuat Desain Web Dua Kolom | Web Design Tutorial</li>
      //               <li class="title">raja putra media ©</li>
      //           </ul>
      //       </div>
      //   </div>
      //   <div id='art-sheet'>     
      //       <div id='sidebar'>
      //           <div class='vmenu'>
      //               <a href="#"> Home</a><a href="#"> Service</a><a href="#"> News</a><a href="#"> Tutorial</a><a href="#"> Design</a><a href="http://blog.rajaputramedia.com" target="_blank"> Blogs</a>
      //           </div>
      //           <div class='sidebar-content'>
      //               <p>Lorem ipsum dolor sit amet, <a href="#">consectetuer adipiscing elit</a>, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, <a href="#">quis nostrud exerci</a>.</p>
      //           </div>
      //           <div class='sidebar-content'>
      //               <p>Lorem ipsum dolor sit amet, <a href="#">consectetuer adipiscing elit</a>, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, <a href="#">quis nostrud exerci</a>.</p>
      //           </div>
      //       </div>
      //       <div id='article'>
      //           <div class='date-header'><font size='4'>20</font> Des 2013</div>
      //           <div class='content'>
      //               <h2><a href="#">Lorem Ipsum</a></h2>
      //               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent lupt...  </p>
      //               <p class="date-footer"><img src="logo.JPG" alt="" /> <a href="#">Read more</a> <img src="images/comment.gif" alt="" /> <a href="#">Comments(34)</a> <img src="images/timeicon.gif" alt="" /> 24th Dec, 2013</p>
      //           </div>
      //           <div class='date-header'><font size='4'>20</font> Des 2013</div>
      //           <div class='content'>
      //               <h2><a href="#">Lorem Ipsum</a></h2>
      //               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent lupt...</p>
      //               <p class="date-footer"><img src="logo.JPG" alt="" /> <a href="#">Read more</a> <img src="images/comment.gif" alt="" /> <a href="#">Comments(34)</a> <img src="images/timeicon.gif" alt="" /> 24th Dec, 2013</p>
      //           </div>
      //           <div class='date-header'><font size='4'>20</font> Des 2013</div>
      //           <div class='content'>
      //               <h2><a href="#">Lorem Ipsum</a></h2>
      //               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent lupt...  </p>
      //               <p class="date-footer"><img src="logo.JPG" alt="" /> <a href="#">Read more</a> <img src="images/comment.gif" alt="" /> <a href="#">Comments(34)</a> <img src="images/timeicon.gif" alt="" /> 24th Dec, 2013</p>
      //           </div>
      //           </div>

      //           </div>
                <div className='hero-container'>
                  <div className=''>
                    <hr />
                    <h2 className='artikel'>ARTIKEL</h2>
                    <h4>FINALIS IMAGINE CUP 2014</h4>
                    <p>Saat ini, Imagine Cup chapter Indonesia telah memasuki babak final. Microsoft telah mengumumkan nama peserta yang berhasil mencapai finl dari kategori World Citizenship, Innovation, dan Games..</p>
                    <h4>19 OKTOBER DITETAPKAN APPLE UNTUK PERINGATAN STEVE JOBS</h4>
                    <p>Siapa saja yang bekerja untuk perusahaan besar Apple pasti merasa sangat kehilangan atas kematian salah satu orang nomor satu dunia...</p>
                    </div>
                    </div>
  );
}

export default HeroSection;