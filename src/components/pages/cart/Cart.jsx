import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { FruitsStyleDiv } from "../../../styles/FruitsStyle";
import { Fruit } from "../../../styles/FruitsStyle";
import { Img } from "../inicial/Img";
import "../../../styles/Global.css";
import '../../../styles/CartStyles.css'

import { cleanCart, decreaseCart, getTotals, removeFrutas, showFrutas } from '../../../store'
import { CarrinhoBtn } from "../../../styles/CarrinhoBtn";
import { useEffect } from "react";




function Cart() {

    const cart = useSelector((state) => state.frutas.cartItems)
    const dispatch = useDispatch()

    const handleRemoveFrutas = (cartItem) => {
        dispatch(removeFrutas(cartItem))
    }

    const handleCleanCart = () => {
        dispatch(cleanCart())
    }

    const handleDecreaseCart = (cartItem) => {
        dispatch(decreaseCart(cartItem))
    }
    const handleShow = (cartItem) => {
        dispatch(showFrutas(cartItem))
    }

    useEffect(() => {
        dispatch(getTotals())
    }, [cart])


    return (
        <div id="MainCart">

            {cart?.length === 0 ? (
                <div className="cartVazio">
                    <h3>Seu carrinho está vazio</h3>
                    <div className="start-shopping">
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                            </svg>
                            <span style={{ paddingLeft: '10px' }}>Comece a comprar</span>
                        </Link>
                    </div>
                </div>
            ) : (
                <>
                    <section className="titles">
                        <h3 className="product-title">Produto</h3>
                        <h3 className="qtdF">Quantidade</h3>
                        <h3 className="total">Total</h3>
                    </section>
                    <section className="carItems">
                        {cart?.map(cartItem => (
                            <div className="cart-item" key={cartItem.id} >
                                <div className="cart-product">
                                    <Img style={{ width: "20vh" }} src={cartItem.imagem} alt={cartItem.nome} />
                                    <>
                                        <h3>{cartItem.nome}</h3>
                                        <p>Família: {cartItem.familia}</p>
                                        <p>Ordem: {cartItem.ordem}</p>
                                        <CarrinhoBtn style={{ width: '10vw' }} value={'Remover'} onClick={() => handleRemoveFrutas(cartItem)} />
                                    </>
                                    <div className="cart-product-quantity">
                                        <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                                        <div className="count">{cartItem.cartQtd}</div>
                                        <button onClick={() => handleShow(cartItem)}>+</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                    <div className="cart-sumary">
                        <button className="clear-cart" onClick={() => handleCleanCart()} >Limpar Carrinho</button>
                        <div className="cart-checkout">
                            <CarrinhoBtn style={{ width: '10vw' }} value={'Checkout'} />
                            <div className="continue-shopping">
                                <Link to="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                    </svg>
                                    <span>Continue comprando</span>
                                </Link>
                            </div>

                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Cart