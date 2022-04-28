import "./styles.scss";
import { TitleSection } from "../TitleSection";
import { CardNumero } from "../CardNumero";

import { Atom } from "../Icons/Atom";
import { BookOpen } from "../Icons/BookOpen";
import { Graduate } from "../Icons/Graduate";
import { LaptopCode } from "../Icons/LaptopCode";

export function SectionNossosNumeros(){

    const content = [
        {
            id: '0',
            icon: <Graduate />,
            title: "Matrículas Efetuadas",
            value: 231119
        },
        {
            id: '1',
            icon: <Atom />,
            title: "Produções científicas",
            value: 149
        },
        {
            id: '2',
            icon: <BookOpen />,
            title: "Livros Publicados",
            value: 27
        },
        {
            id: '3',
            icon: <LaptopCode />,
            title: "Sistemas Registrados",
            value: 21
        },
    ]

    return(
        <section className="nossos-numeros">
            <TitleSection color="#000">Nossos Números</TitleSection>

            <div className="numeros">

                {content.map((item) => {
                    return (
                        <CardNumero key={item.id} title={item.title} value={item.value}>
                            {item.icon}
                        </CardNumero>
                    )
                })}
            </div>
        </section>
    )
}