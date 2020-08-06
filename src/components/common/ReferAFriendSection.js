import React, { Component } from "react"
import { Link, StaticQuery, graphql } from 'gatsby'
import ReferAFriendSectionImg from '../../img/ReferAFriendSectionImg.png';

class ReferAFriendSection extends React.Component {
render() {
  return(
      <>
        <section className="home-section-6  mb-4 ">
          <Link to="/refer-a-friend">
            <img src={ReferAFriendSectionImg} className="img-fluid" alt={ReferAFriendSectionImg}/>
          </Link>
        </section>
      </>     
    )
  }
}




export default ReferAFriendSection