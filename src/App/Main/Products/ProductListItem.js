import React, { Component } from "react";
import "./ProductListItem.css";
import PropTypes from 'prop-types'; 




class ProductListItem extends Component {

//   constructor() {
//   super();
//   this.onIncrementClick = this.onIncrementClick.bind(this)
// }

  state = {
    productCount: 1,
    color:"green",
}

  onIncrementClick() {
    this.setState(prevState => ({
      productCount:prevState.productCount + 1,
    }))
  }

   onDecrementClick = () => {
    this.setState(prevState => ({
      productCount:prevState.productCount - 1,
    }))
  }


   changeColor = () => {
    this.setState ({
      color:"red",
    })
  }
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
        <img src={image} alt={name}/>
      </div>
      <div className="page-title">{name}</div>
         <div className="product-description">{description}</div>
         <p>Color:{this.state.color}</p>
         <button onClick={() => this.changeColor()}>Change color</button>
      <div className="product-features">Type: {type}</div>
      <div className="product-features">Capacity:{capacity}Gb</div>

      <div className="product-quantity">
           <button
             onClick={() => this.onDecrementClick()}
             disabled={this.state.productCount<=1}
           >-</button>
        <input type="text" value={this.state.productCount} readOnly/>
           <button 
             onClick={() => this.onIncrementClick()}
              disabled={this.state.productCount>=10}
           >+</button>
      </div>

      <div className="product-price">${price}</div>
      <div className="btn-add-to-cart">Add to cart</div>
       
      </div>
      
      
					
			
  )
  }
}


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