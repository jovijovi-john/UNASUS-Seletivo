import "./styles.scss";
import { CardProjeto } from "../CardProjeto";
import { TitleSection } from "../TitleSection";

export function SectionNossosProjetos(){
    return(
        <section className="nossos-projetos">
            <aside>
                <TitleSection color="#fff">Nossos Projetos</TitleSection>
            </aside>
            <div className="projetos">
                <CardProjeto />
                <CardProjeto />
                <CardProjeto />
                <CardProjeto />
            </div>
        </section>
    )
}