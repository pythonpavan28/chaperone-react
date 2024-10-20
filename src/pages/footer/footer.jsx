import React from "react";
import "./footer.css";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook,FaYoutube,FaLinkedin } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";


function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-top-section-one">
        <div className="footer-items">
          <h1 className="footer-item-heading">SUBSCRIBE TO OUR <br/> NEWSLETTER</h1>
          <p className="footer-text">
            Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Obcaecati
            voluptas porro,<br/> quidem corporis nisi dignissimos.
          </p>
          <input type="email" className="email-input" placeholder="Enter Your Email Address" /><br/>
          <button className="subscribe-btn" type="button">SUBSCRIBE</button>
        </div>
        <div className="footer-items">
          <h1 className="footer-item-heading">ABOUT US</h1>
          <ul className="footer-ul-items">
            <li>Our Story</li>
            <li>Blogs</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Help & Support</li>
          </ul>
        </div>
        <div className="footer-items">
          <h1 className="footer-item-heading">OUR SERVICES</h1>
          <ul className="footer-ul-items">
            <li>Book Maali</li>
            <li>Plant Day Care</li>
            <li>Rent Plants</li>
            <li>Plants & Pots</li>
            <li>Gardening Tools</li>
          </ul>
        </div>
        <div className="footer-items">
          <h1 className="footer-item-heading">USEFUL LINKS</h1>
          <ul className="footer-ul-items">
            <li>My Account</li>
            <li>Orders & Returns</li>
            <li>Track Order</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Return, Refund &<br/> Replacement Policy</li>
          </ul>
        </div>
        <div className="footer-items">
          <h1 className="footer-item-heading">GET IN TOUCH</h1>
          <ul className="footer-ul-items">
            <li>
              Address: F-262, First Floor, <br/>Sushant Lok Phase-III,<br/> Sectpr-57,
              Gurgaon,<br/> Harayana, India 122003
            </li>
            <li>Calls:</li>
            <li>+91958287272</li>
            <li>Email:</li>
            <li>care@chaperoneplants.com</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="footer-bottom-section">
        <h1 className="footer-item-heading">CHAPERONE</h1>
        <p className="footer-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vitae 
            quos fugiat quisquam consequatur suscipit soluta facilis nihil nemo nostrum 
            consequuntur harum blanditiis officia eius quas, tempora modi adipisci. Rem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vitae 
            quos fugiat quisquam consequatur suscipit soluta facilis nihil nemo nostrum 
            consequuntur harum blanditiis officia eius quas, tempora modi adipisci. Rem.</p>
      
      <h1 className="footer-item-heading">Follow us on</h1>
        <div>
            <IoLogoInstagram className="social-media-icons"/>
            <FaFacebook className="social-media-icons"/>
            <BsFillThreadsFill className="social-media-icons"/>
            <FaYoutube className="social-media-icons"/>
            <FaLinkedin className="social-media-icons"/>
        </div>
        </div>
        </div>
    </div>
  );
}

export default Footer;
