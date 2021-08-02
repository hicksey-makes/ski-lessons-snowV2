import React, { useState } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Schedule from './Reserve/Schedule';
import About from './Info/About';
import '../css/App.css';
import Cart from './Reserve/cart.js';

export default function App() {
  const [cart, setCart] = useState([]);
  const [reserved, setReserved] = useState([]);

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

  function handleLessonReserve(newProduct) {
    const existingProduct = reserved.find(product => {
      return product.lsnId === newProduct.lsnId;
    });

    if (existingProduct) {
      const newReserved = reserved.map(product => {
        if (product.lsnId === newProduct.lsnId) {
            return {...product, quantity: product.quantity + 1};
        }
        return product;
        });
      setReserved(newReserved);
    } else {
      const newerProduct = {...newProduct, quantity: 1};
      setReserved([...reserved, newerProduct]);
    }
  }

  function handleReservedDelete(id) {
    const newReserved = reserved.filter(product => {
      return product.id !== id;
    });
    setReserved(newReserved);
  }

  let quantity = 0;
  cart.forEach(lesson => {
    return quantity += lesson.quantity;
  })

  return (
    <BrowserRouter>
      <main>
          <Switch>
            <Route className="backdrop" exact path="/">
            <div className="img-snow">
            {/*<div className="d-block ml-auto" style={{width: 150 + "px"}}>
              <Link className="btn btn-warning mt-3 px-4 text-white" role="button" to="/cart/">Cart</Link>
            </div>*/}
            <div className="d-flex justify-content-center mr-md-5">
               <Link className="btn btn-warning text-dark mt-3 mr-md-3 ml-md-auto btn-shadow" role="button" style={{width: 80 + "px"}} to="/cart/">Cart({quantity})</Link>
            </div>
              <div className="d-flex justify-content-center grow">
                  <Link className="btn btn-info mr-md-3 mr-2 mr-lg-4 shrink btn-shadow" role="button" to="/about/">About Instructors</Link>
                  <Link className="btn btn-info ml-md-3 ml-2 ml-lg-4 shrink btn-shadow" role="button" to="/schedule/">See Schedule</Link>
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
              <Schedule  cart={cart}  reserved={reserved} onLessonAdd={handleLessonAdd} onLessonDelete={handleLessonDelete} onLessonReserve={handleLessonReserve}/>
            </Route>
          </Switch>
      </main>
    </BrowserRouter>
  )
}
