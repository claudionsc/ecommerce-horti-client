import { useEffect, useState, useRef } from "react";
import { StyleDivBtn } from "../../../styles";
import { StyleBtn } from "../../../styles";
import { StyleNum } from "../../../styles";







export default function Counter() {
    const [numero, setNumero] = useState(0)
    const [color, setColor] = useState(null)
    
    const refColor = useRef()
    const refNumber = useRef()


    const HandleSub = () => {
        if (numero <= 1) {
            setColor(refColor.current.style.color = 'red')
        } if (numero <= 0) {
            return
        }
        else {
            setNumero(numero - 1)
        }
    }

    const HandleSoma = () => {
        if (numero >= 0) {
            setNumero(numero + 1)
            setColor(refColor.current.style.color = 'black')
        } else {
            return
        }
    }

    return (
        <StyleDivBtn>
            <StyleBtn ref={refColor} onClick={HandleSub}>-</StyleBtn>
            <StyleNum ref={refNumber}>{numero}</StyleNum>
            <StyleBtn onClick={HandleSoma}>+</StyleBtn>
        </StyleDivBtn>
    )
}
