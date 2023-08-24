import React, { useState, useEffect,Component } from "react"
import { Link, StaticQuery, navigate, useStaticQuery, graphql } from "gatsby"
import ReactFullpage, { FullpageApi } from "@fullpage/react-fullpage";
import { Modal, Form, Button } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import "../../stylee.css"
import logo from '../../image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import ScrollToTopButton from "../scroll_top/scroll_top";


class NavBar extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			isTop: true,
			cart: '',
			show:false,
			query_code:"",
			code:"",
			shown: "d-none",
			isOpen:false,
			isOpene:false,
			iscookie:0,
			isBoxVisible:"opa",
			activeMenuItem: 0
		};
		this.modalOpen = this.modalOpen.bind(this);
		this.modalOpene = this.modalOpene.bind(this);
		this.modalClose = this.modalClose.bind(this);
		this.modalClosee = this.modalClosee.bind(this);
		this.CheckModel = this.CheckModel.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleMenu = this.handleMenu.bind(this);
		
	}
	
	CheckModel(){
		const cookies = new Cookies();
		if(cookies.get("Popup") == undefined){
			this.setState({
				isOpen:true,
			})
		}
		else{
			if(cookies.get("Popup") == 0){
				this.setState({
					isOpen:true,
				})
			}
			
		}
	}
	
	handleChange() {
		 var checkBox = document.getElementById("disabledSelect");
		if (checkBox.checked == true){
			 this.setState({
				isBoxVisible:"",
			})
		}
		else{
			this.setState({
				isBoxVisible:"opa",
			}) 
		}
		
	}
	
	handleClick() {    
		 var checkBox = document.getElementById("disabledSelect");
		 var btnn = document.getElementById("btnn");
		 const cookies = new Cookies();
		 if (checkBox.checked == true){
			 console.log("here");	
			 //cookies.set('Popup', "1", { domain: '.qltech.com.au' , path: '/' , maxAge: 1000000});
			 cookies.set('Popup', "1", {  path: '/' , maxAge: 1000000});
			this.setState({
				isOpen:false,
			})
			 location.reload(); 
		  }
		else{
			console.log("there");	
		}
		
	}
	
	modalOpen(){
		this.setState({
			isOpen:true,
		})
	}
	
	modalOpene(){
		this.setState({
			isOpene:true,
		})
	}
	
	modalClose(){
		
		this.setState({
			isOpen:false,
		})
	}
	
	modalClosee(){
		
		this.setState({
			isOpene:false,
		})
	}
	
	componentDidMount() {
			
		this.CheckModel();
	}
	handleMenu(i){
		this.setState({ activeMenuItem: i });
		var element = document.getElementById("navbarSupportedContent");
  		element.classList.remove("show");
	}
	
	render() {
		return (
			<>
			<Modal animation={false} fullscreen={true} keyboard={false} backdrop="static"  show={this.state.isOpen} onHide={this.modalClose} size="lg" className="video-modal model-custom"
            aria-labelledby="contained-modal-title-vcenter"
            centered >
                <Modal.Body className="p-0">
                    <div class="popup-inner">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="thfd">
            <div class="thfgr">
              <div class="right3">
					
					
					<p className="sub_sub_title" >QL Tech is headquartered on Whadjuk Nyoongar Boodjar. We acknowledge the Whadjuk people as the traditional owners and custodians of these lands, waterways and skies and pay our respects to their Elders, past and present.</p>
					
			<p className="sub_sub_title" >We also offer our heartfelt gratitude to Aboriginal and Torres Strait Islander people and communities across all lands in which QL Tech operates. QL Tech recognizes their generosity and wisdom in how they continue to care for Country and share their knowledge, which in turn helps us to understand and navigate Country safely and respectfully.</p>
			
			<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check onChange={this.handleChange} id="disabledSelect" type="checkbox" label="I acknowledge" />
				  </Form.Group>
				  <Button  id="btnn" className={this.state.isBoxVisible} onClick={this.handleClick} variant="primary">Continue</Button>
			
			</div></div></div></div></div></div></div>
				
                </Modal.Body>
				
            </Modal>
		    <StaticQuery
      query={graphql`
            query {
              wpMenu(id: {eq: "dGVybToy"}) {
                id
                menuItems {
                  nodes {
                    id
                    label
                    url
                  }
                }
              }
              }
            `}
      render={data => (

        <div>
          <div /*classNameName={props.headervisiblity}*/>
            <header id="header">
              <nav className="navbar navbar-expand-lg header_innerd">
                <div className="container">
                  <div className="logo_image">
                    <Link to="/" className="navbar-brand">
                      <img src={logo} alt="" />
                    </Link>
                  </div>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><FontAwesomeIcon icon={faBars} /></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                      {data &&
                        data.wpMenu &&
                        data.wpMenu.menuItems &&
                        data.wpMenu.menuItems.nodes.map((prop, i) => {
                          
                          const itemToRender = prop.label === "Home" ?
                            (
                              <li className={`nav-item ${i === this.state.activeMenuItem ? "active" : ""}`}
                                onClick={() => this.setState({ activeMenuItem: i })}>
                                <Link
                                  to={"/"}
                                  className="nav-link"
                                  activeClassName="active"
                                >
                                  {prop.label}
                                </Link>
                              </li>
                            ) : prop.label === "What's New" ? (
                              <li className={`nav-item ${i === this.state.activeMenuItem ? "active" : ""}`}
                                onClick={() => this.handleMenu(i)}>
                                <Link
                                  to={"/news"}
                                  className="nav-link"
                                  activeClassName="active"
                                >
                                  {prop.label}
                                </Link>
                              </li>
                            ) : (
                              <li className={`nav-item ${i === this.state.activeMenuItem ? "active" : ""}`}
                                onClick={() => this.handleMenu(i)}>
                                <Link
                                  to={
                                    "/" +
                                    prop.label
                                      .replace(/\s+/g, "_")
                                      .replace("'", "")
                                      .toLowerCase()
                                  }
                                  className="nav-link"
                                  activeClassName="active"
                                >
                                  {prop.label}
                                </Link>
                              </li>
                            )

                          return itemToRender;
                        })
                      }
                      <div /*style={navev}*/></div>
                    </ul>
                    <div className="our_cong d-flex">
                      <div className="list_ys">
                        <button onClick={this.modalOpene}>Contact Us</button>
                      </div>
                    </div>

                  </div>

                </div>
              </nav>

            </header>
          </div>
                       
         
          <div className="scrollbtn">
            <ScrollToTopButton />
          </div>
		  
		  <div  className={"modal fade model_wrt " + (this.state.modalOpene ? 'show' : '')} id="contact_us" tabindex="-1" aria-labelledby="contact_usLabel" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered model_inner">
		<div class="modal-content model_inncnr">
			<div class="modal-header model_inncheadr">
				<h5 class="modal-title title_wrap" id="contact_usLabel">Get in touch</h5>
				<div class="our_span"><p>Fill up the form our team will get back to you within 24 Hours</p></div>
				<button type="button" onClick={this.modalClosee}  class="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
			</div>
			<div class="modal-body bodtr">
				<div class="fomr_raog">
					<iframe
                        id="myIframe"
                        src="https://development.qlspace.com.au/contact-us/"
                        scrolling="no"
						width="100%" height="500px"
                      ></iframe>
				</div>
			</div>
		</div>
	</div>
</div>
		  
		  
		  
		  
		  
          

            
        </div>
      )}

    />
			</>
		)
	}

}

export default NavBar
