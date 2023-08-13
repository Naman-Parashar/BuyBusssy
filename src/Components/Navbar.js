import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineShoppingCart,AiOutlineHome } from 'react-icons/ai';
import { BsBasket3 } from 'react-icons/bs';
import { GoSignIn } from 'react-icons/go';
import { Outlet, NavLink,Link } from 'react-router-dom';
import { useValue } from '../ItemsContext';
import Styles from "../Styles/style.module.css"
function Navbar() {
  const {isLogedIn,handelcartClick,logOut,searchRef,handleSearch,checkOutClick} = useValue();
  
  return (
    <>
    <div>
      <nav class="navbar navbar-expand-lg" style={{ backgroundColor: " #e3f2fd", boxShadow: "0px 6px 0px 0px rgba(202,216,219,1)" }}>
        <div class="container-fluid">
          <NavLink className={Styles.link} style={{ marginRight: "1%" }} to="/" > <FiShoppingCart /> BuyBusssy</NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item ms-4">
                <NavLink className={Styles.link} style={({ isActive }) => (isActive ? { color: "#6050DC" } : null)} to="/" ><AiOutlineHome/> Home </NavLink>
              </li>
             {
              isLogedIn ?
              <>

            <li class="nav-item ms-5">
              <NavLink className={Styles.link} style={({ isActive }) => (isActive ? { color: "#6050DC" } : null)} to="/my-order" onClick={checkOutClick} ><BsBasket3/> My Order </NavLink>
            </li>

            <li class="nav-item ms-5">
              <NavLink onClick={handelcartClick} className={Styles.link} style={({ isActive }) => (isActive ? { color: "#6050DC" } : null)} to="/cart" ><AiOutlineShoppingCart/> Cart </NavLink>
            </li>

                 <li class="nav-item ms-5">
              <Link onClick={logOut} className={Styles.link} to="/" > Log-Out</Link>
            </li>
            </> 

                   :
             <li class="nav-item ms-3">
             <NavLink className={Styles.link} style={({ isActive }) => (isActive ? { color: "#6050DC" } : null)} to="/sign-in" ><GoSignIn />  Sign-In</NavLink>
           </li>
             } 
            </ul>
            <form class="d-flex" role="search">
              <input  ref={searchRef} onChange={()=> handleSearch(searchRef)} class="form-control me-4" type="search" placeholder="Search By Name" aria-label="Search" />
            </form>
          
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
    </>
  );
}

export default Navbar;