import React from 'react';
import './Pay.css'

function Payment() {
  const redirectToPage = () => {
    window.location.href = 'http://localhost:8080/redirectToPage';
  };

  return (
    <div>
      <div className="cont">
<img src='logo.png' height={100} width={120}></img>
<button onClick={redirectToPage}>Click here to get prime membership</button>
      </div>
      
    </div>
  );
}

export default Payment;
