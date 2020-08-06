import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

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
          <section className="home-section-4 ">
                <div className="container">
                {data &&
                data.allWordpressAcfHome &&
                data.allWordpressAcfHome.edges &&
                data.allWordpressAcfHome.edges.map(
                  prop => {
                    return (<>
                    <h2 className="section-heading text-center  ">{prop.node.acf.home_top_benifits_heading}</h2>
                    <p className="sub-heading text-center mb-4">YupiT takes care of all your needs from dine-in to pick up !!</p>
                    <div className="row justify-content-center">
                          {prop.node.acf.home_top_benifits_item.map(
                                (prop1) =>{
                                return (
                                    <div className="col-lg-3 col-md-6 col-sm-6 hometopbenifits">
                                    <div className="card text-center">
                                        <div className=" mb-3 topBanifits-icon">
                                        
                                        </div>
                                        <h4 className="section-heading-3  font-weight-bold " dangerouslySetInnerHTML={{ __html: prop1.yupit_app_home_benifits_name}}></h4>
                                        <div className="label-text font-weight-regular" dangerouslySetInnerHTML={{ __html: prop1.yupit_app_home_benifits_description}}></div>
                                      
                                    </div>
                                </div>
                                )
                                }
                            )} 
                     
                    </div></>
                     )
                    }
                )
            }
                </div>
            </section>
          
          
        </>
      )}
      />
  )
export default TopBenifits;
