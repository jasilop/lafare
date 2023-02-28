import React from 'react'
import matchaimg from '../images/matchaimg.png'
// import ba from '../images/ba.png';
import { Row, Col, Card, Container, Button, Navbar } from 'react-bootstrap';
import { AiTwotoneMinusCircle } from "react-icons/ai";
import Navheader from '../Navheader';
import Footer from '../Footer';
import ContactForm from '../ContactForm';
import pic1 from '../images/pic1.jpeg'
import pic2 from '../images/pic2.jpeg'
import pic3 from '../images/pic3.jpeg'
import pic4 from '../images/pic4.jpeg'
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const showContact=()=>{
    let modal = document.getElementById("contact_modal")
    // modal.style.display="flex";
    modal.style.visibility="visible";
    console.log("hello");
  }
  const closeContact=()=>{
    let modal = document.getElementById("contact_modal")
    // modal.style.display="flex";
    modal.style.visibility="hidden";
    console.log("hello");
  }
  return (
    <div>
    <section id='ProductsPage'>
    <Navheader  classname={"pages"} /> 
    <Row md="12" className="productionpagerow1" >
       <div className="productspagesection1">
           <Col md="6">
           <img className="productpagemainimage"src={pic4}/>
           </Col>
           <Col md="6" className="productionpagecol1" >
            <h1 className="productioncolh1">
            Fish curry paste
            </h1>
            {/* <p className="productioncolp">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, id mattis tortor at. Posuere amet sit et nullam donec arcu commodo platea. 
            </p> */}
            <div>
              <p className="productioncolpoints"> 
                  <AiTwotoneMinusCircle/> &nbsp; Flaewah’s instant Kerala Style Fish curry paste is a combination of high class spices which will satisfy your cravings.
              </p>
              <p className="productioncolpoints"> 
                  <AiTwotoneMinusCircle/> &nbsp;Just add  Fish with  Flaewah’s Instant Kerala Style Fish curry paste.  Then Stir it, Cook it and Serve it.  Your Kerala style Fish Curry is ready in 15 mins.
              </p>
              {/* <p  className="productioncolpoints"> 
                  <AiTwotoneMinusCircle/> &nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p  className="productioncolpoints"> 
                  <AiTwotoneMinusCircle/> &nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p> */}
              {/* <a href="#" className='enquire_button specialbutton'> */}
                {/* <Button>Make an enquiery </Button> */}
                <div className='enquire_button2'>
                <Button  onClick={() => showContact()}>Make an enquiery </Button>
                </div>
              {/* </a> */}
            </div>

           </Col>
       </div>
    </Row>
    <Row  className="productionroww">
      <h1 className="productionpageh1">Related Products</h1>
    </Row>
    <Row className="cardrow">
      
                  <Col>
                  <Link className="sp" to="/Chickencurrypast">
                      <Card className="cardservicepage">
                        <img className="cardimgservicepage"src={pic1}/>
                        <h3 className="cardtitle">Chicken curry paste</h3>
                      </Card>
                      </Link>
                  </Col>
                  <Col>
                  <Link className="sp" to="/Pepperchickenpast">
                      <Card className="cardservicepage">
                        <img className="cardimgservicepage" src={pic2}/>
                        <h3 className="cardtitle">Pepper chicken paste</h3>
                      </Card>
                      </Link>
                  </Col>
                  <Col>
                  <Link className="sp" to="/Beafroastpaste">
                      <Card className="cardservicepage">
                        <img className="cardimgservicepage" src={pic3}/>
                        <h3 className="cardtitle">Beaf roast paste</h3>
                      </Card>
                      </Link>
                  </Col>
                </Row>
      
    
    </section>
   
    <Footer/>
    <div className="modal" id="contact_modal">
          <span className='close_button' onClick={() => closeContact()}>X</span>
          {<ContactForm/>} 
        </div>
    </div>
  )
}

export default ProductsPage