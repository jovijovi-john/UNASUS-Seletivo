import "./styles.scss"
import { Button } from "../Button"

export function SectionSaite(){
    return (
        <section className="saite">
            <div className="saite-title-box">
                <span>Saite</span>
            </div>
            <div className="content-saite">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quo beatae odio sit vero repudiandae qui ut modi cumque, repellendus vel accusamus maxime, nihil laborum delectus, suscipit incidunt deserunt debitis.</p>
                <Button className={"m-button pink-btn"}>
                    Saiba mais
                </Button>
            </div>
            
        </section>
    )
}