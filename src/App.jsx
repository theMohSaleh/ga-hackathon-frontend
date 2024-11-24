// App.jsx

import { useState, useEffect, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import SignupForm from './components/SignupForm/SignupForm'
import SigninForm from './components/SigninForm/SigninForm'
import ProductList from '../src/components/ProductList/ProductList'
import ProductDetails from '../src/components/ProductDetails/ProductDetails'
import * as authService from '../src/services/authService';
import * as productService from '../src/services/productService';

import 'bootstrap/dist/css/bootstrap.min.css';
export const AuthedUserContext = createContext(null);

const App = () => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(authService.getUser());

  const handleSignout = () => {
    authService.signout()
    setUser(null)
  }

  useEffect(() => {
    async function getProducts() {
      try {
        const allProducts = await productService.index();
        if (products.error) {
          throw new Error(products.error)
        }
        setProducts(allProducts);
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
  }, [])

  return (
    <>
      <NavBar user={user} handleSignout={handleSignout} />
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Dashboard user={user} />} />
            <Route path="/products" element={<ProductList products={products} />} />
            <Route path="/products/:productId" element={<ProductDetails products={products} />} />
          </>
        ) : (
          <Route path="/" element={<Landing />} />
        )}
        <Route path='/signup' element={<SignupForm setUser={setUser} />} />
        <Route path='/signin' element={<SigninForm setUser={setUser} />} />
      </Routes>
    </>
  );
};

export default App;