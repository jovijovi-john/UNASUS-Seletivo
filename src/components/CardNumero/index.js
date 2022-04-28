import "./styles.scss"

export function CardNumero(props){
    return (
        <a href="" className="card-numero">
            {props.children}
            <p className="title">{props.title}</p>
            <p className="value">{props.value}</p>
        </a>
    )
}
