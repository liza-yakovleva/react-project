import React from "react";
import "./ProductListItem.css"

const ProductListItem = ({
  name,
  description,
  type,
  capacity,
  price,
}) => {
  return (
   
    <div className="product-list-item">
      <div className="page-title">{name}</div>
      <div className="product-description">{description}</div>
      <div className="product-features">Type: {type}</div>
      <div className="product-features">Capacity:{capacity}Gb</div>
      
      <div className="product-price">$ {price}</div>
      <div className="btn-add-to-cart">Add to cart</div>
       
      </div>
      
      
					
			
  )

}

export default ProductListItem 