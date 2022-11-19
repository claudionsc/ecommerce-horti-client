import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
// import {FruitsStyleDiv} from "../../../styles/FruitsStyle";
// import { Fruit } from "../../../styles/FruitsStyle";
// import { Img } from "../inicial/Img";
import  "../../../styles/Global.css";
import '../../../styles/CartStyles.css'

import {showFrutas} from '../../../store'




function Cart(){ 

    const showFruta = useSelector(state => state.frutas)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(showFrutas())
     }, [dispatch])

    
    return (

        <p>{showFruta.nome}</p>
        // <div id="MainCart">
        //     <FruitsStyleDiv>

        //         {showFrutas.map(fruta => {

        //             return(     
                                                          
        //                 <Fruit key={showFrutas.id}>
        //                     <Img rc={showFrutas.imagem} />
        //                     <p><strong>{showFrutas.nome}</strong></p>
        //                 </Fruit>
        //             )
        //         })}    
                                
        //     </FruitsStyleDiv>
        // </div>

    )
}

export default Cart