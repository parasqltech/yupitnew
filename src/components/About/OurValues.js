



import React, {Component} from "react"
import { Link, StaticQuery, graphql } from 'gatsby'
import icon from '../../img/buffets-included.png'

import { Container, Col, Nav, Row, Card, Accordion, Button } from  'react-bootstrap';
const OurValues = () => (
    <StaticQuery
      query={graphql`
      query {
        allWordpressWpAbout {
          edges {
            node {
              acf {
                our_value_heading
                our_value_sub_heading
                our_value_list {
                  our_value_list__description
                  our_value_list__title
                  our_value_list_icon{
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
      
                           
                       
                <section className="about-section-2  text-center bg-light">
                        <Container>
                        {data &&
                                    data.allWordpressWpAbout &&
                                    data.allWordpressWpAbout.edges &&
                                    data.allWordpressWpAbout.edges.map(
                                        prop => {
                                            return (
                                                <>
                        <h2 className="section-heading font-weight-semi-bold   mb-md-2 mb-2" dangerouslySetInnerHTML={{ __html: prop.node.acf.our_value_heading}}></h2>
                        <p className="label-text-2 mb-4" dangerouslySetInnerHTML={{ __html: prop.node.acf.our_value_sub_heading}}></p>
                                                
                        <Row className=""> 
                                       
                                         {prop.node.acf.our_value_list.map(
                                              prop1 => {
                                                return (
                                                    <>
                                                        <Col lg={4} md={6} sm={6}  className="mb-4">
                                                            <Card className="p-2 py-4 p-md-4 bg-light shadown-none">
                                                                    <div className="icon mb-4">   
                                                                        <img width="90" src={prop1.our_value_list_icon.localFile.childImageSharp.fixed.base64} className="img-fluid" width="90"/>
                                    
                                                                    </div>
                                                                    <p className="section-heading-3 font-weight-semi-bold mb-2" dangerouslySetInnerHTML={{ __html: prop1.our_value_list__title}}></p>
                                                                    <p className="label-text mb-0"  dangerouslySetInnerHTML={{ __html: prop1.our_value_list__description}}></p>
                                                            </Card>
                                                         </Col> 
                                                    
                                                    </>
            
                                                )}
                                         )}
                                          
                                           
                               
                            </Row>
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
  
  export default OurValues
