import React, { useState } from "react";
import StripeContainer from "./Stripe/StripeContainer";
import strawberry from './strawberry.jpg';

const App = () => {

  const [showMyImage, setShowMyImage] = useState(false);

  return (
    <div className="App">
      {showMyImage ?
      <StripeContainer /> :
      <div>
        <p>FRUIT SHOP</p>
        <p>$9.99</p>
        <img src={strawberry} width="500"/>
        <div>
        <button onClick={() => setShowMyImage(true)}>BUY</button>
      </div>
      </div>
    }
    </div>
  );
};

export default App;