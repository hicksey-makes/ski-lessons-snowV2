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
    <div className="container">
    <div className="btn-group btn-group-justified" style={{width:100 + "%"}}>

        {instructors.map((instructor) => (

            <Link className="btn btn-secondary "  key={instructor.id} to={`instructors/${instructor.id}`}>
              {instructor.name}
            </Link>

        ))}

    </div>
    </div>
  );
}
