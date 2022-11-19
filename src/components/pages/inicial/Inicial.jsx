import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { FruitsStyleDiv } from '../../../styles/FruitsStyle'
import Counter from './Counter'
import { Img } from './Img'
import { Fruit } from '../../../styles/FruitsStyle'
import { CarrinhoBtn } from '../../../styles'
import { CounterCart } from '../../../styles/FruitsStyle'
import { showFrutas } from '../../../store'
import axios from "axios"





export default function Inicial() {

    const dispatch = useDispatch()
    const qtdRef = useRef()


    const [frutas, setFrutas] = useState([])
    // const [ frutasCart, setFrutasCart ] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/frutas")

            .then(response => {
                setFrutas(response.data.frutas);
            });
    }, [])

    const FrutasCart = []
    console.log(qtdRef.current)

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
                            <CounterCart>
                                <Counter/>
                                <CarrinhoBtn
                                    onClick={() => handleAddCart(fruta)}
                                >Adicionar ao carrinho</CarrinhoBtn>
                            </CounterCart>
                        </Fruit>
                    )
                })}

            </FruitsStyleDiv>

        </div>
    )
}



//www.youtube.com/watch?v=DsN83XP9JEY






