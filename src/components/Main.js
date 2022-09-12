import React from 'react';
import Product from './Product';

const Main = (props) => {
  const { products, onAdd } = props;
  return (
    <main className="row">

      <center><h2><b>Products</b></h2></center>

      <div className="row">

        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}



      </div>
    </main>
  );
}

export default Main;
