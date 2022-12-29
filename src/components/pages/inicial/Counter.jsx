import { useEffect, useState, useRef } from "react";
import { StyleDivBtn } from "../../../styles";
import { StyleBtn } from "../../../styles";
import { StyleNum } from "../../../styles";
import { CounterCart } from "../../../styles/FruitsStyle";

function NumberContainer({ value, qtd, ...props }) {
    return (
        <StyleNum {...props} type="text" value={value} qtd={qtd} onChange={console.log(qtd)} />
    )
}

export default function Counter({ qtd, ...props }) {

    const [numero, setNumero] = useState(0)
    // const [number, setNumber] = useState(0)
    const [color, setColor] = useState(null)

    const refColor = useRef()
    const refNumber = useRef(null)


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
        <StyleDivBtn qtd={numero}>
            <StyleBtn type="button" ref={refColor} onClick={HandleSub} value="-" />
            <NumberContainer value={numero} />
            <StyleBtn type="button" onClick={HandleSoma} value="+" />

        </StyleDivBtn>
    )

}
