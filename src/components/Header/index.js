import { useState, useEffect } from "react";

import Logo from "../../assets/logo.png";
import TextLogo from "../../assets/text-logo.png";

import "./styles.scss";
import "./styles_dropdown.css";

import { HamburgerButton } from "../Icons/HamburgerButton";
import { CloseButton } from "../Icons/CloseButton";
import { LinksUlHeader } from "../LinksUlHeader";



export function Header(){
    const [dropdown, setDropdown] = useState(false);

    function HandleDropdown(){
        setDropdown(!dropdown);
    }
    return(
        <header className={`header-menu ${dropdown ? 'fixed' : ''}`}>
            <nav className={`navbar container-menu ${dropdown ? 'show-menu' : ''}`}>
                <a href="#" className="logo-container">
                    <img  className="logo" src={Logo} alt="logo SAITE" />
                    <img className="text-logo" src={TextLogo} alt="Saúde, Inovação, Tecnologia, Educação" />
                </a>

                <div className="menu">
                    <LinksUlHeader closeDropdown={HandleDropdown} type="header" el="Nossos Projetos"/>
                </div>
                <HamburgerButton onClick={HandleDropdown}/>
                <CloseButton onClick={HandleDropdown}/>
            </nav>
        </header>
    )
}