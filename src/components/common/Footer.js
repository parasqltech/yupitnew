import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import logo from '../../img/logo.png'
import SocialMenu from '../common/SocialMenu'
import FooterSubMenu from '../common/FooterSubMenu'
import FooterMenu1 from '../common/FooterMenu1'
import FooterMenu2 from '../common/FooterMenu2'
import AppStore from '../../img/home/AppStore.png'
import PlayStore from '../../img/home/PlayStore.png'
class Footer extends React.Component{
    render(){
        return(
		<>
        <footer>
            <div className="container">
                 <div className="row">
                     <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-4">
                         <h4 className="section-heading-3  font-weight-semi-bold mb-2">ABOUT US</h4>
                         <p className="text-dark mb-2">At YupIT we are driven with the sole intention of sharing awesome experiences via great food &amp; drinks with the world.</p>
                         <a href="mailto:support@yupit.io" className="nav-link d-inline  font-weight-regular pl-0">support@yupit.io</a>
                        
                         <SocialMenu></SocialMenu>
                     </div>
                     <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 ">
                     <h4 className="section-heading-3  font-weight-semi-bold mb-2">Discover Yupit</h4>
                        <FooterMenu1></FooterMenu1>
                     </div>
                     <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                        <h4 className="section-heading-3  font-weight-semi-bold mb-2">Help</h4>
                        <FooterMenu2></FooterMenu2>
                     </div>
                     <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 text-center">
                         <div className="footer-logo">
                         <img src={logo} className="img-fluid mt-md-3 mb-4 mt-md-0 mt-4" width="150" alt=""/>
                         </div>
                        <div className="row">
                            <div className="col-lg-12 col-6 text-lg-center text-right ">
                                 <a target="_blank" href="https://apps.apple.com/au/app/yupit/id1489180368"><img src={AppStore} target="_blank" alt="" width="200" className="mb-3 img-fluid   appStorelogo"/></a>
                            </div>
                            <div className="col-lg-12 col-6 text-lg-center text-left ">
                                  <a target="_blank"  href="https://play.google.com/store/apps/details?id=com.qltech.cunsumer.yupitapp"><img src={PlayStore} target="_blank" width="200" alt="" className="mb-3 img-fluid appStorelogo"/></a>
                            </div>
                        </div>
                     
                        
                               
                     </div>
                 </div>
            </div>
            <div className="footer-last ">
                <div className="container">
                    <p className="text-center label-text mb-0 ">© {(new Date().getFullYear())} YupiT All rights reserved.</p>
                </div>
            </div>
        </footer>
        
	</>
        )
    }
}
export default Footer;
