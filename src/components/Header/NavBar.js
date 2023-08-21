import React, { useState, useEffect,Component } from "react"
import { Link, StaticQuery, navigate,useStaticQuery } from "gatsby"

import { Modal, Form, Button } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import { init, track } from 'analytics-library';
import { useHistory } from 'react-router-dom'; // Make sure to import the useHistory hook

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
			iscookie:0,
			isBoxVisible:"opa"
		};
		this.modalOpen = this.modalOpen.bind(this);
		this.modalClose = this.modalClose.bind(this);
		this.CheckModel = this.CheckModel.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		
		
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
				 cookies.set('Popup', "1", { domain: '.qltech.com.au' , path: '/' , maxAge: 1000000});
				this.setState({
					isOpen:false,
				})
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
		
		modalClose(){
			this.setState({
				isOpen:false,
			})
		}
		
		componentDidMount() {
				
			this.CheckModel();
		}
		
		
		    
	}
	
	
	
	render() {
		return (
			<>
			</>
		)
	}

}

export default NavBar		
