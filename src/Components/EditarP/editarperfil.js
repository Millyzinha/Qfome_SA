import React from 'react'
import './editarperfil.css'
import Header from '../Header/header'

const Perfil = () => {
    return (
        <div>
            <Header />

            <div className="body2">

            <div className="Perfil1">

            <div className="black-box1">
                        <div className="box-input1">
                            <div className="perfil1">
                                <h1 className="input-Cconta1">Perfil</h1>
                                <div className="input-perfil">
                                    <input type="text1"
                                        placeholder="Nome de Usuário"
                                    />
                                </div>
                                <div className="input-email">
                                    <input type="text" placeholder="E-mail" />
                                </div>
                                <div className="input-senha">
                                    <input type="text" placeholder="Senha" />
                                </div>
                                <br></br>
                                <div>
                                   <button className="botao-editarPerfil"> Salvar </button> 
                        
                                </div>
                            </div>
                        </div>
                    </div>
                
                   
                </div>
            </div>
        </div>

    )
}

export default Perfil