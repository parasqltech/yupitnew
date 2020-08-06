const axios = require('axios');
const _ = require('lodash')
const path = require('path')
const slash = require('slash')
const { createFilePath } = require('gatsby-source-filesystem')
const { paginate } = require('gatsby-awesome-pagination')
const webpack = require('webpack');
const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === 'publish')

const getRestaurantData = async () => {
  var config = {headers: {'Content-Type': 'application/json','Cache-Control' : 'no-cache'}};
  return axios.get('https://yupit.io/staging/api/restaurantList',config);
};  

const getOfferData = async () => {
  return axios.get('https://yupit.io/staging/api/offer/');
};  

exports.createPages = async ({ actions, graphql }) => {
  
	 const { createPage } = actions
	
	const allWordpressPost = await graphql(`
    {
		allWordpressPost{
			edges {
			  node {
				id
				title
				slug
				categories{
				  id
				  name
				  slug
				}
				
			  }
			}
		}
    }
	`)
	
	const blogTemplate = path.resolve(`./src/templates/single-blog.js`);
	  allWordpressPost.data.allWordpressPost.edges.forEach((edge,index) => {
		const previous = index === allWordpressPost.data.allWordpressPost.edges.length - 1 ? null : allWordpressPost.data.allWordpressPost.edges[index + 1]
		const next = index === 0 ? null : allWordpressPost.data.allWordpressPost.edges[index - 1]
		
		  createPage({
		  path: `/blog/${edge.node.slug}/`,
		  component: slash(blogTemplate),
		  context: {
			id: edge.node.id,
			previous : previous,
			next : next,
		  },
		})			  
	})
	
	const pagesdata = await graphql(`
     {
		allWordpressPage {
			edges {
			  node {
				id
				slug
				status
			  }
			}
		}
    }
	`)
  
	const pageTemplate = path.resolve(`./src/templates/page.js`)
    const allPages = pagesdata.data.allWordpressPage.edges
    const pages =
        process.env.NODE_ENV === 'production'
          ? getOnlyPublished(allPages)
          : allPages
	  _.each(pages, ({ node: page }) => {
		createPage({
		  path: `/${page.slug}/`,
		  component: pageTemplate,
		  context: {
			id: page.id,
		  },
		})
	  })
	  
	const allWordpressCategory = await graphql(`
     {
		allWordpressCategory{
            edges {
				node {
					id
					name
					slug
				}
            }
        }
    }
	`)
	
	const categoryTemplate = path.resolve(`./src/templates/single-category.js`);
	allWordpressCategory.data.allWordpressCategory.edges.forEach(edge => {
		createPage({
		  path: `/category/${edge.node.slug}/`,
		  component: slash(categoryTemplate),
		  context: {
			id: edge.node.id,
			cat_name: edge.node.name,
		  },
		})
	})  
	  
	const allWordpressPost2 = await graphql(`
     {
      allWordpressPost{
        edges {
          node {
            id
            slug
			title
			
          }
        }
      }
    }
	`)
	
	const  allWordpressCategory2  = allWordpressPost2.data.allWordpressPost.edges
	paginate({
		createPage,
		items: allWordpressCategory2,
		itemsPerPage: 10,
		pathPrefix: '/blog',
		component: path.resolve(`./src/templates/blogs.js`),
	});
	
		let Restaurants = await getRestaurantData();
	
		let Restaurants_data = Restaurants.data.ResponseData.RestaurantList;
		let Sidebar = Restaurants.data.ResponseData.SidebarSearch;
		let Offer_data = Restaurants.data.ResponseData.OfferList;
		//const RestComponent = require.resolve('./src/pages/restaurants.js');
		
		/*createPage({
			path: '/restaurant',
			component: RestComponent,
			context: {
				Restaurants: Restaurants_data,
				Sidebar: Sidebar
			}
		});*/
			
		const RestDetailComponent = require.resolve('./src/templates/single-restaurant.js');
		Restaurants_data.forEach(element => {
			var ID = element.RestaurantID;
			createPage({
				path:`/restaurant/${element.URL}`,
				component:RestDetailComponent,
				context:{
					RestaurantData:element
				}
			})
		});
		
		
		

		const OfferDetailComponent = require.resolve('./src/templates/single-offer.js');
		Offer_data.forEach(offerelement => {
			createPage({
				path:`/offer/${offerelement.URL}`,
				component:OfferDetailComponent,
				context:{
					OfferID:offerelement.ID,
					OfferName:offerelement.Name
				}
			})
		});
		
		
   
  
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}


exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
      
      ]
    },
    plugins: [
     
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    }),
    ],
  })
}



exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-owl-carousel/,
            use: loaders.null(),
          }
        ]
      },
    })
  }
}