import React, { Component } from 'react';
import { Container, Col, Card, Row,ListGroup, Accordion, Form, Button, FormControl } from  'react-bootstrap';

class ContectIMBusinessForm extends Component {
    render() {
        return (
            <>
    <section className="ContectIMBusinessForm">
      <Container>
          <Form method="post"  id="form" action="">
           <Row className="justify-content-center">
            <Col md={11} >
                <Row>
                    <Col sm={12} className="mb-4" >
                        <label className="label-text">Restaurant Name</label>
                        <FormControl  type="text"  placeholder="Restaurant Name"  name="first_name"  required/>
                    </Col>
                    <Col sm={12} className="mb-4" >
                        <label className="label-text">Restaurant Address</label>
                        <FormControl  type="text" placeholder="Restaurant Address"  name="last_name"  required/>
                        
                     </Col>
                     
                    <Col sm={6} className="mb-4" >
                        <label className="label-text">First Name</label>
                        <FormControl   required  placeholder="First Name"/>
                    </Col>
                    
                    <Col sm={6} className="mb-4" >
                        <label className="label-text">Contact Number</label>
                        <FormControl  type="text"  name="number" required=""  placeholder="Contact Number" required />
                    </Col>
                    <Col sm={12} className="mb-4" >
                        <label className="label-text">Email</label>
                        <FormControl  type="email" name="email"   placeholder="Email" name="email" required />
                     </Col>
                    
                   
                   
                    <Col sm={12} className="text-center mb-4" >
                      <Button as="button"  variant="success" className="border-0" value="Submit Application">Submit Application</Button>
                                                
                    </Col>
                    
                    
                </Row>
                </Col>
                    
                    
                    </Row>
          </Form>
      </Container>
	        
      </section>
                 
      
            </>
        );
    }
}

export default ContectIMBusinessForm;