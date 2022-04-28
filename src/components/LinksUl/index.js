export function LinksUl(props){
 
    const texts = [
        "Quem Somos",
        "Nossas Soluções",
        "Nossos Projetos",
        "Nossa Equipe",
        "Notícias",
        "Contato"
    ]

    return(
            <ul>
                {texts.map((item) => {
                    
                    // esse if verifica e marca apenas a li que está selecionada
                    if (item === props.el) {
                        return(
                            <li key={item} className="li-selected"><a href="">{item}</a></li>
                        )
                    } else {
                        return(
                            <li key={item}><a href="">{item}</a></li>
                        )
                    }
                })}
            </ul>
    )

}