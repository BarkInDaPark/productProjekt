import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar.jsx';
import Homepage from '../pages/HomePage.jsx';
import About from '../pages/About.jsx';
import Contact from '../pages/Contact.jsx';
import Products from '../pages/Products.jsx';
import Product from '../pages/Product.jsx';
import Sidebar from '../navbar/Sidebar.jsx';
import Search from '../pages/Search.jsx';
import './global.css';
import Cart from '../pages/Cart.jsx';
import ToastBar from '../navbar/ToastBar.jsx';

function App(){
const [shoppingCart, setShoppingCart] = useState([]);
const [cartLength, setCartLength] = useState(0);

const Layout = () => {
  return (
    <div>
      
      <Navbar shoppingCart={shoppingCart}/>
      <Outlet />
    </div>
  )
};

const router = createBrowserRouter([{
  element: <Layout />,
  errorElement: <div>404 Page not found!</div>,
  children: [
    {
      path: '/',
      element: <Homepage />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: 'contact',
      element: <Contact />
    },
    {
      path: 'products',
      element: <div><Sidebar /><Products shoppingCart={shoppingCart} cartLength={cartLength} setCartLength={setCartLength}/></div>,
      
    },
    {
      //the id here is for categorys ex electronics, outdoors etc
      path: 'products/:id',
      element: <div><Sidebar /><Products /></div>
    },
    {
      //the id here is for a single products id
      path: 'product/:id',
      element: <Product shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>
    },
    {
      path: 'search/:id',
      element: <Search />
    },
    {
      path: 'cart',
      element: <Cart />
    }



  ]
}])
  return (
    <RouterProvider router={router} />
  )
}

// const [shoppingCart, setShoppingCart] = useState([]);

// const Layout = () => {
//   return (
//     <div>
//       <Navbar shoppingCart={shoppingCart}/>
//       <Outlet />
//     </div>
//   )
// };

// const router = createBrowserRouter([{
//   element: <Layout />,
//   errorElement: <div>404 Page not found!</div>,
//   children: [
//     {
//       path: '/',
//       element: <Homepage />
//     },
//     {
//       path: '/about',
//       element: <About />
//     },
//     {
//       path: 'contact',
//       element: <Contact />
//     },
//     {
//       path: 'products',
//       element: <div><Sidebar /><Products /></div>,
      
//     },
//     {
//       //the id here is for categorys ex electronics, outdoors etc
//       path: 'products/:id',
//       element: <div><Sidebar /><Products /></div>
//     },
//     {
//       //the id here is for a single products id
//       path: 'product/:id',
//       element: <Product setShoppingCart={setShoppingCart}/>
//     },
//     {
//       path: 'search/:id',
//       element: <Search />
//     },
//     {
//       path: 'cart',
//       element: <Cart />
//     }



//   ]
// }])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
)
