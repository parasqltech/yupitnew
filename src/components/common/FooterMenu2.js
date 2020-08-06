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
            {data &&
              data.allWordpressWpApiMenusMenusItems &&
              data.allWordpressWpApiMenusMenusItems.edges &&
              data.allWordpressWpApiMenusMenusItems.edges[0] &&
              data.allWordpressWpApiMenusMenusItems.edges[0].node &&
              data.allWordpressWpApiMenusMenusItems.edges[0].node.items &&
              data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
                prop => {
                  return (
                    <li><Link to={prop.url} dangerouslySetInnerHTML={{ __html: prop.title}}></Link></li>
                  )
                }
              )}
        </ul>
      )}
      />
  )
  
export default FooterMenu2;
