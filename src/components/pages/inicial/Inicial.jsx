import { useState, useEffect } from 'react'
import {FruitsStyleDiv} from '../../../styles/FruitsStyle'
import  Counter from './Counter'
import { Img } from './Img'
import { Fruit } from '../../../styles/FruitsStyle'
import { CarrinhoBtn } from '../../../styles'
import { CounterCart } from '../../../styles/FruitsStyle'
import axios from "axios"





export default function Inicial() {
    

    const [frutas, setFrutas] = useState([])
    
    useEffect(() => {
        axios.get("http://localhost:5000/frutas")
            
        .then(response => {            
            setFrutas(response.data.frutas);
        });
    }, [])
    


 return (
            <div>
                    <FruitsStyleDiv>

                        {frutas.map(fruta => {

                            return(                                        
                                <Fruit key={fruta.id}>
                                    <Img src={fruta.imagem}/>
                                    <p><strong>{fruta.name}</strong></p>
                                        <CounterCart>
                                            <Counter />
                                            <CarrinhoBtn>Adicionar ao carrinho</CarrinhoBtn>
                                        </CounterCart>
                                </Fruit>
                            )
                        })}    
                                         
                    </FruitsStyleDiv>
                 
            </div>
        )
    }


    
//www.youtube.com/watch?v=DsN83XP9JEY






