import React from 'react';

const ProductTable = ({products}) => {


    return (
        <div>
           <h1>{products.length}</h1>

           <table>
              <thead>
                <tr>
                    <th>No.</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
              </thead>
              <tbody>
             
                   {
                    products.map((product, index) =>  
                        <tr key={index+1}>
                        <td>{index+1}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td>{}</td>
                       
                        </tr>
                        
                    )
                   }
                
              </tbody>
           </table>
        </div>
    );
};

export default ProductTable;