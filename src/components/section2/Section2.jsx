// import React from 'react'
// import '../section2/Section2.css'

// const Section2 = ({ initialProducts }) => {
//     const [products, setProducts] = useState([]);
    
//     useEffect(() => {
//       fetch("https://dummyjson.com/comments")
//         .then(response => response.json())
//         .then(data => setProducts(data.products));
//     }, []);
//   return (
//     <section>
//         <div className="container">
//             <div className="customer_wrapper">
//                 <h3>OUR HAPPY CUSTOMERS</h3>
//                 <div className="customer_comment">
//                 {products.slice(1, 5).map(product => (
//               <div className='menu_cards' key={product.id}>
//                 <b className='menu'>{product.body}</b>
//                 <strong className='category'>{product.likes} </strong>
                
//               </div>
//             ))}
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Section2


import React, { useState, useEffect } from 'react';
import '../section2/Section2.css';

const Section2 = ({ initialComments }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then(response => response.json())
      .then(data => setComments(data.comments));
  }, []);

  return (
    <section>
      <div className="container">
        <div className="customer_wrapper">
          <h3>OUR HAPPY CUSTOMERS</h3>
          <div className="customer_comment">
            {comments.slice(0, 3).map(comment => (
              <div className='customer_cards' key={comment.id}>
                <b className='menu'>{comment.body}</b>
                <strong className='category'>{comment.likes}</strong>
                <p>{comment.user.username}</p>
                <p>{comment.user.fullName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
