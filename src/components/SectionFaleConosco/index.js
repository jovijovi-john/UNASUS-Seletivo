import "./styles.scss";
import { TitleSection } from "../TitleSection";
import { Button } from "../Button";
import mapa from "../../assets/mapa.jpg"

export function SectionFaleConosco(){
    return(
        <section className="fale-conosco">
            <TitleSection>Fale Conosco</TitleSection>
            <div className="container-contatos">
                <div className="contatos">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <div className="buttons">
                        <Button className="sm-button pink-btn">Liga pra gente</Button>
                        <Button className="sm-button blue-btn">Enviar mensagem</Button>    
                    </div>
                </div>
                <div className="mapa">
                    <img src={mapa} alt="Imagem de um mapa fictício" />
                </div>
            </div>
        </section>
    )
}