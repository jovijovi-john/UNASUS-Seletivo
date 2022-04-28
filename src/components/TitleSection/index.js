import { Title } from "./styles.js"

export function TitleSection(props){
    return (
        <Title color={props.color}>{props.children}</Title>
    )
}