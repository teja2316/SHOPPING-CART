import React from 'react';

const Product = (props) => {
  const { product, onAdd } = props;
  return (
    <div className='card'><center>
      <img className="small col-md-4" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>Rs.{product.price}</div>
      <div>{product.description}</div>
      <div><p align="center">
        <button type='button' className='btn btn-primary'  onClick={() => onAdd(product)}>Add To Cart</button>
        </p>
      </div></center>
    </div>
  ); 
}

export default Product;


