import { SectionSaite } from "../SectionSaite";
import { Trabalhos } from "../Trabalhos";
import { SectionNossosProjetos} from "../SectionNossosProjetos";
import { SectionNossosNumeros } from "../SectionNossosNumeros";
import { SectionNossaEquipe } from "../SectionNossaEquipe";
import { SectionFaleConosco } from "../SectionFaleConosco";
import { SectionNossosParceiros } from "../SectionParceiros";

export function Main(){
    return(
        <main>
            <SectionSaite />
            <Trabalhos /> 
            <SectionNossosProjetos /> 
            <SectionNossosNumeros />
            <SectionNossaEquipe /> 
            <SectionFaleConosco />
            <SectionNossosParceiros />
        </main>
    )
}