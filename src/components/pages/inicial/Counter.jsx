import { StyleDivBtn } from "../../../styles";
import { StyleBtn } from "../../../styles";
import { StyleNum } from "../../../styles";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addQtd } from "../../../store";


export default function Counter({ ...props }) {

    const distach = useDispatch()

    const [numero, setNumero] = useState(0)
    const [color, setColor] = useState(null)

    const refColor = useRef()
    const refNumber = useRef(0)


    const HandleSub = () => {
        if (numero <= 1) {
            setColor(refColor.current.style.color = 'red')
        } if (numero <= 0) {
            return
        }
        else {
            setNumero(numero - 1)
            refNumber.current = numero - 1

        }

    }

    const HandleSoma = () => {
        if (numero >= 0) {
            setNumero(numero + 1)
            refNumber.current = numero + 1

            setColor(refColor.current.style.color = 'black')
        } else {
            return
        }

    }

    const adicionaQtd = () => {
        distach(addQtd(refNumber))
 } 
    return (
        <StyleDivBtn  {...props}>
            <StyleBtn type="button" ref={refColor} onClick={HandleSub} value="-" />
            <StyleNum type="text" ref={refNumber} value={numero} onChange={adicionaQtd} />
            {/* {console.log(props)} */}
            <StyleBtn type="button" onClick={HandleSoma} value="+" />
        </StyleDivBtn>
    )

}
