

import React, {Component} from "react"
import { BrowserRouter, Route, Link,withRouter } from "react-router-dom";
import Helmet from 'react-helmet'
import {withPrefix} from "gatsby"
import { Location } from '@reach/router'

import {CircleArrow as ScrollUpButton} from  "react-scroll-up-button";

import Header from '../components/common/Header'
import SubHeader from '../components/common/SubHeader';
import Footer from '../components/common/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import "lightgallery.js/dist/css/lightgallery.css";
import '../style/all.scss'
import favicon from "../img/App Icon_60x60.png";


const Layout = ({ children}) => (
    <>
          <Helmet title="Home | Yupit" link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]} />
          <Helmet>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
		      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
          {/* <script src={withPrefix("js/bootstrap.min.js")} ></script> */}
          <script src={withPrefix("js/main.js")} ></script>
        </Helmet>
        
         <Location>
            {({ location }) => {
            
              return <>
              {((location.pathname === "/faq")||(location.pathname === "/terms-and-conditions")||(location.pathname === "/privacy-policy")) ? (<SubHeader/>) :(<Header/>)}
              </>
            }}
    </Location>
    <>{children} </>
    <Footer></Footer>
	<ScrollUpButton />
  </>
);




export default Layout;

