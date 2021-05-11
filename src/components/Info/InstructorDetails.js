import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function InstructorDetails() {
  const [instructor, setInstructor] = useState({});
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetch(`../../../InstructorDetailsid${id}.json`)
      .then((response) => response.json())
      .then((data) => {
        setInstructor(data);
      });
  }, []);

  return (
    <div>
      <Link to="/about/">Back</Link>
      {instructor && (
        <div>
          <h2>{instructor.name}</h2>
          <img src={instructor.image} alt="" width="100" />
          <p>{instructor.description}</p>
          <p>{instructor.skill}</p>
        </div>
      )}
    </div>
  );
}
