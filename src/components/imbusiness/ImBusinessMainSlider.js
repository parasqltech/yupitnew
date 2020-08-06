import React , {useState } from 'react'
import ReactDOM from "react-dom";
import { Link, StaticQuery, graphql } from 'gatsby'
import ReactModal from 'react-modal'

class ImBusinessMainSliderSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      testimonial_img: "",
      testimonial_name: "",
      testimonial_designation: "",
      testimonial_text: "",
    }
  }
	handleModalOpen = () => {
		this.setState({ isModalOpen: true})
	
	}
  
	handleModalClose = event => {
	this.setState({ isModalOpen: false })
	}

render() {

  
 


  const ImBusinessMainSliderText = this.props.data.allWordpressWpImbusinessmain;
  return(
      <>
      {ImBusinessMainSliderText && ImBusinessMainSliderText && ImBusinessMainSliderText.edges.map(
                                    prop => {
                                      return (
                                        <>
      <section className="imbusiness-section-1 mb-4" >
            <div className="container">
                <div className="row">
                  <div className="col-xl-8 col-lg-10 col-md-12   text-left">
                      <div className="slick-slider">
                        <div className="slider-content">
                            
                                     
                              
                              {prop.node.acf.sub_heading.map(
                                (prop1,i) =>{
                                  return (
                                  <>
                                    {(i <= 0)?( <h1 className="section-heading mb-3" dangerouslySetInnerHTML={{ __html: prop1.sub_heading_title}}></h1>):(<></>)}
                                  </>
                                  )  
                              }
                              )}
                               
                         </div>
                      </div>
                      <div className="label-text mb-4" dangerouslySetInnerHTML={{ __html: prop.node.acf.short_description}}></div>
                      <div className="text-left">
                        <div onClick={() => this.handleModalOpen()} className="play-button-group w-auto d-none  d-md-flex align-items-center"><span className="btn btn-success"><i className="fa fa-play"></i></span> <span className="btn-text">Check out our quick introduction</span></div>
                        <div onClick={() => this.handleModalOpen()} className="btn btn-success  d-inline d-sm-inline  d-md-none mb-4"><i className="fa fa-play"></i> Play Video</div>
                      </div>
                    </div>
                   
                </div>
            </div>

          </section>
          </>
                                      )
                                    }
                                  )}
      

          <ReactModal  
        isOpen={this.state.isModalOpen}
        onRequestClose={this.handleModalClose}
          className="modal d-block fade testimonial-view show"
      >
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content ">
            <button type="button" className="close btn-default" onClick={this.handleModalClose} data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          <div className="modal-body p-0">
          <div className="embed-responsive embed-responsive-16by9">
          {ImBusinessMainSliderText && ImBusinessMainSliderText && ImBusinessMainSliderText.edges.map(
                                    prop2 => {
                                      return (
                                        <>
                <iframe className="embed-responsive-item" src={prop2.node.acf.youtube_video_link+"?rel=0"} allowfullscreen></iframe>
                </>
                )
                                    }
                                  )}
            </div>
          </div>
        </div>
      </div>
      </ReactModal>
      
      </>
      
)

}
}




const ImBusinessMainSlider = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpImbusinessmain {
          edges {
            node {
              acf {
                youtube_video_link
                short_description
                
                sub_heading {
                  sub_heading_title
                }
              }
            }
          }
        }
            
        }
    `}
    render={(data) => <ImBusinessMainSliderSection data={data} />}
  
    />
)

export default ImBusinessMainSlider