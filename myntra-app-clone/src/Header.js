import React from "react";
import './styles/Header.css';
import logo from './icon.jpeg';
import Searchbar from "./Components/Searchbar.jsx";
import CartLogo from './Components/CartLogo.jsx';

function Header(){
    return (
        <header>
            <nav>
                <div className="nav-left">
                    <div className="logo">
                        <a href="/"><img src={logo} alt="logo"></img></a>
                    </div>
                    <div className="nav-menu">
                        <ul>
                            <li><a href="/">MEN</a></li>
                            <li><a href="/">WOMEN</a></li>
                            <li><a href="/">KID</a></li>
                        </ul>
                    </div>
                </div>
                
                <Searchbar/>
                <CartLogo/>
            </nav>
        </header>
    )
}

export default Header;