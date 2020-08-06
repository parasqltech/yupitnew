import React, { Component } from 'react';

import OwlCarousel from 'react-owl-carousel';
import { Container, Col, Card ,  Row, FormControl, Form, Button } from  'react-bootstrap';

import slide1 from '../../img/login/slide1.png'
import slide2 from '../../img/login/slide2.png'
const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true,
    loop: true,
    dots:true,
    nav:false,
    
};
class mainSlider extends Component {
    render() {
        return (
            <>
                <OwlCarousel className="owl-theme"  {...options} > 

<div className="text-center">
<Row className="justify-content-center">
    <Col lg={9}>
    <div className="text-center mb-4"><img src={slide1} width="150px" className="img-fluid"/></div>
        <h3 className="section-heading-3 font-weight-semi-bold">Heya! I'm YUPIT</h3>
        <p className="label-text-2">I deliver great experience to foodies</p>
    </Col>
</Row>
</div>
<div className="text-center">
<Row className="justify-content-center">
    <Col lg={9}>
    <div className="text-center mb-4"><img src={slide2} width="150px" className="img-fluid"/></div>
        <h3 className="section-heading-3 font-weight-semi-bold">Dine-In or Order Ahead</h3>
        <p className="label-text-2">Order &amp; pay securely for your tucker</p>
    </Col>
</Row>
</div>
<div className="text-center">
<Row className="justify-content-center">
    <Col lg={9}>
    <div className="text-center mb-4"><img src={slide1} width="150px" className="img-fluid"/></div>
        <h3 className="section-heading-3 font-weight-semi-bold">Heya! I'm YUPIT</h3>
        <p className="label-text-2">I deliver great experience to foodies</p>
    </Col>
</Row>
</div>
<div className="text-center">
<Row className="justify-content-center">
    <Col lg={9}>
    <div className="text-center mb-4"><img src={slide2} width="150px" className="img-fluid"/></div>
        <h3 className="section-heading-3 font-weight-regular">Dine-In or Order Ahead</h3>
        <p className="label-text-2">Order &amp; pay securely for your tucker</p>
    </Col>
</Row>
</div>
</OwlCarousel>
            </>
        );
    }
}

export default mainSlider;