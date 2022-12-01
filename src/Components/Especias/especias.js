import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import Card from "./CARDSESPECIAS/index"
import "./especias.css"


import imagem1 from "../Especias/ImagensEspecias/CALABRESA.jpg" 
import imagem2 from "../Especias/ImagensEspecias/PORTUGUESA.jpg" 
import imagem3 from "../Especias/ImagensEspecias/VEGANA.jpg" 
import imagem4 from "../Especias/ImagensEspecias/sushisalmao.jpg" 
import imagem5 from "../Especias/ImagensEspecias/hotroll.jpg" 
import imagem6 from "../Especias/ImagensEspecias/salmao.jpg" 
import imagem7 from "../Especias/ImagensEspecias/frutosdo mar.jpg" 
import imagem8 from "../Especias/ImagensEspecias/lula.jpg" 
import imagem9 from "../Especias/ImagensEspecias/peixe.jpg" 
import imagem10 from "../Especias/ImagensEspecias/hamburguer.jpg" 
import imagem11 from "../Especias/ImagensEspecias/hamburguer2.jpg" 
import imagem12 from "../Especias/ImagensEspecias/BACON.jpeg" 
import imagem13 from "../Especias/ImagensEspecias/mandiocafrita.jpg"
import imagem14 from "../Especias/ImagensEspecias/batatafrita.jpg"
import imagem15 from  "../Especias/ImagensEspecias/polentafrita.jpg"

const Especias = () => {
    const cards_especias = [
        {
            id: '1',
            image: imagem1,
            type: ['tradicional'],

            name: 'PIZZA CALABRESA',
            description: 'Tradicional pizza calabresa.',
            price: "R$ 7.59",

        },
        {
            id: '2',
            image: imagem2,
            type: ['tradicional'],
            name: 'PIZZA PORTUGUESA',
            description: 'Tradicional pizza portuguesa.',
            price: 7.59,
        },
        {
            id: '3',
            image: imagem3,
            type: ['tradicional'],
            name: 'PIZZA VEGANA',
            description: 'Tradiiconal pizza vegana.',
            price: 8.8,
        },
        {
            id: '4',
            image: imagem4,
            type: ['tradicional', 'gelado'],
            name: 'HOT SALMÃO',
            description: 'SALMÃO CRU, ARROZ E CEBOLINHA.',
            price: 9.9,
        },
        {
            id: '5',
            image: imagem5,
            type: ['tradicional', 'com leite'],
            name: 'HOT ROLL',
            description: 'Arroz, Salmão, Creatise, Cebolinha e Molho Tarê.',
            price: 12.29,
        },
        {
            id: '6',
            image: imagem6,
            type: ['tradicional', 'com leite'],
            name: 'SALMÃO',
            description:
                '5 PEDAÇOS DE SALMÃO CRUS.',
            price: 12.29,
        },
        {
            id: '7',
            image: imagem7,
            type: ['tradicional', 'com leite'],
            name: 'CAMARÃO',
            description:
                'CAMARÃO FRITO  500GR',
            price: 12.29,
        },
        {
            id: '8',
            image: imagem8,
            type: ['tradicional', 'com leite'],
            name: 'LULA  AMILANESA',
            description:
                'LULA AMILANESA 500GR',
            price: 12.29,
        },
        {
            id: '9',
            image: imagem9,
            type: ['tradicional', 'com leite'],
            name: 'PEIXE FRITO',
            description: 'PEIXE FRITO  500GR',
            price: 12.29,
        },
        {
            id: '10',
            image: imagem10,
            type: ['especial', 'com leite'],
            name: 'X-DUPLO',
            description: ' 2 Hambúrguer com queijo cheddar, catchup, mostarda, cebola, picles, alaface e tomate fresco.',
            price: 12.29,
        },
        {
            id: '11',
            image: imagem11,
            type: ['especial', 'com leite'],
            name: 'X-CHEDDAR',
            description: ' Contém 2 camadas de queijo cheddar, catchup, mostarda, cebola, cebolinha, picles, alaface.',
            price: 12.29,
        },
        {
            id: '12',
            image: imagem12,
            type: ['especial', 'com leite'],
            name: 'X-BACON',
            description: ' Hambúrguer com queijo cheddar, catchup e bacon. Acompanhado com batata frita',
            price: 12.29,
        },
        {
            id: '13',
            image: imagem13,
            type: ['especial', 'com leite'],
            name: 'POLENTA FRITA',
            description: 'POLENTA FRITA 500GR ',
            price: 12.29,
        },
        {
            id: '14',
            image: imagem14,
            type: ['especial', 'com leite'],
            name: 'BATATA FRITA',
            description: 'BATATA FRITA 500GR',
            price: 12.29,
        },
        {
            id: '15',
            image: imagem15,
            type: ['especial', 'com leite'],
            name: 'MANDIOCA FRITA',
            description: 'MANDIOCA FRITA 500GR',
            price: 12.29,
        },


    ]
    return (
        <div>

            <Header />

            <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="row">
                    {cards_especias.map(({ image, id, name, description, price, type }) => (
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
export default Especias