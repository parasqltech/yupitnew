import React, { Component } from 'react';
import { Container, Row, Col,Card,Tab ,Form,DropdownButton,Dropdown,Tabs,ListGroup, FormControl, Button} from  'react-bootstrap';

import { Link, StaticQuery, graphql } from 'gatsby'
import GoogleMapReact from 'google-map-react';
import CallIcon from '../img/icons/CallIcon.svg';
import MapMarker from '../img/icons/MapMarker.svg';
import WebIcon from '../img/icons/WebIcon.svg';
import { FaMapMarkerAlt } from 'react-icons/fa';


import QRCode from 'qrcode.react';
import BintangxCafe from '../img/BintangxCafe.png';
import StarRatings from 'react-star-ratings';
import { AiOutlineClockCircle, AiOutlineShareAlt } from 'react-icons/ai'
import { GiOpenedFoodCan } from 'react-icons/gi'
import Layout from '../components/Layout'
import { FaConciergeBell ,FaPercent} from 'react-icons/fa'
import { MdMessage,MdInfo,MdHome,MdPhotoLibrary,MdSearch } from 'react-icons/md'

import { Scrollbars } from 'react-custom-scrollbars';

import { GiKnifeFork } from 'react-icons/gi'

import {LightgalleryProvider, LightgalleryItem} from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

// import Reviews from '../components/Restaurant/Reviews'

class RestaurantDetailPage extends Component {
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
          ReviewText: '',
         
        };
        this.changeRating = this.changeRating.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.setName = this.setName.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setMsg = this.setMsg.bind(this);
        
          this.state = {
                shown: "d-none",
                person: null,
                placeid:null
            } 
            this.changeRating = this.changeRating.bind(this);
            this.state = { 
              rating: 0
              
            };
            this.copyButton = this.copyButton.bind(this);
        }
        copyButton() {
            var self = this;
            let CopyText ="DXSFS50";
            navigator.clipboard.writeText(CopyText);
            self.setState({shown: "d-block"});
				
            setTimeout(
                function() {
                    self.setState({shown: "d-none"});	
                },3000);
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
            ReviewText: e.target.value
        });
    }   
       
    submitForm() {
      const u = cookies.get('Userid');
      const p = cookies.get('Phone');
      if (u === undefined) {
        window.location.href = '/login';
      }else{
        if (this.validator.allValid()) {
          axios.post('https://yupit.io/staging/api/addreview', { RestaurantID: `${this.props.pageContext.RestaurantData.RestaurantID}`,
                                                                   rating: this.state.rating,
                                                                   ReviewText: this.state.ReviewText,
                                                                   UserID: cookies.get('Userid') })
            .then(res => {
                // console.log(res);
                // console.log(res.data);
                location.reload();
            })
            .catch(error => console.log(error));
        }
        else {
            this.validator.showMessages();
            this.forceUpdate();
        }
      }       
    }
    render() {
        
    		const restaurantData = this.props.pageContext.RestaurantData;
        return (
            <>
    <Layout>
    <section className="restaurent-menu-section-1">
        <Container className="mh-100  d-flex align-items-end  ">
            <Row className="justify-content-between w-100  ">
                <Col xl={8} lg={10}>
                    <div className="restuarant-top-detail">
                        <div className="restaurant-logo">
                            <img src={restaurantData.LogoURL} className="img-fluid" alt=""/>
                            </div>
                        <div className="restaurant-details">
                            <h1 className="restaurant-name section-heading-3 font-weight-semi-bold mb-2 text-white">{restaurantData.Name}</h1>
                            <p className="label-text text-white mb-2">{restaurantData.AllData[0].FoodDescription}</p>
                            <p className="label-text text-white mb-0 d-inline mr-0" ><MdHome name="home" className="mr-2"/> {restaurantData.Address1}, {restaurantData.Address2} </p>
                            <span className="label-text text-white d-inline font-weight-semi-bold">
                            <StarRatings
                                    rating={2.50}
                                    starDimension="18px"
                                    starSpacing="1.5px"
                                    starEmptyColor="rgb(255, 255, 255)"
                                    starRatedColor="rgb(153, 204, 51)"
                                />
                                    {restaurantData.Rating}
                            </span>
                        </div>
                    </div>
                    </Col>
               </Row>
        </Container>
	</section>
	
    <section className="restaurent-menu-section-2">
        <Container>
            <Row >
                <Col xl={9} lg={9}>
                <Tabs defaultActiveKey="offer"  id="uncontrolled-tab-example">
                        <Tab eventKey="offer" title={<>Reward</>}>
                        <Row>
                            {
			                    restaurantData.AllData[3].details && restaurantData.AllData[3].details.map(prop => {return (    
			                        <>
			                        <Col lg={4} sm={6} className="mb-3">
					                    <Card className="offer-card p-0">
					                    <Card.Header className="p-0">
					                        <img src={restaurantData.ImageURL} className="img-fluid w-100" alt/>
					                        <div className="offerHeader Getmealwithdrink">
					                            <div className="offerName">
					                            {prop.OfferTitle}
					                            </div>
					                        </div>
					                    </Card.Header>
					                    <Card.Body className="p-0">
					                        <p className="offerDetailText">{prop.OfferName}</p>
					                        <p className="label-text"> <AiOutlineClockCircle className="mr-1"/> <span className="mr-1"> {prop.OfferString}</span> <GiOpenedFoodCan  className="mr-1 d-none"/><span className="d-none"> Dinner</span></p>
					                        <span className="shareButton "><AiOutlineShareAlt/></span>
					                    </Card.Body>
					                    </Card>

					                </Col>
			                        </>             
			                    )})
			                }
			             </Row>
                        </Tab>

                        <Tab eventKey="menu" title={<><FaConciergeBell className="mr-2"/>Menu</>}>
                            <Card className="resturant-menu-tab shadown-none p-2">
                                <Card.Header className=" p-0 border-0 d-flex justify-content-between">
                                    <div className="search-box input-group">
                                        <FormControl placeholder="Search food item"></FormControl>
                                        <Button><MdSearch/></Button>
                                    </div>
                                    
                                    <DropdownButton    id="dropdown-basic-button" title={<><GiKnifeFork className="mr-2"/> Categories</>}>
                                        <Scrollbars  renderTrackHorizontal={props => <div {...props} className="track-horizontal"/>} className="custom-scroll" style={{ minWidth:188,  height: 250, }}>
                                        {
                                            restaurantData.AllData[4].details && restaurantData.AllData[4].details.map(prop => {return (
                                                <Dropdown.Item  href={"#/"+prop.CategoryName}>{prop.CategoryName}</Dropdown.Item>
                                            )})
                                       }
                                       </Scrollbars>
                                    </DropdownButton>
                                </Card.Header>
                                <Card.Body className="p-0 py-4">
                                {
                                    restaurantData.AllData[4].details && restaurantData.AllData[4].details.map(prop => {return (
                                    <>
                                    <h2 className="section-heading-3 font-weight-semi-bold  mb-0">{prop.CategoryName}</h2>
                                      <ListGroup className="menuItemList " variant="flush">
                                      {
                                        prop.ProductDetails && prop.ProductDetails.map(pro => {return (
                                        <>
                                        <ListGroup.Item className="bg-white" >
                                            <div className="menuItemImage">
                                                <img src={pro.PhotoImagePath} className="img-fluid" alt=""/>
                                            </div>
                                            <div className="menuItemDetail">
                                                <p className="sub-heading mb-1">{pro.ProductName}</p>
                                                <p className="label-text">{pro.ProductDescription}</p>
                                                <p className="itemPrice sub-heading">{pro.CurrentPrice}</p>
                                            </div>
                                        </ListGroup.Item>
                                        </>
                                        )})
                                      }
                                      </ListGroup>
                                        
                                    </>
                                    )})
                                }
                                
                               </Card.Body>
                            </Card>
                          </Tab>
                        <Tab eventKey="info" title={<><MdInfo className="mr-2"/>Restaurant Info</>}>
                            <Card className="resturant-info-tab shadown-none p-2">
                                <Card.Header className="bg-white p-0 border-0 d-flex justify-content-between">
                                   
                                <h2 className="section-heading-2   mb-2">{restaurantData.Name}</h2>
                                </Card.Header>
                                <Card.Body className="p-0 py-2">
                                    <p className="label-text">{restaurantData.AllData[0].RestaurantDescription}</p>

                                    
                                   <Row>
                                       <Col md={6} sm={5}>
                                           <h3 className="section-heading-3 font-weight-semi-bold">Contact Details</h3>
                                            <ul className="contactList">

                                                <li> <i className="text-center"><img src={MapMarker}/></i><span>{restaurantData.Address1}, {restaurantData.Address2}</span></li>
                                                <li>
                                                    <a href="tel:+61 8 6262 3559" target="_blank">
                                                         <i className="text-center"><img src={CallIcon}/></i><span>{restaurantData.ContactNo}</span>
                                                    </a>
                                                </li>
                                                
                                                <li>
                                                    <a href="" target="_blank">
                                                         <i className="text-center"><img src={WebIcon}/></i><span>www.yupit.app</span>
                                                    </a>
                                                </li>
                                                
                                            </ul>
                                       </Col>
                                       <Col md={6} sm={7}>
                                       <Row>
                                       <Col xl={8} lg={10}>
                                            <h3 className="section-heading-3 font-weight-semi-bold">Opening Hours</h3>
                                            <ul className="WorkingHourList">
                                                <li className="d-flex">

                                                   <span>Monday</span>
                                                   <span>{restaurantData.AllData[0].Timings.Monday}</span>
                                                </li>
                                                <li>
                                                   <span>Tuesday</span>
                                                   <span>{restaurantData.AllData[0].Timings.Tuesday}</span>
                                                    
                                                </li>
                                                <li>
                                                   <span>Wednesday</span>
                                                   <span>{restaurantData.AllData[0].Timings.Wednesday}</span>
                                                    
                                                </li>
                                                <li>
                                                   <span>Thursday</span>
                                                   <span>{restaurantData.AllData[0].Timings.Thursday}</span>
                                                    
                                                </li>
                                                <li>
                                                   <span>Friday</span>
                                                   <span>{restaurantData.AllData[0].Timings.Friday}</span>
                                                    
                                                </li>
                                                <li>
                                                   <span>Saturday</span>
                                                   <span>{restaurantData.AllData[0].Timings.Saturday}</span>
                                                    
                                                </li>
                                                <li>
                                                   <span>Sunday</span>
                                                   <span>{restaurantData.AllData[0].Timings.Sunday}</span>
                                                </li>
                                            </ul>
                                        </Col>
                                   </Row>
                                        </Col>
                                   </Row>
                               </Card.Body>
                            </Card>
                        </Tab>
                        <Tab eventKey="reviews" title={<><MdMessage className="mr-2"/>Reviews</>}>
                            <Card className="resturant-review-tab shadown-none p-2">
                                <Card.Header className="bg-white p-0 border-0 d-flex justify-content-between">
                                   
                                <h2 className="sub-heading font-weight-semi-bold mb-2">Reviews for {restaurantData.Name}</h2>
                                </Card.Header>
                              <Card.Body className="p-0 py-2">
                                <ListGroup className="menuItemList " variant="flush">
                                {
                                    restaurantData.AllData[1].details && restaurantData.AllData[1].details.map(prop => {return (
                                        <>
                                        <ListGroup.Item className="bg-white" >
                                            <div className="d-flex justify-content-between  ">
                                                
                                                <p className="">
                                                  <span className="ReviewAdminName font-weight-semi-bold">{prop.CustomerName}</span>
                                                  <span className="ReviewDate">{prop.reviewDate}</span> 
                                                </p>
                                                {prop.RateCount}
                                                <StarRatings
                                                    rating={prop.Rating}
                                                    starDimension="18px"
                                                    starSpacing="1.5px"
                                                    starEmptyColor="rgb(180, 180, 180)"
                                                    starRatedColor="rgb(153, 204, 51)"
                                                />

                                            </div>
                                            <p className="mb-0">{prop.ReviewText}</p>
                                        </ListGroup.Item>
                                        </>
                                    )})
                                }  
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
                                              <input type="hidden" name="RID" onChange={this.setID} value={restaurantData.RestaurantID} />
                                              </span>
                                              <Col lg={12} className="mb-3">
                                                  <FormControl as="textarea" placeholder="Message" onChange={this.setMsg}  rows="2" >{this.state.ReviewText}</FormControl>
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
                        </Tab>
                        <Tab eventKey="gallery" title={<><MdPhotoLibrary className="mr-2"/>Gallery</>}>
                            <LightgalleryProvider lightgallerySettings={{ mode: 'lg-fade',download:false,
                                cssEasing : 'cubic-bezier(0.25, 0, 0.25, 1)' }}
                                 galleryClassName="" >
                                <Row>
                                   {
                                        restaurantData.AllData[2].details && restaurantData.AllData[2].details.map(prop => {return (
                                        <Col lg={4} md={4}  sm={6}  className="mb-4 col-6">
                                          <LightgalleryItem  src={prop.path} >
                                            <img src={prop.path} className="img-fluid" alt=""/>
                                          </LightgalleryItem>    
                                        </Col>                   
                                        
                                    )})
                                    }  
                                </Row>
                            </LightgalleryProvider> 
                        </Tab>
                </Tabs>
                
                </Col>
                <Col xl={3} lg={3} >
                    <div className="filter-Sidebar postion-sm-relative">
                        <div className="sidebar-header">
                            Get the app
                        </div>
                        <div className="sidebar-body">
                          
                            <div className=" p-3">
                                <h5 className="label-text font-weight-semi-bold  mb-1">Download Now!!</h5>
                                <p className="label-text">Simply scan this code and get YupiT for Android or iOS.</p>
                                <div className="mb-3 text-center">
                                   <div className="qucode">
                                   
                                   </div>
                                </div>
                                <ul className="downloadAppMenu text-center mb-3">
                                    <li className="">
                                        <a href="https://play.google.com/store/apps/details?id=com.qltech.cunsumer.yupitapp" className="nav-link">
                                            <i  className="fa fa-android"></i>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="https://apps.apple.com/au/app/yupit/id1489180368"  className="nav-link">
                                            <i className="fa fa-apple"></i>
                                        </a>
                                    </li>
                                </ul>
                                <Link to="get-the-app" className="btn btn-default btn-block">Download NOw</Link>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            
        </Container>
    </section>
    </Layout>
            </>
        );
    }
}

export default RestaurantDetailPage;
