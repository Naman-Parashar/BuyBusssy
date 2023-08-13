import { Link } from "react-router-dom";
import Styles from "../Styles/style.module.css"
import { useValue } from "../ItemsContext";
function CheckOutBtn() {
    const {checkOutClick} = useValue();
    return (
        <>
            <div className={Styles.filter}>
                <h3 className={Styles.filterTitle}><strong>Checkout</strong></h3>
                <hr />
                {/* <p style={{ marginLeft: "5%" }}> Price : {grandTotal}<span></span></p> */}
                <h3 style={{ marginLeft: "5%" }}><Link to="/my-order"> <button type="button" onClick={checkOutClick} class="btn btn-warning">Checkout</button></Link>  </h3>
            </div>
        </>
    );
}
export default CheckOutBtn;