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
    <div>
      <ul>
        {instructors.map((instructor) => (
          <li>
            <Link key={instructor.id} to={`instructors/${instructor.id}`}>
              {instructor.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
