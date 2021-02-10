import React from "react";
const Cart = ({
	productsInCart
}) => {
  return (
		<div className="cart text-center">
			{
				Object.keys(productsInCart).map((id) => 
					<div key={id}>{id}:{productsInCart[id]}</div>
				) }
			
    </div>
  );
}

export default Cart 