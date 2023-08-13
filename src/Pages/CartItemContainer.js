import CartCard from "../Components/CartCard";
import { useValue } from "../ItemsContext";
function CartItemContainer() {
    const { cart } = useValue();
    return (
        <>
            <div class=" text-center row row-cols-1 row-cols-md-2 g-4 mt-4">
                {
                    cart.map((obj, index) => (
                        <div class="col mb-4">
                            <div class="card">  <CartCard index={index} price={obj.price} url={obj.url} qty={obj.qty} desc={obj.desc.slice(0, 90)} id={obj.id} /> </div>
                        </div>
                    ))
                }


            </div>

        </>
    );
}

export default CartItemContainer;