import React from 'react'
import { useEffect, useState, useRef } from "react";
import { useDispatch } from 'react-redux'
import { CounterCartS, FruitsStyleDiv } from '../../../styles/FruitsStyle'
import Counter from './Counter'
import { Img } from './Img'
import { Fruit } from '../../../styles/FruitsStyle'
import { CarrinhoBtn } from '../../../styles'
import { showFrutas } from '../../../store'
import { addQtd } from '../../../store';
import axios from "axios"
import { StyleBtn } from "../../../styles";
import { StyleNum } from "../../../styles";

export const Contador = ({ childToParent, ...props }) => {

    const [numero, setNumero] = useState(0)
    const [color, setColor] = useState(null)

    const refColor = useRef()
    const refNumber = useRef(1)


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

    const dataN = refNumber.current.value
    const data = parseInt(dataN, 10) + 1



    return (
        <Counter {...props}>
            {console.log(data)}
            <StyleBtn type="button" ref={refColor} onClick={HandleSub} value="-" />
            <StyleNum ref={refNumber} value={numero} primary onChange={() => childToParent(data)} />
            <StyleBtn type="button" onClick={HandleSoma} value="+" />
        </Counter>

    )
}


export default function Inicial({ qtd }) {

    const dispatch = useDispatch()


    const [frutas, setFrutas] = useState([])
    const [data, setData] = useState('')


    const childToParent = (childdata) => {
        setData(childdata)
    }


    useEffect(() => {
        axios.get("http://localhost:5000/frutas")

            .then(response => {
                setFrutas(response.data.frutas);
            });
    }, [])


    const handleAddCart = (fruta) => {
        dispatch(showFrutas(fruta))

    }

    console.log(data)



    return (
        <div>
            <FruitsStyleDiv>

                {frutas.map(fruta => {

                    return (
                        <Fruit key={fruta.id}>
                            <Img src={fruta.imagem} />
                            <h3><strong>{fruta.nome}</strong></h3>
                            <CounterCartS>
                                <Contador childToParent={childToParent} qtd={childToParent} />
                                {console.log(qtd)}
                                <CarrinhoBtn type="button" value={'Adicionar ao carrinho'}
                                    onClick={() => handleAddCart(fruta)}
                                />
                            </CounterCartS>
                        </Fruit>
                    )
                })}

            </FruitsStyleDiv>

        </div>
    )
}