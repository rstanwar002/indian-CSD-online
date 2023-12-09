import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const handelToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="footer">
      <span onClick={handelToTop} className="go_top">
        <FaArrowUp />
      </span>
   <div className="footer-content-container">
    <div className="footer-info-card">
       <div class="title_bg">
          <p>Message from Chairman</p></div>
          <div class="profile_pic">
              <img src="https://csdindia.gov.in/images/Men-Profile-Image.png" alt=""  />
              <p >
                  <a href="#genral-managers-message1" class="fancybox1 various genral-managers-message-a">MAJ GEN YP KHANDURI</a>
                  <p> General Manager</p>
                 <p>Canteen Stores Department</p>

              </p>


          </div>

                                
    </div>
    <div className="footer-info-card">
    <div class="title_bg">
          <p>Important Links</p></div>
          <div className="innermenu">
            <ul>
              <li>
                sfsf
              </li>
              
              <li>
                sfsf
              </li>
            </ul>
          </div>
    </div>
    <div className="footer-info-card">
    <div className="title_bg">
          <p>New Introduction Form</p></div>
          <div className="footer-content">
            
                                 
          "THE WINDOW IS NOW OPEN FOR NEW INTRODUCTION SINCE 15TH DEC 2022 (EVERY WORKING DAY FROM 10:00 HRS TO 17:30 HRS)"

                                 
          </div>
          <a href="#">
        FOR MORE DETAILS CLICK HERE
          </a>
    </div>
    <div className="footer-info-card">
    <div className="title_bg">
          <p>FEEDBACK FORM</p></div>
          <img src="https://csdindia.gov.in/images/complaint-form-img.jpg" alt=""  className="feedback-img" />

    </div>
   </div>
    </footer>
  );
}
