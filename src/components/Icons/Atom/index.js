import { FaAtom } from "react-icons/fa";
import { BoxIcon } from "../styles";

export function Atom(){
    return (
        <BoxIcon circle={true} color={"--primary_blue"}>
            <FaAtom size={36} color="#fff"/>
        </BoxIcon>
    )
}   