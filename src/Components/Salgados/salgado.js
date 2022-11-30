import React from 'react'
import "./salgado.css"
import Footer from '../Footer/footer'
import Header from '../Header/header'
import Card from "./CARDSSALGADOS/index"
import "./salgado.css"


// import imagem1 from "./imagens/mousse-de-maracuja.jpg"
import imagem1 from "./imagensSalgados/minipizza.jpg"
import imagem2 from "./imagensSalgados/minicachorroquente.jpg"
import imagem3 from "./imagensSalgados/minihambuerguer.jpg"
import imagem4 from "./imagensSalgados/risolios.jpg"
import imagem5 from "./imagensSalgados/coxinha.jpg"
import imagem6 from "./imagensSalgados/bolinhaqueijo.jpg"
import imagem7 from "./imagensSalgados/pastelforno.jpg"
import imagem8 from "./imagensSalgados/salsichadeforno.jpg"
import imagem9 from "./imagensSalgados/empada.jpg"
// import imagem10 from "./imagens/chocolotae.jpg"
// import imagem11 from "./imagens/calda.jpg" 
// import imagem12 from "./imagens/calda.jpg" 

const Salgado =() => {
    const cards_salgado = [
        {
            id: '4',
            image: imagem5,
            type: ['tradicional', 'gelado'],
            name: 'COXINHA DE FRANGO',
            description: 'UNIDADE',
            price: 0.99,
        },
        {
            id: '5',
            image: imagem4,
            type: ['tradicional', 'com leite'],
            name: 'RISOLIOS DE CARNE',
            description: 'UNIDADE',
            price: 1.49,
        },
        {
            id: '6',
            image: imagem6,
            type: ['tradicional', 'com leite'],
            name: 'BOLINHAS DE QUEIJO',
            description:
                'UNIDADE',
            price: 1.49,
        },
        {
            id: '2',
            image: imagem1,
            type: ['tradicional'],
            name: 'MINI PIZZA',
            description: 'UNIDADE',
            Price:  4.49,
        },
        {
            id: '2',
            image: imagem2,
            type: ['tradicional'],
            name: 'CACHORRO QUENTE',
            description: 'UNIDADE',
            price: 5.99,
        },
        {
            id: '3',
            image: imagem3,
            type: ['tradicional'],
            name: 'MINI HAMBUERGUER',
            description: 'UNIDADE',
            price: 7.99,
        },
        
        {
            id: '7',
            image: imagem7,
            type: ['tradicional', 'com leite'],
            name: 'PASTEL DE FORNO',
            description:
                'UNIDADE',
            price: 3.99,
        },
        {
            id: '8',
            image: imagem8,
            type: ['tradicional', 'com leite'],
            name: 'DOGZINHO',
            description:
                'UNIDADE',
            price: 2.99,
        },
        {
            id: '9',
            image: imagem9,
            type: ['tradicional', 'com leite'],
            name: 'EMPADINHA DE FRANGO',
            description: 'UNIDADE',
            price: 12.29,
        },
        // {
        //     id: '10',
        //     image: imagem10,
        //     type: ['especial', 'com leite'],
        //     name: 'BOLO DE CHOCOLATE TRADICIONAL',
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
        //     image: imagem12,
        //     type: ['especial', 'com leite'],
        //     name: 'PUDIM',
        //     description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        //     price: 12.29,
        // },


    ]
    return (
        <div>
        
            <Header />

            <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {cards_salgado.map(({ image, id, name, description, price, type }) => (
                    <div className="col-md-4" key={id}>
                        <Card imageSource={image} price={price} id={id} name={name} description={description} type={type} />
                    </div>
                ))}
            </div>
        </div>


            <Footer/>
        </div>
    )
}
    
export default Salgado