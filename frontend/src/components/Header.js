import React from "react";
import "./styles/header.css"
import logo from "./images/icon.jpg"
import profile from "./images/profile-icon-png-8.jpg"

function Header() {
    return(
        <div className="container01">
        <div className="box1"></div>
        <div className="box">
            <img src={logo} alt=""></img>
            <h1 className="mainTopic">Paradise of Natural Life</h1>
            <a href="/add" className="profile1">
            <img className="profile11" src={profile} ></img></a>
        </div>
        <nav className="navbar navbar-expand-lg nav-dark" >
            <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="headButton">
                <ul className="navbar-nav me-auto-mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link"  href="/home">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/allOwenerProject">PROJECT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/getAll">DONATION</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/add">BLOG</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/add">GALARY</a>
                    </li>
                </ul>
            </div>
            </div>
            </div>
        </nav>
        </div>
    )
    
}

export default Header;