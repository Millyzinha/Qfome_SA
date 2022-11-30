import React from 'react'
// import { SiPug } from 'react-icons/si'
import { } from "react-icons"
import { FiMail, FiFacebook,FiInstagram } from 'react-icons/fi'
import { IoLogoWhatsapp } from 'react-icons/io'
// import {GrRestaurant} from 'react-icons/gr'
// import { Link } from 'react-scroll'
import './footerStyles.css'

const Footer = () => {
    return (
<div className='footer'>
            <div className="container">
                <div className="top">

                </div>
                <div className="col-container">
                      <div className="col">
                        <h3>Qfome</h3>
                        <p className='paginaquemSomos' onClick={() => window.location.href = `./QuemSomos`}>Quem Somos</p>
                    </div>
                    <div className="col">
                        <h3>Novidades</h3>
                        {/* <p>Bolos</p>
                        <p>Doces</p>
                        <p>Salgados</p>
                        <p>Especias</p> */}
                        <p className='paginaEventos' onClick={() => window.location.href = `./Eventos`}>Eventos</p>
                        <p className='paginaRefeicoes' onClick={() => window.location.href = `./refeicoes`}>Refeições</p>
                       
                    </div>
                  
                    <div className="col">
                        <h3>Equipe</h3>
                        <p>Daiana</p>
                        <p>Kamilly</p>
                        <p>Marcyelen</p>
                    </div>
                    <form>
                        <div className='redes'>
                        <h3>Redes sociais</h3>
                        
                        <div className="social-group">
                            <div className='icon-texto'>
                            <FiInstagram className='social-icon' />
                            {/* <h4 className='redessociais'>Instagram</h4> */}
                            </div >
                            <div className='icon-texto'>
                            <FiFacebook className='social-icon' />
                            {/* <h4 className='redessociais' >Facebook</h4> */}
                            </div>
                            <div className='icon-texto'>
                            <IoLogoWhatsapp className='social-icon' />
                            {/* <h4 className='redessociais' >Whatsapp</h4> */}
                            </div>
                            <div className='icon-texto'>
                            <FiMail className='mail-icon' />
                            {/* <h4 className='redessociais' >E-Mail</h4> */}
                            </div>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer 