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
import imagem17 from "../Refeicoes/imagensRefe/FRANGUINHO.jpg"
import imagem18 from "../Refeicoes/imagensRefe/LINGUIÇA.jpg"
import imagem19 from "../Refeicoes/imagensRefe/CORACAO.jpg"
import imagem11 from "../Refeicoes/imagensRefe/bifegostoso.jpg"
import imagem12 from "../Refeicoes/imagensRefe/peixinho.jpg"
import imagem13 from "../Refeicoes/imagensRefe/tulipinha.jpg"
import imagem14 from "../Refeicoes/imagensRefe/saladadeatum.jpg"
import imagem15 from "../Refeicoes/imagensRefe/saladadebatata.jpg"
import imagem20 from "../Refeicoes/imagensRefe/LASANHA.jpg"
import imagem21 from "../Refeicoes/imagensRefe/inhoque.jpg"
import imagem22 from "../Refeicoes/imagensRefe/stro.jpg"


const Refeicoes = () => {
    const cards_refeicoes = [
        {
            id: '1',
            image: imagem1,
            type: ['tradicional'],
<<<<<<< HEAD
            name: 'BOLO DE LIMÃO',
            description: 'O tradicional café feito com água quente e grãos moídos',
            price: "R$ 7.59",
=======
            name: 'ARROZ BRANCO',
            description: '500gr',
            Price: "R$ 7.59",
>>>>>>> d4ebca058ea1be73ca32d4952a9493ef0fd39bce
        },
        {
            id: '2',
            image: imagem2,
            type: ['tradicional'],
            name: 'ARROZ INTEGRAL',
            description: '500gr',
            price: 7.59,
        },
        {
            id: '3',
            image: imagem3,
            type: ['tradicional'],
            name: 'ARROZ AGREGA',
            description: '500gr',
            price: 8.8,
        },
        {
            id: '4',
            image: imagem4,
            type: ['tradicional', 'gelado'],
            name: 'FEIJÃO',
            description: '500gr',
            price: 9.9,
        },
        {
            id: '5',
            image: imagem5,
            type: ['tradicional', 'com leite'],
            name: 'FEIJÃO TROPEIRO',
            description: '500gr',
            price: 12.29,
        },
        {
            id: '6',
            image: imagem6,
            type: ['tradicional', 'com leite'],
            name: 'LENTILHA',
            description:
                '500gr',
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
            name: 'MACARRÃO AO MOLHO VERMELHO',
            description:
                'MACARRÃO COM MOLHO DE TOMATE 500GR',
            price: 12.29,
        },
        {
            id: '9',
            image: imagem9,
            type: ['tradicional', 'com leite'],
            name: 'MACARRÃO AO MOLHO BRANCO',
            description: 'MACARRÃO AO MOLHO BRANCO 500GR',
            price: 12.29,
        },
        {
            id: '10',
            image: imagem10,
            type: ['especial', 'com leite'],
            name: 'MACARRÃO COM LEGUMES E CARNES',
            description: 'MACARRÃO COM BROCOLIS, CENOURA E ISCAS DE CARNE 500GR.',
            price: 12.29,
        },
        {
            id: '11',
            image: imagem11,
            type: ['especial', 'com leite'],
            name: 'BIFE DE CARNE',
            description: 'BIFE FRITO NA MANTEIGA 1KL',
            price: 12.29,
        },
        {
            id: '12',
            image: imagem12,
            type: ['especial', 'com leite'],
            name: 'ISCAS DE PEIXE',
            description: 'ISCAS DE PEIXE A MILANESA 1KL',
            price: 12.29,
        },
       {
            id: '13',
            image: imagem13,
            type: ['especial', 'com leite'],
            name: 'FRANGO ASSADO',
            description: 'UNIDADE',
            price: 12.29,
        },
        {
            id: '14',
            image: imagem14,
            type: ['especial', 'com leite'],
            name: 'SALADA DE ATUM',
            description: '500GR.',
            price: 12.29,
        },       {
            id: '15',
            image: imagem15,
            type: ['especial', 'com leite'],
            name: 'SALADA DE MAIONESE',
            description: '500GR.',
            price: 12.29,
        },
        {
            id: '16',
            image: imagem16,
            type: ['especial', 'com leite'],
            name: 'SALADA DE TOMATE',
            description: '500GR.',
            price: 12.29,
        },
        {
            id: '17',
            image: imagem17,
            type: ['especial', 'com leite'],
            name: 'ASINHA DE FRANGO ASSADA',
            description: 'ASINHAS DE FRANGO ASSADAS NA BRASA 500GR.',
            price: 12.29,
        },
        {
            id: '18',
            image: imagem19,
            type: ['especial', 'com leite'],
            name: 'CORAÇÃO DE FRANGO',
            description: 'CORAÇÃO DE FRANGO ASSADO 500GR.',
            price: 12.29,
        },
        {
            id: '19',
            image: imagem18,
            type: ['especial', 'com leite'],
            name: 'LINGUIÇA',
            description: 'LINGUIÇA ASSADA 1KL.',
            price: 12.29,
        },
        {
            id: '19',
            image: imagem20,
            type: ['especial', 'com leite'],
            name: 'LASANHA',
            description: 'LASANHA A BOLONHESA 1KL',
            price: 12.29,
        },
        {
            id: '19',
            image: imagem22,
            type: ['especial', 'com leite'],
            name: 'STROGONOFF',
            description: 'STROGONOF DE CARNE 500GR.',
            price: 12.29,
        },
        {
            id: '19',
            image: imagem21,
            type: ['especial', 'com leite'],
            name: 'INHOQUE',
            description: 'INHOQUE A BOLONHESA 500GR.',
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