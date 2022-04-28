import { Header } from "../components/Header";
import { LinksUl } from "../components/LinksUl/";
import { Trabalhos } from "../components/Trabalhos";

import { SectionSaite } from "../components/SectionSaite";
import { SectionNossosProjetos} from "../components/SectionNossosProjetos";
import { SectionNossosNumeros } from "../components/SectionNossosNumeros";
import { SectionNossaEquipe } from "../components/SectionNossaEquipe";
import { SectionFaleConosco } from "../components/SectionFaleConosco";
import { SectionNossosParceiros } from "../components/SectionParceiros";

export default function NossosProjetos() {
    return (
        <div>
            <Header />
            <main>
                <SectionSaite />
                <Trabalhos />
                <SectionNossosProjetos />
                <SectionNossosNumeros />
                <SectionNossaEquipe />
                <SectionFaleConosco />
                <SectionNossosParceiros />
            </main>

            <footer>
                <LinksUl/>
            </footer>
        </div>
    )
}