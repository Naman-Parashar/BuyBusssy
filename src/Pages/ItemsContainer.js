import { useNavigate } from "react-router-dom";
import ItemCard from "../Components/ItemCard";
import { useValue } from "../ItemsContext";
import data from "../Data/data";
function ItemsContainer() {
    const {userName,isLogedIn,addItemToCart,searchQuery, searchArray} = useValue();
    const nav = useNavigate();
    function handelAddToCart(title,id,price,desc,url,index) {
        if(isLogedIn){
          addItemToCart(title,id,price,desc,url,index);
        }else{
          nav('/sign-in');
        }
      }
    return (
        <>
        <div class="container text-center">
        <h1 class="mt-2">Welcome, {userName}</h1>
  <div class="row row-cols-3 ">
  {
                  searchQuery ?
                    searchArray.map((obj,index)=>(
                       <div class="col" style={{marginLeft:"70px"}}> <ItemCard index={index} id={obj.id} price={obj.price} rating={obj.rating} title={obj.title} url={obj.image} desc={obj.description} handelAddToCart={handelAddToCart} /> </div>
                    ))
                    :
                  data.map((obj,index)=>(
                    <div class="col"><ItemCard index={index} id={obj.id} price={obj.price} rating={obj.rating} title={obj.title} url={obj.image} desc={obj.description} handelAddToCart={handelAddToCart} /></div>
                  ))      
                }
  </div>
 </div>
        </>
    );
}

export default ItemsContainer;