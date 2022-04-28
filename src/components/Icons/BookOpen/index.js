import { FaBookOpen } from "react-icons/fa";
import { BoxIcon } from "../styles";

export function BookOpen(){
    return (
        <BoxIcon circle={true} color={"--primary_pink"}>
            <FaBookOpen size={36} color="#fff"/>
        </BoxIcon>
    )
}   