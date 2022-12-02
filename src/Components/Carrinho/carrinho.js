import React, { useState } from "react"
import { ImLocation2 } from 'react-icons/im'
import { BiDollar } from 'react-icons/bi'
import { BsFillCartXFill } from 'react-icons/bs'
import Logo from "../Header/logo.png"
import "./carrinho.css"
import Header from "../Header/header"



const Carrinho = () => {

    return (
        <>
        <Header/>
            {/* <div className="navbar3">
                <div className="logo3">
                    <img src={Logo} alt="LogoCircular" className='h-logo3' />
                </div>
            </div> */}
            <div className="carrinho-main">
                <div className="pedido">
                    {/* <h2 className="titulo-cart">Finalize seu pedido!</h2> */}
                    <div className="info">
                    <p className="titulo-cart">Finalize seu pedido!</p>
                        <ImLocation2 className="icon-cart" />
                        <p className="tex-info">Informe o endereço para a entrega</p>
                        <div className="class-cart">
                            <div className="input-todos">
                                <input type="text" placeholder="CEP" />
                            </div>
                            <div className="input-todos">
                                <input type="text" placeholder="Rua" />
                            </div>
                            <div className="input-todos">
                                <input type="text" placeholder="Número" />
                            </div>

                            <div className="input-todos">
                                <input type="text" placeholder="Bairro" />
                            </div>

                        </div>
                    </div>

                </div>

                <div className="div-pag">
                    <div className="pagamento-div">
                        <BiDollar className="icon-dollar"/>
                        <p className="final-pag">Informe sua forma de pagamento</p>
                        <p>O pagamento é feito na entrega</p>
                        <div className="ooo">
                        <button className="bot-pag">CARTÃO DE CRÉDITO</button>
                        <button className="bot-pag">DINHEIRO</button>
                        <button className="bot-pag">CARTÃO DE DÉBITO</button>
                        </div>
                    </div>
                </div>

                <div className="div-vazio">
                    
                    <div className="sc-gicCDI....">
                        <div className="aaa">
                            <p className="selecionados">Seus itens selecionados</p>
                            <p>Ops seu carrinho está vazio</p>
                            <p>Navegue pelo menu e veja nossos produtos</p>
                            <BsFillCartXFill className="cart-vazio"/>
                        
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        
        </>
        
                
          
    )
}

export default Carrinho;