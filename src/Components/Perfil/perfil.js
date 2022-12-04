import React from 'react'
import "./perfil.css"
import Header from '../Header/header'
import Fome from "./fome.jpg"
// import Card from "bootstrap"

const Perfil = () => {
    return (
        <div>
            <Header />

            <div className='body1'>

            <div className="Perfil">

            <div className='logo1'>
                <img src={Fome} alt="fominha" className='h-logo1' />
            </div>
            <div className="flex2">

            <div className='nome'>
                <h2>
Marcynha</h2>
            

            </div>

            <div className='id'>
            <p className='id1'>@marcynhaasars</p>

            <div className='edp'>
                <button className='button1' onClick={() => window.location.href = `/editarperfil`}>Editar perfil</button>
            </div>
            </div>
            </div>
  
            </div>
            </div>


        </div>

    )
}

export default Perfil