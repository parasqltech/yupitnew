import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const FooterMenu1 = () => (
    <StaticQuery
      query={graphql`
        query {
            allWordpressWpApiMenusMenusItems(filter: {name: {eq: "Discover YupiT"}}) {
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
                (prop,i) => {
                  return (
                    <>
                    {(i < 1)?(<><li><Link to={'/'+prop.object_slug} dangerouslySetInnerHTML={{ __html: prop.title}}></Link></li></>):(<></>)}
                   
                  
                    </>
                  )
                }
              )}
              <li><Link to="/offer" >Rewards</Link></li>
              {data &&
              data.allWordpressWpApiMenusMenusItems &&
              data.allWordpressWpApiMenusMenusItems.edges &&
              data.allWordpressWpApiMenusMenusItems.edges[0] &&
              data.allWordpressWpApiMenusMenusItems.edges[0].node &&
              data.allWordpressWpApiMenusMenusItems.edges[0].node.items &&
              data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
                (prop,i) => {
                  return (
                    <>
                    {(i >= 1)?(<><li><Link to={'/'+prop.object_slug} dangerouslySetInnerHTML={{ __html: prop.title}}></Link></li></>):(<></>)}
                   
                  
                    </>
                  )
                }
              )}
               
        </ul>
      )}
      />
  )
  
export default FooterMenu1;
