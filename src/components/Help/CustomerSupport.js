import React, { Component } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby'
import thumbnial1 from '../../img/restaurant/gallery/thumbnial1.png'

import { Tab, Col, Nav, Row, Card, ListGroup, Button, ListGroupItem } from  'react-bootstrap';

import {MdCheckCircle} from 'react-icons/md'
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const mno = cookies.get('Phone');
const uid = cookies.get('Userid');

class GeneralIssue extends Component {
  constructor(props) { 
    super(props);
      this.state = {
         PastData:'',
      }
    }
    componentWillMount(){
    axios.get('https://yupit.io/staging/api/pastorder/'+uid).then(res => {
      console.log(res);
      this.setState({
        PastData: res.data.ResponseData
       
      })
     })
    }

    render() {
      console.log(this.state.PastData);
      const pdata = this.state.PastData;  
        return (
            <>
              <h3 className="section-heading-3 font-weight-semi-bold mb-2 d-block">Past Orders</h3>
              <ListGroup>
                  { pdata && pdata.map(prop => {return (
                      <ListGroupItem className="PastOrderList">
                        <div className="order-header">
                            <div className="order-image">
                                    <img src={prop.LogoURL} className="img-fluid d-inline "/>
                            </div>
                            <div className="order-info">
                                <div className="d-xl-flex d-lg-block  justify-content-between align-items-center">
                                    <h4 className="orderName mb-0">{prop.RestaurantName}</h4>
                                    <p className="orderdate  mb-0 pl-xl-4 pl-0">Delivered on {prop.OrderDate}
                                        <i className="statusIcon"><MdCheckCircle/></i>
                                    </p>
                                </div>
                                <p className="orderDetailText ">Navrangpura</p>
                                <p className="orderDetailText">ORDER #{prop.OrderID} | {prop.OrderDate}</p>
                            </div>          
                           
                        </div>
                        <div className="order-footer">
                            
                              <div className="d-md-flex d-block   justify-content-between align-items-center mb-2">
                              { prop.OrderWiseProduct && prop.OrderWiseProduct.map( props => { return (
                                <h4 className="orderItems mb-0">{props.ProductName} x {props.Quantity}</h4>
                                  )}
                              )}
                                <p className="orderdate  mb-0 pl-md-4 pl-0">Total Paid:  {prop.OrderAmount}</p>
                              </div>

                            {/* <a href="tel:08067466728" className="btn btn-primary btn-default-outline">CALL US <span className="d-none d-sm-inline">(08067466728)</span></a> */}
                            <Button variant="primary btn-default-outline">CHAT WITH US</Button>
                        </div>
                      </ListGroupItem>

                    )}
                  )}
              </ListGroup>
            </>
        );
    }
}

export default GeneralIssue;