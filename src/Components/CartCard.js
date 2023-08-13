import { GrSubtractCircle,GrAddCircle } from 'react-icons/gr';
import { useValue } from '../ItemsContext';
function CartCard({url,qty,price,desc,id}) {
  const {incQty,removeFromCart} = useValue();
    return ( 
        <>
         <div class="card" style={{ width: "18rem", boxShadow: "0px 0px 9px 1px rgba(0,0,0,0.75)" }}>
        <img src={url} class="card-img-top" alt="Im" />
        <div class="card-body">
          <p class="card-text">{desc}...</p>
          <h2>$ {price}</h2>
        </div>
        <div class="mb-3">
          Qty: <GrSubtractCircle size="1.3rem" style={{cursor:"pointer"}} onClick={()=>qty < 2 ?removeFromCart(id):incQty(id,"dec",price)}/> <strong> {qty} </strong> <GrAddCircle size="1.3rem" style={{cursor:"pointer"}} onClick={()=>incQty(id,"inc",price)}/>
        </div>
        <div class="d-grid gap-2 d-md-block mb-3">
          <button class=" btn btn-outline-danger" type="button" onClick={()=>removeFromCart(id,price,qty)}>Remove From Cart</button>
        </div>
      </div>
        </>
     );
}

export default CartCard;