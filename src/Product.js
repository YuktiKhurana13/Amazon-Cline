import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id,price,title,rating,img}) {

    const [{state},dispatch]=useStateValue();

    const addToBasket=()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                img:img,
                price:price,
                rating:rating
            }
        })
    };

    return (
        <div className="product">
            <div className="product_info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {   Array(rating)
                    .fill()
                    .map((_)=>(
                    <p></p>
                    ))}
            </div>

            </div>
            <img src={img} alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
