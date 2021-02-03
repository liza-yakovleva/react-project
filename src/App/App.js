import React, {Component} from "react";
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

import '../common/style/reset.css'
import '../common/style/base.css'




class App extends Component   {
  state = {
    cardData: {
      count: 0,
      price:0,
    }
  }
  render() {
    return (< >
      <Header />
      <Main />
      <Footer />
    </>
    )
  }
}
// const App = () => {
//   return ( < >
//     <Header/>
//     <Main/>
//     <Footer/>
//     </>
//   )
// }

export default App

