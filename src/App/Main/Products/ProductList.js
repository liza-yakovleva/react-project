import React from "react";
import ProductListItem from './ProductListItem';

const ProductList = () => {
  return (
    <>
      <h2 className="page-title">Products List</h2>
      <div className="row">
        <div className="col-lg-6">
          <ProductListItem 
          
          name="iPhone X"
          description="This is iPhone 12"
          type="phone"
          capacity="64"
            price="345"
            />
        </div>
        <div className="col-lg-6">
          <ProductListItem 
          name="iPhone 12"
            description="This is iPhone 12"
          type="phone"
          capacity="64"
            price="345"
            />
        </div>
        <div className="col-lg-6">
          <ProductListItem 
          name="iPhone XS"
            description="This is iPhone 12"
          type="phone"
          capacity="64"
            price="345"
            />
        </div>
        <div className="col-lg-6">
          <ProductListItem 
          name="iPhone 8 plus"
            description="This is iPhone 12"
          type="phone"
          capacity="64"
            price="345"
            />
      </div>
      </div>
      </>
					
			
  )
}

export default ProductList