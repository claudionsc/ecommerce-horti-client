import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { FruitsStyleDiv } from '../../../styles/FruitsStyle'
import Counter from './Counter'
import { Img } from './Img'
import { Fruit } from '../../../styles/FruitsStyle'
import { CarrinhoBtn } from '../../../styles'
import { CounterCart } from '../../../styles/FruitsStyle'
import { showFrutas } from '../../../store'
import axios from "axios"


const Contador = ({onSubmit, qtd, children, ...props }) => {

    return (
        <CounterCart onSubmit={onSubmit} qtd={qtd} {...props}>{children} {console.log(`CounterCart ${props}`)}</CounterCart>
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
                            <Contador onSubmit={() => console.log('teste')}>
                                <Counter text={text} />
                               
                                <CarrinhoBtn type="button" value={'Adicionar ao carrinho'}
                                    text={'text'} onClick={() => handleAddCart(fruta)}
                                />
                            </Contador>
                        </Fruit>
                    )
                })}

            </FruitsStyleDiv>

        </div>
    )
}