import React from "react";
import "./Product.css";
import {useStateValue} from './StateProvider.js'


function Products({ id, title, image, price, rating }) {
  const [{basket}, dispatch] = useStateValue();



  const addToBasket= () => {
    // add item to basket
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })

  };



  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>

        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to cart</button>
    </div>
  );
}

export default Products;
