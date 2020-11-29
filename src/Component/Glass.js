import React, { Component } from 'react';
import style from './Glass.module.css';

class Glass extends Component {
    state = {
        imgSrc: './img/v9.png ',
        name: 'GUCCI G8850U',
        desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.',

    }
    arrProduct = [

        { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 4, price: 30, name: 'DIOR D6005U', url: './img/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 5, price: 30, name: 'PRADA P8750', url: './img/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 6, price: 30, name: 'PRADA P9700', url: './img/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 7, price: 30, name: 'FENDI F8750', url: './img/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 8, price: 30, name: 'FENDI F8500', url: './img/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 9, price: 30, name: 'FENDI F4300', url: './img/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    ];
    changeColor = (product) => {
        this.setState({
            imgSrc: `${product.url}`,
            name: `${product.name}`,
            desc: `${product.desc}`,


        })
    }

    RenderGlassWithMap = () => {
        return this.arrProduct.map((product, index) => {

            return <div className="col-2" key={index}>
                <img src={product.url} width="100%" onClick={() => {
                    this.changeColor(product);
                }} />

            </div>
        });
    }

    render() {
        return (
            <div className={`${style.back_ground}`}>
                <h3 className={`${style.header}`}>Try Glass App Online</h3>
                <div className="container ">
                    <div className="row ">
                        <div className={`col-6 p-0 m-0 ${style.model}`}>
                            <img src="./img/model.jpg" className="h-70 w-100" />
                            <img src={this.state.imgSrc} className={` ${style.glass}`} />
                            <div className={`${style.overlay}`}>
                                <h3>{this.state.name}</h3>
                                <p>{this.state.desc}</p>
                            </div>




                        </div>
                        <div className="col-6 p-0 m-0  ">
                            <img src="./img/model.jpg" className="h-70 w-100" />
                        </div>
                    </div>
                    <div className="row mt-2">
                        {this.RenderGlassWithMap()}
                    </div>


                </div>
            </div>
        )
    }
}

export default Glass;