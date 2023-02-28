import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import {BsWhatsapp} from "react-icons/bs";
import {MdPhoneInTalk,MdEmail

} from "react-icons/md";

import logowhite from "./images/logowhite.png";
import phone from "./images/phone.png";
import Popup from "./Popup";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// import Col from 'react-bootstrap/Col';
// import { Row } from "react-bootstrap";
const Footer = () => {
  // const[popup, setPopup]=useState(false);
  const showPopup=()=>{
    document.getElementById("popupmain").style.display="flex"

  }

  return (
    <div>
      {/* <!-- Footer --> */}
      <footer id="footermain"
        className="  text-center text-lg-start  text-muted  footersection1 "
      >
<div className="phone-con">
<div className="phone"  onClick={() => showPopup()} >
                  <img  className="phonepic" src={phone} alt=""/>
               </div>
</div>
        {/* <!-- Section: Links  --> */}
        <section className="footersection">
               
          <div className="container text-center text-md-start mt-5 ">
            {/* <!-- Grid row --> */}
               
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              {/* <div className="logo">
            <img  src={logo} />
          </div> */}
           
              <div className="  col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <Link className="sp" to="/">
                <img className="logowhite" src={logowhite} alt=""/>
                </Link>
              </div>
              
              <div className=" sectionfooter col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 className="same text-uppercase fw-bold mb-4">Quik Links</h6>
                <p>
                <HashLink className="hash" to="/#Contact">
                    Make an enquiry
                    </HashLink>
                </p>
                <p>
                <HashLink className="hash" to="/#Contact">
                  {/* <a href="#!" className="text-reset"> */}
                    Contact us
                  {/* </a> */}
                  </HashLink>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              {/* <div className=" sectionfooter col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <!-- Links -->
                <h6 className="  same text-uppercase fw-bold mb-4">About</h6>
                <p>
                
                <Link className="hash" to="/about">
                    About us
                  </Link>
                  
                </p>
                <p>
                <HashLink className="hash" to="/Servicessingle#why">
                    Why choose us{" "}
                </HashLink>
                </p>
                <p>
                <HashLink className="hash" to="/about#missionsuc">
                    Mission
                    </HashLink>
                </p>
                <p>
                <HashLink className="hash" to="/about#vissionsuc">
                    Vission  
                    </HashLink>
                </p>
              </div> */}
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="sectionfooter col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className=" same text-uppercase fw-bold mb-4">Support</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Support center
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Customer care
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    FAQ
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}
              <div className="sectionfooter col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 contact-below">
                {/* <!-- Links --> */}
                {/* <h6 className=" same text-uppercase fw-bold mb-4">INDIA</h6> */}
                {/* <p>
                  <a href="#!" className="text-reset">
                    <TiPhoneOutline />
                    +91 9400 000 000
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    <TiMail />
                  </a>
                </p> */}
                   {/* <p>68/1520, 2nd Floor, CM Mathew Brothers Arcade,
Near Westway hotel, Chakkorathukulam
Calicut – 673006</p> */}
                     {/* <p><BsWhatsapp/> +91 9847028242</p>
                    <p> <MdPhoneInTalk/>+91 96568 88796</p>
                    <p> <MdPhoneInTalk/>+91 97460 50774</p>
                    <p>info@lafareinternational.com</p> */}
               
              </div>
              <div className="sectionfooter col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 contact-below">
                {/* <!-- Links --> */}
                {/* <h6 className=" same text-uppercase fw-bold mb-4">UNITED KINGDOM</h6> */}
                {/* <p>
                  <a href="#!" className="text-reset">
                    <TiPhoneOutline />
                    +91 9400 000 000
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    <TiMail />
                  </a>
                </p> */}
                    {/* <p>97 , West street 
Harrow
HA13EL
London
United Kingdom </p> */}
               
                    {/* <p> <MdPhoneInTalk/>+44 (0)7405 412543</p> */}
                    {/* <p> <MdPhoneInTalk/>+44 (0)7466 479963</p> */}
               
                   
                    {/* <p>info@lafareinternational.com</p> */}
               
              </div>







              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-4 footerend">
                {/* <!-- Links --> */}
                <div className=" samebellow2 footeremblom ">
                  <a href="www.facebook.com" className="me-4 text-reset">
                    {/* <i className="fab fa-facebook-f"></i> */}
                    <FaFacebook />
                  </a>

                  <a href="www.instagram.com" className="me-4 text-reset">
                    {/* <i className="fab fa-instagram"></i> */}
                    <FaInstagram />
                  </a>

                  <a href="www.twitter.com" className="me-4 text-reset">
                    {/* <i className="fab fa-twitter"></i> */}
                    <FaTwitter />
                  </a>
                  <a href="www.linkedin.com" className="me-4 text-reset">
                    {/* <i className="fab fa-twitter"></i> */}
                    <FaLinkedin />
                  </a>
                </div>

                {/* <h6 className="text-uppercase fw-bold mb-4" style={{color:'#252B42'}}>Get In Touch</h6>
         <p style={{fontWeight:'600'}}><i className="fas fa-phone me-3" ></i><TiPhoneOutline style={{color:'#1BC768', width:'20px',height:'20px'}}/> (480) 555-0103 </p>

         <p style={{fontWeight:'600'}}><i className="fas fa-home me-3"></i> <TiLocationOutline style={{color:'#1BC768', width:'20px',height:'20px'}}/> 4517Washington Ave. Manchester, Kentucky 39495</p>
         <p style={{fontWeight:'600'}}>
           <i className="fas fa-envelope me-3"></i><TiMail style={{color:'#1BC768', width:'20px',height:'20px'}}/> info@edisonvalley.com </p>
          */}
                {/* <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p> */}
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        {/* <div className="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
   © 2021 Copyright:
   <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
 </div> */}
        {/* <!-- Copyright --> */}

        {/* <!-- Section: Social media --> */}
        <section className="d-flex justify-content-center justify-content-lg p-4 border-bottom">
          {/* <!-- Left --> */}
          <div className="  d-lg-block">
            <span className="footerspan ftrlow">
              Lafare international, 2022 All rights reserved{" "}
            </span>
          </div>
          {/* <!-- Left --> */}
        </section>
        {/* <!-- Section: Social media --> */}
      </footer>
      {<Popup/>
    }
      {/* <!-- Footer --> */}
    </div>
  );
};

export default Footer;
