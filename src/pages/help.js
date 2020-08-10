


import React, {Component} from "react"
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Particles from 'react-particles-js';
import Layout from '../components/Layout'
import LazyLoad from 'react-lazyload';
import Legel from '../components/Help/Legel';
import ContactUs from '../components/Contact/ContactUs';
import YupiTMaxFaq from '../components/Help/YupiTMaxFaq';
import Faq from '../components/Help/Faq';
import CustomerSupport from '../components/Help/CustomerSupport';
import { Tab, Col, Nav, Row, Card, Accordion, Button } from  'react-bootstrap';









class Help extends React.Component {

constructor(props) {
super(props);
this.state = {
    SidebarClass: '',
    tabactiveClass:'CustomerSupport',
    
} 

this.tabactiveBtn = this.tabactiveBtn.bind(this);

}
tabactiveBtn = event => {
this.setState({
    tabactiveClass:event.target.getAttribute('data-event-key'),
})

}


render() {
return(
    <>
        <Layout>
        <> 
        <section className="help-section">
            <div className="container">
                <Tab.Container activeKey={this.state.tabactiveClass}>
                    <Row>
                        <Col sm={12}>
                        <h1 className="section-heading-2 font-weight-bold mb-2">Help &amp; Support</h1>
                        <p className="label-text">We are always happy to assist you</p>
                        
                        </Col>
                        <Col md={3} className="SidebarContainer p-md-0 p-2 ">
                            <Card className={"p-2 bg-light pl-lg-4 pt-lg-0 pl-md-2 pt-md-4 "+ this.state.SidebarClass}> 
                        <Nav variant="pills"  className="flex-column p-md-2 p-0">
                            <Nav.Item>
                                <Nav.Link  onClick={this.tabactiveBtn} data-event-key="CustomerSupport" eventKey="CustomerSupport">Customer Support</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={this.tabactiveBtn} data-event-key="Legel" eventKey="Legel">Legal</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={this.tabactiveBtn} data-event-key="Faq" eventKey="Faq">FAQ's</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={this.tabactiveBtn} data-event-key="YupiTMaxFaq" eventKey="YupiTMaxFaq">YupiT Premium FAQ's</Nav.Link>
                            </Nav.Item>

                            
                            <Nav.Item>
                                <Nav.Link onClick={this.tabactiveBtn} data-event-key="ContactUs" eventKey="ContactUs">Contact Us</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Card>  
                        </Col>
                        <Col md={9}>
                        <Tab.Content className="pl-md-4 pt-4 pt-md-0 pl-0 ">
                            <Tab.Pane defaultActiveKey  eventKey="CustomerSupport">
                                <CustomerSupport/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Legel">
                                <Legel/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Faq">
                                <Faq/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="YupiTMaxFaq">
                                <YupiTMaxFaq/>
                            </Tab.Pane>
                             
                            <Tab.Pane  eventKey="ContactUs">
                                <ContactUs/>
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </section>
    </>
</Layout>
</>
)
}
}





export default Help