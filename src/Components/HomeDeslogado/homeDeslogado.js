import React from 'react'
import Footer from '../Footer/footer'
import "./homeDeslogado.css"
import Logo from "../Header/logo.png"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoHamburguer from "../HomeDeslogado/imagens/logohamb.png"

import { BsFillCartCheckFill } from "react-icons/bs"
  import { GiFoodTruck } from "react-icons/gi"
  import { RiTeamLine, RiHandHeartFill } from "react-icons/ri"
    import{ IoIosCart } from "react-icons/io"
    import {AiOutlineTeam} from "react-icons/ai"
  

const HOMEDeslogado = () => {

    return (
    <div className='principal'>
        <div className="header">
            <div className='nAVlinkESQUERDA' >
            <Navbar>
          <Nav className="me-auto"  >
            <Nav.Link className='novidades' href="/novidades">NOVIDADES</Nav.Link>
          </Nav>
      </Navbar> 
            </div>
        <div className='logo'>
                    <img src={Logo} alt="LogoCircular" className='h-logo'/>
                </div>
<div className='navlinkdireita'>
    <Nav>
    <Nav.Link className='logar' href="/login">LOGAR</Nav.Link>
    <Nav.Link className='cadastrar' href="/cadastro">CADASTRAR</Nav.Link>
    </Nav>
</div>
        </div>

        <div className='meio'>

            <div className='divflex'>
        <div className='marklandingtext'>
            <div className='daiana'>
            <h2 className='LandMARK'>Encontre a refeição perfeita </h2>
            <h2 className='LandMARK'>para qualquer hora do seu dia, </h2>
            <h2 className='LandMARKF'>cadastre-se na Qfome e faça Login!</h2>
</div>
<div className='buttons'>

{/* <a
          href={  "/login"}
          target="_blank"
          className="button"
          rel="noreferrer"
        >
          Logar
        </a> */}

        <a
          href={  "/cadastro"}
          target="_blank"
          className="button"
          rel="noreferrer"
        >
          COMEÇAR
        </a>
        </div>
        </div>
        <div className='hamb'>
                    <img src={LogoHamburguer} alt="LogoLANDING" className='LOGOHAMB'/>
                </div>
        </div>
  
           
        </div>


{/* <div className='icons'>

<div className='div1'>
  <div className='teste11'>
  < IoIosCart className='carrinhook'/> 
  <p className='CSS'>Compra simples e segura</p>
  </div>

  <GiFoodTruck className='caminhao'/>
  <p className='ERR'>Entrega rápida e rastreada</p>
</div>


<div className='div2'>
  <RiHandHeartFill className='mao'/> 
  <p className='REI'>Refeições feitas com amor</p>


  <AiOutlineTeam className='team' />
  <p className='EAA'>Equipe atenciosa</p>

</div>
</div> */}

<div className="container-Comof">
            <div className="content">
              <div className="image">
                < IoIosCart className='carrinhook'/>
              </div>
              <p className="description">
               Compra simples e segura
              </p>

            </div>
            <div className="content">
              <div className="image">
                <GiFoodTruck className='carrinhook'/>
              </div>
              <p className="description">
               Entrega rápida e rastreada
              </p>

            </div>
            <div className="content">
              <div className="image">
                 <RiHandHeartFill className='carrinhook'/> 
              </div>
              <p className="description">
                Refeições feitas com amor
              </p>

            </div>
            <div className="content">
              <div className="image">
                <AiOutlineTeam className='carrinhook' />
              </div>
              <p className="description">
                Equipe atenciosa
              </p>

            </div>
          </div>


        <div className='footerdiv'>
            < Footer />
            </div>
            </div>  
             
    )
}    
export default HOMEDeslogado