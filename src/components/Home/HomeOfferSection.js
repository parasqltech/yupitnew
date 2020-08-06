import React, { Component } from "react"
import ReactDOM from "react-dom";
import { Link, StaticQuery, graphql } from 'gatsby'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery'; 
import { Container, Row, Col } from  'react-bootstrap';
import offer1 from '../../img/offer1.png';
import offer2 from '../../img/offer2.png';
import offer3 from '../../img/offer3.png';
import offer4 from '../../img/offer4.png';

class HomeOfferSection extends React.Component {
render() {
  return(
    <>
      <section className="home-section-2 ">
         <Container>
         <h2 className="section-heading text-center mb-2">See what’s trending</h2>
         <p className="sub-heading text-center pb-4">Get the latest news on all restaurants nearby as well as your favourite cuisines.</p>
         
            <Row>
              <Col lg="3"  md="6"  sm="6" className="col-6 text-center mb-lg-0 mb-md-3 mb-1">
                <Link to="/" className="offerBox mb-4">
                  <img src={offer1}  className="img-fluid"/>
                </Link>
              </Col>
              <Col lg="3"  md="6"  sm="6" className="col-6 text-center mb-lg-0   mb-md-3 mb-1">
                <Link to="/" className="offerBox mb-4">
                  <img src={offer2}  className="img-fluid"/>
                </Link>
              </Col>
              <Col lg="3"  md="6"  sm="6" className="col-6 text-center mb-lg-0 mb-md-0  mb-1">
                <Link to="/" className="offerBox mb-4">
                  <img src={offer3}  className="img-fluid"/>
                </Link>
              </Col>
              <Col lg="3"  md="6"  sm="6" className="col-6 text-center mb-lg-0 mb-md-0 mb-1">
                <Link to="/" className="offerBox mb-4">
                  <img src={offer4}  className="img-fluid"/>
                </Link>
              </Col>
            </Row>
         </Container>
           
            
            

            
     
          </section>
      

         
      </>     
)
}
}




export default HomeOfferSection