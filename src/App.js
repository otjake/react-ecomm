import React, { useState } from "react";
import Header from "./Components/Layout/Header-Wrapper/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart-Wrapper/Cart";
import CartContextProvider from "./store/CartContextProvider";
function App() {
  //Add a login,user can add to cart,but has to login to see full cart
  // A search bar
  //price filter

  const [showCartModal, setShowCartModal] = useState(false)

  const ShowCartModalHandler = () => {
    console.log("the car", showCartModal)

    setShowCartModal(true)
  }


  const CloseCartModalHandler = () => {
    setShowCartModal(false)
  }


  return (
    <CartContextProvider>

      {
      /* conditionally show cart and pass the close modal function */
      showCartModal &&
        <Cart
          onClose={CloseCartModalHandler}
        />
      }
      <Header
        onOpen={ShowCartModalHandler}
      />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
