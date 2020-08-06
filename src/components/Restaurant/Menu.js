import React, { Component } from 'react';
import { Container, Row, Col,Card,Tab ,DropdownButton,Dropdown,Tabs,ListGroup, FormControl, Button} from  'react-bootstrap';

import { Link, StaticQuery, graphql } from 'gatsby'
import { Scrollbars } from 'react-custom-scrollbars';
import resturantmenuitemThumbnial from '../../img/resturantmenuitemThumbnial.png'
import { MdSearch } from 'react-icons/md'
import { GiKnifeFork } from 'react-icons/gi'


class Menu extends Component {
    render() {
        return (
            <>
                <Card className="resturant-menu-tab shadown-none p-2">
                                <Card.Header className=" p-0 border-0 d-flex justify-content-between">
                                    <div className="search-box input-group">
                                        <FormControl placeholder="Search food item"></FormControl>
                                        <Button><MdSearch/></Button>
                                    </div>
                                    <DropdownButton    id="dropdown-basic-button" title={<><GiKnifeFork className="mr-2"/> Categories</>}>
                                    <Scrollbars  renderTrackHorizontal={props => <div {...props} className="track-horizontal"/>} className="custom-scroll" style={{ minWidth:188,  height: 250, }}>
                                        
                                    {['Calzone','Garlic Bread','Kebabs','Burgers','Specials','Wraps','Chicken','Paninis','Jacket Potatoes','Starters','Traditional Curries','Biryani Dishes','Vegetarian Dishes','Rice','Bread','Sauces','Pizzas'].map((menuList) => (
                                      
                                       
                                        <Dropdown.Item  href={"#/"+menuList}>{menuList}</Dropdown.Item>
                                       
                                        ))}
                                        </Scrollbars>
                                    </DropdownButton>
                                </Card.Header>
                                <Card.Body className="p-0 py-4">
                                    <h2 className="section-heading-3 font-weight-semi-bold  mb-0">Calzone</h2>
                                    <ListGroup className="menuItemList " variant="flush">
                                        <ListGroup.Item className="" >
                                            <div className="menuItemImage">
                                            <img src={resturantmenuitemThumbnial} className="img-fluid" alt=""/>
                                             </div>
                                             <div className="menuItemDetail">
                                                <p className="sub-heading mb-1">Chicken Tandoori Special 12" Deep Pan</p>
                                                <p className="label-text">Cheese, tomatoes and italian herbs.</p>
                                                <p className="itemPrice sub-heading">$150</p>
                                             </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="" >
                                            <div className="menuItemImage">
                                            <img src={resturantmenuitemThumbnial} className="img-fluid" alt=""/>
                                             </div>
                                             <div className="menuItemDetail">
                                                <p className="sub-heading mb-1">Chicken Tandoori Special 12" Deep Pan</p>
                                                <p className="label-text">Cheese, tomatoes and italian herbs.</p>
                                                <p className="itemPrice sub-heading">$150</p>
                                             </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="" >
                                            <div className="menuItemImage">
                                            <img src={resturantmenuitemThumbnial} className="img-fluid" alt=""/>
                                             </div>
                                             <div className="menuItemDetail">
                                                <p className="sub-heading mb-1">Chicken Tandoori Special 09" Deep Pan</p>
                                                <p className="label-text">Cheese, tomatoes, tuna fish, sweetcorn and italian herbs</p>
                                                <p className="itemPrice sub-heading">$150</p>
                                             </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="" >
                                            <div className="menuItemImage">
                                            <img src={resturantmenuitemThumbnial} className="img-fluid" alt=""/>
                                             </div>
                                             <div className="menuItemDetail">
                                                <p className="sub-heading mb-1">Chicken Tandoori Special 12" Deep Pan</p>
                                                <p className="label-text">Cheese, tomatoes and italian herbs.</p>
                                                <p className="itemPrice sub-heading">$150</p>
                                             </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                    <h2 className="section-heading-3 font-weight-semi-bold  mb-0">Garlic Bread</h2>
                                    <ListGroup className="menuItemList " variant="flush">
                                        <ListGroup.Item className="" >
                                            <div className="menuItemImage">
                                            <img src={resturantmenuitemThumbnial} className="img-fluid" alt=""/>
                                             </div>
                                             <div className="menuItemDetail">
                                                <p className="sub-heading mb-1">Chicken Tandoori Special 12" Deep Pan</p>
                                                <p className="label-text">Cheese, tomatoes and italian herbs.</p>
                                                <p className="itemPrice sub-heading">$150</p>
                                             </div>
                                        </ListGroup.Item>
                                       
                                        <ListGroup.Item className="" >
                                            <div className="menuItemImage">
                                            <img src={resturantmenuitemThumbnial} className="img-fluid" alt=""/>
                                             </div>
                                             <div className="menuItemDetail">
                                                <p className="sub-heading mb-1">Chicken Tandoori Special 12" Deep Pan</p>
                                                <p className="label-text">Cheese, tomatoes and italian herbs.</p>
                                                <p className="itemPrice sub-heading">$150</p>
                                             </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                   
                                    <h2 className="section-heading-3 font-weight-semi-bold  mb-0">Kebabs</h2>
                                    <ListGroup className="menuItemList " variant="flush">
                                        <ListGroup.Item className="" >
                                            <div className="menuItemImage">
                                            <img src={resturantmenuitemThumbnial} className="img-fluid" alt=""/>
                                             </div>
                                             <div className="menuItemDetail">
                                                <p className="sub-heading mb-1">Chicken Tandoori Special 12" Deep Pan</p>
                                                <p className="label-text">Cheese, tomatoes and italian herbs.</p>
                                                <p className="itemPrice sub-heading">$150</p>
                                             </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="" >
                                            <div className="menuItemImage">
                                            <img src={resturantmenuitemThumbnial} className="img-fluid" alt=""/>
                                             </div>
                                             <div className="menuItemDetail">
                                                <p className="sub-heading mb-1">Chicken Tandoori Special 12" Deep Pan</p>
                                                <p className="label-text">Cheese, tomatoes and italian herbs.</p>
                                                <p className="itemPrice sub-heading">$150</p>
                                             </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="" >
                                            <div className="menuItemImage">
                                            <img src={resturantmenuitemThumbnial} className="img-fluid" alt=""/>
                                             </div>
                                             <div className="menuItemDetail">
                                                <p className="sub-heading mb-1">Chicken Tandoori Special 12" Deep Pan</p>
                                                <p className="label-text">Cheese, tomatoes and italian herbs.</p>
                                                <p className="itemPrice sub-heading">$4.50</p>
                                             </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                   
                               </Card.Body>
                            </Card>
                          
            </>
        );
    }
}

export default Menu;