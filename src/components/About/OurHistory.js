



import React, {Component} from "react"
import { Link, StaticQuery, graphql } from 'gatsby'
import icon from '../../img/buffets-included.png'

import { Container, Col, Nav, Row, Card, Accordion, Button } from  'react-bootstrap';
const OurHistory = () => (
    <StaticQuery
      query={graphql`
      query {
        allWordpressWpAbout {
          edges {
            node {
              acf {
                our_history_heading
                  our_history_description
                  our_history_list {
                    our_history_list_title
                    our_history_list_details
                    our_history_list_date
                    our_history_list_icon{
                    localFile {
                      childImageSharp {
                          fixed(base64Width: 27) {
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
      
                           
                       
                <section className="about-section-3  text-center ">
                        <Container>
                        {data &&
                                    data.allWordpressWpAbout &&
                                    data.allWordpressWpAbout.edges &&
                                    data.allWordpressWpAbout.edges.map(
                                        prop => {
                                            return (
                                                <>
                        <h2 className="section-heading font-weight-semi-bold   mb-md-2 mb-2" dangerouslySetInnerHTML={{ __html: prop.node.acf.our_history_heading}}></h2>
                        <p className="label-text-2 mb-4" dangerouslySetInnerHTML={{ __html: prop.node.acf.our_history_description}}></p>
                                                
                        <ul className=""> 
                                       
                                         {prop.node.acf.our_history_list.map(
                                              prop1 => {
                                                return (
                                                    <>
                                                        <li>
                                                            <div className="card">
                                                                
                                                                    <div className="icon mb-4">   
                                                                        <i>
                                                                        <img width="90" src={prop1.our_history_list_icon.localFile.childImageSharp.fixed.base64} className="img-fluid" width="27"/>
                                                                        </i>
                                                                    </div>
                                                                    <span className="date">{prop1.our_history_list_date}</span>
                                                                        <p className="section-heading-3 font-weight-semi-bold mb-2" dangerouslySetInnerHTML={{ __html: prop1.our_history_list_title}}></p>
                                                                        <p className="label-text mb-0"  dangerouslySetInnerHTML={{ __html: prop1.our_history_list_details}}></p>
                                                           
                                                                </div>
                                                        </li>
                                                    </>
            
                                                )}
                                         )}
                                          
                                           
                               
                            </ul>
                            </>
                                          
                              )  
                            }
                        )}
                            
                        </Container>
                </section>
        </>
      )
      }
      />
  )
  
  export default OurHistory
