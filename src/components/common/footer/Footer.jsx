import React from "react"
import "./footer.css"
import gOC from "../images/gOC.png"
import logo from "../images/logo.png"
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhone, 
  FaMapMarkerAlt
} from "react-icons/fa";

const items = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
  { name: "Youtube", icon: FaYoutube, link: "https://youtube.com/" },
  { name: "Mail", icon: FaEnvelope, link: "mailto:gmail.com"}, 
];


const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className='container'>
            <div>
              <div className="social-icons">
                <h1>CONNECT WITH US</h1>
                {items.map((item, index) => (
                  <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                    {React.createElement(item.icon)}
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className='box'>
              <div className='box logo'>
                <img src={gOC} alt='' />
                <div className="gcflogo">
                  <img src={logo} alt=''/>
                </div>
              </div>
            </div>

            <div>
              <h3><FaMapMarkerAlt /> Address</h3>
              <h4><FaPhone /> Phone  number</h4>
            </div>
          </div>
        </div>
      </footer>
      <div className='legal '>
        <div className='container flexSB'>
          <p>© all rights reserved</p>
          <p>
            Ghana Cycling Federation
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;