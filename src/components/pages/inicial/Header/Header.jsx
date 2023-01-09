import React from "react";
import '../../../../styles/header.css'
import CartIcon from "../../cart/CartIcon";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CartNumberIcon } from "./CartNumberIcon";


export default function Header() {

    const cartQtd = useSelector((state) => state.frutas.cartTotal)


    return (
        <nav className="NavbarItems">

            <div className="redirect-links link">
                Claudio Nascimento
                <a href="https://github.com/claudionsc" rel="noreferrer" target="_blank" className="navbar-logo link">
                    <i className="fa-brands fa fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/claudionsc/" rel="noreferrer" target="_blank" className="navbar-logo link">
                    <i className="fa-brands fa fa-linkedin"></i>
                </a>
            </div>

            <Link to={"/"} className="hortifruti" >Hortifruti</Link>
            <Link to={"/cart"} ><CartIcon name="cartIcon" color="#ffffff" /></Link>
            <CartNumberIcon>
                {cartQtd}
            </CartNumberIcon>
            

        </ nav>

    )

}

