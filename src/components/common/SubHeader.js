import React, {Component} from "react"
import { Link, StaticQuery, graphql } from 'gatsby'

import PropTypes from "prop-types"
import { Container, Navbar, Nav, Button,NavDropdown } from  'react-bootstrap';
import logo from '../../img/fav-icon.png'


import { Location } from '@reach/router'




class SubHeader extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
          StickyClass: '',
          extarSpaceClass: '',

          
        } 
	 
	}

	
	componentDidMount() {
		var url = window.location.href;	
		
		    window.addEventListener('scroll', () => {
                let activeClass = 'sticky';
                let extraSpace = 'SpaceTop';
                
                if(window.scrollY <= 100){
                    activeClass = '';
                    extraSpace = '';
                   
                }
                else {
                    activeClass = 'sticky';
                    extraSpace = 'SpaceTop';
                   
                }
               this.setState({StickyClass: activeClass	});
               this.setState({extarSpaceClass: extraSpace	});
			  });
	        }
	
	render() {
        
      
        
		return(
            <>
			<header className={"subheader " +this.state.StickyClass} >
                <div className="sub-header">
                    <Container>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="">Space for some taxt here</span>
                            <ul className="downloadAppMenu">
                                <li className="mr-3 d-none d-sm-inline ">
                                    Download the app now
                                </li>
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
                        </div>
                    </Container>
                </div>
              
            <Container>

              
                <Nav className=" navbar main-navbar navbar-expand-md navbar-light d-flex justify-content-between   pl-0 pr-0">
                     <div className="d-flex justify-content-start align-items-center" >
                    <Link className="navbar-brand" to="/"><img src={logo} width="40px" className="img-fluid"/></Link>
                        <span className="section-heading-3  d-inline mb-0 mt-0">
                            {/* <Location>
                                {({ location }) => {
                                    let PageName = location.pathname;
                                return <>
                                {PageName.replace(/[^\w\s]/gi, ' ')}
                                </>
                                }}
                           </Location> */}
                           Page Name
                        </span>
                    </div>
                    <Navbar className="pt-md-0 pt-3" id="help">
                        <ul className="navbar-nav">
                            <Nav.Item>
                                <Link className="nav-link" to="/help">Help</Link>
                            </Nav.Item>
                           
                        </ul>
                    </Navbar>
                </Nav>
            </Container>
        </header>
        <span className={this.state.extarSpaceClass}></span>
        </>
		)
	}
}
export default SubHeader;
