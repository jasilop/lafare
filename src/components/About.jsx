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
            Where Culture and Taste Fly Overseas
              
            </h2>
            <p className="content">
            A team of four young graduates from different backgrounds came up with an idea of serving the world with Traditional Indian Culture and Taste.
            Also as an emerging country, knowing India’s potential we took a step ahead and promised to source best quality products from India to other business across the Globe. This also involved us in manufacturing the products based on requirements of different businesses and to help in import and export of goods.
           
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