import React , {useState } from 'react'
import ReactDOM from "react-dom";
import { Link, StaticQuery, graphql } from 'gatsby'
import { Container, Col, Nav, Row, Card, Accordion, Button } from  'react-bootstrap';



const CustomerJourny = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpImbusinessmain {
          edges {
            node {
              acf {
                journy_section_heading
                journy_section_short_description
                section_content {
                  thumbnial_title
                  thumbnial_description
                  thumbnial_backgroud_image {
                    localFile {
					childImageSharp {
					  id
					  fixed(base64Width: 625) {
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
     {data &&
                            data.allWordpressWpImbusinessmain &&
                            data.allWordpressWpImbusinessmain.edges &&
                            data.allWordpressWpImbusinessmain.edges.map(
                              prop => {
                                return (
        <section className="imbusiness-section-3">
          <Container >
           
           
                                
                              <Row className="row d-flex justify-content-center">
                                  <Col md={12}>
                                    <h2 className="section-heading text-center mb-4 font-weight-semi-bold">{prop.node.acf.journy_section_heading}</h2>
                                  </Col>
                                    {prop.node.acf.section_content.map(
                                      (prop1,i) =>{
                                        return (
                                          <Col  lg={4} sm={6} className=" mb-4">
                                            <Card className="h-100 ">
                                                  <div className=" mb-2">
                                                  <img src={prop1.thumbnial_backgroud_image.localFile.childImageSharp.fixed.base64} width="100" className=" d-inline img-fluid" alt=""/>
                                                 
                                                  </div>
                                                  <h2 className="section-heading-3 font-weight-semi-bold ">{prop1.thumbnial_title}</h2>
                                                  <div className="label-text " dangerouslySetInnerHTML={{ __html: prop1.thumbnial_description}}></div>
                                               
                                                
                                            </Card>
                                        </Col>
                                        )
                                      }
                                    )} 
                              </Row>
          
          </Container>
          

        </section>


 
)
}
)}
      </>
          
    )
    
    }
    
    />
)

export default CustomerJourny