



import React, {Component} from "react"
import { Link, StaticQuery, graphql } from 'gatsby'
import aboutUs from '../../img/aboutus/about-yupit.png'
import { Container, Col, Nav, Row, Card, Accordion, Button } from  'react-bootstrap';


class OurJournySection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    
  const OurJournyData = this.props.data.allWordpressWpAbout;
    return (
      <>
     
        <section className="about-section-1 ">
          
       
             
                        <Container fluid>
                        <Row className="justify-content-center d-flex">
                                <Col lg={12}>
                            <Row className=" align-items-center  d-flex">
                                <Col xl={5} lg={6} md={5} sm={5} className="d-none d-sm-flex" >
                                    <img src={aboutUs} className="aboutUsImage img-fluid"/>  
                                   
                                    
      
                                         
                                
                                </Col>
                                <Col xl={5} lg={6} md={7} sm={7} >
                                      {OurJournyData && OurJournyData.edges &&  OurJournyData.edges.map(
                                        prop => {
                                            return (
                                            <>
                                            <div className="pr-sm-4 pr-0 ">
                                            <h1 className="section-heading font-weight-semi-bold " dangerouslySetInnerHTML={{ __html: prop.node.acf.our_journy_heading}}></h1>
                                              <p className="label-text-2   mb-sm-4 mb-2" dangerouslySetInnerHTML={{ __html: prop.node.acf.our_journy_description}}></p>
                                            </div>
                                             
                                            </>
                                            )  
                                        }
                                    )}
                                </Col>
                                
                            </Row>
                            </Col>
                            </Row>
                        </Container>
                </section>
      </>
    );
  }
}







const OurJourny = () => (
    <StaticQuery
      query={graphql`
      query {
        allWordpressWpAbout {
            edges {
              node {
                acf {
                  our_journy_description
                  our_journy_heading
                }
              }
            }
          }
        }
      `}
       
      render={(data) => <OurJournySection data={data}/>}
      />
  )
  
  export default OurJourny
