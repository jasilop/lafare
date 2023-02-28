import React from 'react'
import bb from '../images/bb.png';
// import ba from '../images/ba.png';
import { Row, Col, Card,Container } from 'react-bootstrap';
import matchaimg from '../images/matchaimg.png'
import pic1 from '../images/pic1.jpeg'
import pic2 from '../images/pic2.jpeg'
import pic3 from '../images/pic3.jpeg'
import pic4 from '../images/pic4.jpeg'

import Navheader from '../Navheader';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
const ServicesPage = () => {
  return (
    <>
        
        <Navheader   classname={"pages"}/>
       
        <section id='ServicesPage'>
          <div className="first" style={{backgroundImage: `url(${bb})`}}  >
            <h1 className="firsth1">Where Culture and Taste Fly Overseas</h1>
          </div>
            <Container className="firstrow">
                <Row  className="cardrow">
                  <Col>
                  <Link className="sp" to="/Chickencurrypast">
                      <Card className="cardservicepage  card425">
                        <img className="cardimgservicepage" src={pic1}/>
                        <h3 className="cardtitle ">Chicken curry paste</h3>
                      </Card>
                      </Link>
                  </Col> 
                  <Col>
                  <Link className="sp" to="/Pepperchickenpast">
                      <Card className="cardservicepage card425">
                        <img className="cardimgservicepage" src={pic2}/>
                        <h3 className="cardtitle">Pepper chicken paste</h3>
                      </Card>
                 </Link>

                  </Col>
               
                </Row>
                <Row className="cardrow">
                <Col>
                <Link className="sp" to="/Beafroastpaste">
                      <Card className="cardservicepage card425">
                        <img className="cardimgservicepage" src={pic3}/>
                        <h3 className="cardtitle">Beaf roast paste</h3>
                      </Card>
                      </Link>
                  </Col>
                  <Col>
                  <Link className="sp" to="/Fishcurypaste">
                      <Card className="cardservicepage card425">
                        <img className="cardimgservicepage"src={pic4}/>
                        <h3 className="cardtitle">Fish curry paste</h3>
                      </Card>
                      </Link>
                  </Col>
                  {/* <Col>
                      <Card className="cardservicepage card425">
                        <img className="cardimgservicepage" src={matchaimg}/>
                        <h3 className="cardtitle">Green Tea Powder</h3>
                      </Card>
                  </Col>
                  <Col>
                      <Card className="cardservicepage card425">
                        <img className="cardimgservicepage" src={matchaimg}/>
                        <h3 className="cardtitle">Green Tea Powder</h3>
                      </Card>
                  </Col> */}
                </Row>
            </Container>
    </section>
          
    <Footer/>
  </>
  )
}

export default ServicesPage