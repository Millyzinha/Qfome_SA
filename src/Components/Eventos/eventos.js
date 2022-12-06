import React from 'react'
import Footer from '../Footer/footer'
import Header from '../Header/header'
import Card from './CARDSEVENTOS/index'
import "./eventos.css"


import imagem1 from "./imagensEventos/festa.jpg"
import imagem2 from "./imagensEventos/cria.jpg"
import imagem3 from "./imagensEventos/formatura.jpg"
import imagem4 from "./imagensEventos/casamentoo.jpg"
import imagem5 from "./imagensEventos/chatarde.jpg"
import imagem6 from "./imagensEventos/natal.jpg"
import imagem7 from "./imagensEventos/2023.jpg"
import imagem8 from "./imagensEventos/juninaa.jpg"
import imagem9 from "./imagensEventos/churrasco.jpg"



const Eventos = () => {
    const cards_doce = [
        {

            id: '1',
            image: imagem1,
            type: ['tradicional'],
            name: 'MOUSSE DE MARACUJÁ',
            description: 'O tradicional café feito com água quente e grãos moídos',
            price: "R$ 7.59",

            id: '8',
            image: imagem8,
            type: ['tradicional', 'com leite'],
            name: 'FESTA JUNINA',
            description:
                '10 maças do amor, bolo pequeno de milho, kit 15 paçoquinhas, 10 pacotes de amendoim doce',
                
            price: 149.90,
        },
        {
            id: '9',
            image: imagem9,
            type: ['tradicional', 'com leite'],
            name: 'CHURRASCO',
            description: '15KG de picanha para 30 pessoas com acompanhamento de um pote médio de maionese euma farofa caseira',
            price: 320.00,

        },
        {
            id: '2',
            image: imagem2,
            type: ['tradicional'],
            name: 'FESTA INFANTIL',
            description: 'Bolo de 5KG tradicional de chocolate, duzentos salgados e um cento de brigadeiro e beijinho ',
            price: 390.90,
        },
        {
            id: '1',
            image: imagem1,
            type: ['tradicional'],
            name: 'FESTA DE 15 ANOS',
            description: 'Bolo de 5KG de morango de dois andares com acompanhamento de 300 docinhos, com 500 salgados',
            price: 650.00,
        },
       
        {
            id: '3',
            image: imagem3,
            type: ['tradicional'],
            name: 'FORATURA',
            description: 'um cento de Cupcake personalizado com um bolo de 2KG de prestigio',
            price: 200.00,
        },
        {
            id: '4',
            image: imagem4,
            type: ['tradicional', 'gelado'],
            name: 'CASAMENTO',
            description: 'Bolo de 6KG de dois amores, com 800 salgados e 500 docinhos(amendoim e limão)',
            price: 1800.00,
        },
        {
            id: '5',
            image: imagem5,
            type: ['tradicional', 'com leite'],
            name: 'CAFÉ DA TARDE',
            description: 'Bolo pequeno de brigadeiro, pão caseiro, cuca',
            price: 60.12,
        },
        {
            id: '6',
            image: imagem6,
            type: ['tradicional', 'com leite'],
            name: 'NATAL',
            description: 
                'Chester grande, com 500 gramas de arroz, salada e maionese',
            price: 330.14,
        },
        {
            id: '7',
            image: imagem7,
            type: ['tradicional', 'com leite'],
            name: 'ANO NOVO',
            description:
                '1oKG de picanha, salada, 2KG camarão',
            price: 330.10,
        },
        
        // {
        //     id: '10',
        //     image: imagem10,
        //     type: ['especial', 'com leite'],
        //     name: 'SAGU DE VINHO',
        //     description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        //     price: 12.29,
        // },
        // {
        //     id: '11',
        //     image: imagem11,
        //     type: ['especial', 'com leite'],
        //     name: 'ARROZ DOCE',
        //     description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        //     price: 12.29,
        // },
        // {
        //     id: '12',
        //     image: imagem12,

    ]
    return (
        <div>

            <Header />
            <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {cards_doce.map(({ image, id, name, description, price, type }) => (
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

export default Eventos