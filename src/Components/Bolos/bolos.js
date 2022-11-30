import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import Card from "./CARDSBOLO/index"
import "./bolos.css"


// import imagem1 from "./imagens/mousse-de-maracuja.jpg"
import imagem1 from "../Bolos/imagens/bolomousselimao.jpg"
import imagem2 from "../Bolos/imagens/bolodemilho.jpg"
import imagem3 from "../Bolos/imagens/boloflocos.jpg"
import imagem4 from "../Bolos/imagens/cenoura.jpg"
import imagem5 from "../Bolos/imagens/bolochoco.jpg"
import imagem6 from "../Bolos/imagens/calda.jpg"
import imagem7 from "../Bolos/imagens/bolodemorango.jpg"
import imagem8 from "../Bolos/imagens/bolocasal.jpg"
import imagem9 from "../Bolos/imagens/boloschurros.jpg"
import imagem10 from "../Bolos/imagens/chocolotae.jpg"
import imagem11 from "../Bolos/imagens/calda.jpg" 
import imagem12 from "../Bolos/imagens/calda.jpg" 

import imagem20 from "../Bolos/imagens/bolocon.jpg" 
import imagem21 from "../Bolos/imagens/unicornio.jpg" 
import imagem22 from "../Bolos/imagens/casamento.jpg"
const Bolo =() => {
    const cards_bolo = [
        
        {
            id: '1',
            image: imagem1,
            type: ['tradicional'],
            name: 'BOLO DE LIMÃO',
            description: 'MASSA TRADICIONAL DE LIMÃO, COM COBERTURA DE MOUSSE DE LIMÃO.',
            Price: "R$ 7.59",
        },
        {
            id: '2',
            image: imagem2,
            type: ['tradicional'],
            name: 'BOLO DE MILHO',
            description: 'MASSA TRADICIONAL DE MILHO.',
            price: 7.59,
        },
        {
            id: '3',
            image: imagem3,
            type: ['tradicional'],
            name: 'BOLO DE OREO',
            description: 'RECHEIO DE BRIGADEIRO DE OREO, COM COBERTURA DE CHOCOLATE E CHANTININHO.',
            price: 8.8,
        },
        {
            id: '4',
            image: imagem4,
            type: ['tradicional', 'gelado'],
            name: 'BOLO DE CENOURA',
            description: 'MASSA DE CENOURA, COM COBERTURA DE BRIGADEIRO TRADICIONAL.',
            price: 9.9,
        },
        {
            id: '5',
            image: imagem5,
            type: ['tradicional', 'com leite'],
            name: 'BOLO FORMIGUEIRO',
            description: 'MASSA DE CHOCOLATE E PÃO DE LÓ, COM COBERTURA DE CHOCOLATES.',
            price: 12.29,
        },
        {
            id: '6',
            image: imagem6,
            type: ['tradicional', 'com leite'],
            name: 'NAKED CAKE 1',
            description:
                'RECHEIO DE SENSAÇÃO, NINHO, E NATA.',
            price: 12.29,
        },
        {
            id: '7',
            image: imagem7,
            type: ['tradicional', 'com leite'],
            name: 'NAKED CAKE 2',
            description:
                'RECHEIO DE BRIGADEIRO DE NINHO COM MORANGO.',
            price: 12.29,
        },
        {
            id: '8',
            image: imagem8,
            type: ['tradicional', 'com leite'],
            name: 'BOLO COM DECORAÇÃO',
            description:
                'BOLO COM DECORAÇÃO SILMPRES, E RECHEIO DE QUATRO LEITES.',
            price: 12.29,
        },
        {
            id: '9',
            image: imagem9,
            type: ['tradicional', 'com leite'],
            name: 'BOLO DE CHURROS',
            description: 'RECHEIO DE DOCE DE LEITE, E BRIGADEIRO DE CHURROS.',
            price: 12.29,
        },
        {
            id: '20',
            image: imagem20,
            type: ['especial', 'com leite'],
            name: 'BOLO DE CHANTINHO',
            description: 'RECHEIO DE BRIGADEIRO DE CHOCOLATE, COM MOUSSE DE MORANGO E LEITE NINHO.',
            price: 12.29,
        },
        {
            id: '21',
            image: imagem21,
            type: ['especial', 'com leite'],
            name: 'BOLO COM DECORAÇÃO',
            description: 'DECORADO COM PASTA AMERICA, COM RECHEIO DE NUTTELA E BRIGADEIRO DE LEITE NINHO.',
            price: 12.29,
        },
        {
            id: '22',
            image: imagem22,
            type: ['especial', 'com leite'],
            name: 'BOLO DE CASAMENTO',
            description: 'RECHEIO DE QUATRO LEITES E BRIGADEIRO.',
            price: 12.29,
        },


    ]
    return (
        <div>
        
            <Header />

            <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {cards_bolo.map(({ image, id, name, description, price, type }) => (
                    <div className="col-md-4" key={id}>
                        <Card imageSource={image} price={price} id={id} name={name} description={description} type={type} />
                    </div>
                ))}
            </div>
        </div>


            <Footer />
        </div>
    )
}
    
export default Bolo