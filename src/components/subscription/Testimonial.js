


import React, { Component } from "react"
import { Link, StaticQuery, graphql } from 'gatsby'
import { Container, Col, Nav, Row, Card, Accordion, Button } from  'react-bootstrap';


import OwlCarousel from 'react-owl-carousel';
import tesimonailThumbnial from '../../img/suscription/tesimonailThumbnial.png'






class Testimonial extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }
  
  

render() {
 
    const options = {
        items: 1,
        nav: false,
        rewind: true,
        autoplay: true,
        loop: true,
        dots:true,
        nav:false
      };

  return(
    <>


      <section className="suscription-section-4 ">
          <Container>
            <h2 className="section-heading text-center font-weight-semi-bold  mb-4 pb-md-4 pb-0">Testimonial</h2>
            <OwlCarousel className="owl-theme"  {...options} > 
                                                 
            <div className="TestimonialSlider">
                <Row className="justify-content-center">
                <Col  xl={10} lg={11}>
                <div className="TestimonialBox">
                <p className="clientName d-none d-md-block">Jessica Jones - Chef</p>
                <Row>
                    <Col xl={8} lg={9} md={9}>
                        <div className="testimonailContent">
                            <div className="testimonialText">
                            <span className="quoteStart">"</span>
                            <span className="quoteEnd">"</span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.
                           
                          
                        </div>
                        <p className="clientName d-block d-md-none">Jessica Jones - Chef</p>
                            </div>
                    </Col>
                    
                       
                </Row>
                <div className="testimonialImage h-100 text-right">
                            <img src={tesimonailThumbnial} className="img-fluid d-inline"  alt=""/>
                        </div>
            </div>
                </Col>
            </Row>
           

            </div>
           
            </OwlCarousel>
          </Container>
           
            
        
                                         
                                   
                                         
                                  

            
     
          </section>
      

         
      </>     
)
}
}



export default Testimonial;