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

import imagem20 from "../Bolos/imagens/bolocon.jpg" 
import imagem21 from "../Bolos/imagens/unicornio.jpg" 
import imagem22 from "../Bolos/imagens/casamento.jpg"
const Bolo =() => {
    const cards_bolo = [
        
        {
            id: '1',
            image: imagem1,
            type: ['tradicional'],
<<<<<<< HEAD
            name: 'BOLO FERRERO ROCHER',
            description: 'Bolo decorado com biscoito Óreo e chocolate Ferrero Rocher ótimo para sobremesa.',
            price: "R$ 7.59",
=======
            name: 'BOLO DE LIMÃO',
            description: 'MASSA TRADICIONAL DE LIMÃO, COM COBERTURA DE MOUSSE DE LIMÃO.',
            Price: "R$ 7.59",
>>>>>>> d4ebca058ea1be73ca32d4952a9493ef0fd39bce
        },
        {
            id: '2',
            image: imagem2,
            type: ['tradicional'],
<<<<<<< HEAD
            name: 'BOLO OURO BRANCO',
            description: 'Bolo de ouro branco, detalhado com calda de chocolate e suspiros.',
=======
            name: 'BOLO DE MILHO',
            description: 'MASSA TRADICIONAL DE MILHO.',
>>>>>>> d4ebca058ea1be73ca32d4952a9493ef0fd39bce
            price: 7.59,
        },
        {
            id: '3',
            image: imagem3,
            type: ['tradicional'],
<<<<<<< HEAD
            name: 'BOLO VANILLA',
            description: 'Bolo de vanilla recheado com baunilha, decorado com cereja e chocolate',
=======
            name: 'BOLO DE OREO',
            description: 'RECHEIO DE BRIGADEIRO DE OREO, COM COBERTURA DE CHOCOLATE E CHANTININHO.',
>>>>>>> d4ebca058ea1be73ca32d4952a9493ef0fd39bce
            price: 8.8,
        },
        {
            id: '4',
            image: imagem4,
            type: ['tradicional', 'gelado'],
<<<<<<< HEAD
            name: 'BOLO DE CHOCOLATE',
            description: 'Bolo de chocolate simples para acompanhar seu café da tarde com a família',
=======
            name: 'BOLO DE CENOURA',
            description: 'MASSA DE CENOURA, COM COBERTURA DE BRIGADEIRO TRADICIONAL.',
>>>>>>> d4ebca058ea1be73ca32d4952a9493ef0fd39bce
            price: 9.9,
        },
        {
            id: '5',
            image: imagem5,
            type: ['tradicional', 'com leite'],
<<<<<<< HEAD
            name: 'VULCÃO DE BRIGADEIRO',
            description: 'Bolo de chocolate vulcânico de brigadeiro com granulado, para sobremesas',
=======
            name: 'BOLO FORMIGUEIRO',
            description: 'MASSA DE CHOCOLATE E PÃO DE LÓ, COM COBERTURA DE CHOCOLATES.',
>>>>>>> d4ebca058ea1be73ca32d4952a9493ef0fd39bce
            price: 12.29,
        },
        {
            id: '6',
            image: imagem6,
            type: ['tradicional', 'com leite'],
<<<<<<< HEAD
            name: 'CHOCOLATE AMARGO',
            description:
                'Bolo de chocolate amargo vulcânico com granulado, 80% de cacau',
=======
            name: 'NAKED CAKE 1',
            description:
                'RECHEIO DE SENSAÇÃO, NINHO, E NATA.',
>>>>>>> d4ebca058ea1be73ca32d4952a9493ef0fd39bce
            price: 12.29,
        },
        {
            id: '7',
            image: imagem7,
            type: ['tradicional', 'com leite'],
<<<<<<< HEAD
            name: 'SUSPIRO COM MORANGO',
            description:
                'Bolo de chocolate recheado com creme de morango, decorado com suspiros de morango e morangos',
=======
            name: 'NAKED CAKE 2',
            description:
                'RECHEIO DE BRIGADEIRO DE NINHO COM MORANGO.',
>>>>>>> d4ebca058ea1be73ca32d4952a9493ef0fd39bce
            price: 12.29,
        },
        {
            id: '8',
            image: imagem8,
            type: ['tradicional', 'com leite'],
            name: 'BOLO COM DECORAÇÃO',
            description:
<<<<<<< HEAD
                'Bolo decorado com detalhes de pétalas de rosas, coberto de chantilly, recomendado para festas',
=======
                'BOLO COM DECORAÇÃO SILMPRES, E RECHEIO DE QUATRO LEITES.',
>>>>>>> d4ebca058ea1be73ca32d4952a9493ef0fd39bce
            price: 12.29,
        },
        {
            id: '9',
            image: imagem9,
            type: ['tradicional', 'com leite'],
<<<<<<< HEAD
            name: 'BOLO DE MORANGO',
            description: 'Bolo de morango com calda de chocolate, decorado com morangos, perfeito para sobremesas',
=======
            name: 'BOLO DE CHURROS',
            description: 'RECHEIO DE DOCE DE LEITE, E BRIGADEIRO DE CHURROS.',
>>>>>>> d4ebca058ea1be73ca32d4952a9493ef0fd39bce
            price: 12.29,
        },
        {
            id: '20',
            image: imagem20,
            type: ['especial', 'com leite'],
<<<<<<< HEAD
            name: 'BOLO RECHEADO',
            description: 'Bolo de chocolate com morango, decorado com raspas de chocolate e recheado com creme e morango',
=======
            name: 'BOLO DE CHANTINHO',
            description: 'RECHEIO DE BRIGADEIRO DE CHOCOLATE, COM MOUSSE DE MORANGO E LEITE NINHO.',
>>>>>>> d4ebca058ea1be73ca32d4952a9493ef0fd39bce
            price: 12.29,
        },
        {
            id: '21',
            image: imagem21,
            type: ['especial', 'com leite'],
<<<<<<< HEAD
            name: 'BOLO DE PAÇOCA',
            description: 'Bolo de paçoca recheado com creme de paçoca, deocorado com morango e calda de chocolate',
=======
            name: 'BOLO COM DECORAÇÃO',
            description: 'DECORADO COM PASTA AMERICA, COM RECHEIO DE NUTTELA E BRIGADEIRO DE LEITE NINHO.',
>>>>>>> d4ebca058ea1be73ca32d4952a9493ef0fd39bce
            price: 12.29,
        },
        {
            id: '22',
            image: imagem22,
            type: ['especial', 'com leite'],
<<<<<<< HEAD
            name: 'BOLO DE CHANTILLY',
            description: 'Bolo de morango coberto de chantilly, decorado com calda de chocolate e morangos',
=======
            name: 'BOLO DE CASAMENTO',
            description: 'RECHEIO DE QUATRO LEITES E BRIGADEIRO.',
>>>>>>> d4ebca058ea1be73ca32d4952a9493ef0fd39bce
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