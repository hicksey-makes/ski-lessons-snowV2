import React, { useState } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Schedule from './Reserve/Schedule';
import About from './Info/About';
import Cart from './Reserve/cart.js';
import ScrollToTop from './Reserve/ScrollToTop.js';
import { WiSnowflakeCold } from "weather-icons-react";
import '../css/App.css';


export default function App() {
  const [cart, setCart] = useState([]);

  function handleLessonAdd(newProduct) {
    const existingProduct = cart.find(product => {
      return product.lsnId === newProduct.lsnId && product.lessonCost === newProduct.lessonCost;
    });
    if (existingProduct) {
      const updatedCart = cart.map(product => {
        if (product.lsnId === newProduct.lsnId && product.lessonCost === newProduct.lessonCost) {
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

  function handleLessonDelete(existingProduct) {
    const prodToDelete = cart.find(product => {
      return product.lsnId === existingProduct.lsnId && product.lessonCost === existingProduct.lessonCost;
    });
    const updatedCart = cart.filter(product => {
      return (product !== prodToDelete);
    });
    console.log(updatedCart);
    setCart(updatedCart);
  }

  let quantity = 0;
  cart.forEach(lesson => {
    return quantity += lesson.quantity;
  })

  return (
    <BrowserRouter>
      <main>
          <ScrollToTop  />
          <Switch>
            <Route className="backdrop" exact path="/">
              <div className="img-snow">
                  <div className="d-flex justify-content-center mr-md-5">
                    <Link className="btn btn-warning text-dark mt-3 mr-md-3 ml-md-auto btn-shadow" role="button" style={{width: 80 + "px"}} to="/cart/">Cart({quantity})</Link>
                  </div>
                  <div className="d-flex justify-content-center grow">
                    <Link className="btn btn-info purp mr-md-3 mr-2 mr-lg-4 shrink btn-shadow" role="button" to="/about/"><WiSnowflakeCold  size={26}/>About Instructors</Link>
                    <Link className="btn btn-info purp ml-md-3 ml-2 ml-lg-4 shrink btn-shadow" role="button" to="/schedule/"><WiSnowflakeCold  size={26}/>See Schedule</Link>
                  </div>
              </div>
            </Route>
            <Route path="/cart/">
              <Cart  onLessonDelete={handleLessonDelete} cart={cart}  />
            </Route>
            <Route path="/about/">
              <About cart={cart} />
            </Route>
            <Route exact path="/schedule/">
              <Schedule  cart={cart}  onLessonAdd={handleLessonAdd} />
            </Route>
          </Switch>
      </main>
    </BrowserRouter>
  )
}
