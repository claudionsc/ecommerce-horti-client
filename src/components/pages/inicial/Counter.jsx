import { useEffect, useState, useRef } from "react";
import { StyleDivBtn } from "../../../styles";
import { StyleBtn } from "../../../styles";
import { StyleNum } from "../../../styles";







export default function Counter() {

    const CounterRef = useRef(0)
    const [numero, setNumero] = useState(0)




    const HandleSub = () => {
        useEffect(() => {
            setNumero(CounterRef.current--)
        }, [])
    }

    const HandleSoma = useEffect(() => {
        setNumero(CounterRef.current++)
        console.log(numero)
    }, [CounterRef])

    return (
        <StyleDivBtn>
            <StyleBtn onClick={HandleSub}>-</StyleBtn>
            <StyleNum>{numero}</StyleNum>
            <StyleBtn onClick={HandleSoma}>+</StyleBtn>
        </StyleDivBtn>
    )
}
