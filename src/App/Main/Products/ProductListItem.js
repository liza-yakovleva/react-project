import React from "react";
import "./ProductListItem.css";
import PropTypes from 'prop-types'; 

const ProductListItem = ({
  name,
  description,
  type,
  capacity,
  price,
  image,
}) => {
  return (
   
    <div className="product-list-item">
      <div className="product-img">
        <img src={image} alt="img"/>
      </div>
      <div className="page-title">{name}</div>
      <div className="product-description">{description}</div>
      <div className="product-features">Type: {type}</div>
      <div className="product-features">Capacity:{capacity}Gb</div>
      
      <div className="product-price">$ {price}</div>
      <div className="btn-add-to-cart">Add to cart</div>
       
      </div>
      
      
					
			
  )

}


ProductListItem.propTypes = {
  name:PropTypes.string.isRequired,
  description:PropTypes.string,
  type:PropTypes.string.isRequired,
  capacity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
 
      
}
ProductListItem.defaultProps = {
  description:"No description...  "
}
export default ProductListItem 