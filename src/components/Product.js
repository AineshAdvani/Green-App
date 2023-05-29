import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

import close from '../assets/close.svg';

const Product = ({ product, provider, greenplanet, togglePop }) => {

    return (
        <div className="product">
            <div className="product__details">
                <div  className="product__image">
                    <img src = {product.image} alt = "Product"/>
                </div>
                <div className="product__overview">
                    <h1>{product.name}</h1>
                    <p>
                        <strong>{product.attributes[2].value}</strong> bds |
                        <strong>{product.attributes[3].value}</strong> ba |
                        <strong>{product.attributes[4].value}</strong> sqft
                    </p>
                    <p>{product.address}</p>
                    <h2>{product.attributes[0].value} ETH</h2>

                    <div>
                        <button className='product__buy' >
                            Buy
                        </button>
                    </div>
                    <button className='product__contact' >
                        Contact Seller
                    </button>
                    
                </div>
            </div>
        
            <button onClick={togglePop} className="product__close">
                    <img src={close} alt="Close" />
            </button>
        </div>
    );
}

export default Product;
