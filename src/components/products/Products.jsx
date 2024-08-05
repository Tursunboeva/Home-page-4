import React, { useEffect, useState } from 'react';
import '../products/Products.css';

const Products = ({ initialProducts }) => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(response => response.json())
      .then(data => setProducts(data.products));
  }, []);
  
  return (
    <section>
      <div className="container">
        <div className="arriwals_wrapper">
          <h3 className='arriwals_title'>NEW ARRIVALS</h3>
          <div className="arriwals_box">
            {products.slice(1, 5).map(product => (
              <div className='menu_cards' key={product.id}>
                <img className='menu_img' src={product.images[0]} alt='' />
                <b className='menu'>{product.title}</b>
                <strong className='category'>{product.category} </strong>
                <span>${product.price}</span>
              </div>
            ))}
          </div>
          <button className='arriwals_btn'>View All</button>
        </div>

        <div className="arriwals_wrapper">
          <h3 className='arriwals_title'>TOP SELLING</h3>
          <div className="arriwals_box">
            {products.slice(5, 9).map(product => (
              <div className='menu_cards' key={product.id}>
                <img className='menu_img' src={product.images[0]} alt='' />
                <b className='menu'>{product.title}</b>
                <strong className='category'>{product.category} </strong>
                <span>${product.price}</span>
              </div>
            ))}
          </div>
          <button className='arriwals_btn'>View All</button>
        </div>
      </div>
    </section>
  );
};

export default Products;