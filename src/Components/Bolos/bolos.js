import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import Card from "./CARDSBOLO/index"
import "./bolos.css"
import "./CARDSBOLO/index.css"


// import imagem1 from "./imagens/mousse-de-maracuja.jpg"
import imagem1 from "../Bolos/imagens/rocher.png"
import imagem2 from "../Bolos/imagens/ouro.jpg"
import imagem3 from "../Bolos/imagens/bolotop.png"
import imagem4 from "../Bolos/imagens/cenoura.jpg"
import imagem5 from "../Bolos/imagens/vulcao.jpg"
import imagem6 from "../Bolos/imagens/amargo.webp"
import imagem7 from "../Bolos/imagens/bolodemorango.jpg"
import imagem8 from "../Bolos/imagens/bolocasal.jpg"
import imagem9 from "../Bolos/imagens/morangochocolate.jpg"
import imagem10 from "../Bolos/imagens/teste3.jpg"
import imagem11 from "../Bolos/imagens/bombomorango.jpeg" 
import imagem12 from "../Bolos/imagens/moranginbolo.jpg" 

// import imagem20 from "../Bolos/imagens/bolocon.jpg" 
// import imagem21 from "../Bolos/imagens/unicornio.jpg" 
// import imagem22 from "../Bolos/imagens/casamento.jpg"
const Bolo =() => {
    const cards_bolo = [
        
        {
            id: '1',
            image: imagem1,
            type: ['tradicional'],

            name: 'BOLO FERRERO ROCHER',
            description: 'Bolo decorado com biscoito Óreo e chocolate Ferrero Rocher ótimo para sobremesa.',
            price: "R$ 7.59",

        },
        {
            id: '2',
            image: imagem2,
            type: ['tradicional'],

            name: 'BOLO OURO BRANCO',
            description: 'Bolo de ouro branco, detalhado com calda de chocolate e suspiros.',

            price: 7.59,
        },
        {
            id: '3',
            image: imagem3,
            type: ['tradicional'],

            name: 'BOLO VANILLA',
            description: 'Bolo de vanilla recheado com baunilha, decorado com cereja e chocolate',

            price: 8.8,
        },
        {
            id: '4',
            image: imagem4,
            type: ['tradicional', 'gelado'],

            name: 'BOLO DE CHOCOLATE',
            description: 'Bolo de chocolate simples para acompanhar seu café da tarde com a família',

            price: 9.9,
        },
        {
            id: '5',
            image: imagem5,
            type: ['tradicional', 'com leite'],

            name: 'VULCÃO DE BRIGADEIRO',
            description: 'Bolo de chocolate vulcânico de brigadeiro com granulado, para sobremesas',

            price: 12.29,
        },
        {
            id: '6',
            image: imagem6,
            type: ['tradicional', 'com leite'],

            name: 'CHOCOLATE AMARGO',
            description:
                'Bolo de chocolate amargo vulcânico com granulado, 80% de cacau',

            price: 12.29,
        },
        {
            id: '7',
            image: imagem7,
            type: ['tradicional', 'com leite'],

            name: 'SUSPIRO COM MORANGO',
            description:
                'Bolo de chocolate recheado com creme de morango, decorado com suspiros de morango e morangos',

            price: 12.29,
        },
        {
            id: '8',
            image: imagem8,
            type: ['tradicional', 'com leite'],
            name: 'BOLO COM DECORAÇÃO',
            description:

                'Bolo decorado com detalhes de pétalas de rosas, coberto de chantilly, recomendado para festas',

            price: 12.29,
        },
        {
            id: '9',
            image: imagem9,
            type: ['tradicional', 'com leite'],

            name: 'BOLO DE MORANGO',
            description: 'Bolo de morango com calda de chocolate, decorado com morangos, perfeito para sobremesas',

            price: 12.29,
        },
        {
            id: '10',
            image: imagem10,
            type: ['especial', 'com leite'],

            name: 'BOLO RECHEADO',
            description: 'Bolo de chocolate com morango, decorado com raspas de chocolate e recheado com creme e morango',

            price: 12.29,
        },
        {
            id: '11',
            image: imagem11,
            type: ['especial', 'com leite'],

            name: 'BOLO DE PAÇOCA',
            description: 'Bolo de paçoca recheado com creme de paçoca, deocorado com morango e calda de chocolate',

            price: 12.29,
        },
        {
            id: '12',
            image: imagem12,
            type: ['especial', 'com leite'],

            name: 'BOLO DE CHANTILLY',
            description: 'Bolo de morango coberto de chantilly, decorado com calda de chocolate e morangos',

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