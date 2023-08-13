// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import "../Styles/payment.css";
function PlaceOrder() {
    // const nav = useNavigate();
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         nav("/");        
    //     },5000);
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // },[]);
    return ( 
        <>
         <div className="payment-complete">
      <h1>Payment Successful!</h1>
      <p>Thank you for your payment. Your order has been successfully processed.</p>
      <p>A confirmation email has been sent to your registered email address.</p>
    </div>
        </>
     );
}

export default PlaceOrder;