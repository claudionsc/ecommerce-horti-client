// import { IconCart } from './icon'
import React, { Component } from "react";
import '../../../../styles/header.css'
import CartIcon from "../../cart/CartIcon";
import { Link } from "react-router-dom";



export default function Header () {
    
   

        return (            
                <nav className="NavbarItems"> 
                
                    <div className="redirect-links link">
                        Claudio Nascimento
                            <a href="https://github.com/claudionsc" rel="noopener" target="_blank" className="navbar-logo link">
                                <i className="fa-brands fa fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/claudionsc/" rel="noopener" target="_blank" className="navbar-logo link">
                                <i class="fa-brands fa fa-linkedin"></i>
                            </a>                        
                    </div>
                    
                    <Link to={"/"} className="hortifruti" >Hortifruti</Link>             
                    <Link to={"/cart"} ><CartIcon name="cartIcon" color="#ffffff" /></Link> 

                </ nav>
           
        )
    
}

