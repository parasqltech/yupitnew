
import React, {Component} from "react"
import { Container, Col, Card, Row,ListGroup, Accordion, Form, Button } from  'react-bootstrap';
import { FaMapMarkerAlt ,FaUserTie , FaFile, FaCheckCircle, FaPlusCircle, FaArrowCircleRight} from 'react-icons/fa'
import scrollTo from 'gatsby-plugin-smoothscroll';
import $ from 'jquery'; 

class CurrentOpenings extends React.Component {
 
    constructor(props) {
        super(props);
        this.activeAccrodion = this.activeAccrodion.bind(this);
        
        this.state = {
          accrodianIcon: true,
          
        } 
    
    }
    activeAccrodion() {
     this.setState({accrodianIcon: !this.state.accrodianIcon});
    }
    componentDidMount(){
        $(document).on('click','.apply',function(){
            var v = $(this).attr('data-position');
            $("#des").val(v);
            $('html, body').animate({
                scrollTop: $(".formdiv").offset().top - 110
            }, 2000);
            
        });
    }
render() {
 


  return(
    <>
        <section className="career-section-4 mt-0 mb-4">
            <Container>
            <h2 className="section-heading font-weight-semi-bold text-center mb-3">Open Positions</h2>
                     
                <Row className="justify-content-center">
                    
                    <Col md={9}>
                    <p className="label-text-2 text-center mb-4">We are always looking for creative, talented self-starters to join the Front family. Check out our open positions and fill out an application.</p>
               
                            </Col>
                            <Col md={11}>
                                <ListGroup className="openingList" variant="flush">
                                    <ListGroup.Item className="bg-light card ">
                                    <Card className="shadown-none bg-none p-0 ">
                                        <Accordion  >
                                            <Card.Header className="border-bottom-0 p-2 pt-3">
                                                
                                                    <Row className="align-items-center">
                                                        <Col lg={8} >
                                                            <h3 className="section-heading-3 font-weight-semi-bold">PHP Developer</h3>
                                                            <p className="label-text">Ensure the timely and successful delivery of our solutions according to client needs and objectives.</p>
                                                             <p className="label-text"><FaMapMarkerAlt className="mr-2"/>Ahmedabad <FaUserTie className="ml-2 mr-2"/>Full Time</p>
                                                        </Col>
                                                        <Col lg={4} className="text-md-right text-left">
                                                            <Button variant="default" id="positionbutton" as={Button} data-position="PHP Developer" className="mr-2 apply">Apply</Button>
                                                            <Accordion.Toggle eventKey="0"  as={Card.Title} className="mb-0 btn btn-secondary"  >
                                                            <FaFile className="mr-2" />See Details
                                                            </Accordion.Toggle>
                                                        </Col>
                                                    </Row>
                                                    
                                            </Card.Header>
                                            <Card.Body className="p-0 bg-light">
                                                <Accordion.Collapse eventKey="0">
                                                    <Card.Body  className="p-1 ">
                                                        <div className="wordpress-content border-top pt-3">
                                                            <p>Themesberg is currently seeking a Frontend Engineer to join our Digital Team focusing on wines &amp; spirits, beauty and lifestyle brands. In this position you will be responsible for effectively managing multiple accounts and team members, including serving as key client contact. The successful candidate is an established leader viewed as a seasoned professional in the digital + social space; respected by senior clients, with a proven track record that demonstrates team growth by leading, maintaining and winning new business.</p> 
                                                            <p>Ideal candidates will have 3+ years of full time experience building social media channels for brands, as well creating digital identity, leading content creation, developing an audience, working on event activations and strategic partnerships.</p>  
                                                            <h2 className="section-heading-3 font-weight-semi-bold mt-4">
                                                            Responsibilities:
                                                            </h2>
                                                            <ul className="Responsibilities">
                                                                <li><FaArrowCircleRight className="listIcon"/>
                                                                Work with our leadership team to drive strategic planning and prioritization
                                                                </li>
                                                                <li><FaArrowCircleRight  className="listIcon"/>Partner with cross-functional teams to drive flawless execution of global initiatives, including the definition and rollout of our international plan
                                                                </li>
                                                                <li><FaArrowCircleRight  className="listIcon"/>Own the end-to-end process: build work plans, synthesize relevant data, lead analyses and develop recommendations</li>
                                                            </ul>
                                                            <h2 className="section-heading-3 font-weight-semi-bold mt-4">
                                                            Requirements:
                                                            </h2>
                                                            <ul className="Responsibilities">
                                                                <li><FaCheckCircle className="listIcon"/>
                                                                Work with our leadership team to drive strategic planning and prioritization
                                                                </li>
                                                                <li><FaCheckCircle  className="listIcon"/>Partner with cross-functional teams to drive flawless execution of global initiatives, including the definition and rollout of our international plan
                                                                </li>
                                                                <li><FaCheckCircle  className="listIcon"/>Own the end-to-end process: build work plans, synthesize relevant data, lead analyses and develop recommendations</li>
                                                            </ul>
                                                            <h2 className="section-heading-3 font-weight-semi-bold mt-4">
                                                            We offer great benefits too!:
                                                            </h2>
                                                            <ul className="Responsibilities">
                                                                <li><FaPlusCircle className="listIcon"/>
                                                                Work with our leadership team to drive strategic planning and prioritization
                                                                </li>
                                                                <li><FaPlusCircle  className="listIcon"/>Partner with cross-functional teams to drive flawless execution of global initiatives, including the definition and rollout of our international plan
                                                                </li>
                                                                <li><FaPlusCircle  className="listIcon"/>Own the end-to-end process: build work plans, synthesize relevant data, lead analyses and develop recommendations</li>
                                                            </ul>

                                                            
                                                        </div>
                                                   </Card.Body>
                                                </Accordion.Collapse>
                                            </Card.Body>
                                        </Accordion> 
                                    </Card>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="bg-light card ">
                                    <Card className="shadown-none bg-none p-0 ">
                                        <Accordion   >
                                            <Card.Header className="border-bottom-0 p-2 pt-3">
                                                
                                                    <Row className="align-items-center">
                                                        <Col lg={8}>
                                                            <h3 className="section-heading-3 font-weight-semi-bold">HR Executive</h3>
                                                            <p className="label-text">Ensure the timely and successful delivery of our solutions according to client needs and objectives.</p>
                                                             <p className="label-text"><FaMapMarkerAlt className="mr-2"/>Ahmedabad <FaUserTie className="ml-2 mr-2"/>Full Time</p>
                                                        </Col>
                                                        <Col lg={4} className="text-md-right text-left">
                                                            <Button variant="default"  as={Button} data-position="HR Executive" className="mr-2 apply">Apply</Button>
                                                            <Accordion.Toggle eventKey="1"  as={Card.Title} className="mb-0 btn btn-secondary"  >
                                                            <FaFile className="mr-2" />See Details
                                                            </Accordion.Toggle>
                                                        </Col>
                                                    </Row>
                                                    
                                            </Card.Header>
                                            <Card.Body className="p-0 bg-light">
                                                <Accordion.Collapse eventKey="1">
                                                    <Card.Body  className="p-1 ">
                                                        <div className="wordpress-content border-top pt-3">
                                                            <p>Themesberg is currently seeking a Frontend Engineer to join our Digital Team focusing on wines &amp; spirits, beauty and lifestyle brands. In this position you will be responsible for effectively managing multiple accounts and team members, including serving as key client contact. The successful candidate is an established leader viewed as a seasoned professional in the digital + social space; respected by senior clients, with a proven track record that demonstrates team growth by leading, maintaining and winning new business.</p> 
                                                            <p>Ideal candidates will have 3+ years of full time experience building social media channels for brands, as well creating digital identity, leading content creation, developing an audience, working on event activations and strategic partnerships.</p>  
                                                            <h2 className="section-heading-3 font-weight-semi-bold mt-4">
                                                            Responsibilities:
                                                            </h2>
                                                            <ul className="Responsibilities">
                                                                <li><FaArrowCircleRight className="listIcon"/>
                                                                Work with our leadership team to drive strategic planning and prioritization
                                                                </li>
                                                                <li><FaArrowCircleRight  className="listIcon"/>Partner with cross-functional teams to drive flawless execution of global initiatives, including the definition and rollout of our international plan
                                                                </li>
                                                                <li><FaArrowCircleRight  className="listIcon"/>Own the end-to-end process: build work plans, synthesize relevant data, lead analyses and develop recommendations</li>
                                                            </ul>
                                                            <h2 className="section-heading-3 font-weight-semi-bold mt-4">
                                                            Requirements::
                                                            </h2>
                                                            <ul className="Responsibilities">
                                                                <li><FaCheckCircle className="listIcon"/>
                                                                Work with our leadership team to drive strategic planning and prioritization
                                                                </li>
                                                                <li><FaCheckCircle  className="listIcon"/>Partner with cross-functional teams to drive flawless execution of global initiatives, including the definition and rollout of our international plan
                                                                </li>
                                                                <li><FaCheckCircle  className="listIcon"/>Own the end-to-end process: build work plans, synthesize relevant data, lead analyses and develop recommendations</li>
                                                            </ul>
                                                            <h2 className="section-heading-3 font-weight-semi-bold mt-4">
                                                            We offer great benefits too!::
                                                            </h2>
                                                            <ul className="Responsibilities">
                                                                <li><FaPlusCircle className="listIcon"/>
                                                                Work with our leadership team to drive strategic planning and prioritization
                                                                </li>
                                                                <li><FaPlusCircle  className="listIcon"/>Partner with cross-functional teams to drive flawless execution of global initiatives, including the definition and rollout of our international plan
                                                                </li>
                                                                <li><FaPlusCircle  className="listIcon"/>Own the end-to-end process: build work plans, synthesize relevant data, lead analyses and develop recommendations</li>
                                                            </ul>

                                                            
                                                        </div>
                                                   </Card.Body>
                                                </Accordion.Collapse>
                                            </Card.Body>
                                        </Accordion> 
                                    </Card>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="bg-light card ">
                                    <Card className="shadown-none bg-none p-0 ">
                                        <Accordion   >
                                            <Card.Header className="border-bottom-0 p-2 pt-3">
                                                
                                                    <Row className="align-items-center">
                                                        <Col lg={8}>
                                                            <h3 className="section-heading-3 font-weight-semi-bold">IOS Developer</h3>
                                                            <p className="label-text">Ensure the timely and successful delivery of our solutions according to client needs and objectives.</p>
                                                             <p className="label-text"><FaMapMarkerAlt className="mr-2"/>Ahmedabad <FaUserTie className="ml-2 mr-2"/>Full Time</p>
                                                        </Col>
                                                        <Col lg={4} className="text-md-right text-left">
                                                            <Button variant="default"  as={Button} data-position="IOS Developer" className="mr-2 apply">Apply</Button>
                                                            <Accordion.Toggle eventKey="2"  as={Card.Title} className="mb-0 btn btn-secondary"  >
                                                            <FaFile className="mr-2" />See Details
                                                            </Accordion.Toggle>
                                                        </Col>
                                                    </Row>
                                                    
                                            </Card.Header>
                                            <Card.Body className="p-0 bg-light">
                                                <Accordion.Collapse eventKey="2">
                                                    <Card.Body  className="p-1 ">
                                                        <div className="wordpress-content border-top pt-3">
                                                            <p>Themesberg is currently seeking a Frontend Engineer to join our Digital Team focusing on wines &amp; spirits, beauty and lifestyle brands. In this position you will be responsible for effectively managing multiple accounts and team members, including serving as key client contact. The successful candidate is an established leader viewed as a seasoned professional in the digital + social space; respected by senior clients, with a proven track record that demonstrates team growth by leading, maintaining and winning new business.</p> 
                                                            <p>Ideal candidates will have 3+ years of full time experience building social media channels for brands, as well creating digital identity, leading content creation, developing an audience, working on event activations and strategic partnerships.</p>  
                                                            <h2 className="section-heading-3 font-weight-semi-bold mt-4">
                                                            Responsibilities:
                                                            </h2>
                                                            <ul className="Responsibilities">
                                                                <li><FaArrowCircleRight className="listIcon"/>
                                                                Work with our leadership team to drive strategic planning and prioritization
                                                                </li>
                                                                <li><FaArrowCircleRight  className="listIcon"/>Partner with cross-functional teams to drive flawless execution of global initiatives, including the definition and rollout of our international plan
                                                                </li>
                                                                <li><FaArrowCircleRight  className="listIcon"/>Own the end-to-end process: build work plans, synthesize relevant data, lead analyses and develop recommendations</li>
                                                            </ul>
                                                            <h2 className="section-heading-3 font-weight-semi-bold mt-4">
                                                            Requirements:
                                                            </h2>
                                                            <ul className="Responsibilities">
                                                                <li><FaCheckCircle className="listIcon"/>
                                                                Work with our leadership team to drive strategic planning and prioritization
                                                                </li>
                                                                <li><FaCheckCircle  className="listIcon"/>Partner with cross-functional teams to drive flawless execution of global initiatives, including the definition and rollout of our international plan
                                                                </li>
                                                                <li><FaCheckCircle  className="listIcon"/>Own the end-to-end process: build work plans, synthesize relevant data, lead analyses and develop recommendations</li>
                                                            </ul>
                                                            <h2 className="section-heading-3 font-weight-semi-bold mt-4">
                                                            We offer great benefits too!::
                                                            </h2>
                                                            <ul className="Responsibilities">
                                                                <li><FaPlusCircle className="listIcon"/>
                                                                Work with our leadership team to drive strategic planning and prioritization
                                                                </li>
                                                                <li><FaPlusCircle  className="listIcon"/>Partner with cross-functional teams to drive flawless execution of global initiatives, including the definition and rollout of our international plan
                                                                </li>
                                                                <li><FaPlusCircle  className="listIcon"/>Own the end-to-end process: build work plans, synthesize relevant data, lead analyses and develop recommendations</li>
                                                            </ul>

                                                            
                                                        </div>
                                                   </Card.Body>
                                                </Accordion.Collapse>
                                            </Card.Body>
                                        </Accordion> 
                                    </Card>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                </Row>
            </Container>   
            
                
        
        </section>
    </>     
)
}
}

  export default CurrentOpenings
