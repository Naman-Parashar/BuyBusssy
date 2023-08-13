import { useEffect,useRef,createContext, useContext, useState } from "react";
import { db,auth } from "./Config/FirebaseConfig";
import { setDoc,doc,getDoc,updateDoc, increment,onSnapshot,collection, deleteDoc  } from "firebase/firestore";
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {signOut } from "firebase/auth";
import data from "./Data/data";
const itemContext = createContext();

export function useValue() {
  const value = useContext(itemContext);
  return value;
}


function CustomItemComponent(props) {
  const [isLogedIn, setLogedIn] = useState(false);
  const [signInSpinner, setSignInSpinner] = useState(false);
  const [userName, setUserName] = useState("Guest");
  const [signUpValue, setValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [signInValue, setValueIn] = useState({
    email: "",
    password: ""
  });
  const [cart,setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("")
  const [searchArray, setSearchArray] = useState([])
  const searchRef = useRef(null)
  const [grandTotal,setGrandTotal] = useState(0);


  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setUserName(user.displayName);
      }
      else {
        console.log("No user");
        setUserName("Guest");
      }
    })
  })

  function showPassword(action) {
    var x = document.getElementById("floatingPassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }

    if (action === "up") {
      var y = document.getElementById("floatingPassword2");
      if (y.type === "password") {
        y.type = "text";
      } else {
        y.type = "password";
      }
    }
  }
  const ToCartNotifi = (val)=> toast.success(`${val}`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

    const emptyField =(val)=> toast.error(`${val}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    
    const cartWarn=(val)=>toast.warn(`${val}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

    async function incQty(id,action,price){
      const washingtonRef = doc(db, signInValue.email, id);
      if(action === "inc"){
        await updateDoc(washingtonRef, {
          qty:increment(1),
        });
        // console.log(grandTotal);
        // getGrandTotal();
        ToCartNotifi("➕ Qty Increased");
      }
      else if(action === 'dec'){
        await updateDoc(washingtonRef, {
          qty:increment(-1),
        });
        // getGrandTotal();
        cartWarn(" ➖ Qty Decreased");
      }
    }

  async function addItemToCart(title,id,price,desc,url,index){
     id = id.toString();
    const docRef = doc(db, signInValue.email, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()){
      incQty(id,"inc",price);
    }
    else{
      await setDoc(doc(db, signInValue.email, id), {
        id:id,
        title:title,
        price:price,
        desc:desc,
        url:url,
        qty:1,
        createdOn: new Date().toLocaleString()
      });
      // getGrandTotal();
    ToCartNotifi('🛒 Item Added to cart');
    }
  };

 async function handelcartClick(){
  setSignInSpinner(true);
    await onSnapshot(collection(db, signInValue.email), (snapShot) => {
      const data = snapShot.docs.map((doc) => {
        return {
          ...doc.data(),
        };
      });
      setCart(data);     
    });
    setSignInSpinner(false);
  }


  async function logOut(){
    await signOut(auth).then(() => {
      console.log("Sign out s");
      setLogedIn(false);
      setValue({name:"",email:"",password:"",confirmPassword:""});
      setValueIn({email:"",password:""});
      setUserName("Guest");
    }).catch((error) => {
      console.log("sign out error");
    });
  }

 async function removeFromCart(id){
    await deleteDoc(doc(db, signInValue.email, id));
    emptyField("Item Removed From Cart");
  }

  function handleSearch(searchRef){
    let qr = searchRef.current.value;
    setSearchQuery(qr.toLowerCase());
    // filtring the data array that include searched querry and pushing it to arr
    const arr = data.filter((item)=>{
      if(item.title.toLowerCase().includes(searchQuery)){
        return item
      }
      return null
    })
    // setting the searchArray to the array of product searched
    setSearchArray(arr);
    
  }

  function getGrandTotal(){
    let d =0;
    cart.map((obj)=>(
      d = d+(obj.qty*obj.price)
    ));
    d =parseFloat(d.toFixed(3))
    setGrandTotal(d);
  }

  function checkOutClick(){
    getGrandTotal();
  }

 function placeOrder(){
  if(cart.length){
    cart.map(async(obj)=>(
      await deleteDoc(doc(db, signInValue.email, obj.id))
    ));
    setCart([]);
    setGrandTotal(0);
  }
  }
  return (
    <itemContext.Provider
      value={{
        showPassword,
        setValue,
        signUpValue,
        setValueIn,
        signInValue,
        isLogedIn,
        setLogedIn,
        userName,
        setUserName,
        signInSpinner,
        setSignInSpinner,
        addItemToCart,
        ToCartNotifi,
        handelcartClick,
        cart,
        incQty,
        logOut,
        emptyField,
        removeFromCart,
        handleSearch,
        searchArray,
        searchRef,
        searchQuery,
        grandTotal,
        setGrandTotal,
        checkOutClick,
        placeOrder
      }}
    >
      <>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {props.children}
      </>
    </itemContext.Provider>
  );
}

export default CustomItemComponent;