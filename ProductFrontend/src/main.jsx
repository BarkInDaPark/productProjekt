import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar.jsx';
import Homepage from '../pages/HomePage.jsx';
import About from '../pages/About.jsx';
import Contact from '../pages/Contact.jsx';
import Products from '../pages/Products.jsx';
import Product from '../pages/Product.jsx';


const Layout = () => {
  return (
    <div>
      <Navbar />
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
      element: <Products />
    },
    {
      path: 'product/:id',
      element: <Product />
    }

  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
