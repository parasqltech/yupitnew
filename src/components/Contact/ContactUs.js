import React, { Component } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby'
import thumbnial1 from '../../img/restaurant/gallery/thumbnial1.png'

import { Container, Col, Form, Row, Card, ListGroup, Button, ListGroupItem, FormControl } from  'react-bootstrap';

import {MdCheckCircle} from 'react-icons/md'

class ContactUs extends Component {
    render() {
        return (
            <>
               
                        <h2 className="section-heading-2 font-weight-semi-bold mb-2 pl-0 d-block">We love to hear you</h2>
                        <p className="label-text-2">Space for some text here</p>
                        <Form>
                            <Row>
                                <Col lg={6} className="mb-3">
                                    <label>First Name :</label>
                                    <FormControl placeholder="First Name"></FormControl>
                                </Col>
                                <Col lg={6} className="mb-3">
                                    <label>Last Name :</label>
                                    <FormControl placeholder="Last Name"></FormControl>
                                </Col>
                                <Col lg={6} className="mb-3">
                                    <label>Email :</label>
                                    <FormControl placeholder="Email"></FormControl>
                                </Col>
                                <Col lg={6} className="mb-3">
                                    <label>Phone Number :</label>
                                    <FormControl placeholder="Phone Number"></FormControl>
                                </Col>
                                <Col lg={12} className="mb-3">
                                    <label>Message :</label>
                                    <FormControl as="textarea" rows="2" placeholder="Message"></FormControl>
                                </Col>
                                <Col lg={12} className="mb-3">
                                    
                                    <Button variant="default ">Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                  
            </>
        );
    }
}

export default ContactUs;