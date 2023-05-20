import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { FruitsStyleDiv } from '../../Fruits/FruitsStyle'
import { Img } from './Img'
import { Fruit } from '../../Fruits/FruitsStyle'
import { CarrinhoBtn } from '../../../styles'
import {  showFrutas } from '../../../store'
import { getApi } from '../../../store/fetchActions';



export default function Inicial() {

    const dispatch = useDispatch()
    const LoadFrutas = useSelector((state) => state.loadFrutas)


    useEffect(() => {
        dispatch(getApi())
    }, [dispatch])


    const handleAddCart = (fruta) => {
        dispatch(showFrutas(fruta))
    }

    return (
        <div>
            <FruitsStyleDiv>

                {LoadFrutas.map(fruta => {
                    return (
                        <Fruit key={fruta.id}>
                            <Img src={fruta.imagem} />
                            <h3><strong>{fruta.nome}</strong></h3>
                            <CarrinhoBtn style={{ width: '80%' }} type="button" value={'Adicionar ao carrinho'}
                                onClick={() => handleAddCart(fruta)} />
                        </Fruit>
                    )
                })}

            </FruitsStyleDiv>
        </div>
    )
}