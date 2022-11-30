import React from 'react'
import Footer from "../Footer/footer"
import Header from '../Header/header'
import Card from '../Refeicoes/CARDSREFEICOES/index'
import "./refeicoes.css"

import imagem1 from "../Refeicoes/imagensRefe/arroz.jpg"
import imagem2 from "../Refeicoes/imagensRefe/arrosintegral.jpg"
import imagem3 from "../Refeicoes/imagensRefe/arrozcenoura.jpg"
import imagem4 from "../Refeicoes/imagensRefe/feijaopreto.jpg"
import imagem5 from "../Refeicoes/imagensRefe/feijãotropeiro.jpg"
import imagem6 from "../Refeicoes/imagensRefe/lentilha2.jpg"
import imagem16 from "../Refeicoes/imagensRefe/saladadetomate.jpg"
import imagem8 from "../Refeicoes/imagensRefe/massamolhovermelho.jpg"
import imagem9 from "../Refeicoes/imagensRefe/massamolhobranco.jpg"
import imagem10 from "../Refeicoes/imagensRefe/massacomcarne.jpg"
import imagem17 from "../Refeicoes/imagensRefe/carnecombatata.jpg"
import imagem18 from "../Refeicoes/imagensRefe/frangoebatata.jpg"
import imagem19 from "../Refeicoes/imagensRefe/salsichaebatata.jpg"
import imagem11 from "../Refeicoes/imagensRefe/bifegostoso.jpg"
import imagem12 from "../Refeicoes/imagensRefe/peixinho.jpg"
import imagem13 from "../Refeicoes/imagensRefe/tulipinha2.jpg"
import imagem14 from "../Refeicoes/imagensRefe/saladadeatum.jpg"
import imagem15 from "../Refeicoes/imagensRefe/saladadebatata.jpg"



const Refeicoes = () => {
    const cards_refeicoes = [
        {
            id: '1',
            image: imagem1,
            type: ['tradicional'],
            name: 'BOLO DE LIMÃO',
            description: 'O tradicional café feito com água quente e grãos moídos',
            price: "R$ 7.59",
        },
        {
            id: '2',
            image: imagem2,
            type: ['tradicional'],
            name: 'BOLO DE MILHO',
            description: 'Expresso diluído, menos intenso que o tradicional',
            price: 7.59,
        },
        {
            id: '3',
            image: imagem3,
            type: ['tradicional'],
            name: 'BOLO DE FLOCOS',
            description: 'Café expresso tradicional com espuma cremosa',
            price: 8.8,
        },
        {
            id: '4',
            image: imagem4,
            type: ['tradicional', 'gelado'],
            name: 'BOLO DE CENOURA',
            description: 'Bebida preparada com café expresso e cubos de gelo',
            price: 9.9,
        },
        {
            id: '5',
            image: imagem5,
            type: ['tradicional', 'com leite'],
            name: 'BOLO DE CHOCOLATE',
            description: 'Meio a meio de expresso tradicional com leite vaporizado',
            price: 12.29,
        },
        {
            id: '6',
            image: imagem6,
            type: ['tradicional', 'com leite'],
            name: 'NAKED CAKE DE MORANGO',
            description:
                'SENSAÇÃO, NINHO, CHURROS E BEIJINHO',
            price: 12.29,
        },
        // {
        //     id: '7',
        //     image: imagem7,
        //     type: ['tradicional', 'com leite'],
        //     name: 'BOLO DE MORANGO COM CHOCOLATE',
        //     description:
        //         'Bebida com canela feita de doses iguais de café, leite e espuma',
        //     price: 12.29,
        // },
        {
            id: '8',
            image: imagem8,
            type: ['tradicional', 'com leite'],
            name: 'BOLO DECORADO',
            description:
                'SORVETE NATURAL DE MORANGO',
            price: 12.29,
        },
        {
            id: '9',
            image: imagem9,
            type: ['tradicional', 'com leite'],
            name: 'BOLO DE CHURROS',
            description: 'Café expresso com calda de chocolate, pouco leite e espuma',
            price: 12.29,
        },
        {
            id: '10',
            image: imagem10,
            type: ['especial', 'com leite'],
            name: 'BOLO DE CHOCOLATE TRADICIONAL',
            description: 'Bebida feita com chocolate dissolvido no leite quente e café',
            price: 12.29,
        },
        {
            id: '11',
            image: imagem11,
            type: ['especial', 'com leite'],
            name: 'ARROZ DOCE',
            description: 'Bebida feita com chocolate dissolvido no leite quente e café',
            price: 12.29,
        },
        {
            id: '12',
            image: imagem12,
            type: ['especial', 'com leite'],
            name: 'PUDIM',
            description: 'Bebida feita com chocolate dissolvido no leite quente e café',
            price: 12.29,
        },
       {
            id: '13',
            image: imagem13,
            type: ['especial', 'com leite'],
            name: 'PUDIM',
            description: 'Bebida feita com chocolate dissolvido no leite quente e café',
            price: 12.29,
        },
        {
            id: '14',
            image: imagem14,
            type: ['especial', 'com leite'],
            name: 'PUDIM',
            description: 'Bebida feita com chocolate dissolvido no leite quente e café',
            price: 12.29,
        },       {
            id: '15',
            image: imagem15,
            type: ['especial', 'com leite'],
            name: 'PUDIM',
            description: 'Bebida feita com chocolate dissolvido no leite quente e café',
            price: 12.29,
        },
        {
            id: '16',
            image: imagem16,
            type: ['especial', 'com leite'],
            name: 'PUDIM',
            description: 'Bebida feita com chocolate dissolvido no leite quente e café',
            price: 12.29,
        },
        {
            id: '17',
            image: imagem17,
            type: ['especial', 'com leite'],
            name: 'PUDIM',
            description: 'Bebida feita com chocolate dissolvido no leite quente e café',
            price: 12.29,
        },
        {
            id: '18',
            image: imagem18,
            type: ['especial', 'com leite'],
            name: 'PUDIM',
            description: 'Bebida feita com chocolate dissolvido no leite quente e café',
            price: 12.29,
        },
        {
            id: '19',
            image: imagem19,
            type: ['especial', 'com leite'],
            name: 'PUDIM',
            description: 'Bebida feita com chocolate dissolvido no leite quente e café',
            price: 12.29,
        },




    ]
    return (
        <div>
        
            <Header />

            <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {cards_refeicoes.map(({ image, id, name, description, price, type }) => (
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

export default Refeicoes