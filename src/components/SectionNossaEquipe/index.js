import "./styles.scss";
import { TitleSection } from "../TitleSection";
import { CardIntegrante } from "../CardIntegrante";

export function SectionNossaEquipe(){
    return(
        <section className="nossa-equipe">
            <div className="blue-background">
                <TitleSection color="#fff">Nossa Equipe</TitleSection>
            </div>

            <div className="integrantes">
                <CardIntegrante />
                <CardIntegrante />
                <CardIntegrante />
            </div>
        </section>
    )
}