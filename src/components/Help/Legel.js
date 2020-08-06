import React, { Component } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby'

import { Tab, Col, Nav, Row, Card, Accordion, Button } from  'react-bootstrap';
class Legel extends Component {
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
    render() {
        const accrodianIcon = this.state.accrodianIcon;
        const accrodianIcon1 = accrodianIcon ? 'fa fa-angle-up' : 'fa fa-angle-down';
     
        return (
            <>
              
               <Card className="shadown-none p-0 mb-4">
                    <Accordion defaultActiveKey="0" >
                        <Card.Header>
                        
                            <Accordion.Toggle  onClick={this.activeAccrodion} as={Button} as={Card.Title} className="mb-0"  eventKey="0">
                                <h3 className="label-text-2 text-dark mb-0" > Privacy Policy</h3><span className="accrodian-icon"><i className={accrodianIcon1}></i></span>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="p-2 pt-3">
                                <p className="label-text">We, as YupIt Australia Pty Ltd 29 619 915 614, are committed to respect and protect the privacy of all those users who visit our website (www.yupit.app) and all those website visitors who access our website or services through any mobile application.</p>
                                <Link to="/privacy-policy" className="ReadMore pl-0 pt-0">Read More</Link>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card.Body>
                        </Accordion> 
                    </Card>
                    <Card className="shadown-none p-0 mb-4">
                        <Accordion defaultActiveKey="1" >
                            <Card.Header>
                                <Accordion.Toggle  onClick={this.activeAccrodion} as={Button} as={Card.Title} className="mb-0"  eventKey="1">
                                    <h3 className="label-text-2 text-dark mb-0" > Terms &amp;  Conditions</h3><span className="accrodian-icon"><i className={accrodianIcon1}></i></span>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body className="p-2 pt-3">
                                        <p className="label-text">Hey there – A warm welcome to our website (YupIT.app) and our applications! Sit, have a sip of beer and read through the terms and conditions regarding your use of our website and on which our partner restaurants offer any of their drinks/meals (the “Drinks/Meals”) listed on our Website to you. </p>
                                    <Link to="/terms-and-conditions" className="ReadMore pl-0 pt-0">Read More</Link>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card.Body>
                        </Accordion>
                    </Card>
                    <Card className="shadown-none d-none p-0 mb-4">
                        <Accordion defaultActiveKey="2" >
                            <Card.Header>
                                <Accordion.Toggle  onClick={this.activeAccrodion} as={Button} as={Card.Title} className="mb-0"  eventKey="2">
                                    <h3 className="label-text-2 text-dark mb-0" > Refund Policy</h3><span className="accrodian-icon"><i className={accrodianIcon1}></i></span>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body className="p-2 pt-3">
                                        <p className="label-text"></p>
                                    <Link to="/refund-policy" className="ReadMore  pl-0 pt-0">Read More</Link>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card.Body>
                        </Accordion>
                    </Card>
            </>
        );
    }
}

export default Legel;