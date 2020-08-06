import React, {Component} from "react"
import { Link, StaticQuery, graphql } from 'gatsby'

import PropTypes from "prop-types"
import { Container, Navbar, Nav, Button,NavDropdown,FormControl } from  'react-bootstrap';
import logo from '../../img/logo.png'
import Profile from '../../img/profileThumbnial.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const uid = cookies.get('Userid');

if(cookies.get('ImgProfile') === undefined){
   var profileimg = Profile;
}else{
   var profileimg = cookies.get('ImgProfile');
}
class Header extends React.Component {
    
    constructor(props) {
        super(props);
        this.loginButton = this.loginButton.bind(this);
        this.logoutButton = this.logoutButton.bind(this);
        this.state = {
          StickyClass: '',
          extarSpaceClass: '',
          login: true,
        } 
     
    }
   

 loginButton() {
    this.setState({
        login: false,
    });
    <Redirect to="/" />
 }
 logoutButton() { 
    cookies.remove("Userid");
    cookies.remove("Phone");
    cookies.remove('ImgProfile');
    cookies.remove('IsLocked');
    cookies.remove('Promocode');
    jQuery(document).empty();
    window.location.href = '/login';
    // this.setState({
    //     login: false,
    // });
 }
 
    
    componentDidMount() {
        var url = window.location.href; 
        if((url.includes("privacy-policy")) || (url.includes("faq")) || (url.includes("partner-t-c")) || (url.includes("terms-and-conditions"))){
            this.setState({StickyClass: "sticky"});
        }
        else{
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
               this.setState({StickyClass: activeClass  });
               this.setState({extarSpaceClass: extraSpace   });
              });
        }   
         
        
        console.log(window.location.href);  
    }
    
    render() {
        
        const collapsed = this.state.collapsed;
        const login = this.state.login;
        
        return(
            <>
            <header className={this.state.StickyClass} >
                <div className="sub-header">
                    <Container>
                        <div className="d-flex justify-content-between align-items-center">
                            {/* <span className="">Space for some taxt here</span> */}
                            <span className="">&nbsp;</span>
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
                <Navbar collapseOnSelect  expand="md"  className="  main-navbar  navbar-light  pl-0 pr-0">
                    <Link className="navbar-brand" to="/"><img src={logo} width="130px" className="img-fluid"/></Link>
                    <div className="d-flex">
              
                        <Navbar.Toggle aria-controls="navbarSupportedContent" />

                    </div>
                    <Navbar.Collapse className="justify-content-end pt-md-0 pt-3" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <Nav.Item>
                                <Link className="nav-link" to="/restaurant">Resturant</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="nav-link " to="/subscription">subscription</Link>
                            </Nav.Item>
                            {/* <Nav.Item>
                                <Link className="nav-link " to="/imbusiness">Mealpass</Link>
                            </Nav.Item> */}
                            <Nav.Item>
                                <Link className="nav-link" to="/imbusiness">I'm Business</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="nav-link" to="/help">Help</Link>
                            </Nav.Item>
                           
                            {(uid)?(<><NavDropdown className="d-none d-md-flex"  title={<><span className="d-flex align-items-center">
                                            <span className="profileIcon ">
                                                <img src={profileimg} className="img-fluid"/>
                                            </span></span></>} id="basic-nav-dropdown">
                           
                            
                           <li className="dropdown-item">
                               <Link className="nav-link" to="/profile">Profile</Link>
                           </li>
                           <li className="dropdown-item">
                               <span className="nav-link cursor-pointer" onClick={this.logoutButton} >Log out</span>
                           </li>
                            </NavDropdown> <Nav.Item className="d-flex d-md-none">
                                <Link className="nav-link" to="/profile">Profile</Link>
                            </Nav.Item>
                            <Nav.Item className="d-flex d-md-none">
                                <span className="nav-link" onClick={this.logoutButton}>Log out</span>
                            </Nav.Item></>):(<> <Nav.Item className="d-none d-md-flex">
                                <Link className="nav-link btn-outline-secondary" to="/login" onClick={this.loginButton} >Log in</Link>
                            </Nav.Item>
                            <Nav.Item className="d-flex d-md-none">
                                <Link className="nav-link" to="/login" onClick={this.loginButton} >Log in</Link>
                            </Nav.Item></>)}
                           
                            
                                

                            
                        </ul>
                    </Navbar.Collapse>
                </Navbar >
                
            </Container>
            
        </header>
       
        <span className={this.state.extarSpaceClass}></span>
        </>
        )
    }
}
 


export default Header;