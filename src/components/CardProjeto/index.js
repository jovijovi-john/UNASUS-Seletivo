import { Button } from "../Button";
import "./styles.scss";

export function CardProjeto(){
    return(
        <div className="container-card">
            <div className="container-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <Button className="s-btn pink-btn up">Saiba mais</Button>
        </div>
    )
}