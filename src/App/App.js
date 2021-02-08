import React, {Component} from "react";
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
// import {price} from './Products/ProductListItem'
import '../common/style/reset.css'
import '../common/style/base.css'




class App extends Component {
  state = {
    cartData: {
      count: 100,
      price: 1000,
    },
  };

  AddToCard = (props) => {
    this.setState((prevState) => ({
      cartData: {
      // count: 1000,
      // price: 10000,
      count: prevState.count + this.props.productCount,
      price: prevState.price + this.props.productCount * this.props.price,
      },
    }));
  };

  render() {
    return (
      <>
        <Header cartData={this.state.cartData} />
        <Main AddToCard={this.AddToCard} />
        <Footer />
      </>
    );
  }
}


export default App

