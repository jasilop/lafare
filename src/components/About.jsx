import React,  { useEffect } from 'react'
import image3 from './images/About Us.png'
import { Row, Col, Container, Button } from 'react-bootstrap';
// import "./MediaQrs.css"
import { FaAngleRight } from "react-icons/fa"
import { Link } from 'react-router-dom';



const About = () => {



  return (

   

    <section id='About'>
      <Container className="Aboutcontainer">
        <Row className="align-items-center abt-con" >
          <Col className="left mb-5" md="6">
            <h3 className="section_sub_title">
            About us
              
              
            </h3>
            <h2 className="section_title">
            Connecting the world of Business
              
            </h2>
            <p className="content">
            At LA-FARE INTERNATIONAL, we are dedicated to helping businesses succeed by providing high-quality sourcing and trading services. With over a decade of experience in the industry, we have developed an extensive network of suppliers and a deep understanding of global markets. We specialize in sourcing and procuring high-quality products from around the world, providing end-to-end logistics and supply chain management services, and ensuring that all products meet the highest standards of quality and safety.

           
            </p>
            <div className='read-more'>
          <span className='learn_more'><Link to="/about">Read more... <FaAngleRight /></Link></span>
           
        </div>
          </Col>
          <Col className="right md-6 image-3">
            <img className="image3 " src={image3} />
            {/* {image} */}
          </Col>
        </Row>
      </Container>
    </section>
    

  )
}

export default About