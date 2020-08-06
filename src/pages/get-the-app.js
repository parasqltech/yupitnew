import React , {Component} from 'react'
import {withPrefix} from "gatsby"
import { Link, StaticQuery, graphql } from 'gatsby'
import Particles from 'react-particles-js';
import Helmet from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/get-the-app.css'
import logo from '../img/logo-1.png'
import BlogImageMain from '../img/blog-image-main.png'
import DownloadIcon from '../img/download-icon.png'
import SignupIcon from '../img/signup-icon.png'
import RewardIcon from '../img/reward-icon.png'

import { isMobile, isAndroid, isIOS } from 'mobile-device-detect';

class  GetTheApp extends Component {
  constructor(props) {
    super(props)
   
  }
  show = event => {
    if(isMobile){
      if(isAndroid){
        window.location.href = "https://play.google.com/store/apps/details?id=com.qltech.cunsumer.yupitapp";
      }
      if(isIOS){
        window.location.href = "https://apps.apple.com/au/app/yupit/id1489180368";
      }
    }
    else{
       
    }
  }
  render() { 

    return (
    <>
     <Helmet>
            <title>Get the App | Yupit</title>
   

      </Helmet>

   

    
    

          <div className="fullHeight">

        

        <header className="header-data text-center">
            <img src={logo} className="img-responsive logo" width="" alt="YupIT" />
        </header>

     

        <div className="main-text text-center">
            <div className="container">
                <div className="row justify-content-center d-flex align-items-center">
                    <div className="col-12 col-md-7 col-sm-9 col-lg-5 col-xl-4 pl-3 pr-3">
                        <h1>Meet the new local WA food app</h1>
                    </div>
                </div>
            </div>
        </div>

        


        <div className="image-main text-center">

            <img src={BlogImageMain} className="blog-image" alt="blog-image"/>

        </div>

     


        <div className="bullets justify-content-center d-block">
            <div className=" bullets-1">
                <img src={DownloadIcon} className="img-fluid icon"/><span>Download the YUPIT app</span>
            </div>
       
            <div className="bullets-2">
                <img src={SignupIcon} className="img-fluid icon"/><span>Sign up using your mobile number</span>
            </div>
       
            <div className="bullets-3">
                <img src={RewardIcon} className="img-fluid icon"/><span>Place orders and earn cashback</span>
            </div>
        </div>

      


        <div className="get-button text-center">
            <div className="code container">
                <button className="btn btn-secondary btn-download" onClick={this.show}>GET THE APP</button>
          
            </div>
        </div>
    </div>
    </>
    );
  }
}
 
export default GetTheApp;
