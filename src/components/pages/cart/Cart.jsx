import {  useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { FruitsStyleDiv } from "../../../styles/FruitsStyle";
import { Fruit } from "../../../styles/FruitsStyle";
import { Img } from "../inicial/Img";
import "../../../styles/Global.css";
import '../../../styles/CartStyles.css'

import { showFrutas } from '../../../store'
import { CarrinhoBtn } from "../../../styles/CarrinhoBtn";




function Cart() {

    const cart = useSelector((state) => state.frutas.cartItems)
    console.log(cart.length)


    return (
        <div id="MainCart">
            <h2>Carrinho</h2>
            {cart.length === 0 ? (
                <div className="cartVazio">
                    <p>Seu carrinho está vazio</p>
                    <div className="start-shopping">
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-basket" viewBox="0 0 16 16">
                                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
                            </svg>
                            <span>Comece a comprar</span>
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
                            <Img style={{width: "20vh"}} src={cartItem.imagem} alt={cartItem.nome} />
                            <>
                            <h3>{cartItem.nome}</h3>
                            <p>Família: {cartItem.familia}</p>
                            <p>Ordem: {cartItem.ordem}</p>
                            <CarrinhoBtn style={{width: '10vw'}} value={'Remover'}/>
                            </>
                            <div className="cart-product-quantity">
                                <button>-</button>
                                <div className="count">{cartItem.cartQtd}</div>
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            <div className="cart-sumary">
                <button className="clear-cart">Limpar Carrinho</button>
                <div className="cart-checkout">
                  <CarrinhoBtn style={{width: '10vw'}} value={'Checkout'} />
                  <div className="continue-shopping">
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-basket" viewBox="0 0 16 16">
                                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
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