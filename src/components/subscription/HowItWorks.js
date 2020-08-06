import React, { Component } from "react"
import { Link, StaticQuery, graphql } from 'gatsby'
import { Container, Col, Nav, Row, Card, Accordion, Button } from  'react-bootstrap';


import step1 from '../../img/suscription/step1.png'
import step2 from '../../img/suscription/step2.png'
import step3 from '../../img/suscription/step3.png'
import step4 from '../../img/suscription/step4.png'
import step5 from '../../img/suscription/step5.png'

class HowItWorks extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }
render() {
  return(
    <>


      <section className="suscription-section-3 ">
          <Container>
            <h2 className="section-heading text-center font-weight-semi-bold mb-2">How it works</h2>
            <p className="label-text-2 text-center pb-4">All the awesome things in life are easy just like YupiT membership!!</p>
            <Row className="justify-content-center">
              <Col lg={4} sm={6} className="howitworkListItem">
                <div className="thumbnial text-center">
                  <div className="thumbnial-icon">
                    <span className="thumbnialCount">1</span>
                    <img src={step1}  className="img-fluid"  alt=""/>
                  </div>
                  <p className="section-heading-3 mb-1 font-weight-semi-bold">Step 1</p>
                  <p className="label-text-2">Choose your plan &amp; subscribe</p>
                </div>
              </Col>
              <Col  lg={4} sm={6} className="howitworkListItem">
                <div className="thumbnial text-center">
                  <div className="thumbnial-icon">
                    <span className="thumbnialCount">2</span>
                    <img src={step2}  className="img-fluid" alt=""/>
                  </div>
                  <p className="section-heading-3 mb-1 font-weight-semi-bold">Step 2</p>
                  <p className="label-text-2">Tell us your preferences
</p>
                </div>
              </Col>
              <Col  lg={4} sm={6} className="howitworkListItem">
                <div className="thumbnial text-center">
                  <div className="thumbnial-icon">
                    <span className="thumbnialCount">3</span>
                    <img src={step3}  className="img-fluid" alt=""/>
                  </div>
                  <p className="section-heading-3 mb-1 font-weight-semi-bold">Step 3</p>
                  <p className="label-text-2">Pick the best deal for you</p>
                </div>
              </Col>
              
            </Row>
          </Container>
           
            
        
                                         
                                   
                                         
                                  

            
     
          </section>
      

         
      </>     
)
}
}



export default HowItWorks;