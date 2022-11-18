import {FruitsStyleDiv} from "../../../styles/FruitsStyle";
import { createContext, useState, useEffect } from "react";
import { Fruit } from '../../../styles/FruitsStyle'
import { Img } from '../../pages/inicial/Img'
// import axios from "axios"
import  "../../../styles/Global.css"
import '../../../styles/CartStyles.css'

export const CartContext = createContext();



function Cart({children}){ 

    
    

    const [cart, setCart] = useState([]) 
    
    
    useEffect(() => {

        var storedItems = localStorage.getItem('fruta')
        
        var arrayCart = JSON.parse(storedItems);
        setCart(arrayCart)
        console.log(arrayCart)
        // console.log(cart)
        
        
    }, [])
    

    function removeProduct(id) {}

    
    return (

        <div id="MainCart">
        <h1>Carrinho ativo</h1>
            <FruitsStyleDiv>
            {children}

                {cart.map(item => {

                    return(     
                                                          
                        <Fruit key={item.div}>
                            <Img />
                            <p><strong>{item.name}</strong></p>
                            {/* <p>{`Vazio`}</p> */}
                                
                        </Fruit>
                    )
                })}    
                                
            </FruitsStyleDiv>
        </div>
    )
}

export default Cart