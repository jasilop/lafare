import React from 'react'

import image3 from '../images/About Us.png';
import image333 from '../images/Vision.png'
import image33 from '../images/MIssion.png'
import ba from '../images/handshake-4011419_1920.jpg';
import { Row, Col, Container, Button, Navbar } from 'react-bootstrap';
import Services from '../Services';
// import Navheader from '../Navheader';
import Navheader from '../Navheader';
import Footer from '../Footer';
const AboutSingle = () => {
  return (
    <div>
        
    
    <section id='AboutSingle'>
    <Navheader classname={"pages"} /> 
      
      
      <div className="first" style={{backgroundImage: `url(${ba})`}}  >
          {/* <h1 className="firsth1">Where Culture and Taste Fly Overseas</h1> */}
      </div>


    {/* <Row style={{backgroundImage: `url(${ba})`, marginTop:'10%'}}>
          <h1>Where Culture and Taste Fly Overseas</h1>
        </Row> */}
      <Container className="topsingle" >
        
      <Row className=" align-items-center" >
          <Col className="left mb-5" md="6">
            <h3 className="section_sub_title">
            About us
            </h3>
            <p className="content">
            LAFARE INTERNATIONAL, we are dedicated to helping businesses succeed by providing high-quality sourcing and trading services. With over a decade of experience in the industry, we have developed an extensive network of suppliers and a deep understanding of global markets. We specialize in sourcing and procuring high-quality products from around the world, providing end-to-end logistics and supply chain management services, and ensuring that all products meet the highest standards of quality and safety.
Our team of experts is committed to providing exceptional customer service, working closely with each of our customers to understand their unique needs and requirements. We believe in responsible and sustainable sourcing practices, and work closely with our suppliers and customers to promote social and environmental sustainability throughout the global supply chain.
At LA-FARE INTERNATIONAL, we are passionate about helping businesses grow and succeed. We strive to be a trusted partner and advisor to our customers, providing them with the expertise and support they need to achieve their goals. Contact us today to learn more about how we can help your business succeed.
           
            </p>
            <div className=''>
        </div>
          </Col>

          <Col className=" specialcolumn right px-5" md="6">
            <img className="image33 specialimage" src={image3} />
            {/* {image} */}
          </Col>
        </Row>
        <div className="spacer-2"></div>
        <Row id="missionsuc" className="align-items-center aboutsinglepage2ndimage" >
          <Col className=" specialcolumn right px-5" md="6" >
            <img className="image33 specialimage " src={image33} />
            {/* {image} */}
          </Col>
          <Col className="left mb-5" md="6">
            <h3 className="section_sub_title">
            Mission
            </h3>
            <p className="content">
            At LA-FARE INTERNATIONAL, our mission is to be the premier provider of sourcing, manufacturing, and logistics solutions for businesses of all sizes and industries. We aim to be the trusted partner that our clients rely on to deliver high-quality products and exceptional customer service, while driving efficiency and cost-effectiveness in their operations.

We are committed to creating a seamless and transparent process for our clients, from sourcing and procurement to manufacturing and logistics. Our team of experienced professionals works tirelessly to ensure that our clients' needs are met and expectations are exceeded, while upholding the highest standards of quality and ethical business practices.

In addition to our commitment to our clients, we are also dedicated to supporting the communities where we operate. We strive to make a positive impact through social responsibility initiatives, such as promoting sustainable practices and supporting local charities and non-profits.

Overall, our mission is to be a reliable and innovative partner that helps our clients achieve their business goals, while also making a positive impact on the world around us.
           
            </p>
            <div className=''>
        </div>
          </Col>
          
        </Row>
        <div className="spacer-2"></div>
        <Row id="vissionsuc " className="align-items-center"  >
          <Col className="left mb-5" md="6">
            <h3 className="section_sub_title">
            Vision
            </h3>
            <p className="content">
            Our vision is to become a leading sourcing and trading company, known for providing high-quality products and exceptional services to our clients worldwide. We aim to build strong relationships with our clients, suppliers, and partners, based on mutual trust and respect. Our focus is on continuous improvement and innovation, to stay ahead of the competition and offer unique solutions to our clients' needs.

We envision a world where businesses can thrive and grow sustainably, by accessing reliable and efficient supply chains. Our goal is to contribute to this vision by leveraging our expertise in sourcing, procurement, manufacturing, and logistics, to provide cost-effective solutions to our clients' sourcing and trading needs.

We aspire to be a responsible and ethical company, committed to making a positive impact on society and the environment. We believe in conducting our business with integrity, transparency, and accountability, and strive to create value for all our stakeholders. We are dedicated to promoting fair labor practices, human rights, and environmental sustainability, and aim to be a role model for responsible business practices in our industry.

            </p>
            <div className=''>
        </div>
          </Col>
          <Col className=" specialcolumn  right px-5" md="6">
            <img className="image33 " src={image333} />
            {/* {image} */}
          </Col>
        </Row>
      </Container>
      {/* <Services style={{backgroundImage:'none'}}/> */}
    </section>
   
    <Footer/>
    </div>
  )
}

export default AboutSingle