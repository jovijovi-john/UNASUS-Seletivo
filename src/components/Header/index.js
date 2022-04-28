import Logo from "../../assets/logo.png"
import TextLogo from "../../assets/text-logo.png"

import "./styles.scss"
import "./styles_dropdown.css"
import { LinksUl } from "../LinksUl"

export function Header(){
    return(
        <header>
            <a href="#" className="logo-container">
                <img  className="logo" src={Logo} alt="" />
                <img className="text-logo" src={TextLogo} alt="" />
            </a>

            <nav className="navbar">
                <LinksUl type="header" el="Nossos Projetos"/>
            </nav>
        </header>
    )
}