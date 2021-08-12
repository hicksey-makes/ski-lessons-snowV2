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
            <Link className="btn btn-secondary sun"  key={instructor.id} to={`instructors/${instructor.id}`}>
              {instructor.name}
            </Link>
        ))}
      </div>
      <div className="bg-dark text-center text-light mb-n2 container-fluid ins-bg grow relative">
        <div className="ins-content mt-5 pt-1">
        <h3 className=" pt-5 pb-2 mb-4 mint-spice">Find the right instructor</h3>

          <img className="img-rounded rounded-circle photo-generic p-1" id="photo-gen" src="../images/powder_freshies_a.stock.jpeg"  alt="snowboarder icon"/>


        <h3 className="pb-4 pt-2 mt-4 mint-spice">for your desires and abilities.</h3>
        </div>
    </div>
    </div>
  );
}
