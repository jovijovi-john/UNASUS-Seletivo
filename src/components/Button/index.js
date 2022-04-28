import "./styles.scss"

export function Button(props){
    return (
        <a className={`button ${props.className}`} href="">{props.children}</a>
    )
}