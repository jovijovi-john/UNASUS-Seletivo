import { MdOutlineClose } from "react-icons/md";
import "./styles.scss"

export function CloseButton(props){
    return (
        <MdOutlineClose onClick={props.onClick} className="toggle icon-close " size={36} color={"#fff"}/>
    )
}