import { StyleDivBtn } from "../../../styles";




export default function Counter({children, qtd}) {
    
    return (
        <StyleDivBtn qtd={qtd}>
            {children}  
        </StyleDivBtn>
    )

}
