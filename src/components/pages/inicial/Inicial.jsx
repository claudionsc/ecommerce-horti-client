import { useState, useEffect } from 'react'
import {FruitsStyleForm} from '../../../styles/FruitsStyle'
import  Counter  from './Counter'
import { Img } from './Img'
import { Fruit } from '../../../styles/FruitsStyle'
import { CarrinhoBtn } from '../../../styles'
import { CounterCart } from '../../../styles/FruitsStyle'
import axios from "axios"





export default function Inicial() {
    
    
        const [ cartItems, setCartitems ] = useState([])

        useEffect(() => {
            console.log(cartItems)
        },[cartItems]);

        function addItemsCart(id, event){
             setCartitems([...cartItems, id])
             localStorage.setItem('fruta', JSON.stringify(cartItems))

            //  setCartitems(event.id)
        }
    

    const [frutas, setFrutas] = useState([])
    
    useEffect(() => {
        axios.get("http://localhost:5000/api")
            
        .then(response => {            
            setFrutas(response.data);
        });
        
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    


 return (
            <div>
                
                            
           
                    <FruitsStyleForm>

                        {frutas.map(fruta => {

                            return(                                        
                                <Fruit key={fruta.id}>
                                    <Img />
                                    <p><strong>{fruta.name}</strong></p>
                                    {/* <p>{`Vazio`}</p> */}
                                        <CounterCart>
                                            <Counter />                                            
                                            <CarrinhoBtn  onClick={e => addItemsCart(fruta)} type="button" value="Adicionar ao carrinho" />
                                        </CounterCart>
                                </Fruit>
                            )
                        })}    
                                         
                    </FruitsStyleForm>
                 
            </div>
        )
    }


    
//www.youtube.com/watch?v=DsN83XP9JEY






