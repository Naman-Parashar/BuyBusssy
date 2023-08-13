import Navbar from "./Components/Navbar";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CustomItemComponent from "./ItemsContext";
import MyOrder from "./Pages/MyOrder";
import Cart from "./Pages/Cart";
import PlaceOrder from "./Pages/PlaceOrder";


function App() {


  const R = createBrowserRouter([
    {
      path: "/", element: <Navbar />, errorElement: <ErrorPage />, children: [
        { index: true, element: <Home /> },
        { path: "/sign-in", element: <SignIn/> },
        { path: "/sign-up", element: <SignUp /> },
        { path: "/my-order", element: <MyOrder/> },
        { path: "/cart", element: <Cart/>},
        { path: "/order-placed", element: <PlaceOrder/>},
      ]
    },
  ]);

  return (    
      <CustomItemComponent>
        <RouterProvider router={R} />
      </CustomItemComponent>

  );
}

export default App;
