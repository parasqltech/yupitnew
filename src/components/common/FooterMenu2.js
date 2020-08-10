import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const FooterMenu2 = () => (
    <StaticQuery
      query={graphql`
        query {
            allWordpressWpApiMenusMenusItems(filter: {name: {eq: "Help"}}) {
              edges {
                node {
                  id
                  name
                  items {
                    title
                    url
                    object_slug
                  }
                }
              }
            }
          }
      `}
      render={data => (
          <ul className="footer-menu">
              <li><Link to={"/help"}  state={{ activeCLass: "CustomerSupport" }} >Customer support</Link></li>
              <li><Link to={"/help"}  state={{ activeCLass: "Faq" }} >FAQs</Link></li>
              <li><Link to={"/help"}  state={{ activeCLass: "ContactUs" }} >Contact US</Link></li>
              <li><Link to={"/terms-and-conditions"}  state={{ activeCLass: "Terms and Conditions" }} >Terms and Conditions</Link></li>
              <li><Link to={"/privacy-policy"}  state={{ activeCLass: "Privacy Policy" }} >Privacy Policy</Link></li>
        </ul>
      )}
      />
  )
  
export default FooterMenu2;
