import React, { useState } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Schedule from './Reserve/Schedule';
import About from './Info/About';
import Cart from './Reserve/cart.js';
import ScrollToTop from './Reserve/ScrollToTop.js';
import SkiNavbar from './SkiNavbar.js';
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
    console.log(prodToDelete);
    if (prodToDelete.quantity > 1) {
      const updatedCart = cart.map(product => {
        if (product.lsnId === existingProduct.lsnId && product.lessonCost === existingProduct.lessonCost) {
          return {...product, quantity: product.quantity - 1};
        }
        return product;
      });
      setCart(updatedCart);
    } else {
      const reupdatedCart = cart.filter(product => {
        return (product !== prodToDelete);
      });
      setCart(reupdatedCart);
    }
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
              <SkiNavbar  />
              <div className="h-fixed-bg">
                <div className="bg-wrap">
                  <div className="bg"></div>
                </div>
                <div className="h-container">
                  <div className="img-snow">
                      <div className="d-flex justify-content-center grow">
                        <Link className="btn btn-info text-white purp me-2 me-md-3 me-lg-4 shrink btn-shadow" role="button" to="/about/"><WiSnowflakeCold  size={26}/>About Instructors</Link>
                        <Link className="btn btn-info text-white purp ms-2 ms-md-3 ms-lg-4 shrink btn-shadow" role="button" to="/schedule/"><WiSnowflakeCold  size={26}/>See Schedule</Link>
                      </div>
                  </div>
                </div>
              </div>
            </Route>
            <Route path="/cart/">
              <SkiNavbar  />
              <Cart  onLessonDelete={handleLessonDelete} cart={cart}  />
            </Route>
            <Route path="/about/">
              <SkiNavbar  />
              <About cart={cart} />
            </Route>
            <Route exact path="/schedule/">
              <SkiNavbar  />
              <Schedule  cart={cart}  onLessonAdd={handleLessonAdd} />
            </Route>
          </Switch>
      </main>
    </BrowserRouter>
  )
}
