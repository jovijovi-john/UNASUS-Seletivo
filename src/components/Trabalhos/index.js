import { SaiteBoxTrabalho } from "../SaiteBoxTrabalho";

import { USB } from "../Icons/USB";
import { Notebook } from "../Icons/Notebook";
import { LightBulb } from "../Icons/LightBulb";

import "./styles.scss";

export function Trabalhos(){
    const titles = [
    {   
        id: '0',
        title: "Educação a Distância",
        icon: <Notebook />
    }, 
    {
        id: '1',
        title: "Pesquisa e Inovação", 
        icon: <LightBulb />
    },
    {
        id: '2',
        title: "Tecnologia",
        icon: <USB />
    }]
    return(                
        <div className="trabalhos">
            {titles.map((item, index) => {
                    
                if (index === 1) {
                    return(        
                        <SaiteBoxTrabalho className="middle-box" key={item.id} title={item.title}>
                            {item.icon}
                        </SaiteBoxTrabalho>
                    )
                } 
                    

                return(
                    <SaiteBoxTrabalho key={item.id} title={item.title}>
                        {item.icon}
                    </SaiteBoxTrabalho>
                )
            })}
        </div>
    )
}