import React, { Component } from "react";
import "./ProductListItem.css";
import PropTypes from 'prop-types'; 

class ProductListItem extends Component {
  render() {
    const {
      name,
      description,
      type,
      capacity,
      price,
      image,
    } = this.props;
    

     return (
   
    <div className="product-list-item">
      <div className="product-img">
        <img src={this.props.image} alt={this.props.name}/>
      </div>
      <div className="page-title">{this.props.name}</div>
      <div className="product-description">{this.props.description}</div>
      <div className="product-features">Type: {this.props.type}</div>
      <div className="product-features">Capacity:{this.props.capacity}Gb</div>

      <div className="product-quantity">
        <button>-</button>
        <input type="text" value="1" readOnly/>
        <button>+</button>
      </div>

      <div className="product-price">${this.props.price}</div>
      <div className="btn-add-to-cart">Add to cart</div>
       
      </div>
      
      
					
			
  )
  }
}


// const ProductListItem = ({
//   name,
//   description,
//   type,
//   capacity,
//   price,
//   image,
// }) => {
//   return (
   
//     <div className="product-list-item">
//       <div className="product-img">
//         <img src={this.props.image} alt={this.props.name}/>
//       </div>
//       <div className="page-title">{this.props.name}</div>
//       <div className="product-description">{this.props.description}</div>
//       <div className="product-features">Type: {this.props.type}</div>
//       <div className="product-features">Capacity:{this.props.capacity}Gb</div>

//       <div className="product-quantity">
//         <button>-</button>
//         <input type="text" value="1" readOnly/>
//         <button>+</button>
//       </div>

//       <div className="product-price">${this.props.price}</div>
//       <div className="btn-add-to-cart">Add to cart</div>
       
//       </div>
      
      
					
			
//   )

// }


ProductListItem.propTypes = {
  name:PropTypes.string.isRequired,
  description:PropTypes.string,
  type:PropTypes.string.isRequired,
  capacity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
 image: PropTypes.string,
      
}
ProductListItem.defaultProps = {
  description: "No description...  ",
  image: "https://lh3.googleusercontent.com/proxy/U7BUKb6Y8H9WcBYhO4RT9Vc41-PaHHjipz1a386pN7Xw_os6QBbOYrznYhM9YpZtkWM0jTmz9pT-VM_XSKr38g",
}
export default ProductListItem 