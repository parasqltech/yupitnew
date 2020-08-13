import React, { Component } from 'react';
import { Container, Row, Col,Card,Tab ,DropdownButton,Dropdown,Tabs,ListGroup, FormControl, Button} from  'react-bootstrap';

import { Link, StaticQuery, graphql } from 'gatsby'
import QRCode from 'qrcode.react';
import BintangxCafe from '../img/BintangxCafe.png'
import StarRatings from 'react-star-ratings';
import Layout from '../components/Layout'
import { FaConciergeBell ,FaPercent} from 'react-icons/fa'
import { MdMessage,MdInfo,MdHome,MdPhotoLibrary,MdSearch } from 'react-icons/md'

import Offer from '../components/Restaurant/Offer'
import Menu from '../components/Restaurant/Menu'
import Info from '../components/Restaurant/Info'
import Reviews from '../components/Restaurant/Reviews'
import Gallery from '../components/Restaurant/Gallery'


class RestaurantMenu extends Component {
  
    constructor(props) {
		super(props);
            this.state = {
                shown: "d-none",
            } 
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
        
    render() {
        let pageUrl = this.props.location.href;
        return (
            <>
            
    <Layout>
    <section className="restaurent-menu-section-1">
            <Container className="mh-100  d-flex align-items-end  ">
                    <Row className="justify-content-between w-100  ">
                        <Col xl={8} lg={10}>
                            <div className="restuarant-top-detail d-flex">
                                <div className="restaurant-logo">
                                    <img src={BintangxCafe} className="img-fluid" alt=""/>
                                </div>
                                <div className="restaurant-details">
                                    <h1 className="restaurant-name section-heading-3 font-weight-semi-bold mb-2 text-white">Bintang Cafe</h1>
                                    <p className="label-text text-white mb-2">Burgers, American, Sandwiches, Fast Food, BBQ..</p>
                                    <p className="label-text text-white mb-0 d-inline mr-0" ><MdHome name="home" className="mr-2"/> East Victoria Park WA 6101, Australia  </p>
                                    <span className="label-text text-white d-inline font-weight-semi-bold">
                                    <StarRatings
                                            rating={2.50}
                                            starDimension="18px"
                                            starSpacing="1.5px"
                                            starEmptyColor="rgb(255, 255, 255)"
                                            starRatedColor="rgb(153, 204, 51)"
                                        />
                                            (2.5)
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
                        <Tab eventKey="offer" title={<><FaPercent className="mr-2"/>Offer</>}>
                            <Offer/>  
                        </Tab>
                        <Tab eventKey="menu" title={<><FaConciergeBell className="mr-2"/>Menu</>}>
                            <Menu/>
                          </Tab>
                        <Tab eventKey="info" title={<><MdInfo className="mr-2"/>Restaurant Info</>}>
                            <Info/>
                        </Tab>
                        <Tab eventKey="reviews" title={<><MdMessage className="mr-2"/>Reviews</>}>
                            <Reviews/>
                        </Tab>
                        <Tab eventKey="gallery" title={<><MdPhotoLibrary className="mr-2"/>Gallery</>}>
                        <Gallery/>
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
                                            <h5 className="label-text font-weight-semi-bold  mb-1">Lorem Ipsum</h5>
                                            <p className="label-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            <div className="mb-3 text-center">
                                               <div className="qucode">
                                               <QRCode  value={'"'+ pageUrl +'"'} />
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

export default RestaurantMenu;
