import React from 'react'
import { useEffect, useState, useRef } from "react";
import { useDispatch } from 'react-redux'
import { CounterCartS, FruitsStyleDiv } from '../../../styles/FruitsStyle'
import Counter from './Counter'
import { Img } from './Img'
import { Fruit } from '../../../styles/FruitsStyle'
import { CarrinhoBtn } from '../../../styles'
import { showFrutas } from '../../../store'
import axios from "axios"
import { StyleBtn } from "../../../styles";
import { StyleNum } from "../../../styles";

export const Contador = ({qtd}) => {

    const dispatch = useDispatch()

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


    const addQtd = () => {
        dispatch(addQtd(refNumber))

    }

    return (
        <div>
            <StyleBtn type="button" ref={refColor} onClick={HandleSub} value="-" />
            <StyleNum  ref={refNumber} value={numero} onChange={() => addQtd(refNumber)}/>
            {console.log(refNumber)}
            <StyleBtn type="button" onClick={HandleSoma} value="+" />
        </div>


    )
}


export default function Inicial() {

    const dispatch = useDispatch()


    const [frutas, setFrutas] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/frutas")

            .then(response => {
                setFrutas(response.data.frutas);
            });
    }, [])


    const handleAddCart = (fruta) => {
        dispatch(showFrutas(fruta))

    }



    return (
        <div>
            <FruitsStyleDiv>

                {frutas.map(fruta => {

                    return (
                        <Fruit key={fruta.id}>
                            <Img src={fruta.imagem} />
                            <h3><strong>{fruta.nome}</strong></h3>
                            <CounterCartS>
                                <Contador/>                            
                                <CarrinhoBtn type="button" value={'Adicionar ao carrinho'}
                                    onClick={() => handleAddCart({fruta})}
                                />
                            </CounterCartS>
                        </Fruit>
                    )
                })}

            </FruitsStyleDiv>

        </div>
    )
}