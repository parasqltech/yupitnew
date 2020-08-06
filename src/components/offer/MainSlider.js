

import React, { Component } from 'react';
import OfferDetailSlider from '../../img/offer/OfferDetailSlider.png'

import OwlCarousel from 'react-owl-carousel';

const options = {
    nav: true,
    autoplay: true,
    loop: true,
    dots:false,
    nav:false,
    margin:0,
    items:1
};
class MainSlider extends Component {
    render() {
        return (
            <>
                 <section className="offer-detail-section-1">
                    <OwlCarousel className="owl-theme"  {...options} > 
                        <img src={OfferDetailSlider} className="img-fluid w-100" alt=""/>
                    </OwlCarousel>
                </section>
            </>
        );
    }
}

export default MainSlider;

 