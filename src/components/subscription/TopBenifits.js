import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import combineoffers from '../../img/combine-offers.png'
import buffetsincluded from '../../img/buffets-included.png'
import recoversavings from '../../img/recover-savings.png'
import dishespervisit from '../../img/dishes-per-visit.png'
const TopBenifits = () => (
  
    <StaticQuery
      query={graphql`
        query {
          allWordpressAcfHome {
            edges {
              node {
                acf {
                  home_top_benifits_heading
                  home_top_benifits_item {
                    yupit_app_home_benifits_name
                    yupit_app_home_benifits_description
                    yupit_app_home_benifits_icon {
                      localFile {
                        childImageSharp {
                          fixed(base64Width: 90) {
                            base64
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          }
      `}
      
      render={data => (
        <>
          <section className="suscription-top-benifit-section">
                <div className="container">
               <>
                    <h2 className="section-heading text-center  ">Why YupiT Premium</h2>
                    <p className="sub-heading text-center mb-4">By subscribing to YupiT you will always best value whenever you dine-in or pick up your order</p>
                    <div className="row justify-content-center">
                       
                                    <div className="col-lg-3 col-md-6 col-sm-6  hometopbenifits">
                                        <div className="card h-100 text-center">
                                            <div className=" mb-3 topBanifits-icon">
                                            <img src={combineoffers} width="90" className="img-fluid d-inline" alt=""/>
                                            </div>
                                            <h4 className="section-heading-3  font-weight-bold ">Unlimited savings</h4>
                                            <p className="label-text font-weight-regular mb-0">Every time you order using YupiT, it is guaranteed that you will save a certain percentage or flat amount off your bill.</p>
                                        
                                        </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 hometopbenifits">
                                        <div className="card text-center">
                                            <div className=" mb-3 topBanifits-icon">
                                            <img src={recoversavings} width="90" className="img-fluid d-inline" alt=""/>
                                            </div>
                                            <h4 className="section-heading-3  font-weight-bold ">Rewards tailored just for You</h4>
                                            <p className="label-text font-weight-regular mb-0">Get personalised offers that are based on your tastes, preferences of cuisines and of course your favourite restaurants.</p>
                                        
                                        </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 hometopbenifits">
                                        <div className="card text-center">
                                            <div className=" mb-3 topBanifits-icon">
                                            <img src={buffetsincluded} width="90" className="img-fluid d-inline" alt=""/>
                                            </div>
                                            <h4 className="section-heading-3  font-weight-bold ">More loyalty, more Fun</h4>
                                            <p className="label-text font-weight-regular mb-0">Every time you order through YupiT, you’ll receive loyalty points and as your loyalty level grows the rewards get even better.</p>
                                        
                                        </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 hometopbenifits">
                                        <div className="card text-center">
                                            <div className=" mb-3 topBanifits-icon">
                                            <img src={dishespervisit} width="90" className="img-fluid d-inline" alt=""/>
                                            </div>
                                            <h4 className="section-heading-3  font-weight-bold ">See what’s trending</h4>
                                            <p className="label-text font-weight-regular mb-0">Get the latest news on all restaurants nearby as well as your favourite cuisines.</p>
                                        
                                        </div>
                                </div>
                               
                      
                         

                    </div></>
                   
                </div>
            </section>
          
          
        </>
      )}
      />
  )
export default TopBenifits;
