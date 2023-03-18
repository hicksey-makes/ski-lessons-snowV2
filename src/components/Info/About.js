import React from "react";
import Instructor from "./Instructor.js";
import InstructorDetails from "./InstructorDetails.js";
import '../../css/App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import CardCarousel from '../CardCarousel.js';

export default function About({cart}) {
  let quantity = 0;
  cart.forEach(lesson => {
    return quantity += lesson.quantity;
  });
  return (<>
    <CardCarousel  />
  </>);
}
