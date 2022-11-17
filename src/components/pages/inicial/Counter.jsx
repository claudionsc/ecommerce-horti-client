import { useEffect, useState } from "react";
import { StyleDivBtn } from "../../../styles";
import { StyleBtn } from "../../../styles";
import { StyleNum } from "../../../styles";







export default function Counter() {

    const [ numero, setNumero ] = useState(0)


    const HandleSub = () => {
        useEffect(() => {
            setNumero(numero - 1)
        })
    }

    const HandleSoma= () => {
        useEffect(() => {
            setNumero(numero + 1)
        }, [])
    }    
        return (
            <StyleDivBtn>
                <StyleBtn onClick={HandleSub()}>-</StyleBtn>
                <StyleNum>{numero}</StyleNum>
                <StyleBtn onClick={HandleSoma()}>+</StyleBtn>
            </StyleDivBtn>
        )
    }
