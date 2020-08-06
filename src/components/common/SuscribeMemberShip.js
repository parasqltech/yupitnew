import React, { Component } from "react"
import ReactDOM from "react-dom";
import { Link, StaticQuery, graphql } from 'gatsby'
import suscribeMemberShipImg from '../../img/suscribeMemberShip.png';

class SuscribeMemberShip extends React.Component {
render() {
  return(
    <>
      <section className="home-section-3 mb-4 p-0">
        <Link to="/suscribtion">
          <img src={suscribeMemberShipImg} className="img-fluid" alt={suscribeMemberShipImg}/>
        </Link>
      </section>
      

         
      </>     
)
}
}




export default SuscribeMemberShip