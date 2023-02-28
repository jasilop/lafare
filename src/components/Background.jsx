import React from "react";
import { Container } from "react-bootstrap";
// import image2 from  './images/image2.png'
// import home11 from "./images/old-man-2879303_1920.jpg";
import home11 from "./images/pexels-quintin-gellar-696205.jpg";
import home22 from "./images/pexels-tom-fisk-3840441.jpg";
import home33 from "./images/yanapi-senaud-6HR8vpjYUHo-unsplash.jpg";
import home44 from "./images/home44.jpg";
// import lafare from  './images/lafare.mp4'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


function PrevArrowProduct(props) {
  const { onClick, style } = props;
  return (
    <IoIosArrowBack
      className={"react__arrowPrev"}
      onClick={onClick}
      style={{ ...style, display: "block", }}
    />
  );
}
function NextArrowProduct(props) {
  const { onClick, style } = props;
  return (
    <IoIosArrowForward
      className={"react__arrowNext"}
      style={{ ...style, display: "block",  }}
      onClick={onClick}
    />
  );
}


const Background = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    nav: false,
    prevArrow: <PrevArrowProduct />,
    nextArrow: <NextArrowProduct />,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
    // prevArrow:<PrevArrow/>,
    // nextArrow:<NextArrow/>
  };
  return (
    <div className="Backgroundimage" style={{overflowX:'hidden' , overflowY:'hidden'}}  >
      {/* <Container> */}
      <Slider {...settings}>
        {/* <div className="back">
          <img className="homeimages" src={home44} />
          
        </div>
        <div className="back">
          <img className="homeimages" src={home33} />
        </div> */}
        <div className="back">
          <img className="homeimages" src={home11} />
          <div className="text-title">
            <h1>Sourcing</h1>
            <p>We help you to find the best quality products <br /> from India for your Business.</p>
          </div>
        </div>
        <div className="back">
          <img className="homeimages" src={home33} />
          <div className="text-title">
            <h1>Manufacturing</h1>
            <p>We Manufacture products based on your requirments.</p>
          </div>
        </div>
        <div className="back">
          <img className="homeimages" src={home22} />
          <div className="text-title">
            <h1>Imports & <br/> Exports</h1>
            <p>We help you with Logistics and Shipping support.</p>
          </div>
        </div>
      </Slider>
      {/* </Container> */}

      {/* <img  src={image2} style={{width:'100%'}} /> */}
      {/* <video   autoPlay="true" width="100%" muted="true"> */}
      {/* <source src={lafare} type="video/mp4" autoPlay="true" /> */}
      {/* </video> */}
    </div>
  );
};

export default Background;
