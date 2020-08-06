import React, { Component } from 'react';
import { Container, Row, Col,Card,Tab ,Form,Dropdown,Tabs,ListGroup, FormControl, Button} from  'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaMapMarkerAlt } from 'react-icons/fa'
import StarRatings from 'react-star-ratings';


import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios';

import { MdMessage,MdInfo,MdHome,MdPhotoLibrary,MdSearch } from 'react-icons/md'
const AnyReactComponent = ({ text }) => <div>{text}</div>;


class Reviews extends Component {
    static defaultProps = {
        center: {
          lat: 23.023984,
          lng: 72.567750
        },
        zoom: 11
    };

    constructor(props) {

        super(props);
        this.validator = new SimpleReactValidator();
        this.state = { 
          rating: 2 ,
          name: '',
          email: '',
          msg: '',
        };
        this.changeRating = this.changeRating.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.setName = this.setName.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setMsg = this.setMsg.bind(this);
    }
    
    changeRating(rating) {
        this.setState({
          rating: rating
        })
    }
    setName(e) {
        this.setState({
            name: e.target.value
        });
    }
    setEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    setMsg(e) {
        this.setState({
            msg: e.target.value
        });
    }   
      
      
    submitForm() {
        if (this.validator.allValid()) {
    
            const data = {
              name: this.state.name,
              rating: this.state.rating,
              email: this.state.email,
              msg: this.state.msg
            };
            
            axios.post('https://yupit.io/staging/api/addreview', { data })
            .then(res => {
                console.log(res);
                
                //console.log(res.data);
            })
            .catch(error => console.log(error));
        }
        else {
            this.validator.showMessages();
            // rerender to show messages for the first time
            // you can use the autoForceUpdate option to do this automatically`
            this.forceUpdate();
        }
    }
      
      
    render() {
         console.log(this.props);
        
        return (
            <>
                <Card className="resturant-review-tab shadown-none p-2">
                                <Card.Header className="bg-white p-0 border-0 d-flex justify-content-between">
                                   
                                <h2 className="sub-heading font-weight-semi-bold mb-2">2 reviews for </h2>
                                </Card.Header>
                                <Card.Body className="p-0 py-2">
                                <ListGroup className="menuItemList " variant="flush">
                                        <ListGroup.Item className="bg-light" >
                                        <div className="d-flex justify-content-between  ">
                                                
                                        <h2 className="sub-heading font-weight-semi-bold mb-4">Add your review</h2>
                                                <StarRatings
                                           rating={this.state.rating}
                                           changeRating={this.changeRating}
                                            starDimension="24px"
                                            starSpacing="1.5px"
                                            starEmptyColor="rgb(180, 180, 180)"
                                            starHoverColor="rgb(102, 155, 0)"
                                            starRatedColor="rgb(102, 155, 0)"
                                        />
                                        {this.validator.message('Rating', this.state.rating, 'required')}
                                   </div>
                                            <Form className="">
                                                <Row>
                                                    <Col lg={6} className="mb-3">
                                                        <FormControl placeholder="Name" onChange={this.setName} value={this.state.name} ></FormControl>
                                                        {this.validator.message('Name', this.state.name, 'required|alpha')}
                                                    </Col>
                                                    <Col lg={6} className="mb-3">
                                                        <FormControl placeholder="Email" onChange={this.setEmail} value={this.state.email}  ></FormControl>
                                                        {this.validator.message('Email', this.state.email, 'required|email')}
                                                    </Col>
                                                    <span>
                                                    <input type="hidden" />
                                                    </span>
                                                    <Col lg={12} className="mb-3">
                                                        <FormControl as="textarea" placeholder="Message" onChange={this.setMsg}  rows="2" >{this.state.msg}</FormControl>
                                                    </Col>
                                                    <Col lg={12} className="mb-3">
                                                        <Button variant="default" onClick={this.submitForm} as="submit">Submit</Button>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </ListGroup.Item>
                                    
                                    </ListGroup>
                                    
                                
                                    
                               </Card.Body>
                            </Card>
                                    
            </>
        );
    }
}

export default Reviews;