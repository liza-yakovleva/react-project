import React from "react";
import ProductListItem from './ProductListItem';
import products from './products';



const ProductList = () => {
  return (
    <>
      <h2 className="page-title">Products List</h2>
      <div className="row">
        {products.map(( 
          {
            name,
            description,
            type,
            capacity,
            price,
          }
        ) => (
          <div className="col-lg-6">
          
            <ProductListItem
          
              name={name}
              description={description}
              type={type}
              capacity={capacity}
              price={price}
            />
          </div>
        ))
          }

      </div>
      </>
					
			
  )
}

export default ProductList