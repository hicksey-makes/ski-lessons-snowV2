import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Schedule from './Reserve/Schedule';
import About from './Info/About';
import '../css/App.css';
import Cart from './Reserve/cart.js';

export default function App() {
  const [cart, setCart] = useState([]);

  

  function handleLessonAdd(newProduct) {
    const existingProduct = cart.find(product => {
      return product.id === newProduct.id;
    });

    if (existingProduct) {
      const updatedCart = cart.map(product => {
        if (product.id === newProduct.id) {
            return {...product, quantity: product.quantity + 1};
        }
        return product;
        });
      setCart(updatedCart);
    } else {
      const newerProduct = {...newProduct, quantity: 1};
      setCart([...cart, newerProduct]);
    }
  }

  function handleLessonDelete(id) {
    const updatedCart = cart.filter(product => {
      return product.id !== id;
    });
    setCart(updatedCart);
  }

  return (
    <BrowserRouter>
      <main>
          <Switch>
            <Route className="backdrop" exact path="/">
            <div className="img-snow">
            {/*<div className="d-block ml-auto" style={{width: 150 + "px"}}>
              <Link className="btn btn-warning mt-3 px-4 text-white" role="button" to="/cart/">Cart</Link>
            </div>*/}
              <div className="d-flex justify-content-center grow">
                  <Link className="btn btn-info first mr-md-3 mr-2 mr-lg-4 shrink" role="button" to="/about/">About Instructors</Link>
                  <Link className="btn btn-info next ml-md-3 ml-2 ml-lg-4 shrink" role="button" to="/schedule/">See Schedule</Link>
              </div>
            </div>
            </Route>
            <Route path="/cart/">
              <Cart  cart={cart}  />
            </Route>
            <Route path="/about/">
              <About />
            </Route>
            <Route exact path="/schedule/">
              <Schedule  cart={cart}  onLessonAdd={handleLessonAdd} onLessonDelete={handleLessonDelete} />
            </Route>
          </Switch>
      </main>
    </BrowserRouter>
  )
}
