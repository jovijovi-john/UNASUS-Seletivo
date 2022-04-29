import { GiHamburgerMenu } from "react-icons/gi";
import "./styles.scss"

export function HamburgerButton(props){
    return (
        <GiHamburgerMenu onClick={props.onClick} className="toggle icon-menu" size={36} color={"#F51051"}/>
    )
}