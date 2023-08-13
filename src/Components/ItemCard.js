function ItemCard({handelAddToCart,url,desc,price,rating,title,id,index}) {
  return (
    <>
      <div class="card mb-4" style={{ width: "18rem", boxShadow: "0px 0px 9px 1px rgba(0,0,0,0.75)" }}>
        <img src={url} class="card-img-top" height="350px" alt="Im" />
        <div class="card-body">
        <div>
          <h3><u>{title}</u></h3>
        </div>
          <p class="card-text">{desc.slice(0,90)}...</p>
          <h2>$ {price}</h2>
        </div>
        <div style={{display:"flex",justifyContent:"space-around"}}>
        <h6>Rating : <strong>{rating.rate}</strong></h6>
        <h6>Qty : <strong>{rating.count}</strong></h6>
        </div>
        <div class="d-grid gap-2 d-md-block">
          <button onClick={()=>handelAddToCart(title,id,price,desc,url,index)} class=" btn btn-outline-primary" type="button">Add To Cart</button>
        </div>
        <div>
          **Tax Included
        </div>
      </div>
    </>
  );
}

export default ItemCard;