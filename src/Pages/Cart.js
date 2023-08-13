import CheckOutBtn from "../Components/CheckOutBtn";
import Styles from "../Styles/style.module.css"
import CartItemContainer from "./CartItemContainer";
function Cart() {
    return ( 
        <>
          <div className={Styles.homeMain}>
      <CheckOutBtn/>
      <div className={Styles.ItemscontainerComp}>
        <CartItemContainer/>
      </div>
    </div>
        </>
     );
}

export default Cart;