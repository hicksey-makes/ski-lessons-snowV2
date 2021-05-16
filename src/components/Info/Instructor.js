import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Instructor() {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("../../../Instructors.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setInstructors(data);
      })
      .catch(error => console.log(error));
  }, []);
  console.log(instructors);

  return (
    <div className="container-fluid">
      <div className="btn-group btn-group-justified" style={{width:100 + "%"}}>
        {instructors.map((instructor) => (
            <Link className="btn btn-secondary "  key={instructor.id} to={`instructors/${instructor.id}`}>
              {instructor.name}
            </Link>
        ))}
      </div>
      <div className="bg-dark text-center text-light mb-n2">
        <h3 className="margin pt-4 pb-2 mint-spice">Find the right instructor</h3>
        <img className="img-rounded p-1" src="../images/powder_freshies_a.stock.jpeg" style={{width:450 + "px", height:450 + "px"}} alt="snowboarder icon"/>
        <h3 className="pb-4 pt-2 mint-spice">for your desires and abilities.</h3>
      </div>
    </div>
  );
}
