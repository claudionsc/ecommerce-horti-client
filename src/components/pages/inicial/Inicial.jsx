import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { CounterCartS, FruitsStyleDiv } from '../../../styles/FruitsStyle'
import { useNavigate } from 'react-router-dom';
import { Img } from './Img'
import { Fruit } from '../../../styles/FruitsStyle'
import Header from './Header/Header';
import { CarrinhoBtn } from '../../../styles'
import { showFrutas } from '../../../store'
import axios from "axios"



export default function Inicial(){

    

    const dispatch = useDispatch()
    const navigate = useNavigate()
    

    const [frutas, setFrutas] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/frutas")

            .then(response => {
                setFrutas(response.data.frutas);
            });
    }, [])


    const handleAddCart = (fruta) => {
        dispatch(showFrutas(fruta))
        // navigate("/cart")

    }



    return (
        <div>
            <FruitsStyleDiv>

                {frutas.map(fruta => {

                    return (
                        <Fruit key={fruta.id}>
                            <Img src={fruta.imagem} />
                            <h3><strong>{fruta.nome}</strong></h3>
                                <CarrinhoBtn style={{width: '80%'}} type="button" value={'Adicionar ao carrinho'}
                                    onClick={() => handleAddCart(fruta)}
                                />
                        </Fruit>
                    )
                })}

            </FruitsStyleDiv>

        </div>
    )
}