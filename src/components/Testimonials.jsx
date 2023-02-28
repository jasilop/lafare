import React  from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap';
import Ellipse from './images/Ellipse.png'
import Ellipse2 from './images/Ellipse2.png'
import Ellipse3 from './images/Ellipse3.png'
// import test2 from './images/test2.png'
// import testt from './images/testt.jpg'
// import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// import "./MediaQrs.css"
import { MdOutlineHorizontalRule } from "react-icons/md"


const Testimonials = () => {
  

  return (
    <section id='Testimonials'>
      <Container className=''>
        <Row className='top_row' style={{marginBottom:'10%'}}>
          <Col md="6" >
            <h3 className="section_sub_title" style={{marginTop:'22%'}}>
              Testimonials
              
            </h3>
            <h2 className="section_title">
            What they say <br/>about us
           
            </h2>
           
          </Col>
        </Row>
  
        <Row >
   
        <Col md="4">
            <Card className='testimonialcard'>
              {/* <img src={test2} /> */}
              <p className="content">
              “ Excellent customer service. The guy i talked with was very friendly, patient and helpful in helping us find what we were looking for” 
              </p>
              <div className='stars'>
                <div className="img">
                {/* <img src={Ellipse} alt=""/> */}
                </div>
                <div className="descrription">
                  <h3 className="designatn">
                  Deebhu Rajendra
                  </h3>
                  {/* <h6 className="designation">
                  Navigator
                  </h6> */}
                </div>
              
              
              
              </div>
            </Card>
          </Col>


          <Col md="4">
            <Card className='testimonialcard'>
              {/* <img src={test2} /> */}
              <p className="content">
              “ A fantastic organisation! Great cutomer support from beginning to end of the process. The team are really informed and go the extra mile at every stage.” 
              </p>
              <div className='stars'>
                <div className="img">
                {/* <img src={Ellipse2} alt=""/> */}
                </div>
                <div className="descrription">
                  <h3 className="designatn spdestintn1">
                  Akthar Muhammed
                  </h3>
                  {/* <h6 className="designation">
                  Entrepreneur
                  </h6> */}
                </div>
              
              
              
              </div>
            </Card>
          </Col>

          <Col md="4">
            <Card className='testimonialcard'>
              {/* <img src={test2} /> */}
              <p className="content">
              “ Fantastic company! Excellent customer service, efficient process. They made my import super easy.” 
              </p>
              <div className='stars'>
                <div className="img">
                {/* <img src={Ellipse3} alt=""/> */}
                </div>
                <div className="descrription">
                  <h3 className="designatn spdestintn">
                  Rosy Gabriel
                  </h3>
                  {/* <h6 className="designation">
                  Psychologist
                  </h6> */}
                </div>
              
              
              
              </div>
            </Card>
          </Col>

        </Row>
        <div className='' style={{marginTop:'5%'}}>
          <span className='horizontal'> <MdOutlineHorizontalRule /> <MdOutlineHorizontalRule/><MdOutlineHorizontalRule/> <MdOutlineHorizontalRule/></span>
        </div>
      </Container>

    </section>
  )
}

export default Testimonials