import React, { Component } from 'react';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe,
  StripeProvider,
  Elements,
} from 'react-stripe-elements';
import StripeScriptLoader from 'react-stripe-script-loader';
import { Container, Col, Card, Row, InputGroup, Form,Dropdown,Tab, Button, FormControl,Tooltip, OverlayTrigger } from  'react-bootstrap';

import Visa from '../../img/icons/Visa.svg'
import AmericanExpress from '../../img/icons/AmericanExpress.svg'
import yupitIcon from '../../img/icons/yupitIcon.png'
import Discover from '../../img/icons/Discover.svg'
import MasterCard from '../../img/icons/MasterCard.svg'
import visaPng from '../../img/icons/visa.png'
import {FiCreditCard } from 'react-icons/fi'
import {GoCalendar } from 'react-icons/go'
import {AiOutlineExclamationCircle } from 'react-icons/ai'
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const uid = cookies.get('Userid');
const planflag = cookies.get('Planflag');
const planamount = cookies.get('PlanAmount'); 
const plandesc = cookies.get('PlanDesc');
const plansubtitle = cookies.get('PlanSubtitle');
const planid = cookies.get('PlanID');
const createOptions = () => {
  return {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        letterSpacing: '0.025em',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#c23d4b',
      },
    },
  };
};

class _SplitFieldsForm extends Component {

    constructor(props) {
    super(props);
    this.state = {
            errorMessage: '',
            
    } 
    // this.handleChange = this.handleChange.bind(this);
    // this.CardhandleChange = this.CardhandleChange.bind(this);
  }
  handleChange = ({error}) => {
    if (error) {
      this.setState({errorMessage: error.message});
    }
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    if (this.props.stripe) {
      this.props.stripe.createToken().then(({ token }) => {
    const tokenString = token.id;
    console.log(tokenString);
    //you need to call axios here and send token to api and write subscription code into php api see 
      axios.post("https://yupit.io/staging/api/addcard", {
                  UserID: uid,
                  TokenID: tokenString,
        }).then(res => {
        // console.log(res);
        axios.post("https://yupit.io/staging/api/allcard", {
                  UserID: uid,
          
          }).then(result => {
          // console.log(result);
          const cardid = result.data.ResponseData[0].customer;
          // console.log(cardid);
          axios.post("https://yupit.io/staging/api/membersubscription", {
                  UserID: uid,
                  CardID: cardid,
                  Planflag: planflag,
                  PlanID: planid
            }).then(response => {
            console.log(response);
              window.location.href = '/Paymentthankyou';
          })
          .catch(err => console.log(err))
        
        })
        .catch(err => console.log(err))
          
      })
      .catch(err => console.log(err))
    });
    console.log("here");
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };
    render() {
       
        return (
            <>
          <section className="Payment-information-section">
          <Container>
          <h1 className="section-haeding text-center font-weight-semi-bold mb-0">Payment information</h1>
            <Row className="justify-content-center">
                        <Col xl={9} lg={10}>
                    <p className="label-text-2 text-center mb-md-4 pb-md-4 mb-0 pb-0">All transactions are safe and secured we never save your card details</p>
                    </Col>
            </Row>
          </Container>
          <div className="paymentDetail">
              <Container>
                  <Row className="justify-content-center">
                      <Col xl={9} lg={10}>
                          <div className="orderSummerylist">
                              <div className="yupitLogo text-center">
                                  <img src={yupitIcon} className="img-fluid d-none d-sm-inline" alt=""/>
                              </div>
                              <div className="order-details">
                                  
                                  <div className="order-details-box">
                                       <div className="pl-md-4 pr-md-4 pl-sm-2 pr-sm-2 pl-0 pr-0">
                                            <p className="label-text-2 mb-0">Plan Details</p>
                                            <p className="section-heading-3 font-weight-bold text-dark mb-0">{plansubtitle}</p>
                                            <p className="label-text">{plandesc}</p>
                                        </div>
                                        
                                        <div className="pl-md-4 pr-md-4 pl-sm-2 pr-sm-2 pl-0 pr-0">
                                        <p className="label-text-2 mb-0">Amount</p>
                                        <p className="section-heading-3 font-weight-bold mb-0  text-dark">${planamount}</p>
                                        
                                        </div>
                                  </div>
                                 
                              </div>
                          </div>
                      </Col>
                  </Row>
                  
              </Container>

          </div>
            
                </section>
            <section className="Payment-form">
                
              <Container>
                  <Form  onSubmit={this.handleSubmit.bind(this)}>
                     
                      <Row className="justify-content-center">
                    <Col md={9} >
                    <Card className="mb-4 shadow-none">
                        <Card.Header className="p-0 pb-sm-3 pb-2 bg-white border-0 align-items-center d-sm-flex d-block justify-content-sm-between">
                            <h2 className="section-heading-3 font-weight-semi-bold"><FiCreditCard className="mr-3 section-heading-2 "/>Credit card</h2>
                            <ul className="payment-icon">
                                <li>
                                    <img src={MasterCard} className="img-fluid" alt=""/>
                                </li>
                                <li>
                                    <img src={Discover} className="img-fluid" alt=""/>
                                </li>
                                <li>
                                    <img src={AmericanExpress} className="img-fluid" alt=""/>
                                </li>
                                <li>
                                    <img src={Visa} className="img-fluid" alt=""/>
                                </li>
                            </ul>
                        </Card.Header>
                        <Row>
                            <Col sm={12} className="mb-4" >
                                <label className="label-text">Card number</label>
                                <CardNumberElement className="form-control"
                                  {...createOptions()}
                                  onChange={this.handleChange}
                                />
                                
                            </Col>
                                                         
                            <Col sm={6} className="mb-4 mb-md-0" >
                                Expiry date
                                  <CardExpiryElement className="form-control"
                                      {...createOptions()}
                                      onChange={this.handleChange}
                                    />
                              </Col>
                            <Col sm={6} className="mb-4 mb-md-0" >
                                CVV Code
                                   <CardCVCElement className="form-control" {...createOptions()} onChange={this.handleChange} />
                            </Col>
                        </Row>
                        <Row>
                          <Col lg={12} className="mb-3">
                            <div className="error" role="alert">
                              {this.state.errorMessage}
                            </div>
                          </Col>
                        </Row>
                        </Card>
                        <Row className="justify-content-center">
                        <Col sm={{ order: 1 }} xs={ { order: 2 }} className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-12 text-right mb-3" >
                            <Button as="button"  variant="outline-secondary" className="" value="Submit Application">CANCEL</Button>
                            </Col>
                            <Col sm={{ order: 2 }} xs={{ order: 1 }}  className="col-xl-6 col-lg-5 col-md-7 col-sm-7 col-12 text-left mb-3" >
                              <Button as="button"  variant="default" className="border-0" value="Submit Application">CONFIRM PAYMENT: ${planamount}</Button>
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
const SplitFieldsForm = injectStripe(_SplitFieldsForm);

class SplitFieldsDemo extends Component {
  render() {
    return (
  <StripeScriptLoader
      uniqueId="myUniqueId"
      script="https://js.stripe.com/v3/"
      loader="Loading..."
    >
      <StripeProvider apiKey="pk_test_nNq8EmM1ZTxNhuk2hY1CqYCw">
        <Elements>
          <SplitFieldsForm handleResult={this.props.handleResult} />
        </Elements>
      </StripeProvider>
    </StripeScriptLoader>
    );
  }
}

export default SplitFieldsDemo
