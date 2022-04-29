import "./styles.scss"

export function SaiteBoxTrabalho(props){
    return(
        <div className={`container ${props.className ? props.className : ''}`}>
            <a className="content" href="">
                {props.children}
                <p>
                    {props.title}
                </p>
            </a>
        </div>
    )
}