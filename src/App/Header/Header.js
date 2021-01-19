import React from "react";
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import Cart from './Cart/Cart';
import './header.css'
import './Menu/menu.css'
import './Cart/cart.css'

const Header = () => {
  return (
   	<header class = "header">
   	  <div class = "container">
				<div class="row">
					 <Logo/>
           <Menu/>
           <Cart/>
				</div>
			</div>
		</header>
  )
}

export default Header
 