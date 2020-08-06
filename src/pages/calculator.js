import React,{ Component } from 'react'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Particles from 'react-particles-js';
import Layout from '../components/Layout'

import BlogImage from '../img/blog-image.png'
import {  DirectLink, Element , Events, animateScroll, scrollSpy, scroller } from 'react-scroll'
import { Container, Col,  Row, Card, ListGroup, FormControl, Form, Button } from  'react-bootstrap';

class calculator extends Component{
	
	componentDidMount() {
		if(this.props.location.hash != ''){
			scroller.scrollTo('calculator-section-5', {
				duration: 2000,
				delay: 100,
				offset : -35,
				smooth: 'easeInOutQuart'
			  });
		}
	}
	
	
	render (){
		
		
		
		
		
		return(
			<>
			
    
        <Layout>
        <section className="calculator-section-1">
            <Container >
                <div className="calculator-section-1-data ">
                        <Row className=" justify-content-center">
                            
                            <Col lg={6} className="d-flex justify-content-center d-lg-none text-center ">
                                <img src={BlogImage} className="img-fluid d-inline" alt="blog-image"/>
                            </Col>
                            <Col lg={6}  >
                                <h1 className="section-heading">What we want to achieve?</h1>
                                <p className="label-text text-dark mb-4">The objective of the report is to highlight the potential increase in revenuefor your venue
                                    by  understanding the peak and off-peak hours for thebusiness throughout the week. The report
                                    will identify areas of opportunities which you can target strategically using the YupIT app to
                                    amplify your business.</p>
                                    <Row className="row ">
                                      <Col lg={10} >
                                          <form  action="step2.php" method="POST">
                                              <div className="input-group mb-3">
                                                  <input type="text" className="form-control" placeholder="Enter Your Location" />
                                                  <div className="input-group-append">
                                                    <button className="btn btn-default" type="submit">Search</button>
                                                  </div>
                                              </div>
                                          </form>
                                  </Col>
                                </Row>
                            </Col>
                            <Col lg={6} className="d-none d-lg-flex">
                                <img src={BlogImage} className="img-fluid" alt="blog-image"/>
                            </Col>
                        </Row>
                   
                </div>
            </Container>
        </section>
        <section className="calculator-section-2">
            <Container>
                <div className="calculator-section-2-data">
                    <div className=" text-center section-paragraph section-heading-2">
                        <h2 className="section-heading mb-2">How are you tracking?</h2>
                        <p  className="label-text text-dark mb-4 pb-4">Based on the Google Popular times report, we can derive average hours spent at your venue and
                            popular business hours.</p>
                    </div>
                    
                    <div className="hour-data  ">
                        <Row>
                        <Col sm={6} className=" justify-content-center  mb-4 ">
                                <div className="hour-one section-heading-3 text-center mb-2">
                                    <div className="border-shape text-center align-items-center justify-content-center ">
                                        <div className="">
                                            <span className="number">1-2.5 </span>
                                            <p className="number-text mb-0">Hours</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="hour-two text-center section-heading-4 section-paragraph ">
                                    <h4 className="section-heading-3 font-weight-semi-bold">Average Hours spent</h4>
                                    <p  className="label-text">Shows how much time customers typically spend at your venue</p>
                                </div>
                            </Col>
                            <Col sm={6} className="justify-content-center mb-4  ">
                                <div className="hour-one section-heading-3 text-center  mb-2">
                                    <div className="border-shape text-center align-items-center justify-content-center">
                                        <div className="">
                                            <span className="number">6 PM </span>
                                            <p className="number-text mb-0">FRI</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="hour-two text-center section-heading-4 section-paragraph">
                                    <h4 className="section-heading-3 font-weight-semi-bold">Peak hour &amp; day</h4>
                                    <p  className="label-text">Shows how much time customers typically spend at your venue</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                      <Row className=" justify-content-center">
                        <Col md={12} sm={11} >
                              <p className="label-text">The below table shows the percentage utilisation of your venue by the day of the week and by
                              hours of the day. Further, it highlights the peak (darker green) and off-peak (lighter
                              green) hours for the business. Also, you can take a note of the busiest (orange) and slowest
                              (dark
                              grey) hour for your venue.</p>
                        </Col>
                      </Row>
                    <Card className=" border-0 text-center">
                        <p className="mb-0">Table Data</p>
                    </Card>
                    <Card className=" border-0">
                        <div className="row justify-content-center text-center">
                            <div className="col-md-8 ">
                              
                                <div className="hour-one section-heading-3 section-paragraph">
                                    <div className="border-shape text-center align-items-center justify-content-center mb-4">
                                        <div className="">
                                            <span className="number digits" data-old="0"> <span>35</span>%</span>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="section-heading-3 font-weight-semi-bold mb-3">Avg. Utilisation</h2>
                                <p className="text-center label-text">From the above table, we can derive  the weekly average utilisation for your venue.  The aim is to increase this weekly utilisation.</p>
                            </div>
                           
                        </div>
                    </Card>
                    <div className=" text-center ">
                        <Row className=" justify-content-center">
                          <Col md={12} sm={11} >
                                <h2 className="section-heading">What are the potential areas?</h2>
                                <p className="label-text">To grow the business, we need to strategically target the off-peak hours and convert them
                                    into profitable hours. The below table shows the potential increase in average percentage
                                    utilisation of your venue by the day of the week and by hours of the day. It highlights key
                                    off-peak hours (darker green) that can be targeted.</p>
                            </Col>
                        </Row>
                        
                    </div>

                    <div className="card border-0 text-center">
                        <p className="mb-0">Table Data</p>
                    </div>

                </div>
            </Container>
        </section>
  
        <section className="calculator-section-3">
            <Container>
                <div className="calculator-section-3-data">
                    <div className="  section-paragraph section-heading-2">
                     
                          <Row className=" justify-content-center">
                            <Col md={12} >
                            <h2 className="section-heading text-center">Let Know your Future Revenue</h2>
                              <p className="label-text text-center mb-4 pb-sm-4 pb-0 ">Based on the Google Popular times report, we can derive average hours spent at your venue and
                                  popular business hours.</p>
                                  <Row className=" justify-content-center">
                                      <Col md={11} >
                                       
                                        <Form className="form-value text-left" action="step3.php" method="POST">
                                        <Row className=" justify-content-center">
                                            <Col sm={6} className="mb-4" >
                                                <p className="sub-heading mb-2">Average order value*</p>
                                                <input type="text" className="form-control" placeholder="Enter Your Location"/>
                                            </Col>
                                            <Col sm={6} className="mb-4">
                                                <p className="sub-heading mb-2">Busiest day capacity*</p>
                                                <input type="text" className="form-control" placeholder="Enter Your Location"/>
                                            </Col>
                                            <Col lg={6} sm={8} className="mb-4">
                                                   <Button  variant="default btn-block" className="  " type="submit">Calculate Now</Button>
                                            </Col>
                                          </Row>
                                        </Form>
                                  </Col>
                                </Row>
                            </Col>
                          </Row>
                         
                       
                       
                    </div>
                  
                </div>
            </Container>
        </section>
        <section className="calculator-section-4">
        <Container  >
            <div className="calculator-section-4-data">
                <div className="doller mb-20">
                    <div className="border-shape section-heading-3 text-center align-items-center justify-content-center ">
                        <span className="mb-0 number digits ">$1,124,136</span>
                    </div>
                </div>
                <div className=" text-center mb-4">
                    <h2 className="section-heading-2">Increase in Annual Revenue</h2>
                    <p className="label-text">This value represents the potential increase in revenue your venue can make assuming it ran
                        at <span className="font-weight-bold"><span className="mb-0" data-old="35">50</span>%</span> utlisation.</p>
                </div>

                <Card className=" border-0 mb-20 pt-4">
                        <h2 className="section-heading-3 text-center font-weight-semi-bold">What-if analysis</h2>
                   
                    <Row>
                    <Col sm={6} className="mt-30">
                    <div className="d-flex w-100 align-items-center">
                                <div className="analysis-one">
                                    <div className="border-shape section-heading-3 text-center align-items-center justify-content-center">
                                        <span className="mb-0 number">10%</span>
                                    </div>
                                </div>
                                <div className="analysis-two align-items-center d-flex">
                                    <p>$112,414</p>
                                </div>
                            </div>
                    </Col>
                    <Col sm={6} className="mt-30">
                    <div className="d-flex w-100  align-items-center">
                                      <div className="analysis-one">
                                          <div className="border-shape section-heading-3 text-center align-items-center justify-content-center">
                                              <span className="mb-0 number">15%</span>
                                          </div>
                                      </div>
                                      <div className="analysis-two align-items-center d-flex">
                                          <p>$168,620</p>
                                      </div>
                            </div>
                    </Col>
                       

                        
                    </Row>


                    <Row>
                    <Col sm={6} className="mt-30">
                        <div className="d-flex w-100 align-items-center">
                          <div className="analysis-one">
                              <div
                                  className="border-shape section-heading-3 text-center align-items-center justify-content-center">
                                  <span className="mb-0 number">20%</span>
                              </div>
                          </div>
                          <div className="analysis-two align-items-center d-flex">
                              <p>$224,827</p>
                          </div>
                      </div>
                    </Col>
                    <Col sm={6} className="mt-30">
                            <div className="d-flex w-100  align-items-center">
                                <div className="analysis-one">
                                    <div
                                        className="border-shape section-heading-3 text-center align-items-center justify-content-center">
                                        <span className="mb-0 number">25%</span>
                                    </div>
                                </div>
                                <div className="analysis-two align-items-center d-flex">
                                    <p>$281,034</p>
                                </div>
                            </div>
                    </Col>
                     

                        
                    </Row>
                </Card>

                <div className="section-paragraph p-data mb-20">
                    <p className="mb-0 label-text">Disclaimer: The above presented are calculated in accordance with the values  provided by  you and the Google popular times report. Results may vary based on the time of the  report and values provided.</p>
                </div>
            </div>
        </Container>
    </section>

    <section className="calculator-section-5 pt-4">
        <Container>
            <div className="calculator-section-5-data">
                <div className=" text-center mb-20">
                    <h2 className="section-heading">Get the report?</h2>
                    <p className="mb-0 label-text">Based on the Google Popular times report, we can derive average hours spent at your venue and
                        popular business hours.</p>
                </div>

                <form className="form" action="" method="POST">
                    <div className="d-flex justify-content-center restaurant-search">
                        <input type="text" className="form-control" placeholder="Enter Your Mobile Number"/>
                        <button className="btn btn-default" type="submit">Send</button>
                    </div>
                </form>
            </div>
        </Container>
    </section>
      </Layout>
			</>
		)
	}
}

export default calculator

