import "./styles.scss";
import placeholder from "../../assets/placeholder.png";

import { Text } from "../Text";

export function CardIntegrante(){
    return(
        <div className="container-integrante">
            <img src={placeholder} alt="" />
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        </div>
    )
}