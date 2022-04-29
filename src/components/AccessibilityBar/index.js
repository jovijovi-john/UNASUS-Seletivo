import "./styles.scss";

import { Wheelchair } from "../Icons/Wheelchair";
import { Contrast } from "../Icons/Contrast";
import { Diagram } from "../Icons/Diagram";
import { Facebook } from "../Icons/Facebook";
import { Instagram } from "../Icons/Instagram";


export function AccessibilityBar(){
    return (
        <div className="container-accessibility">
            
            <div className="options-acessibility">
                <a href="#">
                    <Wheelchair />
                    <span>Acessibilidade</span>
                </a>
                <a href="#" className="contrast">
                    <Contrast />
                    <span>Alto Contraste</span>
                </a>
                <a href="#">
                    <Diagram />
                    <span>Mapa do site</span>
                </a>
            </div>

            <div className="social-icons">
                <Facebook />
                <Instagram />
            </div>
        </div>
    )
}