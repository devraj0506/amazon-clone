import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from './StateProvider'

function CheckoutProduct({id,title,image,price,rating}) {
    const [{basket},dispatch] = useStateValue();


    const RemoveFromCart=()=>{
        // remove from basket logic
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });

    };

    return (
        <div className='checkout-product'>
            <img className='cp-image' src={image} alt="" />
            
            <div className="checkout-info">
                <p className='cp-title'>{title}</p>

                <p className="cp-price"><small>$</small>
                <strong>{price}</strong></p>

                <div className="cp-rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>


        <button onClick={RemoveFromCart}>Remove from cart</button>
                
            </div>
        </div>
    )
}

export default CheckoutProduct
