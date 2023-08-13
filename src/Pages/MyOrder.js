// import {ProgressBarSpinner} from "../Components/Spinner";
import { Link } from "react-router-dom";
import { useValue } from "../ItemsContext";
import "../Styles/table.css";
function MyOrder() {
    const {cart,grandTotal,placeOrder} = useValue();
    return ( 
        <>
           
           {
            cart.length === 0 ? null:<h2 style={{textAlign:"center"}}>Ordered on: {new Date().toLocaleString()} </h2>
           } 
            <table className="merged-table">
      <thead>
        <tr>
          <th >Item</th>
          <th>Price</th>
          <th>Quentity</th>
        </tr>
      </thead>
      <tbody>
            {
                cart.map((obj,index)=>(
                    <tr>
                        <td>{obj.title}</td>
                        <td>{obj.price}</td>
                        <td>{obj.qty}</td>
                    </tr>
                ))
            }

<tfoot>
        <tr>
          <td>Grand Total</td>
          <td>{grandTotal}</td>
        </tr>
      </tfoot>

      </tbody>
    </table>
{
    cart.length === 0 ? null : <Link to="/order-placed"><button onClick={placeOrder} type="button" class="btn btn-outline-success ms-5">Place Order</button></Link>
}
    
        </>
     );
}

export default MyOrder;